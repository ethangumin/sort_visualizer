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

  async bubbleSort2() {
    let sorted = false;
    while (!sorted) {
      sorted = true;
      // debugger;
      for (let i = 0; i < this.data.length - 1; i++) {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 10);
        });
        d3.select("svg").remove();
        this.createChart();
        // debugger;
        if (this.data[i].size > this.data[i + 1].size) {
          [this.data[i], this.data[i + 1]] = [this.data[i + 1], this.data[i]];
          // debugger;
          sorted = false;
        }
        // debugger;
      }
    }
  }

  // quickSort() {
  //   function compare(a, b) {
  //     return a < b ? -1 : 1;
  //   }

  //   debugger;
  //   if (this.data.length <= 1) return this.data;

  //   const pivot = this.data[0];
  //   const left = this.data
  //     .slice(1)
  //     .filter((el) => compare(el.size, pivot.size) === -1);
  //   const right = this.data
  //     .slice(1)
  //     .filter((el) => compare(el.size, pivot.size) !== -1);

  //   debugger;
  //   return [...left.quickSort(), pivot, ...right.quickSort()];
  // }
}

export default GraphDisplay;
