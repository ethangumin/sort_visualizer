import GraphData from "./scripts/graph_data";
import GraphDisplay from "./scripts/graph_display";
import bubbleSort from "./scripts/sorting_algorithms/bubble_sort";

window.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementsByClassName("header__start")[0];
  const resetBtn = document.getElementsByClassName("header__reset")[0];
  let inputSize =
    document.getElementsByClassName("header__input-size")[0].value;
  let data = new GraphData(parseInt(inputSize));
  let graphDisplay = new GraphDisplay(data.data);

  graphDisplay.createChart();

  playBtn.addEventListener("click", function () {
    playBtn.classList.add("disabled");
    playBtn.disabled = true;
    const currInputSize =
      document.getElementsByClassName("header__input-size")[0].value;
    if (currInputSize !== inputSize) {
      document.getElementsByTagName("svg")[0].remove();
      data = new GraphData(parseInt(currInputSize));
      graphDisplay = new GraphDisplay(data.data);
      graphDisplay.createChart();

      setTimeout(function () {
        bubbleSort(data.data);
      }, 500);
    } else {
      bubbleSort(data.data);
    }
  });

  resetBtn.addEventListener("click", function () {
    playBtn.classList.remove("disabled");
    playBtn.disabled = false;
    document.getElementsByTagName("svg")[0].remove();
    inputSize = document.getElementsByClassName("header__input-size")[0].value;
    data = new GraphData(parseInt(inputSize));
    graphDisplay = new GraphDisplay(data.data);
    graphDisplay.createChart();
  });
});
