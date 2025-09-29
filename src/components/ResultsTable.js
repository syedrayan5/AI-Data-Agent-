import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement);

function ResultsTable({ results }) {
  const { answer, table, columns, chart } = results;

  const chartData = chart ? {
    labels: table.map(row => row[chart.x]),
    datasets: [{
      label: chart.y,
      data: table.map(row => row[chart.y]),
      backgroundColor: 'rgba(75,192,192,0.6)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1
    }]
  } : null;

  return (
    <div>
      <h3>Answer</h3>
      <p>{answer}</p>

      {columns.length > 0 && (
        <div>
          <h3>Data Table</h3>
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                {columns.map(col => <th key={col}>{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {table.map((row, idx) => (
                <tr key={idx}>
                  {columns.map(col => <td key={col}>{row[col]}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {chartData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Chart</h3>
          {chart.type === 'bar' && <Bar data={chartData} />}
          {chart.type === 'line' && <Line data={chartData} />}
        </div>
      )}
    </div>
  );
}

export default ResultsTable;
