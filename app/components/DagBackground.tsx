'use client'

/**
 * Animated DAG (directed acyclic graph) background.
 * Nodes pulse, edges flow with stroke-dashoffset — thematic to data pipelines.
 * All accents are sage tonal variants — the site is single-accent (Carbon & Sage).
 */

type Accent = 'sage' | 'sageSoft' | 'sageDeep' | 'cool' | 'warm'

const ACCENT_HEX: Record<Accent, string> = {
  sage: '#7dd3c0',
  sageSoft: '#a5e1d2',
  sageDeep: '#5eb3a1',
  cool: '#9ca0a6',
  warm: '#c8cbd0',
}

type Layout = {
  nodes: Array<[number, number]>
  edges: Array<[number, number]>
}

const LAYOUTS: Layout[] = [
  {
    nodes: [
      [8, 32], [22, 18], [22, 54], [40, 28], [40, 66],
      [58, 16], [58, 48], [76, 28], [76, 62], [92, 40],
    ],
    edges: [[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[3,6],[4,6],[5,7],[6,7],[6,8],[7,9],[8,9]],
  },
  {
    nodes: [
      [12, 50], [28, 22], [28, 78], [46, 12], [46, 50], [46, 88],
      [66, 28], [66, 72], [84, 50],
    ],
    edges: [[0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[3,6],[4,6],[4,7],[5,7],[6,8],[7,8]],
  },
  {
    nodes: [
      [14, 28], [32, 22], [26, 60], [48, 42], [46, 72],
      [68, 28], [70, 60], [88, 46],
    ],
    edges: [[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[3,6],[4,6],[5,7],[6,7]],
  },
  {
    nodes: [
      [10, 18], [30, 14], [50, 24], [70, 14], [90, 20],
      [20, 46], [40, 52], [60, 44], [80, 52],
      [15, 78], [35, 82], [55, 76], [75, 82], [92, 72],
    ],
    edges: [[0,1],[1,2],[2,3],[3,4],[0,5],[1,6],[2,6],[3,7],[4,8],[5,6],[6,7],[7,8],[5,9],[6,10],[7,11],[8,12],[9,10],[10,11],[11,12],[12,13]],
  },
]

type Props = {
  accent?: Accent
  intensity?: number
  variant?: number
}

export default function DagBackground({
  accent = 'sage',
  intensity = 1,
  variant = 0,
}: Props) {
  const color = ACCENT_HEX[accent]
  const layout = LAYOUTS[variant % LAYOUTS.length]
  const filterId = `dag-glow-${accent}-${variant}`

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity: 0.5 * intensity }}
      >
        <defs>
          <filter id={filterId} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        <g stroke={color} strokeWidth="0.12" fill="none" vectorEffect="non-scaling-stroke">
          {layout.edges.map(([a, b], i) => {
            const [x1, y1] = layout.nodes[a]
            const [x2, y2] = layout.nodes[b]
            const midX = (x1 + x2) / 2
            const midY = (y1 + y2) / 2 - 2
            return (
              <path
                key={i}
                d={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
                strokeDasharray="1.5 3"
                opacity="0.38"
                style={{
                  animation: `dag-flow ${6 + (i % 4)}s linear infinite`,
                  animationDelay: `${-i * 0.5}s`,
                }}
              />
            )
          })}
        </g>

        <g fill={color}>
          {layout.nodes.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="1.8" opacity="0.16" filter={`url(#${filterId})`}>
                <animate
                  attributeName="opacity"
                  values="0.06;0.3;0.06"
                  dur={`${4 + (i % 3)}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.35}s`}
                />
              </circle>
              <circle cx={x} cy={y} r="0.55" opacity="0.7" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
