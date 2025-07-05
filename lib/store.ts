import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  image: string | StaticImageData;
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

// Sample products data with all imported images
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Lavender Dreams",
    description: "Handcrafted lavender candle with pure essential oils",
    price: 28.99,
    discount: 15,
    image: "/images/image_1.jpg", // String path instead of import
    category: "Essential Oils",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Vanilla Serenity",
    description: "Warm vanilla scented candle for cozy evenings",
    price: 24.99,
    image: "/images/image_2.jpg",
    category: "Vanilla",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Rose Petals",
    description: "Romantic rose scented candle for special moments",
    price: 32.99,
    discount: 10,
    image: "/images/image_3.jpg",
    category: "Floral",
    inStock: true,
    featured: false,
  },
  {
    id: "4",
    name: "Ocean Breeze",
    description: "Fresh ocean scented candle for relaxation",
    price: 26.99,
    image: "/images/image_4.jpg",
    category: "Fresh",
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Citrus Burst",
    description: "Energizing citrus blend candle",
    price: 22.99,
    image: "/images/image_5.jpg",
    category: "Citrus",
    inStock: true,
    featured: false,
  },
  {
    id: "6",
    name: "Eucalyptus Mint",
    description: "Refreshing eucalyptus and mint candle",
    price: 29.99,
    discount: 20,
    image: "/images/image_6.jpg",
    category: "Herbal",
    inStock: true,
    featured: true,
  },
  {
    id: "7",
    name: "Sandalwood Harmony",
    description: "Grounding sandalwood scented candle",
    price: 34.99,
    image: "/images/image_7.jpg",
    category: "Woody",
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    name: "Jasmine Night",
    description: "Exotic jasmine scented candle",
    price: 31.99,
    image: "/images/image_8.jpg",
    category: "Floral",
    inStock: true,
    featured: true,
  },
  {
    id: "9",
    name: "Cinnamon Spice",
    description: "Warming cinnamon spice candle",
    price: 25.99,
    image: "/images/image_9.jpg",
    category: "Spice",
    inStock: true,
    featured: false,
  },
  {
    id: "10",
    name: "Pine Forest",
    description: "Fresh pine forest scented candle",
    price: 27.99,
    image: "/images/image_10.jpg",
    category: "Woody",
    inStock: true,
    featured: true,
  },
  // {
  //   id: "11",
  //   name: "Coconut Paradise",
  //   description: "Tropical coconut scented candle",
  //   price: 23.99,
  //   image: image_11,
  //   category: "Tropical",
  //   inStock: true,
  //   featured: false,
  // },
  {
    id: "12",
    name: "Lemongrass Zen",
    description: "Calming lemongrass scented candle",
    price: 28.99,
    image: "/images/image_12.jpg",
    category: "Herbal",
    inStock: true,
    featured: true,
  },
  {
    id: "13",
    name: "Bergamot Bliss",
    description: "Uplifting bergamot scented candle",
    price: 30.99,
    image: "/images/image_13.jpg",
    category: "Citrus",
    inStock: true,
    featured: false,
  },
  {
    id: "14",
    name: "Chamomile Dreams",
    description: "Soothing chamomile scented candle",
    price: 26.99,
    image: "/images/image_14.jpg",
    category: "Herbal",
    inStock: true,
    featured: true,
  },
  {
    id: "15",
    name: "Amber Glow",
    description: "Warm amber scented candle",
    price: 33.99,
    image: "/images/image_15.jpg",
    category: "Woody",
    inStock: true,
    featured: false,
  },
  {
    id: "16",
    name: "Peppermint Fresh",
    description: "Invigorating peppermint scented candle",
    price: 24.99,
    image: "/images/image_16.jpg",
    category: "Herbal",
    inStock: true,
    featured: true,
  },
  {
    id: "17",
    name: "Gardenia Grace",
    description: "Elegant gardenia scented candle",
    price: 35.99,
    image: "/images/image_17.jpg",
    category: "Floral",
    inStock: true,
    featured: false,
  },
  {
    id: "18",
    name: "Cedar Smoke",
    description: "Smoky cedar scented candle",
    price: 29.99,
    image: "/images/image_19.jpg",
    category: "Woody",
    inStock: true,
    featured: true,
  },
  {
    id: "19",
    name: "Lime Basil",
    description: "Zesty lime and basil scented candle",
    price: 27.99,
    image: "/images/image_19.jpg",
    category: "Herbal",
    inStock: true,
    featured: false,
  },
  {
    id: "20",
    name: "Magnolia Bloom",
    description: "Sweet magnolia scented candle",
    price: 32.99,
    image: "/images/image_20.jpg",
    category: "Floral",
    inStock: true,
    featured: true,
  },
  {
    id: "21",
    name: "Black Tea",
    description: "Sophisticated black tea scented candle",
    price: 28.99,
    image: "/images/image_21.jpg",
    category: "Herbal",
    inStock: true,
    featured: false,
  },
  // {
  //   id: "22",
  //   name: "Peony Petals",
  //   description: "Delicate peony scented candle",
  //   price: 31.99,
  //   image: image_22,
  //   category: "Floral",
  //   inStock: true,
  //   featured: true,
  // },
  {
    id: "23",
    name: "Grapefruit Sage",
    description: "Energizing grapefruit and sage candle",
    price: 26.99,
    image: "/images/image_23.jpg",
    category: "Citrus",
    inStock: true,
    featured: false,
  },
  {
    id: "24",
    name: "Vetiver Earth",
    description: "Grounding vetiver scented candle",
    price: 34.99,
    image: "/images/image_24.jpg",
    category: "Woody",
    inStock: true,
    featured: true,
  },
  {
    id: "25",
    name: "Orange Blossom",
    description: "Fresh orange blossom scented candle",
    price: 29.99,
    image: "/images/image_25.jpg",
    category: "Citrus",
    inStock: true,
    featured: false,
  },
  {
    id: "26",
    name: "Patchouli Peace",
    description: "Earthy patchouli scented candle",
    price: 33.99,
    image: "/images/image_26.jpg",
    category: "Woody",
    inStock: true,
    featured: true,
  },
  {
    id: "27",
    name: "Ylang Ylang",
    description: "Exotic ylang ylang scented candle",
    price: 36.99,
    image: "/images/image_27.jpg",
    category: "Floral",
    inStock: true,
    featured: false,
  },
  {
    id: "28",
    name: "Frankincense",
    description: "Sacred frankincense scented candle",
    price: 38.99,
    image: "/images/image_28.jpg",
    category: "Woody",
    inStock: true,
    featured: true,
  },
  {
    id: "29",
    name: "Geranium Garden",
    description: "Fresh geranium scented candle",
    price: 30.99,
    image: "/images/image_29.jpg",
    category: "Floral",
    inStock: true,
    featured: false,
  },
  {
    id: "30",
    name: "Clove Warmth",
    description: "Warming clove spice candle",
    price: 27.99,
    image: "/images/image_30.jpg",
    category: "Spice",
    inStock: true,
    featured: true,
  },
  {
    id: "31",
    name: "Neroli Bright",
    description: "Uplifting neroli scented candle",
    price: 32.99,
    image: "/images/image_31.jpg",
    category: "Citrus",
    inStock: true,
    featured: false,
  },
  {
    id: "32",
    name: "Myrrh Mystery",
    description: "Mystical myrrh scented candle",
    price: 39.99,
    image: "/images/image_32.jpg",
    category: "Woody",
    inStock: true,
    featured: true,
  },
];

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      products: sampleProducts,
      cart: [],
      orders: [],

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
