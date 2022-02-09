import GraphData from "./scripts/graph_data";
import GraphDisplay from "./scripts/graph_display";
import bubbleSort from "./scripts/sorting_algorithms/bubble_sort";
import insertionSort from "./scripts/sorting_algorithms/insertion_sort";
import modalContent from "./scripts/modal_content";
import {
  disableButton,
  removeDisableButton,
} from "./scripts/utility_functions";

window.addEventListener("DOMContentLoaded", () => {
  // buttons
  const startBtn = document.getElementsByClassName("footer__start")[0];
  const helpBtn = document.getElementById("help-btn");
  const resetBtn = document.getElementsByClassName("footer__reset")[0];
  const algoDetailsBtn = document.getElementsByClassName("algo_details")[0];

  // selectors
  let algoSelector = document.getElementsByClassName("algo_select")[0];
  let inputSelector = document.getElementsByClassName("footer__input-size")[0];
  let speedSelector = document.getElementsByClassName("footer__speed")[0];

  // modal
  const modal = document.getElementsByClassName("modal__bg")[0];
  const modalContentDiv = document.getElementsByClassName("modal__content")[0];

  // input size
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
    disableButton(speedSelector);

    if (inputSelector.value !== inputSize) {
      resetChart();
    }

    switch (algoSelector.value) {
      case "bubble sort":
        bubbleSort(data.data, parseInt(speedSelector.value));
        break;
      case "insertion sort":
        insertionSort(data.data, parseInt(speedSelector.value));
        break;
    }
  });

  // reactivate buttons and reset canvas
  resetBtn.addEventListener("click", function () {
    removeDisableButton(startBtn);
    removeDisableButton(algoSelector);
    removeDisableButton(inputSelector);
    removeDisableButton(speedSelector);
    resetChart();
  });

  // toggle modal on
  helpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalContentDiv.innerHTML = modalContent.appInformation;
    modal.classList.add("modal__bg-active");
  });

  // toggle modal off
  modal.addEventListener("click", () => {
    modal.classList.remove("modal__bg-active");
  });

  // toggle sort info
  algoDetailsBtn.addEventListener("click", (e) => {
    e.preventDefault();

    switch(algoSelector.value){
      case "bubble sort":
        modalContentDiv.innerHTML = modalContent.bubbleSort;
        break;
      case "insertion sort":
        modalContentDiv.innerHTML = modalContent.insertionSort;
    }

    modal.classList.add("modal__bg-active");
  })

  // reset canvas
  function resetChart() {
    document.getElementsByTagName("svg")[0].remove();
    data = new GraphData(parseInt(inputSelector.value));
    graphDisplay = new GraphDisplay(data.data);
    graphDisplay.createChart();
  }
});
