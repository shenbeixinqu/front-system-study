import axios from 'axios'


class DSRequest {
  request(config) {
    return new Promise((resovle, reject) => {
      this.instance.request(config).then(res => {
        resovle(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new HYRequest("http://123.207.32.32:9001")
