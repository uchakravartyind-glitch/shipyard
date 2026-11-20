import Link from "next/link";
import Image from "next/image";
import type { Product } from "../data/products";
export default function ProductCard({ product }: { product: Product }) {
  return <Link className="product-card" href={`/products/${product.id}`}><div className={`product-card__visual product-card__visual--${product.color}`}><Image src={product.image} alt={`${product.name} product`} width={640} height={480} priority={product.id === "wave-runner"} /></div><div className="product-card__body"><p className="eyebrow">{product.category}</p><h2>{product.name}</h2><p>{product.description}</p><div className="product-card__footer"><strong>${product.price}</strong><span>View product →</span></div></div></Link>;
}
