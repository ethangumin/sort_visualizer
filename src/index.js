import GraphData from "./scripts/graph_data";
import GraphDisplay from "./scripts/graph_display";

window.addEventListener("DOMContentLoaded", () => {
  const data = new GraphData(20);
  const graphDisplay = new GraphDisplay(data.data);
  graphDisplay.createChart();
});
