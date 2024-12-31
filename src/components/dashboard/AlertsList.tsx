import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const alerts = [
  { type: 'warning', message: 'Hive A3: Temperature above normal range', time: '5m ago' },
  { type: 'success', message: 'Hive B2: Queen bee activity normal', time: '15m ago' },
  { type: 'warning', message: 'Hive C1: Weight decrease detected', time: '1h ago' },
];

export default function AlertsList() {
  return (
    <div className="bg-[#242424] p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-center gap-3">
            {alert.type === 'warning' ? (
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            ) : (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}
            <div>
              <p className="text-sm">{alert.message}</p>
              <span className="text-xs text-gray-400">{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
