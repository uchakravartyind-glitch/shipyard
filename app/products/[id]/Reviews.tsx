const reviews = [
  { name: "Maya", text: "Beautifully made and even better in daily use." },
  { name: "Noah", text: "Thoughtful details, fast delivery, and excellent quality." },
  { name: "Ari", text: "It has earned a permanent place in my travel kit." },
];

export default function Reviews({ productName }: { productName: string }) {
  return <section className="reviews"><p className="eyebrow">CUSTOMER NOTES</p><h2>Life with the {productName}</h2><div className="reviews__grid">{reviews.map((review) => <blockquote key={review.name}><p>“{review.text}”</p><cite>— {review.name}</cite></blockquote>)}</div></section>;
}
