import React, { useRef, useEffect } from "react";
import { Chart as ChartJS, Tooltip } from "chart.js";
import { SankeyController, Flow } from "chartjs-chart-sankey";

// Registering the necessary Chart.js components
ChartJS.register(SankeyController, Flow, Tooltip);

export interface SankeyChartProps {
  data: any;
  options?: any;
}

const SankeyChart: React.FC<SankeyChartProps> = ({ data, options }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<ChartJS | null>(null); // Store the chart instance

  useEffect(() => {
    // Function to create or update the chart
    const createChart = () => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");

        if (ctx) {
          // Cleanup: Destroy previous chart instance if it exists
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }

          // Create a new chart instance
          chartInstanceRef.current = new ChartJS(ctx, {
            type: "sankey",
            data,
            options,
          });
        }
      }
    };

    // Initialize or update the chart when data or options change
    createChart();

    // Cleanup: Destroy chart instance on unmount or before the next render
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, options]); // Re-run the effect when data or options change

  return <canvas ref={canvasRef}></canvas>;
};

export default SankeyChart;