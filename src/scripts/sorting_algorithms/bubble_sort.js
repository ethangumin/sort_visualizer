function bubbleSort(data) {
  // d3.select("[data_id='0']").classed("sorting", true);
  // d3.select("[data_id='1']").classed("sorting", true);

  // for(let i = 0; i < data.length; i++){
  //     console.log(d3.select("[data_id='"+i+"']"));
  // }

  // const first = document.querySelector("[data_id='0'");
  // const second = document.querySelector("[data_id='1'");
  // console.log(first);
  // console.log(second);

  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < data.length - 1; i++) {
      let first = document.querySelector(`[data_id='${i}'`);
      let second = document.querySelector(`[data_id='${i + 1}'`);

      debugger
      first.classList.remove("unsorted");
      second.classList.remove("unsorted");
      first.classList.add("sorting");
      second.classList.add("sorting");

      if (second.classList.contains("sorted")) {
        first.classList.remove("sorting");
        first.classList.add("sorted");
      } else if (
        parseInt(first.getAttribute("height")) >
        parseInt(second.getAttribute("height"))
      ) {
        first.style.transform = "translateX(78.5px)";
        second.style.transform = "translateX(-78.5px)";
        sorted = false;
      }

      first = document.querySelector(`[data_id='${i + 1}'`);
    }
  }
}

export { bubbleSort as default };
