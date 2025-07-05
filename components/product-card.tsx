"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useStore, type Product } from '@/lib/store';
import { ShoppingCart, Star } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart);
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group hover:glow-border transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <Badge className="absolute top-4 left-4 bg-red-500 text-white">
            -{product.discount}%
          </Badge>
        )}
        {product.featured && (
          <Badge className="absolute top-4 right-4 bg-purple-500 text-white">
            Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">4.8</span>
          </div>
        </div>
        
        <p className="text-sm opacity-70 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-purple-500">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discount && (
              <span className="text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
        </div>
        
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white group"
        >
          <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </motion.div>
  );
}