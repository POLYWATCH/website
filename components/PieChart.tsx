import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


const data = [
  { id: 0, value: 30, label: 'OWNERS', style: { color: 'white' } },
  { id: 1, value: 15, label: 'AIRDROP', style: { color: 'white' } },
  { id: 2, value: 30, label: 'PUBLIC', style: { color: 'white' } },
  { id: 3, value: 25, label: 'TEAM', style: { color: 'white' } },
];


export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
}
