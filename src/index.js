import GraphData from "./scripts/graph_data";
import GraphDisplay from "./scripts/graph_display";
import bubbleSort from "./scripts/sorting_algorithms/bubble_sort";

window.addEventListener("DOMContentLoaded", () => {
  const activateBubbleSort = document.getElementsByClassName("algos__bubble_sort")[0];
  const resetBtn = document.getElementsByClassName("footer__reset")[0];
  let inputSize =
    document.getElementsByClassName("footer__input-size")[0].value;
  let data = new GraphData(parseInt(inputSize));
  let graphDisplay = new GraphDisplay(data.data);

  graphDisplay.createChart();
  
  activateBubbleSort.addEventListener("click", function () {
    activateBubbleSort.classList.add("disabled");
    activateBubbleSort.disabled = true;
    const currInputSize =
      document.getElementsByClassName("footer__input-size")[0].value;
    if (currInputSize !== inputSize) {
      document.getElementsByTagName("svg")[0].remove();
      data = new GraphData(parseInt(currInputSize));
      graphDisplay = new GraphDisplay(data.data);
      graphDisplay.createChart();
      bubbleSort(data.data);
    } else {
      bubbleSort(data.data);
    }
  });

  resetBtn.addEventListener("click", function () {
    activateBubbleSort.classList.remove("disabled");
    activateBubbleSort.disabled = false;
    document.getElementsByTagName("svg")[0].remove();
    inputSize = document.getElementsByClassName("footer__input-size")[0].value;
    data = new GraphData(parseInt(inputSize));
    graphDisplay = new GraphDisplay(data.data);
    graphDisplay.createChart();
  });

  // const header = document.getElementsByClassName("header__title")[0];
  // header.addEventListener("click", function(){
  //   // debugger
  //   graphDisplay.bubbleSort2();
  //   // graphDisplay.quickSort();
  // })
});
