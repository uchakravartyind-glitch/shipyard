import Link from "next/link";
import type { Product } from "../data/products";
export default function ProductCard({ product }: { product: Product }) {
  return <Link className="product-card" href={`/products/${product.id}`}><div className={`product-card__visual product-card__visual--${product.color}`} aria-hidden="true">{product.icon}</div><div className="product-card__body"><p className="eyebrow">{product.category}</p><h2>{product.name}</h2><p>{product.description}</p><div className="product-card__footer"><strong>${product.price}</strong><span>View product →</span></div></div></Link>;
}
