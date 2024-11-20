import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  standalone: false
})
export class BodyComponent implements OnInit {
  clicked: boolean = false;
  clicked2: boolean = true;



  // ----------charts 1------------------------
  public config: any = {
    type: 'line',
    data: {
      labels: ["Dummy 1", "Dummy 2", "Dummy 3", "Dummy 4", "Dummy 5", "Dummy 6", "Dummy 7", "Dummy 8", "Dummy 9", "Dummy 10"],
      datasets: [

        {
          label: "salse",
          data: ["467", "482", "963", "123", "733", "958", "245", "758", "60", "260"],
          backgroundColor: "#FF7F5C",
          stack: "combined",
          type: "bar"
        },
        {
          label: "salse",
          data: ["467", "482", "963", "123", "733", "958", "245", "758", "60", "260"],
          backgroundColor: "#FF7F5C",
          stack: "combined"
        }
      ]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Station Activities Overview'
        }
      },
      scales: {
        y: {
          stacked: true
        }
      }
    },
  };
  charts1: any


  // ------charts 2------------------


  public config2: any = {
    type: 'radar',
    data: {
      labels: ["24:00", "2:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
      datasets: [

        {
          label: "salse",
          data: ["467", "482", "963", "123", "879", "958", "456", "758", "123", "879", "558", "958"],
          borderWidth: 1,
          borderColor: "#FF7F5C"

        },
      ]
    },
    options: {
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 100
        },
      },
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Hourly Salse'
        }
      }
    },
  };
  charts2: any

  ngOnInit(): void {
    this.charts1 = new Chart("MyChart1", this.config)
    this.charts2 = new Chart("MyChart2", this.config2)
  }




  onclick() {
    this.clicked = !this.clicked
    this.clicked2 = false
  }
  onclick2() {
    this.clicked2 = !this.clicked2
    this.clicked = false

  }
}
