export type Product = { id: string; name: string; price: number; category: string; description: string; icon: string; color: string; features: string[] };
export const products: Product[] = [
  { id:"wave-runner",name:"Wave Runner",price:129,category:"Footwear",description:"Lightweight trainers with responsive cushioning.",icon:"👟",color:"coral",features:["Breathable knit upper","Cushioned midsole","Recycled rubber outsole"] },
  { id:"harbor-pack",name:"Harbor Pack",price:84,category:"Bags",description:"A weather-ready daypack for commutes and weekends.",icon:"🎒",color:"navy",features:["18L capacity","Padded laptop sleeve","Water-resistant shell"] },
  { id:"tide-watch",name:"Tide Watch",price:169,category:"Accessories",description:"A clean, durable timepiece inspired by the coast.",icon:"⌚",color:"sand",features:["Stainless steel case","100m water resistance","Recycled nylon strap"] },
  { id:"deck-speaker",name:"Deck Speaker",price:99,category:"Audio",description:"Room-filling portable sound in a rugged body.",icon:"🔊",color:"mint",features:["16-hour battery","Bluetooth 5.3","IP67 protection"] },
  { id:"signal-lamp",name:"Signal Lamp",price:72,category:"Home",description:"Warm adjustable light for desks and late nights.",icon:"💡",color:"amber",features:["Three brightness levels","USB-C rechargeable","Aluminum body"] },
  { id:"voyager-mug",name:"Voyager Mug",price:34,category:"Drinkware",description:"A leakproof travel mug that stays hot for hours.",icon:"☕",color:"sky",features:["450ml capacity","Ceramic-lined interior","One-hand lid"] },
];
export function getProduct(id: string) { return products.find((product) => product.id === id); }
