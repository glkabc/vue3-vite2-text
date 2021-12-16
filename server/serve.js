const express = require('express')

const app = express()

app.all('*', (req, res, nex) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,token");
  // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  // res.header("Content-Type", "application/json;charset=utf-8");
  nex()
})

app.post('/getList', (req, res) => {
  console.log(req.headers)
  
  const list = [
    {
      name: '小明',
      age: 32,
    },
    {
      name: '夏红',
      age: 32,
    },
    {
      name: '小红',
      age: 12
    }
  ]
  res.send(JSON.stringify(list))
})

app.listen(3334, () => {
  console.log('listen to port 3334')
})