import { create } from "zustand";
import { persist } from "zustand/middleware";
import image_1 from "../public/images/image_1.jpg";
import { StaticImageData } from "next/image";
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  image: string | StaticImageData; // Updated to accept both string URLs and imported images
  category: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: Date;
}

interface StoreState {
  products: Product[];
  cart: CartItem[];
  orders: Order[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  addProduct: (product: Product) => void;
  updateProduct: (productId: string, updates: Partial<Product>) => void;
  deleteProduct: (productId: string) => void;
  addOrder: (order: Omit<Order, "id" | "createdAt">) => void;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
}

// Sample products data with corrected image handling
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Lavender Dreams",
    description: "Handcrafted lavender candle with pure essential oils",
    price: 28.99,
    discount: 15,
    image: image_1, // Using the imported image directly
    category: "Essential Oils",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Vanilla Serenity",
    description: "Warm vanilla scented candle for cozy evenings",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/6489675/pexels-photo-6489675.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Vanilla",
    inStock: true,
    featured: true,
  },
  // ... rest of your products
];

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      products: sampleProducts,
      cart: [],
      orders: [],

      // ... rest of your store methods remain the same
      addToCart: (product) => {
        const existingItem = get().cart.find((item) => item.id === product.id);
        if (existingItem) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }));
        } else {
          set((state) => ({
            cart: [...state.cart, { ...product, quantity: 1 }],
          }));
        }
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ cart: [] }),

      addProduct: (product) => {
        set((state) => ({
          products: [...state.products, product],
        }));
      },

      updateProduct: (productId, updates) => {
        set((state) => ({
          products: state.products.map((product) =>
            product.id === productId ? { ...product, ...updates } : product
          ),
        }));
      },

      deleteProduct: (productId) => {
        set((state) => ({
          products: state.products.filter(
            (product) => product.id !== productId
          ),
        }));
      },

      addOrder: (orderData) => {
        const newOrder: Order = {
          ...orderData,
          id: Date.now().toString(),
          createdAt: new Date(),
        };
        set((state) => ({
          orders: [...state.orders, newOrder],
        }));
      },

      updateOrderStatus: (orderId, status) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId ? { ...order, status } : order
          ),
        }));
      },
    }),
    {
      name: "blissful-aura-store",
    }
  )
);
