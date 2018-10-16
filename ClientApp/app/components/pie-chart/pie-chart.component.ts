import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  data = {
    labels: ["Book1", "Book2", "Book3", "Book4"],
    datasets: [{
      data: [10, 20, 5, 30],
      backgroundColor: [
        "#00FFFF",
        "#E0FFFF",
        "#00FFFF",
        "#7FFFD4"
      ]
    }]
  }
  constructor() { }

  ngOnInit() {
  }

}
