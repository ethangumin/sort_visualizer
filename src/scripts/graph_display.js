class GraphDisplay {
  constructor(data) {
    this.data = data;
    this.mergeSort = this.mergeSort.bind(this);
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

  mergeSort(arr) {
    console.log(arr);
    if (arr.length <= 1) return arr;

    const mid = arr.length / 2;

    const left = this.mergeSort(arr.slice(0, mid));
    const right = this.mergeSort(arr.slice(mid));

    return this.merge(left, right);
  }

  merge(arr1, arr2) {
    const res = [];
    while (arr1.length && arr2.length) {
      if (arr1[0].size < arr2[0].size) {
        res.push(arr1.shift());
      } else {
        res.push(arr2.shift());
      }
    }

    debugger;
    this.data = res.concat(arr1).concat(arr2);

    d3.select('svg').remove();
    this.createChart();
    debugger;

    return this.data;

  }
}

export default GraphDisplay;
