class GraphData {
  constructor(num) {
    // this.data = this.generateData.call(this, num);
    this.data = this.generateData(num);
  }

  generateData(num) {
    const dataCollection = [];
    for (let i = 0; i < num; i++) {
      const randSize = Math.floor(Math.random() * 100 + 1);
      dataCollection.push({ data_id: i, size: randSize });
    }
    return dataCollection;
  }
}

export default GraphData;
