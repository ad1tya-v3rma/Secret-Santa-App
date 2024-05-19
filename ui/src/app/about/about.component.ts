import { Component } from '@angular/core';
import { Holder } from '../header/holder';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  data: Holder[] = [];
  async getList() {
    const response = await fetch("http://localhost:7070/getList",
      {
        "method": "GET",
        "mode": "cors",
        "credentials": "same-origin",
        headers:
        {
          "Content-Type": "application/json"
        },
      }
    );

    this.data = await response.json();
    console.log(this.data)
  }

}
