import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';

  url = 'http://localhost:3000/api'

  async get(){
     fetch(this.url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res)=> res.json())
      .then((data)=>console.log(data))
  }

  async add(){
    fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      }
    }).then((res)=> res.json())
      .then((data)=>console.log(data))

  }

  async getName(){
    fetch(`${this.url}/name`, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
      }
    }).then((res)=> res.json())
      .then((data)=>console.log(data))
  }

  
}
