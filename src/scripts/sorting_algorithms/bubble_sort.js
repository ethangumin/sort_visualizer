async function bubbleSort(data, delay) {
  let sorted = false;
  // debugger;
  while (!sorted) {
    sorted = true;

    // debugger;
    for (let i = 0; i < data.length - 1; i++) {
      const bar1 = d3.select("[data_id='" + i + "']");
      const bar2 = d3.select("[data_id='" + (i + 1) + "']");
      let height1 = bar1.attr("height");
      let height2 = bar2.attr("height");

      // debugger;
      if (parseInt(height1) > parseInt(height2)) {
        bar1.classed("unsorted", false).classed("sorting", true);
        bar2.classed("unsorted", false).classed("sorting", true);

        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, delay);
        });

        // debugger;

        let tempHeight = height1;
        let tempY = bar1.attr("y");
        bar1.attr("height", height2);
        bar2.attr("height", tempHeight);
        bar1.attr("y", bar2.attr("y"));
        bar2.attr("y", tempY);

        bar1.classed("unsorted", true).classed("sorting", false);

        if (i + 1 === data.length - 1) {
          bar2.classed("sorting", false).classed("sorted", true);
          // debugger;
        }

        sorted = false;
      } else {
        if (bar1.classed("sorted") && bar2.classed("sorted")) {
          break;
        } else if (bar2.classed("sorted")) {
          bar1
            .classed("sorted", true)
            .classed("sorting", false)
            .classed("unsorted", false);
          // debugger;

          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, delay);
          });
        } else if (i + 1 === data.length - 1) {
          bar2
            .classed("sorted", true)
            .classed("sorting", false)
            .classed("unsorted", false);

          bar1.classed("sorting", false).classed("unsorted", true);
          // debugger;

          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, delay);
          });
        } else {
          bar1.classed("unsorted", false).classed("sorting", true);
          bar2.classed("unsorted", false).classed("sorting", true);
          // debugger;

          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, delay);
          });

          bar1.classed("unsorted", true).classed("sorting", false);
        }
      }
    }
  }

  d3.selectAll("rect")
    .classed("sorted", true)
    .classed("unsorted", false)
    .classed("sorting", false);

  const resetBtn = document.getElementsByClassName("footer__reset")[0];
  resetBtn.disabled = false;
  resetBtn.classList.remove("disabled");
}

export { bubbleSort as default };
