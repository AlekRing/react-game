import s from "./style.module.scss";
import { Line } from "react-chartjs-2";
import { useState } from "react";

import StorageGood from "./Component/StorageGood"

function CitiyStorage(props:any) {
  const options = {
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,

    tooltips: {
      mode: "index",
      intersect: false,
      caretSize: 3,

      backgroundColor: "rgba(134,36,36,.2)",
      bodyFontColor: "rgb(134, 36, 36)",
      borderColor: "#877f72",
      borderWidth: 1,
      displayColors: false,

      callbacks: {
        title() {
          return 0;
        },
      },
    },

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  function getGoodData(priceStats:object):object {
      return {
        labels: ['', '', '', '', '', '', '', ''],
        datasets: [
          {
            label: 'Price',
            fill: false,
            lineTension: .3,
            backgroundColor: 'rgb(255,99,132)',
            borderColor: 'rgba(255, 102, 0, .5)',
            borderCapStyle: 'butt',
            pointBorderColor: 'rgb(204, 0, 51)',
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(224, 48, 48, 1)',
            pointHoverBorderColor: 'rgb(224, 48, 20)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: priceStats,
          }
        ]
      }
  }

  const chartStyle:any = {
    position: 'relative',
    height: '95%',
    width: '80%',
  }

  return (
    <>
      <h3>Citiy storage</h3>
      <div>
        <div className={s['goods-list']}>
          {props.storage.map((good:any) => {
            return (
              <div key={'good-' + good.id} className={s['goods-box-wrapper']}>
                <StorageGood good={good} onBuy={props.onBuy}/>
                <div className={s['goods-box-stats'] + 'chart-container'} style={chartStyle}>
                  <Line data={getGoodData(good.priceStats)} options={options}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CitiyStorage;