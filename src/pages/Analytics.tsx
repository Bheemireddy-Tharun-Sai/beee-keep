import React from 'react';
import LineChartComponent from '../components/analytics/LineChart';
import ExcelDownload from '../components/analytics/ExcelDownload';
import ProductivityMetrics from '../components/analytics/ProductivityMetrics';
import BeePhotoSlider from '../components/analytics/BeePhotoSlider';

const Analytics = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold mb-6 text-white">Analytics & Reports</h1>

    {/* 2x2 Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Box 1: Line Chart */}
      <div className="bg-[#242424] p-6 rounded-xl">
        <LineChartComponent />
      </div>
     {/* Box 2: Bee Photo Slider */}
     <BeePhotoSlider />
      {/* Box 3: Productivity Metrics */}
      <div className="bg-[#242424] p-6 rounded-xl">
        <ProductivityMetrics />
      </div>
      {/* Box 4: Date Range and Download Button */}
      <ExcelDownload />
     
    </div>
  </div>
);

export default Analytics;
