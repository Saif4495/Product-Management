"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { ProductCard } from './product-card';

export function ProductShowcase() {
  const products = useStore((state) => state.products);
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section id="products" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Collection
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Discover our handpicked selection of premium candles, each crafted with care and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-semibold mb-8">All Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}