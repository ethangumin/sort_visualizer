import GraphData from "./scripts/graph_data";
import GraphDisplay from "./scripts/graph_display";
import bubbleSort from "./scripts/sorting_algorithms/bubble_sort";
import delay from "./scripts/delay_map";

window.addEventListener("DOMContentLoaded", () => {
  const activateBubbleSort = document.getElementsByClassName("algos__bubble_sort")[0];
  const resetBtn = document.getElementsByClassName("footer__reset")[0];
  let inputSelector = document.getElementsByClassName("footer__input-size")[0];
  let inputSize =
    inputSelector.value;
  let data = new GraphData(parseInt(inputSize));
  let graphDisplay = new GraphDisplay(data.data);

  graphDisplay.createChart();
  
  activateBubbleSort.addEventListener("click", function () {
    activateBubbleSort.classList.add("disabled");
    resetBtn.classList.add("disabled");
    inputSelector.classList.add("disabled");
    activateBubbleSort.disabled = true;
    resetBtn.disabled = true;
    inputSelector.disabled = true;
    const currInputSize =
      document.getElementsByClassName("footer__input-size")[0].value;
    if (currInputSize !== inputSize) {
      document.getElementsByTagName("svg")[0].remove();
      data = new GraphData(parseInt(currInputSize));
      graphDisplay = new GraphDisplay(data.data);
      graphDisplay.createChart();
      bubbleSort(data.data, delay[String(currInputSize)]);
    } else {
      bubbleSort(data.data, delay[String(currInputSize)]);
    }
  });

  resetBtn.addEventListener("click", function () {
    activateBubbleSort.classList.remove("disabled");
    activateBubbleSort.disabled = false;
    inputSelector.classList.remove("disabled");
    inputSelector.disabled = false;
    document.getElementsByTagName("svg")[0].remove();
    inputSize = document.getElementsByClassName("footer__input-size")[0].value;
    data = new GraphData(parseInt(inputSize));
    graphDisplay = new GraphDisplay(data.data);
    graphDisplay.createChart();
  });
});
