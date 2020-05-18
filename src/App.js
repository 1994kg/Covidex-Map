import React, { Component } from 'react';
import Customer from './components/Customer'
//import info from './components/info'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1', //랜덤으로 이미지를 가져오는 사이트(64*64사이즈 지정)
  'name': '박주현',
  'birthday': '940611',
  'gender': '남자',
  'jobs': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '서은지',
    'birthday': '940417',
    'gender': '여자',
    'jobs': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3', 
    'name': '류지은',
    'birthday': '940526',
    'gender': '여자',
    'jobs': '대학생'
  }
]

class App extends Component {
  render()  {
    return (
      <div>
        {customers.map(c => {return (<Customer key={c.id}  //id를 키 값으로 설정
        id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} jobs={c.jobs}/>);})}
        </div>
    );
  }
}

export default App;
