import GraphData from "./scripts/graph_data";
import GraphDisplay from "./scripts/graph_display";
import bubbleSort from "./scripts/sorting_algorithms/bubble_sort";

window.addEventListener("DOMContentLoaded", () => {
  const data = new GraphData(15);
  const graphDisplay = new GraphDisplay(data.data);
  graphDisplay.createChart();

  const header = document.getElementsByClassName("main-header")[0];
  header.addEventListener("click", function(){
    bubbleSort(data.data);
  });
});
