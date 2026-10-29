import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "camisa-lino",
    name: "Camisa de lino",
    category: "ESENCIALES",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Camisa de lino clara de corte relajado",
    tag: "MÁS VENDIDO",
  },
  {
    id: "pantalon-recto",
    name: "Pantalón recto",
    category: "NUEVA TEMPORADA",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1506629905607-d9c297d7d2f3?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Pantalón de corte recto en tono neutro",
  },
  {
    id: "polo-algodon",
    name: "Polo de algodón",
    category: "ESENCIALES",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Polo básico de algodón blanco",
    tag: "NUEVO",
  },
];
