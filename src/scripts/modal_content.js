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
  selectionSort: `
    <p>
      <b>Selection Sort</b> is an algorithm that divides the input array into two halves (sorted and unsorted). Initially, the unsorted half is empty, while the sorted half contains each element in the input array. As the selection sort iterates through the unsorted half of the input, it keeps track of the smallest value. Once the algorithm passes through each item, the smallest value is shifted to the end of the sorted half of the input.
    </p>
    <br />
    <p>
      Select Sort is a simple, inefficient sorting algorithm, but is useful for sorting small datasets.
    </p>
    <br />
    <p><b>Time Complexity:</b> O(n^2)</p>
    <br />
    <p><b>Space Complexity:</b> O(1)</p>
  `,
};

export { modalContent as default };
