# NÓRD — tienda de ropa

Tienda de ropa de ejemplo construida con React, TypeScript, Vite y Tailwind CSS.

## Requisitos

- Node.js 20.19+ o 22.12+

## Desarrollo

```bash
npm install
npm run dev
```

## Validación de producción

```bash
npm run build
```

## Estructura

```text
src/
├── components/
│   ├── CartSummary.tsx
│   ├── Header.tsx
│   └── ProductCard.tsx
├── data/
│   └── products.ts
├── hooks/
│   └── useCart.ts
├── types/
│   └── product.ts
├── App.tsx
├── index.css
└── main.tsx
```

`ProductCard` presenta la imagen, el precio en soles, las tallas disponibles y la acción para añadir al carrito. `useCart` mantiene las cantidades por producto y talla, y `CartSummary` permite revisar y actualizar el pedido.
