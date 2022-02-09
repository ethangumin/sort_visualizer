import { removeDisableButton } from "../utility_functions";

async function insertionSort(data, delay) {
  for (let i = 1; i < data.length; i++) {
    const curr = d3.select("[data_id='" + i + "']");
    const currHeight = curr.attr("height");
    const currY = curr.attr("y");

    await sortDelay(delay);

    curr
      .classed("unsorted", false)
      .classed("sorted", true)
      .classed("sorting", false);

    await sortDelay(delay);

    let j = i - 1;

    while (
      j >= 0 &&
      parseInt(currHeight) <
        parseInt(d3.select("[data_id='" + j + "']").attr("height"))
    ) {
      await sortDelay(delay);

      d3.select("[data_id='" + (j + 1) + "']")
        .attr("height", d3.select("[data_id='" + j + "']").attr("height"))
        .attr("y", d3.select("[data_id='" + j + "']").attr("y"))
        .classed("sorted", false)
        .classed("sorting", true)
        .classed("unsorted", false);

      j--;
    }

    await sortDelay(delay);

    d3.select("[data_id='" + (j + 1) + "']")
      .attr("height", currHeight)
      .attr("y", currY)
      .classed("sorted", false)
      .classed("sorting", true)
      .classed("unsorted", false);
  }

  d3.selectAll("rect")
    .classed("sorted", true)
    .classed("unsorted", false)
    .classed("sorting", false);

  removeDisableButton(document.getElementsByClassName("footer__reset")[0]);
}

function sortDelay(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

export { insertionSort as default };
