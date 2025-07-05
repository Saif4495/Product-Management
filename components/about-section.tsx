"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <Spotlight className="top-0 left-0" fill="purple" />
        <Spotlight className="bottom-0 right-0" fill="pink" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Story
            </h2>
            <div className="space-y-4 text-lg opacity-90">
              <p>
                Born from a passion for creating moments of tranquility, Blissful Aura Candles 
                began as a small dream to bring peace and beauty into every home.
              </p>
              <p>
                Each candle is carefully crafted using premium soy wax and natural essential oils, 
                ensuring a clean burn that fills your space with enchanting fragrances.
              </p>
              <p>
                We believe that lighting a candle is more than just illumination—it's a ritual 
                of self-care, a moment of mindfulness, and a gateway to serenity.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-3xl">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6489721/pexels-photo-6489721.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Candle crafting process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <blockquote className="text-xl italic opacity-90 mb-4">
                  "Every candle tells a story of craftsmanship, passion, and the pursuit of perfect moments."
                </blockquote>
                <cite className="text-sm opacity-70">- Sarah Johnson, Founder</cite>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}