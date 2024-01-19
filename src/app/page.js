import React from 'react'
import BarChart from './Charts/BarChart'
import DoughnutChart from './Charts/Doughnut'
import LineChart from './Charts/LineChart'
import PieChart from './Charts/PieChart'

export default function page() {
  return (
    <div className='space-y-12'>
      <BarChart/>
      <DoughnutChart/>
      <LineChart/>
      <PieChart/>
    </div>
  )
}
