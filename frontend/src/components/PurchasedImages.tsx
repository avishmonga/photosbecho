// src/components/PurchasedImages.tsx
import React from 'react';

const PurchasedImages: React.FC = () => {
  const purchasedImages = [
    {
      id: 1,
      name: 'Wedding Photo',
      photographer: 'John Doe',
      url: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Birthday Photo',
      photographer: 'Jane Smith',
      url: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Purchased Images</h2>
      <ul className="space-y-4">
        {purchasedImages.map((image) => (
          <li key={image.id} className="flex items-center space-x-4">
            <img src={image.url} alt={image.name} className="w-16 h-16" />
            <div>
              <p>{image.name}</p>
              <p>Photographer: {image.photographer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PurchasedImages;
