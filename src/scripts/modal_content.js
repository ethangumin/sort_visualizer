const modalContent = {
  appInformation: `
    <p>
      <b>Sort Visualizer</b> is a tool created to help people better
      understand sorting algorithms.
    </p>
    <br />
    </p>
      This application is straight-forward and intuitive. Below the graph,
      select an algorithm, sort speed, and input size, and click "Start" to
      begin sorting!
    </p>
    <br />
    </p>
      Once the sort is complete, click the "Reset" button to generate a
      new, unsorted, graph.
    </p>
    <br />
    <p>
      Click "Sort Details" to learn more about the currently selected algorithm.
    </p>
  `,
  bubbleSort: `
    <p>
      <b>Bubble Sort</b> is an algorithm that iterates through a list and swaps adjacent items that are improperly ordered. 
      This process is repeated until no swaps are made during a pass-through.
    </p>
    <br/>
      <p>
        Bubble Sort is simple in nature and is primarily used to help give students 
        an understanding of the fundamentals of sorting algorithms.
      </p>
    <br />
    <p><b>Time Complexity:</b> O(n^2)</p>
    <br />
    <p><b>Space Complexity:</b> O(1)</p>
  `,
  insertionSort: `
    <p>
      <b>Insertion Sort</b> is an algorithm that iterates through a list, 
      sorting one element at a time by shifting it backwards through the list until it is properly ordered.
    <p>
    <br />
    <p>
      An optimal time to use Interserion Sort is when the input size is small 
      or when you're dealing with a nearly sorted collection of data.
    </p>
     <br />
    <p><b>Time Complexity:</b> O(n^2)</p>
    <br />
    <p><b>Space Complexity:</b> O(1)</p>
  `,
};

export { modalContent as default };
