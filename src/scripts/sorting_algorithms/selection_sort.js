import { removeDisableButton } from "../utility_functions";

async function selectionSort(data, delay) {
  let len = data.length;

  for (let i = 0; i < len; i++) {
    let min = i;
    for (let k = i + 1; k < len; k++) {
      d3.select("[data_id='" + min + "']")
        .classed("sorting", true)
        .classed("unsorted", false);
      d3.select("[data_id='" + k + "']")
        .classed("sorting", true)
        .classed("unsorted", false);
      debugger;
      if (
        parseInt(d3.select("[data_id='" + k + "']").attr("height")) <
        parseInt(d3.select("[data_id='" + min + "']").attr("height"))
      ) {
        d3.select("[data_id='" + min + "']")
          .classed("sorting", false)
          .classed("unsorted", true);
        min = k;
        debugger;
      } else {
        d3.select("[data_id='" + k + "']")
          .classed("sorting", false)
          .classed("unsorted", true);
        debugger;
      }
    }
    if (min !== i) {
    //   debugger;
      let tempHeight = d3.select("[data_id='" + i + "']").attr("height");
      let tempY = d3.select("[data_id='" + i + "']").attr("y");

      d3.select("[data_id='" + i + "']").attr(
        "height",
        d3.select("[data_id='" + min + "']").attr("height")
      );
      d3.select("[data_id='" + i + "']").attr(
        "y",
        d3.select("[data_id='" + min + "']").attr("y")
      );
      d3.select("[data_id='" + i + "']")
        .classed("sorted", true)
        .classed("unsorted", false)
        .classed("sorting", false);

      d3.select("[data_id='" + min + "']").attr("height", tempHeight);
      d3.select("[data_id='" + min + "']").attr("y", tempY);
      d3.select("[data_id='" + min + "']")
        .classed("sorted", false)
        .classed("unsorted", true)
        .classed("sorting", false);
      debugger;
    }

    // temp
    d3.select("[data_id='" + i + "']")
      .classed("sorted", true)
      .classed("unsorted", false)
      .classed("sorting", false);
      debugger;
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

export { selectionSort as default };
