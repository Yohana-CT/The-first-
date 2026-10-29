import type { CartItem, Size } from "../types/product";

interface CartSummaryProps {
  items: CartItem[];
  subtotal: number;
  onChangeQuantity: (productId: string, size: Size, amount: number) => void;
  onRemove: (productId: string, size: Size) => void;
}

const soles = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  maximumFractionDigits: 0,
});

export function CartSummary({
  items,
  subtotal,
  onChangeQuantity,
  onRemove,
}: CartSummaryProps) {
  return (
    <section
      aria-labelledby="cart-title"
      className="border border-[#e5e3dc] bg-white p-5 sm:p-6"
      id="carrito"
    >
      <div className="flex items-baseline justify-between border-b border-[#eeece6] pb-4">
        <h2
          className="font-serif text-2xl text-[#263a32]"
          id="cart-title"
        >
          Tu carrito
        </h2>
        <span className="text-xs text-[#858980]">
          {items.reduce((count, item) => count + item.quantity, 0)} artículos
        </span>
      </div>

      {items.length === 0 ? (
        <p className="py-8 text-sm leading-6 text-[#777d75]">
          Tu carrito está vacío. Encuentra algo que te guste en la colección.
        </p>
      ) : (
        <ul className="divide-y divide-[#eeece6]">
          {items.map(({ product, size, quantity }) => (
            <li
              className="flex gap-4 py-4"
              key={`${product.id}-${size}`}
            >
              <img
                alt=""
                className="h-24 w-20 object-cover"
                loading="lazy"
                src={product.image}
              />
              <div className="min-w-0 flex-1">
                <div className="flex justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-base text-[#263a32]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#777d75]">
                      Talla {size}
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-sm text-[#263a32]">
                    {soles.format(product.price * quantity)}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    aria-label={`Quitar una unidad de ${product.name}, talla ${size}`}
                    className="flex h-7 w-7 items-center justify-center border border-[#dcdad3] text-sm hover:border-[#263a32]"
                    onClick={() => onChangeQuantity(product.id, size, -1)}
                    type="button"
                  >
                    −
                  </button>
                  <span className="min-w-3 text-center text-xs">
                    {quantity}
                  </span>
                  <button
                    aria-label={`Añadir una unidad de ${product.name}, talla ${size}`}
                    className="flex h-7 w-7 items-center justify-center border border-[#dcdad3] text-sm hover:border-[#263a32]"
                    onClick={() => onChangeQuantity(product.id, size, 1)}
                    type="button"
                  >
                    +
                  </button>
                  <button
                    className="ml-auto text-[10px] text-[#777d75] underline underline-offset-2 hover:text-[#263a32]"
                    onClick={() => onRemove(product.id, size)}
                    type="button"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-between border-t border-[#eeece6] pt-4 text-sm">
        <span className="font-medium text-[#263a32]">Subtotal</span>
        <span className="font-medium text-[#263a32]">
          {soles.format(subtotal)}
        </span>
      </div>
      <p className="mt-2 text-xs text-[#858980]">
        Envío e impuestos calculados al finalizar la compra.
      </p>
      <button
        className="mt-5 w-full bg-[#263a32] px-4 py-3 text-[10px] font-semibold tracking-[0.13em] text-white transition hover:bg-[#40564b] disabled:cursor-not-allowed disabled:bg-[#a8ada5]"
        disabled={items.length === 0}
        type="button"
      >
        CONTINUAR CON LA COMPRA
      </button>
    </section>
  );
}
