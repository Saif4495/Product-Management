"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Leaf, Heart, Star } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Premium Quality',
    description: 'Made with the finest soy wax and natural essential oils for a clean, long-lasting burn.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable materials and packaging that care for both you and the environment.',
  },
  {
    icon: Heart,
    title: 'Handcrafted',
    description: 'Each candle is carefully hand-poured with love and attention to detail.',
  },
  {
    icon: Star,
    title: 'Unique Scents',
    description: 'Exclusive fragrance blends that create the perfect ambiance for any mood.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Why Choose Blissful Aura?
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            We're passionate about creating candles that transform your space into a sanctuary of peace and beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl text-center group hover:glow-border transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}