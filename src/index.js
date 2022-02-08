import GraphData from "./scripts/graph_data";
import GraphDisplay from "./scripts/graph_display";
import bubbleSort from "./scripts/sorting_algorithms/bubble_sort";
import delay from "./scripts/delay_map";
import {disableButton, removeDisableButton} from "./scripts/utility_functions";

window.addEventListener("DOMContentLoaded", () => {
  // buttons
  const helpBtn = document.getElementById("help-btn");
  const bubbleSortBtn =
    document.getElementsByClassName("algos__bubble_sort")[0];
  const resetBtn = document.getElementsByClassName("footer__reset")[0];

  // modal
  const modal = document.getElementsByClassName("modal__bg")[0];

  // selected input size
  let inputSelector = document.getElementsByClassName("footer__input-size")[0];
  let inputSize = inputSelector.value;

  // create initial chart
  let data = new GraphData(parseInt(inputSize));
  let graphDisplay = new GraphDisplay(data.data);
  graphDisplay.createChart();

  // activate bubble sort
  bubbleSortBtn.addEventListener("click", function () {
    // disable buttons when sort function is running
    disableButton(bubbleSortBtn);
    disableButton(resetBtn);
    disableButton(inputSelector);

    // if selected input size is not the same as the previous input size
    if (inputSelector.value !== inputSize) {
      document.getElementsByTagName("svg")[0].remove();
      data = new GraphData(parseInt(inputSelector.value));
      graphDisplay = new GraphDisplay(data.data);
      graphDisplay.createChart();
      bubbleSort(data.data, delay[String(inputSelector.value)]);
    } else {
      bubbleSort(data.data, delay[String(inputSelector.value)]);
    }
  });

  // reactivate buttons and reset canvas
  resetBtn.addEventListener("click", function () {
    removeDisableButton(bubbleSortBtn);
    removeDisableButton(inputSelector);
    document.getElementsByTagName("svg")[0].remove();
    inputSize = document.getElementsByClassName("footer__input-size")[0].value;
    data = new GraphData(parseInt(inputSize));
    graphDisplay = new GraphDisplay(data.data);
    graphDisplay.createChart();
  });

  // toggle modal on
  helpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal__bg-active");
  });

  // toggle modal off
  modal.addEventListener("click", () => {
    modal.classList.remove("modal__bg-active");
  });
});
