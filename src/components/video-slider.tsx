"use client";

import useEmblaCarousel from "embla-carousel-react";

export default function VideoSlider({ embeds }: { embeds: string[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {embeds.map((src, i) => (
          <div key={i} className="min-w-0 flex-[0_0_100%] px-1">
            <div className="relative w-full" style={{ paddingTop: "177.77%" /* 9:16 */ }}>
              <iframe
                className="absolute inset-0 h-full w-full rounded-2xl shadow-soft"
                src={src}
                title={`video-${i}`}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
