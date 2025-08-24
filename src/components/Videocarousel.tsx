import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function VideoCarousel() {
  const videos = [
    {
      title: "Anak-anak belajar dengan tutor native",
      url: "https://www.youtube.com/embed/fLJefcf5fJU",
    },
    {
      title: "Anak berlatih speaking sambil bermain",
      url: "https://www.youtube.com/embed/UBncqRaAHJA",
    },
    {
      title: "Fun English Learning",
      url: "https://www.youtube.com/embed/rX7EVVAqGkw",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          🎥 Video Suasana Belajar
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          📌 Saksikan suasana belajar di Happy English Course:
        </p>

        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {videos.map((video, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm">{video.title}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
