export function BrandMark({ large = false }: { large?: boolean }) {
  const width = large ? 42 : 38;
  const height = large ? 34 : 30;

  return (
    <svg width={width} height={height} viewBox="0 0 42 34" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="34" height="22" rx="3" fill="#2D2DB5" />
      <rect x="14" y="2" width="14" height="8" rx="2" fill="#2D2DB5" />
      <circle cx="21" cy="19" r="7" fill="#1a1a90" />
      <circle cx="21" cy="19" r="4.5" fill="#2D2DB5" stroke="#F07921" strokeWidth="1.5" />
      <circle cx="21" cy="19" r="2" fill="#4545D4" />
      <rect x="6" y="11" width="5" height="3" rx="1" fill="#1a1a8a" />
    </svg>
  );
}
