import React from 'react';
import { Check } from 'lucide-react';

const orders = [
  { id: 1, customer: 'Steven Reynold', amount: '$14.85', status: 'Completed', date: 'Sep 2023' },
  { id: 2, customer: 'Bessie Cooper', amount: '$14.85', status: 'Completed', date: 'Sep 2023' },
  { id: 3, customer: 'Darlene Robertson', amount: '$14.85', status: 'Completed', date: 'Sep 2023' },
  { id: 4, customer: 'Kathryn Murphy', amount: '$14.85', status: 'In progress', date: 'Sep 2023' },
];

export default function NewOrders() {
  return (
    <div className="bg-[#242424] p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">New orders</h2>
        <button className="text-sm text-blue-500">View all orders</button>
      </div>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500"></div>
              <div>
                <div className="font-medium">{order.customer}</div>
                <div className="text-sm text-gray-400">{order.amount}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`flex items-center gap-1 text-sm ${
                order.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'
              }`}>
                {order.status === 'Completed' && <Check className="w-4 h-4" />}
                {order.status}
              </span>
              <span className="text-sm text-gray-400">{order.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}