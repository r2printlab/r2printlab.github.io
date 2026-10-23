const LAYER_COUNT = 9;
const LAYER_HEIGHT = 34;
const TOP = 62;

const baubles = [
  { layer: 1, side: 1, color: "#df1f2d" },
  { layer: 2, side: -1, color: "#ef6fa6" },
  { layer: 3, side: 1, color: "#f07921" },
  { layer: 4, side: -1, color: "#6d35b8" },
  { layer: 5, side: 1, color: "#1664c0" },
  { layer: 6, side: -1, color: "#df1f2d" },
  { layer: 7, side: 1, color: "#ef6fa6" },
  { layer: 8, side: -1, color: "#f07921" },
  { layer: 8, side: 1, color: "#6d35b8" },
];

function layerWidth(index: number) {
  return 56 + index * 34;
}

/** Árvore feita de camadas empilhadas, como uma peça saindo da impressora 3D. */
export function ChristmasTree() {
  const bottomY = TOP + (LAYER_COUNT - 1) * LAYER_HEIGHT + LAYER_HEIGHT;

  return (
    <svg viewBox="0 0 400 500" className="h-auto w-full" role="img" aria-label="Árvore de Natal impressa em camadas">
      <defs>
        <linearGradient id="tree-layer-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3bb47e" />
          <stop offset="1" stopColor="#1d7a54" />
        </linearGradient>
        <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#f4db9b" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f4db9b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="30" rx="70" ry="52" fill="url(#star-glow)" />

      {Array.from({ length: LAYER_COUNT }, (_, index) => {
        const width = layerWidth(index);
        const y = TOP + index * LAYER_HEIGHT;
        const delay = (LAYER_COUNT - 1 - index) * 110;

        return (
          <g key={index} className="tree-layer" style={{ animationDelay: `${delay}ms` }}>
            <rect x={200 - width / 2} y={y} width={width} height={LAYER_HEIGHT} rx={LAYER_HEIGHT / 2} fill="url(#tree-layer-fill)" />
            {index % 2 === 1 ? (
              <rect x={200 - width / 2} y={y} width={width} height={LAYER_HEIGHT} rx={LAYER_HEIGHT / 2} fill="#04241a" opacity="0.1" />
            ) : null}
            <rect x={200 - width / 2 + 12} y={y + 5} width={width - 24} height="4" rx="2" fill="#ffffff" opacity="0.22" />
          </g>
        );
      })}

      <rect x="176" y={bottomY - 4} width="48" height="42" rx="6" fill="#7a4a2e" />
      <rect x="176" y={bottomY - 4} width="48" height="8" rx="4" fill="#5b3420" opacity="0.6" />

      {baubles.map((bauble, index) => {
        const width = layerWidth(bauble.layer);
        const cx = 200 + bauble.side * (width / 2 - 20);
        const cy = TOP + bauble.layer * LAYER_HEIGHT + LAYER_HEIGHT / 2 + 3;
        return (
          <g key={index} className="tree-pop" style={{ animationDelay: `${1300 + index * 90}ms` }}>
            <circle cx={cx} cy={cy} r="9" fill={bauble.color} />
            <circle cx={cx - 3} cy={cy - 3} r="2.6" fill="#ffffff" opacity="0.55" />
          </g>
        );
      })}

      <g className="tree-pop" style={{ animationDelay: "1200ms" }}>
        <polygon
          points="200,6 207.4,24.6 227.4,26 212,38.6 217,58 200,47.4 183,58 188,38.6 172.6,26 192.6,24.6"
          fill="#e0a93b"
          stroke="#f4db9b"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>

      <rect x="34" y={bottomY + 36} width="332" height="16" rx="8" fill="#04241a" stroke="#e0a93b" strokeOpacity="0.55" />
      {Array.from({ length: 12 }, (_, index) => (
        <circle key={index} cx={60 + index * 25.5} cy={bottomY + 44} r="1.6" fill="#e0a93b" opacity="0.55" />
      ))}

      <g className="tree-pop" style={{ animationDelay: "1700ms" }}>
        <rect x="64" y={bottomY + 6} width="56" height="34" rx="4" fill="#b8212e" />
        <rect x="87" y={bottomY + 6} width="10" height="34" fill="#f4db9b" />
        <rect x="64" y={bottomY + 18} width="56" height="8" fill="#f4db9b" opacity="0.9" />
      </g>
      <g className="tree-pop" style={{ animationDelay: "1800ms" }}>
        <rect x="288" y={bottomY + 14} width="44" height="26" rx="4" fill="#f4db9b" />
        <rect x="305" y={bottomY + 14} width="10" height="26" fill="#b8212e" />
        <rect x="288" y={bottomY + 22} width="44" height="7" fill="#b8212e" opacity="0.9" />
      </g>
    </svg>
  );
}
