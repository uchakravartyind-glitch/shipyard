import type { Metadata } from "next";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
export const metadata: Metadata = { title: "ShipYard | Modern goods for every voyage", description: "Explore six thoughtfully designed products for travel, home, and everyday adventures." };
export default function Home() { return <main><section className="hero"><p className="eyebrow">Objects for everyday voyages</p><h1>Well made goods,<br/>ready to ship.</h1><p>Considered essentials for home, work, and wherever the day takes you.</p><a href="#catalog">Browse the collection ↓</a></section><section className="catalog" id="catalog"><div className="section-heading"><div><p className="eyebrow">The collection</p><h2>Fresh arrivals</h2></div><p>{products.length} products</p></div><div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product}/>)}</div></section></main>; }
