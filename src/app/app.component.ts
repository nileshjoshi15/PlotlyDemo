import { Component } from '@angular/core';
import * as Plotly from 'plotly.js/dist/plotly.js';
import {Config, Data, Layout} from 'plotly.js/dist/plotly.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }

  ngOnInit() {
    let y0 = [];
    let y1 = [];
    for (var i = 0; i < 50; i++) {
      y0[i] = Math.random();
      y1[i] = Math.random() + 1;
    }
    var trace1 = {
      y: y0,
      type: 'box'
    };
    let trace2 = {
      y: y1,
      type: 'box'
    };

    let data = [trace1, trace2];
    Plotly.newPlot('myDiv', data);
  }
}
