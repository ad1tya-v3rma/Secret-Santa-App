import { Component, ViewChild } from '@angular/core';
import { Holder, Pair } from './holder';
import { BoundElementProperty } from '@angular/compiler';
import { ListKeyManager } from '@angular/cdk/a11y';
import { pairwise, scheduled } from 'rxjs';
import * as lodash from "lodash"
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { LoginService } from '../services/login-service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('name') inputField: any;
  welcomeBanner: String;
  isVisible: boolean;
  constructor(private service: LoginService) {
    console.log("component initialized")
    if (this.service.isAuthorized()) {
      this.welcomeBanner = "Welcome admin"
    }
    else {
      this.welcomeBanner = "please login first"
    }
    this.isVisible = this.service.isAuthorized();
  }

  pair: Pair[] = [];
  response?: Response;
  data?: Holder[] = [];
  url: string = "http://localhost:7070/"
  val: boolean = true
  num: number[] = [1, 2, 3];
  list: string[] = [];
  storeInput(val: string | KeyboardEvent) {
    if (val instanceof KeyboardEvent) {
      if ((val.key === 'Enter' || val.keyCode === 13) && this.inputField.nativeElement.value) {
        if (this.list.includes(this.inputField.nativeElement.value)) {
          alert("value exists")
          this.reset();
        }
        else {
          const holder: Holder = {
            name: this.inputField.nativeElement.value
          }
          this.data?.push(holder)
          this.list.push(this.inputField.nativeElement.value)
          this.reset();
        }
      }
    }
    else {
      if (this.list.includes(val.toString())) {
        alert("value exists")
        this.reset();

      }
      else {
        const holder: Holder = {
          name: val.toString()
        }
        this.data?.push(holder)
        this.list.push(val.toString())
        this.reset();

      }
    }
  }


  toggleListView() {
    this.val = !this.val;
    console.log(this.val);
  }

  async saveList() {
    this.response = await fetch(this.url,
      {
        method: "GET",
        mode: "cors"
      }
    );

    this.data = await this.response.json();
    console.log(this.data);

    // this.response = await fetch(this.url, { mode: "cors" });
    // console.log(this.response.status)
    // this.data = await this.response.json();
    // console.log(this.data)

    // await fetch(this.url, { mode: "cors" }).then(res => res.json()).then(data => console.log(data));

  }


  async saveCompleteList(list: string[]) {
    this.reset();
    //this.data = [{ id: 1, name: "Apoorva" }]
    if (this.pair.length > 0) {
      this.savePair(this.pair)
    }
    if (this.data?.length === 0) {
      alert("empty list")
    }

    fetch("http://localhost:7070/saveList",
      {
        "method": "POST",
        "mode": "cors",
        credentials: "same-origin",
        headers:
        {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(this.data)
      }
    )
  }

  async savePair(array: Pair[]) {
    await fetch("http://localhost:7070/saveList",
      {
        "method": "POST",
        "mode": "cors",
        credentials: 'same-origin',
        headers:
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(array)
      }
    )
  }

  clearList(): void {
    if (this.data?.length !== 0) {
      this.data = [];
      this.list = [];
      this.reset();
      console.log("empty list");
    }
  }

  reset(): void {
    this.inputField.nativeElement.value = '';
  }

  random(): void {
    // if (this.data) {
    //   this.pair = [];

    //   var shuffleData = this.shuffleArray(this.data);
    //   this.data.reverse
    //   console.log(shuffleData)
    //   if (shuffleData) {
    //     if (shuffleData.length > 0) {
    //       for (let i = 0; i < shuffleData.length; i++) {
    //         let tmp: Pair = { sender: shuffleData.at(i)?.name, receiver: this.data.at(i)?.name };
    //         this.pair.push(tmp);
    //       }
    //     }
    //   }
    //   console.log("pair", this.pair);
    //   console.log("data", this.data);

    if (this.data) {
      var holder = lodash.cloneDeep(this.data);
      holder.reverse();
      console.log(holder);

      for (let i = 0; i < this.data.length; i++) {
        let tmp: Pair = { sender: this.data.at(i)?.name, receiver: holder.at(i)?.name }
        this.pair.push(tmp);
      }

    }
    console.log("pair", this.pair);
    console.log("data", this.data);
    //console.log(shuffleData);
    //console.log(this.zip(this.data, shuffleData))
  }




  shuffle(array: Holder[]): Holder[] {
    //var holder = { ...array };
    const holder: Holder[] = [...array];
    //const holder = array;

    console.log(holder.length === undefined ? true : false)
    //holder.length = 3
    for (let i = holder.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i));
      [holder[i], holder[j]] = [holder[j], holder[i]];
    }
    return holder;
  };

  shuffleArray(array: Holder[]): Holder[] {
    var holder: Holder[] = [...array]
    //shuffle ops
    for (let i = holder.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [holder[i], holder[j]] = [holder[j], holder[i]];
    }
    while (this.compareAndValidateArray(array, holder)) {
      this.shuffleArray(array);
    }
    return holder;
  }

  compareAndValidateArray(array1: Object[], array2: Object[]): boolean {
    var result: boolean = false;
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        result = true;
        break;
      }
    }
    return result;
  }

  copyArray(array: Holder[]): Holder[] {
    // Shallow copy the array using the spread operator
    const copiedArray: Holder[] = [...array];
    return copiedArray;
  }



  // // Usage 
  // const myArray = ["apple", "banana", "cherry", "date", "elderberry"];
  // const shuffledArray = shuffle(myArray); 

  // console.log(shuffledArray)
}


