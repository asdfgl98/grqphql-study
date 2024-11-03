import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';

  /**
   * fetch 를 활용한 RestAPI
   */
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

  /**
   * graphql
   */

  apollo = inject(Apollo)

  ngOnInit(){
   
  }
  
  getGQL(){
    this.apollo.watchQuery({
      query: gql`
        {
          datas {
            id
            name
            age
          }
        } 
      `
    }).valueChanges.subscribe((data:any)=>{
      console.log(data)
    })
  }

  data = gql`
  mutation createData($data: DataCreateInput!){
    createData(data: $data){
      name
    }
  }`
  
  addGQL(){
    this.apollo.mutate({
      mutation: this.data,
      variables: {
        data: {
          name: '지훈',
          age: 28
        }
      }
    }).subscribe(()=>{
      console.log('생성완료')
    })
  }

  /**
   * 이름으로 데이터 찾기
   */
  getNameGQL(){
    this.apollo.query({
      query: gql`
        query data($name: String!){
          data(name: $name){
            name
            age
          }
        }
      `,
      variables: {
        name: '지훈'
      }
    }).subscribe((data)=>{
      console.log(data)
    })
  }
  
  
}
