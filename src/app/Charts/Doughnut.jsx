"use client"
import React,{useEffect, useState} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
import { Doughnut } from 'react-chartjs-2'


ChartJS.register(
    ArcElement,LinearScale,CategoryScale,Title,Tooltip,Legend
)
const DoughnutChart = () => {
//Utils.months({count: 7})
const [chart,setChart] = useState({})
    const baseUrl = 'https://api.coinranking.com/v2/coins/?limit=10'
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiKey = "coinranking23a5581d3f5344690d43d45a1c11b32948987555564a1293"

    useEffect(()=>{
        const fetchCoins = async()=>{
            await fetch(`${proxyUrl}${baseUrl}`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin':'*'
                }
            }).then((response)=>{
                response.json().then((json) => {
                    console.log(json)
                    setChart(json.data)
                })
            }).catch(error => {
                console.log(error)
            })
        }
        fetchCoins()
    }, [baseUrl,proxyUrl])

    console.log("chart:", chart)
    const labels = chart?.coins?.map(x => x.name);
    const data = {
      labels: labels,
      datasets: [{
        label: `${chart?.coins?.length} Coins Available`,
        data: chart?.coins?.map(x => x.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };
    const options = {
        maintainAspectRatio:false,
        scales: {
            y: {
                beginAtZero:true
            }
        },
        legend:{
            labels:{
                fontSize:26
            }
        }
    };
    return (
        <div>
            <Doughnut data={data} height={400} options={options}/>
        </div>
      )
    }
  
    



export default DoughnutChart