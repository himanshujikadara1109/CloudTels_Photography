import React from "react";

const galleryImages = [
  "/img/gallery1.jpg",
  "/img/gallery2.jpg",
  "/img/gallery3.jpg",
  "/img/gallery4.jpg",
  "/img/gallery5.jpg",
  "/img/gallery6.jpg",
];

export function GalleryPage() {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 uppercase tracking-widest">
          Our Wedding Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Optional caption */}
              {/* <div className="absolute bottom-0 w-full bg-black/60 text-white p-2 text-sm text-center">
                Captivating Moment {index + 1}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
