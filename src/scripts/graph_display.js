class GraphDisplay {
  constructor(data) {
    this.data = data;
  }

  createChart() {
    const chartHeight = 600;
    const width = 800;
    const yScale = d3.scaleLinear().domain([0, 100]).range([0, chartHeight]);
    const xScale = d3
      .scaleBand()
      .domain(d3.range(this.data.length))
      .range([0, width])
      .padding(0.25);

    const chart = d3
      .select(".chart")
      .append("svg")
      .attr("height", chartHeight)
      .attr("width", width)
      .style("background", "rgb(245,245,245)")
      .selectAll("rect")
      .data(this.data)
      .enter()
      .append("rect")
      .attr("data_id", function (d) {
        return d.data_id;
      })
      .attr("class", "unsorted")
      .attr("width", xScale.bandwidth())
      .attr("height", function (d) {
        return yScale(d.size);
      })
      .attr("x", function (d, i) {
        return xScale(i);
      })
      .attr("y", function (d) {
        return chartHeight - yScale(d.size);
      });
  }

  async quickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    const idx = await this.quickSortHelperPartition(arr, start, end);

    await Promise.all([
      this.quickSort(arr, start, idx - 1),
      this.quickSort(arr, idx + 1, end),
    ]);
  }

  async quickSortHelperPartition(arr, start, end) {
    let pivotIdx = start;
    let pivotVal = arr[end].size;

    debugger;

    for (let i = start; i < end; i++) {
      if (arr[i].size < pivotVal) {
        [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
        pivotIdx++;
      }
    }

    debugger;

    d3.select("svg").remove();
    this.createChart();

    await this.sortDelay();

    [arr[end], arr[pivotIdx]] = [arr[pivotIdx], arr[end]];

    debugger;

    return pivotIdx;
  }

  sortDelay() {
    return new Promise((res) => setTimeout(res, 100));
  }
}

export default GraphDisplay;
