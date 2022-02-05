function bubbleSort(data) {
  console.log("bubble sort");
  // d3.select("[data_id='0']").classed("sorting", true);
  // d3.select("[data_id='1']").classed("sorting", true);

  // for(let i = 0; i < data.length; i++){
  //     console.log(d3.select("[data_id='"+i+"']"));
  // }

  // let sorted = false;
  // while (!sorted) {
  //   sorted = true;
  //   let i = 0;
  //   let p1 = 0;
  //   let p2 = 1;

  //   while (i < data.length - 1) {
  //     let first = document.querySelector(`[data_id='${p1}'`);
  //     let second = document.querySelector(`[data_id='${p2}'`);
  //     debugger;
      
  //     if()
      
  //   }
  // }

  // const second = document.querySelector("[data_id='1'");
  // console.log(first);
  // console.log(second);

  // let sorted = false;
  // while (!sorted) {
  //   sorted = true;
  //   let pointer1 = 0;
  //   let pointer2 = 1;
  //   for (let i = 0; i < data.length - 1; i++) {
  //     let first = document.querySelector(`[data_id='${pointer1}'`);
  //     let second = document.querySelector(`[data_id='${pointer2}'`);

  //     // debugger
  //     first.classList.remove("unsorted");
  //     second.classList.remove("unsorted");
  //     first.classList.add("sorting");
  //     second.classList.add("sorting");

  //     if (second.classList.contains("sorted")) {
  //       first.classList.remove("sorting");
  //       first.classList.add("sorted");
  //     } else if (
  //       parseInt(first.getAttribute("height")) >
  //       parseInt(second.getAttribute("height"))
  //     ) {
  //       first.style.transform = "translateX(78.5px)";
  //       second.style.transform = "translateX(-78.5px)";
  //       pointer2++;
  //       sorted = false;
  //     } else {
  //         pointer1 = pointer2;
  //         pointer2++;
  //     }
  //   }
  // }
}

export { bubbleSort as default };
