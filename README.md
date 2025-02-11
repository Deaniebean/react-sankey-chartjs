# react-sankey-chartjs
This is a wrapper for [chartjs-chart-sankey](https://github.com/kurkle/chartjs-chart-sankey) for using the sankey plugin directly as a react component.

# Documentation

In order to use this package you need to install:  
"chart.js",  
"chartjs-chart-sankey",  
"react-chartjs-2",
"react-sankey-chartjs"

 Installation

You can install the required packages using the following terminal command:

```sh
npm install chart.js chartjs-chart-sankey react-chartjs-2 react-sankey-chartjs 
```

# Example

``` 
import SankeyChart from "react-sankey-chartjs";
import { Chart, LinearScale, CategoryScale } from 'chart.js';
import { SankeyController } from "chartjs-chart-sankey";

Chart.register(LinearScale, CategoryScale, SankeyController);

const data = {
  datasets: [
    {
      label: "Sankey Example",
      data: [
        { from: "A", to: "B", flow: 10 },
        { from: "A", to: "C", flow: 5 },
        { from: "B", to: "C", flow: 15 }
      ],
    },
  ],
};

const App = () => {
  return (
    <div style={{ width: "600px", height: "600px" }}>
      <h2>My Sankey Chart</h2>
      <SankeyChart data={data} />
    </div>
  );
};

export default App;
``` 

# Configuration
For the configuration look here [chartjs-chart-sankey](https://github.com/kurkle/chartjs-chart-sankey#readme)