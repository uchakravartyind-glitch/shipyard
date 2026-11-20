export default function Loading() {
  return <main className="loading-state" aria-live="polite"><div className="loading-state__line" /><div className="loading-state__line loading-state__line--wide" /><div className="loading-state__grid">{Array.from({ length: 3 }, (_, index) => <div className="loading-state__card" key={index} />)}</div><span className="sr-only">Loading ShipYard…</span></main>;
}
