import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function MarkOptimization() {
  return (
    <LineChart
      xAxis={[{ data: [0.001, 0.02, 0.04, 0.06, 0.07, 0.08] }]}
      series={[
        {
          data: [0.002, 0.03, 0.055, 0.065, 0.08, 0.08], // Aggiornati i dati del grafico
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
