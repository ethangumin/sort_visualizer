import GraphData from "./scripts/graph_data";
import GraphDisplay from "./scripts/graph_display";
import bubbleSort from "./scripts/sorting_algorithms/bubble_sort";
import insertionSort from "./scripts/sorting_algorithms/insertion_sort";
import delay from "./scripts/delay_map";
// import mergeSort from "./scripts/sorting_algorithms/merge_sort"
import {
  disableButton,
  removeDisableButton,
} from "./scripts/utility_functions";

window.addEventListener("DOMContentLoaded", () => {
  // buttons
  const startBtn = document.getElementsByClassName("footer__start")[0];
  const helpBtn = document.getElementById("help-btn");
  const bubbleSortBtn =
    document.getElementsByClassName("algos__bubble_sort")[0];
  const resetBtn = document.getElementsByClassName("footer__reset")[0];

  // select algorithm
  let algoSelector = document.getElementsByClassName("algo_select")[0];

  // modal
  const modal = document.getElementsByClassName("modal__bg")[0];

  // selected input size
  let inputSelector = document.getElementsByClassName("footer__input-size")[0];
  let inputSize = inputSelector.value;

  // create initial chart
  let data = new GraphData(parseInt(inputSize));
  let graphDisplay = new GraphDisplay(data.data);
  graphDisplay.createChart();

  // activate sort
  startBtn.addEventListener("click", function () {
    disableButton(startBtn);
    disableButton(resetBtn);
    disableButton(inputSelector);
    disableButton(algoSelector);

    if (inputSelector.value !== inputSize) {
      resetChart();
    }

    switch (algoSelector.value) {
      case "bubble sort":
        bubbleSort(data.data, delay[String(inputSelector.value)]);
        break;
      case "insertion sort":
        insertionSort(data.data, delay[String(inputSelector.value)]);
        break;
    }
  });

  // reactivate buttons and reset canvas
  resetBtn.addEventListener("click", function () {
    removeDisableButton(startBtn);
    removeDisableButton(algoSelector);
    removeDisableButton(inputSelector);
    resetChart();
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

  // reset canvas
  function resetChart() {
    document.getElementsByTagName("svg")[0].remove();
    data = new GraphData(parseInt(inputSelector.value));
    graphDisplay = new GraphDisplay(data.data);
    graphDisplay.createChart();
  }
});
