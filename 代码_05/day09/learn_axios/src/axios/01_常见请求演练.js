
// 1.发送request请求
axios.request({
  url: "http://123.207.32.32:8000/home/multidata",
  method: "get"
}).then(res => {
  console.log("res:", res.data)
})

// 2.发送get请求
// axios.get('http://123.207.32.32.9001/lyric?id=500665346').then(res => {
//   console.log("res1", res)
// })

// axios.get('http://123.207.32.32:9001/lyric', {
//   params: {
//     id: 500665346
//   }
// }).then(res => {
//   console.log("res2", res.data.lrc)
// })

// 3.发送post请求
axios.post('http://123.207.32.32:1888/02_param/postjson', {
  name: "codewhy",
  password: 123456
}).then(res => {
  console.log("res2", res.data)
})