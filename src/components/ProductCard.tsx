import { useState } from "react";
import { SIZES } from "../types/product";
import type { Product, Size } from "../types/product";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product, size: Size) => void;
}

const soles = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  maximumFractionDigits: 0,
});

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-[#eeece6]">
        <img
          alt={product.imageAlt}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          src={product.image}
        />
        {product.tag && (
          <span className="absolute left-3 top-3 bg-[#f7f6f2] px-2.5 py-1 text-[9px] font-semibold tracking-[0.12em] text-[#263a32]">
            {product.tag}
          </span>
        )}
      </div>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[9px] font-medium tracking-[0.16em] text-[#858980]">
              {product.category}
            </p>
            <h3 className="mt-1 font-serif text-lg text-[#263a32]">
              {product.name}
            </h3>
          </div>
          <p className="pt-4 text-sm font-medium text-[#263a32]">
            {soles.format(product.price)}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2" aria-label="Elige una talla">
            {SIZES.map((size) => (
              <button
                aria-pressed={selectedSize === size}
                className={`h-8 w-8 border text-xs transition ${
                  selectedSize === size
                    ? "border-[#263a32] bg-[#263a32] text-white"
                    : "border-[#dcdad3] text-[#555b55] hover:border-[#263a32]"
                }`}
                key={size}
                onClick={() => setSelectedSize(size)}
                type="button"
              >
                {size}
              </button>
            ))}
          </div>
          <span className="text-[10px] text-[#858980]">TALLA</span>
        </div>
        <button
          className="mt-4 w-full bg-[#263a32] px-4 py-3 text-[10px] font-semibold tracking-[0.13em] text-white transition hover:bg-[#40564b] disabled:cursor-not-allowed disabled:bg-[#a8ada5]"
          disabled={!selectedSize}
          onClick={() => selectedSize && onAdd(product, selectedSize)}
          type="button"
        >
          AÑADIR AL CARRITO
        </button>
        {!selectedSize && (
          <p className="mt-2 text-center text-[10px] text-[#858980]">
            Elige una talla para continuar
          </p>
        )}
      </div>
    </article>
  );
}
