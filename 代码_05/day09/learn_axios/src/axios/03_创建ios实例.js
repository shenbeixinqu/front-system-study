// axios 默认提供的实例对象
axios.get("http://123.207.32.32:9001/lyric?id=500665346")

// 创建其他的实例发送网络请求
const instanse1 = axios.create({
  baseURL: "http://123.207.32.32:9001",
  timeout: 6000,
  headers: {}
})

instanse1.get('/lyric', {
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("Res:", res.data)
})


const instanse2 = axios.create({
  baseURL: "http://123.207.32.32:8000",
  timeout: 10000,
  headers: {}
})