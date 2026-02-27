"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function AnimatedCarousel({ items, className = "" }: { items: string[], className?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "60%" : "-60%",
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 40 : -40,
            zIndex: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            zIndex: 10,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? "60%" : "-60%",
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 40 : -40,
            zIndex: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = items.length - 1;
            if (nextIndex >= items.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <div className={`relative w-full max-w-[280px] sm:max-w-[320px] mx-auto aspect-[9/19] flex items-center justify-center group ${className}`} style={{ perspective: "1200px" }}>
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                    key={currentIndex}
                    src={items[currentIndex]}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 },
                        scale: { type: "spring", stiffness: 300, damping: 30 },
                        rotateY: { type: "spring", stiffness: 300, damping: 30 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute w-full h-full rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover cursor-grab active:cursor-grabbing border-4 border-zinc-800/80 bg-zinc-900"
                    alt={`App screenshot ${currentIndex + 1}`}
                />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-[130%] -left-[15%] sm:w-[140%] sm:-left-[20%] z-20 pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <button
                    className="w-12 h-12 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 flex items-center justify-center text-zinc-400 cursor-pointer pointer-events-auto hover:bg-zinc-800 hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95"
                    onClick={() => paginate(-1)}
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-7 h-7 pr-1" />
                </button>
                <button
                    className="w-12 h-12 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 flex items-center justify-center text-zinc-400 cursor-pointer pointer-events-auto hover:bg-zinc-800 hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95"
                    onClick={() => paginate(1)}
                    aria-label="Next image"
                >
                    <ChevronRight className="w-7 h-7 pl-1" />
                </button>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-20 items-center justify-center">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setDirection(i > currentIndex ? 1 : -1);
                            setCurrentIndex(i);
                        }}
                        className={`rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-teal-400 w-8 h-2' : 'bg-zinc-600 w-2 h-2 cursor-pointer hover:bg-zinc-400 hover:scale-110'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
