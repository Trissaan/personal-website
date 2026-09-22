/**
 * Regenerates the raster favicons from app/icon.svg.
 *
 * app/icon.svg is the source of truth. Run this after changing the theme
 * colours so the .png / .ico don't drift out of the palette:
 *
 *   node scripts/gen-favicons.mjs
 *
 * Outputs:
 *   app/icon.png     96x96, used by Google Search results
 *   app/favicon.ico  16 / 32 / 48, PNG-compressed entries
 */
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const SRC = "app/icon.svg";
const PNG_OUT = "app/icon.png";
const ICO_OUT = "app/favicon.ico";
const ICO_SIZES = [16, 32, 48];

const svg = await readFile(SRC);

const render = (size) =>
  sharp(svg, { density: 384 }).resize(size, size, { fit: "contain" }).png({ compressionLevel: 9 }).toBuffer();

// 96x96 PNG
await writeFile(PNG_OUT, await render(96));

// ICO container wrapping PNG-compressed entries
const images = await Promise.all(ICO_SIZES.map(render));

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(images.length, 4);

let offset = 6 + images.length * 16;
const entries = images.map((img, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(ICO_SIZES[i] === 256 ? 0 : ICO_SIZES[i], 0); // width
  e.writeUInt8(ICO_SIZES[i] === 256 ? 0 : ICO_SIZES[i], 1); // height
  e.writeUInt8(0, 2); // palette colours
  e.writeUInt8(0, 3); // reserved
  e.writeUInt16LE(1, 4); // colour planes
  e.writeUInt16LE(32, 6); // bits per pixel
  e.writeUInt32LE(img.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += img.length;
  return e;
});

await writeFile(ICO_OUT, Buffer.concat([header, ...entries, ...images]));

console.log(`${PNG_OUT}  96x96`);
console.log(`${ICO_OUT}  ${ICO_SIZES.join(" / ")}`);
