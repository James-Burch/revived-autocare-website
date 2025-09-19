'use client';

import { useState } from 'react';

interface GalleryImage {
  id: string;
  title: string;
  before: string;
  after: string;
  service: string;
}

// Mock data - in real implementation these would be actual image URLs
const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Deep Clean Transformation',
    before: 'https://via.placeholder.com/400x300/444444/666666?text=Before',
    after: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=After',
    service: 'Deep Clean Detail',
  },
  {
    id: '2',
    title: 'Ceramic Coating Shine',
    before: 'https://via.placeholder.com/400x300/444444/666666?text=Before',
    after: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=After',
    service: 'Ceramic Coating',
  },
  {
    id: '3',
    title: 'Interior Restoration',
    before: 'https://via.placeholder.com/400x300/444444/666666?text=Before',
    after: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=After',
    service: 'Deep Clean Detail',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the dramatic transformations we achieve with every detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-transform duration-200"
              onClick={() => setSelectedImage(image)}
            >
              <div className="grid grid-cols-2 h-48">
                <div className="relative">
                  <img
                    src={image.before}
                    alt={`${image.title} - Before`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={image.after}
                    alt={`${image.title} - After`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">{image.title}</h3>
                <p className="text-sm text-yellow-400">{image.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">View Full Gallery</button>
        </div>
      </div>

      {/* Modal for enlarged view - basic implementation */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-full overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {selectedImage.title}
                </h3>
                <button
                  className="text-gray-400 hover:text-white"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <img
                    src={selectedImage.before}
                    alt="Before"
                    className="w-full rounded"
                  />
                  <p className="text-center mt-2 text-gray-300">Before</p>
                </div>
                <div>
                  <img
                    src={selectedImage.after}
                    alt="After"
                    className="w-full rounded"
                  />
                  <p className="text-center mt-2 text-gray-300">After</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
