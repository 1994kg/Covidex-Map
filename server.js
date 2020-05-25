const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
            {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
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
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));