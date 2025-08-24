import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion";

const testimonials = [
  "/images/testimoni_hec1.jpeg",
  "/images/testimoni_hec2.jpeg",
  "/images/testimoni_hec3.jpeg",
  "/images/testimoni_hec4.jpeg",
  "/images/testimoni_hec5.jpeg",
  "/images/testimoni_hec6.jpeg",
]

export function CarouselSpacing() {
  return (
    <div className="text-2xl text-cyan-900 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Testimoni Peserta
        </motion.h2>

    <Carousel className="w-full max-w-md mx-auto">
      <CarouselContent>
        {testimonials.map((src, index) => (
          <CarouselItem key={index} className="basis-full sm:basis-1/2">
            <Card className="overflow-hidden rounded-2xl shadow-md">
              <CardContent className="p-0">
                
                <Image
                  src={src}
                  alt={`Testimoni ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority={index === 0} // gambar pertama lebih cepat dimuat
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
