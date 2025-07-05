"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  const images = [
    "/hero-section/image_01.jpg",
    // "/hero-section/image_03.jpg",
    // "/hero-section/image_04.jpg",
    "/hero-section/image_05.jpg",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ImagesSlider
        className="h-screen"
        images={images}
        autoplay={true}
        direction="up"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto"
        >
          {/* Floating Sparkle Icons */}
          <div className="absolute -top-4 -left-4 text-purple-400 opacity-70">
            <Sparkles className="w-6 h-6 animate-float" />
          </div>
          <div className="absolute -top-6 -right-6 text-pink-400 opacity-60">
            <Sparkles
              className="w-8 h-8 animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>
          <div className="absolute -bottom-4 -left-6 text-blue-400 opacity-50">
            <Sparkles
              className="w-5 h-5 animate-float"
              style={{ animationDelay: "4s" }}
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200"
          >
            Blissful Aura Candles
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-neutral-200 max-w-2xl mx-auto"
          >
            Handcrafted designer candles with calming aesthetics. Transform your
            space with premium quality candles that ignite serenity and style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              className="px-8 py-4 backdrop-blur-sm border bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-white mx-auto text-center rounded-full relative text-lg font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
              onClick={() => {
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Shop Now →</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-purple-500 to-transparent" />
            </button>

            <button
              className="px-8 py-4 backdrop-blur-sm border border-white/20 text-white mx-auto text-center rounded-full relative text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Learn More</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-white/50 to-transparent" />
            </button>
          </motion.div>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}
