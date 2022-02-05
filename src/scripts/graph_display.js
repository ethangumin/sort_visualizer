class GraphDisplay {
  constructor(data) {
    this.data = data;
  }

  createChart() {
    const chartHeight = 600;
    const width = 800;
    const yScale = d3.scaleLinear().domain([0, 100]).range([0, chartHeight]);
    // console.log(yScale(50));

    const xScale = d3
      .scaleBand()
      .domain(d3.range(this.data.length))
      .range([0, width])
      .padding(0.5);

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
}

export default GraphDisplay;
