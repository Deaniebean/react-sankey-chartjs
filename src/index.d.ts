declare module 'react-sankey-chartjs' {
    import { ChartOptions } from 'chart.js';
  
    // Define your component props and types here.
    export interface SankeyChartProps {
      data: any; // You can define stricter types for the data if you prefer
      options?: ChartOptions;
    }
  
    const SankeyChart: React.FC<SankeyChartProps>;
    export default SankeyChart;
  }