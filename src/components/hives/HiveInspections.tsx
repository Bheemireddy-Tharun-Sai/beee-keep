import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';

const inspections = [
  { 
    id: 1, 
    hive: 'Hive A1', 
    status: 'Healthy', 
    notes: 'Queen spotted, good brood pattern',
    date: 'Today' 
  },
  { 
    id: 2, 
    hive: 'Hive B3', 
    status: 'Needs Attention', 
    notes: 'Low honey stores',
    date: 'Yesterday' 
  },
  { 
    id: 3, 
    hive: 'Hive C2', 
    status: 'Healthy', 
    notes: 'New comb being built',
    date: '2 days ago' 
  },
  { 
    id: 4, 
    hive: 'Hive A4', 
    status: 'Needs Attention', 
    notes: 'Signs of possible mites',
    date: '3 days ago' 
  },
];

export default function HiveInspections() {
  return (
    <div className="bg-[#242424] p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Recent Inspections</h2>
        <button className="text-sm text-amber-500">View all inspections</button>
      </div>
      <div className="space-y-4">
        {inspections.map((inspection) => (
          <div key={inspection.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                {inspection.status === 'Healthy' ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-white" />
                )}
              </div>
              <div>
                <div className="font-medium">{inspection.hive}</div>
                <div className="text-sm text-gray-400">{inspection.notes}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`flex items-center gap-1 text-sm ${
                inspection.status === 'Healthy' ? 'text-green-500' : 'text-yellow-500'
              }`}>
                {inspection.status}
              </span>
              <span className="text-sm text-gray-400">{inspection.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}