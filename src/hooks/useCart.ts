import { useMemo, useState } from "react";
import type { CartItem, Product, Size } from "../types/product";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: Size) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id && item.size === size,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { product, size, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string, size: Size) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => item.product.id !== productId || item.size !== size,
      ),
    );
  };

  const changeQuantity = (productId: string, size: Size, amount: number) => {
    setItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.product.id !== productId || item.size !== size) return [item];

        const quantity = item.quantity + amount;
        return quantity > 0 ? [{ ...item, quantity }] : [];
      }),
    );
  };

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
    [items],
  );

  return {
    items,
    itemCount,
    subtotal,
    addToCart,
    removeFromCart,
    changeQuantity,
  };
}
