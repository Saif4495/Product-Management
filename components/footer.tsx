"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Flame, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-20 px-4 mt-20">
      {/* Background with glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Flame className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold gradient-text">Blissful Aura</span>
            </div>
            <p className="opacity-80">
              Handcrafted designer candles with calming aesthetics. Transform your space with our premium quality candles.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#products" className="opacity-80 hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Essential Oils</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Vanilla</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Fresh</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Woody</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Citrus</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Floral</a></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="opacity-80">Subscribe to get special offers and updates.</p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="flex-1" />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 text-center opacity-80"
        >
          <p>&copy; 2024 Blissful Aura Candles. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}