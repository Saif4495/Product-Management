"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useStore } from '@/lib/store';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, updateQuantity, removeFromCart } = useStore();
  const total = cart.reduce((sum, item) => {
    const price = item.discount ? item.price * (1 - item.discount / 100) : item.price;
    return sum + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    // Navigate to checkout or show checkout modal
    toast.success('Proceeding to checkout...');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md z-50 glass-card border-l border-white/20"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Shopping Cart
                </h2>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">Your cart is empty</p>
                    <p className="text-sm opacity-70">Add some beautiful candles to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => {
                      const discountedPrice = item.discount 
                        ? item.price * (1 - item.discount / 100) 
                        : item.price;
                      
                      return (
                        <div key={item.id} className="glass-card p-4 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium">{item.name}</h3>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className="text-lg font-semibold">
                                  ${discountedPrice.toFixed(2)}
                                </span>
                                {item.discount && (
                                  <span className="text-sm text-gray-500 line-through">
                                    ${item.price.toFixed(2)}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="w-full mt-2 text-red-400 hover:text-red-300"
                          >
                            Remove
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="border-t border-white/10 p-6 space-y-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    Checkout
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}