import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";
export function generateStaticParams() { return products.map((product) => ({ id: product.id })); }
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const product = getProduct(id); if (!product) notFound();
  return <main className="product-detail"><Link href="/#catalog">← Back to collection</Link><div className="product-detail__grid"><div className={`product-detail__visual product-card__visual--${product.color}`} aria-hidden="true">{product.icon}</div><div><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="product-detail__price">${product.price}</p><p>{product.description}</p><h2>Built for the journey</h2><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><button type="button">Add to cargo</button></div></div></main>;
}
