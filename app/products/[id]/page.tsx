import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";
const Reviews = dynamic(() => import("./Reviews"), { loading: () => <p className="reviews-loading">Loading customer reviews…</p> });
export function generateStaticParams() { return products.map((product) => ({ id: product.id })); }
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> { const { id } = await params; const product = getProduct(id); return product ? { title: `${product.name} | ShipYard`, description: product.description } : { title: "Product not found | ShipYard", description: "This ShipYard product could not be found." }; }
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const product = getProduct(id); if (!product) notFound();
  return <main className="product-detail"><Link href="/#catalog">← Back to collection</Link><div className="product-detail__grid"><div className={`product-detail__visual product-card__visual--${product.color}`}><Image src={product.image} alt={`${product.name} product`} width={800} height={600} priority /></div><div><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="product-detail__price">${product.price}</p><p>{product.description}</p><h2>Built for the journey</h2><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><button type="button">Add to cargo</button></div></div><Reviews productName={product.name} /></main>;
}
