import { removeDisableButton } from "../utility_functions";

async function selectionSort(data, delay) {
  let len = data.length;

  for (let i = 0; i < len; i++) {
    let min = i;
    // debugger;
    for (let k = i + 1; k < len; k++) {
      debugger;
      if (
        parseInt(d3.select("[data_id='" + k + "']").attr("height")) <
        parseInt(d3.select("[data_id='" + min + "']").attr("height"))
      ) {
        min = k;
        debugger;
      }
    }
    if (min !== i) {
      //   let temp = data[i];
      //   data[i] = data[min];
      //   data[min] = temp;
      debugger;
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

      d3.select("[data_id='" + min + "']").attr("height", tempHeight);
      d3.select("[data_id='" + min + "']").attr("y", tempY);
      debugger;
    }
  }

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
