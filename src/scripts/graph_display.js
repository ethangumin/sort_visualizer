class GraphDisplay {
  constructor(data) {
    this.data = data;
    console.log(this.data);
  }

  createChart() {
    const chartHeight = 600;
    const barWidth = Math.floor(800 / this.data.length);
    const barOffset = 0.5;

    const chart = d3
      .select(".chart")
      .append("svg")
      .attr("height", chartHeight)
      .attr("width", "100%")
      .style("background", "rgb(245,245,245)")
        .selectAll("rect")
            .data(this.data)
            .enter().append('rect')
                .style("fill", "rgb(0,71,171")
                .attr("height", function (d) {
                    return d.size * 6;
                })
                .attr("width", barWidth)
                .attr("x", function (d, i) {
                    return (i) * (barWidth + barOffset);
                })
                .attr("y", function (d) {
                    return chartHeight - (d.size * 6);
                });
  }
}

export default GraphDisplay;
