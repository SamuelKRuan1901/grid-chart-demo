import { data } from './data';
console.log(data.Grid_Data);
const labels = data.Grid_Data.map((item) => item.REPORT_TIME);
console.log(labels);
const outputs = data.Grid_Data.map((item) => item.OUTPUT);
console.log(outputs);

export const barData = {
  labels: data.Grid_Data.map((item) => item.REPORT_TIME),
  datasets: [
    {
      label: 'OutPut',
      data: data.Grid_Data.map((item) => item.OUTPUT),
      backgroundColor: 'rgba(25, 157, 214, 0.64)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }
  ],
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 500
      },
      x: {
        ticks: {
          callback: function (value, index) {
            return index % 5 === 0 ? this.getLabelForValue(value) : '';
          }
        }
      }
    }
  }
};
