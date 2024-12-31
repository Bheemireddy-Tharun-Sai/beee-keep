import React from 'react';
import { Monitor } from 'lucide-react';

const products = [
  { id: 1, name: 'Vintage 3D computer', price: '$14.85', reviews: 5 },
  { id: 2, name: 'Vintage 3D computer', price: '$14.85', reviews: 5 },
  { id: 3, name: 'Vintage 3D computer', price: '$14.85', reviews: 5 },
  { id: 4, name: 'Vintage 3D computer', price: '$14.85', reviews: 5 },
];

export default function PopularProducts() {
  return (
    <div className="bg-[#242424] p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Popular products</h2>
        <button className="text-sm text-blue-500">See all</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-[#1a1a1a] p-4 rounded-xl">
            <div className="w-full h-32 bg-[#242424] rounded-lg mb-4 flex items-center justify-center">
              <Monitor className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="font-medium mb-2">{product.name}</h3>
            <div className="flex justify-between items-center">
              <span className="font-semibold">{product.price}</span>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="text-sm">{product.reviews}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}