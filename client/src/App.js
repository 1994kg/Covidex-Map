import React, { Component } from 'react';
import Customer from './components/Customer'
//import info from './components/info'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

//https://material-ui.com/demos/tables/   material-ui에서 제공하는 공식 예제 

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080  //테이블은 무조건 1080px로 출력
  }
})

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1', //랜덤으로 이미지를 가져오는 사이트(64*64사이즈 지정)
  'name': '박주현',
  'birthday': '940611',
  'gender': '남자',
  'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '서은지',
    'birthday': '940417',
    'gender': '여자',
    'job': '디자이너'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3', 
    'name': '류지은',
    'birthday': '940526',
    'gender': '여자',
    'job': '프로그래머'
  }
]

class App extends Component {
  render()  {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
        </TableBody>
      </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
