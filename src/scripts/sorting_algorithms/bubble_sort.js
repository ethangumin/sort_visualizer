function bubbleSort(data) {
  console.log("bubble sort");

  let sorted = false;
  while (!sorted) {
    sorted = true;

    for (let i = 0; i < data.length - 1; i++) {
      let bar1 = d3.select("[data_id='" + i + "']");
      let bar2 = d3.select("[data_id='" + (i + 1) + "']");
      let height1 = bar1.attr("height");
      let height2 = bar2.attr("height");

      bar1.classed("unsorted", false).classed("sorting", true);
      bar2.classed("unsorted", false).classed("sorting", true);

      // debugger;

      if (parseInt(height1) > parseInt(height2)) {
        let tempHeight = height1;
        let tempY = bar1.attr("y");
        bar1.attr("height", height2);
        bar2.attr("height", tempHeight);
        bar1.attr("y", bar2.attr("y"));
        bar2.attr("y", tempY);
        sorted = false;
      } else if (bar2.classed("sorted", true)) {
        bar1.classed("sorted", true).classed("sorting", false);
      } else if (i + 1 === data.length - 1) {
        bar2.classed("sorted", true).classed("sorting", false);
      }

      // debugger;
    }
  }
}

export { bubbleSort as default };
