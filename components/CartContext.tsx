
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { getProductBySlug } from "../data/products";

type CartProduct = {
  slug: string;
  name: string;
  price: string;
  image?: string;
  size?: string;
};

export type CartItem = CartProduct & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  wishlist: string[];
  cartCount: number;
  cartTotal: number;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (slug: string, size?: string) => void;
  increaseQuantity: (slug: string, size?: string) => void;
  decreaseQuantity: (slug: string, size?: string) => void;
  clearCart: () => void;
  toggleWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "hs-fabrics-cart";
const WISHLIST_KEY = "hs-fabrics-wishlist";
const MAX_QUANTITY = 10;

/* ---------------------------------
   PRICE
---------------------------------- */

function parsePrice(price: string | number): number {
  const value = Number(
    String(price).replace(/[^\d.]/g, "")
  );

  return Number.isFinite(value) ? value : 0;
}

/* ---------------------------------
   CART ITEM KEY
---------------------------------- */

function getKey(slug: string, size?: string) {
  return `${slug}__${size || "default"}`;
}

/* ---------------------------------
   CART PROVIDER
---------------------------------- */

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  /* ---------------------------------
     LOAD SAVED CART
  ---------------------------------- */

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);
      const savedWishlist = localStorage.getItem(WISHLIST_KEY);

      if (savedCart) {
        const parsed = JSON.parse(savedCart);

        if (Array.isArray(parsed)) {
          const fixedCart: CartItem[] = parsed
            .filter(
              (item) =>
                item &&
                typeof item.slug === "string" &&
                typeof item.name === "string" &&
                typeof item.quantity === "number"
            )
            .map((item) => {
              const currentProduct = getProductBySlug(item.slug);

              return {
                slug: item.slug,
                name: currentProduct?.name || item.name,
                price:
                  currentProduct?.price ||
                  item.price ||
                  "Rs. 0",
                image:
                  currentProduct?.image ||
                  item.image,
                size: item.size,
                quantity: Math.min(
                  MAX_QUANTITY,
                  Math.max(
                    1,
                    Math.floor(item.quantity)
                  )
                ),
              };
            });

          setCart(fixedCart);
        }
      }

      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);

        if (Array.isArray(parsedWishlist)) {
          setWishlist(
            parsedWishlist.filter(
              (item) => typeof item === "string"
            )
          );
        }
      }
    } catch {
      localStorage.removeItem(CART_KEY);
      localStorage.removeItem(WISHLIST_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  /* ---------------------------------
     SAVE CART
  ---------------------------------- */

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      CART_KEY,
      JSON.stringify(cart)
    );
  }, [cart, hydrated]);

  /* ---------------------------------
     SAVE WISHLIST
  ---------------------------------- */

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      WISHLIST_KEY,
      JSON.stringify(wishlist)
    );
  }, [wishlist, hydrated]);

  /* ---------------------------------
     ADD TO CART
  ---------------------------------- */

  const addToCart = (product: CartProduct) => {
    setCart((current) => {
      const key = getKey(
        product.slug,
        product.size
      );

      const existing = current.find(
        (item) =>
          getKey(item.slug, item.size) === key
      );

      const currentProduct = getProductBySlug(
        product.slug
      );

      const correctPrice =
        currentProduct?.price || product.price;

      const correctName =
        currentProduct?.name || product.name;

      const correctImage =
        currentProduct?.image || product.image;

      if (existing) {
        return current.map((item) =>
          getKey(item.slug, item.size) === key
            ? {
                ...item,
                name: correctName,
                price: correctPrice,
                image: correctImage,
                quantity: Math.min(
                  MAX_QUANTITY,
                  item.quantity + 1
                ),
              }
            : item
        );
      }

      return [
        ...current,
        {
          slug: product.slug,
          name: correctName,
          price: correctPrice,
          image: correctImage,
          size: product.size,
          quantity: 1,
        },
      ];
    });
  };

  /* ---------------------------------
     REMOVE
  ---------------------------------- */

  const removeFromCart = (
    slug: string,
    size?: string
  ) => {
    const key = getKey(slug, size);

    setCart((current) =>
      current.filter(
        (item) =>
          getKey(item.slug, item.size) !== key
      )
    );
  };

  /* ---------------------------------
     INCREASE
  ---------------------------------- */

  const increaseQuantity = (
    slug: string,
    size?: string
  ) => {
    const key = getKey(slug, size);

    setCart((current) =>
      current.map((item) =>
        getKey(item.slug, item.size) === key
          ? {
              ...item,
              quantity: Math.min(
                MAX_QUANTITY,
                item.quantity + 1
              ),
            }
          : item
      )
    );
  };

  /* ---------------------------------
     DECREASE
  ---------------------------------- */

  const decreaseQuantity = (
    slug: string,
    size?: string
  ) => {
    const key = getKey(slug, size);

    setCart((current) =>
      current
        .map((item) =>
          getKey(item.slug, item.size) === key
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  /* ---------------------------------
     CLEAR
  ---------------------------------- */

  const clearCart = () => {
    setCart([]);
  };

  /* ---------------------------------
     WISHLIST
  ---------------------------------- */

  const toggleWishlist = (slug: string) => {
    setWishlist((current) =>
      current.includes(slug)
        ? current.filter(
            (item) => item !== slug
          )
        : [...current, slug]
    );
  };

  const isWishlisted = (slug: string) =>
    wishlist.includes(slug);

  /* ---------------------------------
     CART COUNT
  ---------------------------------- */

  const cartCount = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  }, [cart]);

  /* ---------------------------------
     CART TOTAL
  ---------------------------------- */

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      const currentProduct =
        getProductBySlug(item.slug);

      const price = parsePrice(
        currentProduct?.price || item.price
      );

      const quantity = Math.min(
        MAX_QUANTITY,
        Math.max(
          1,
          Math.floor(item.quantity)
        )
      );

      return total + price * quantity;
    }, 0);
  }, [cart]);

  /* ---------------------------------
     PROVIDER
  ---------------------------------- */

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* ---------------------------------
   USE CART
---------------------------------- */

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
