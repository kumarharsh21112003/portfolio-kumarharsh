import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const gradientText = "bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581090700227-1e8a4c49a99d?auto=format&fit=crop&w=1920&q=80"
          alt="Tech background"
          fill
          className="object-cover object-center opacity-10"
        />
      </div>

      <div className="relative z-10 p-6 md:p-12 space-y-20 bg-white/80 backdrop-blur-md min-h-screen">
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Kumar Harsh</h1>
          <p className="text-2xl text-gray-700 mt-4">Aspiring AI/ML Developer | Web Enthusiast</p>
          <p className="text-md mt-2 text-gray-500">Turning curiosity into code and data into solutions.</p>
        </motion.section>
      </div>
    </div>
  );
}