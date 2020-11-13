import axios from 'axios'

const apiBaseUrl = 'https://www.shuipingguo.com/news/'
const urlMap = {
  getList: apiBaseUrl + ''
}

const HttpClient = {
  getList: (options) => {
    console.log("执行axios")
    axios
      .get(urlMap.getList, {params: options.params})
      .then(function (response) { 
        options.callback && options.callback(response); 
      })
      .catch(function (error) { 
        options.failcallback && options.failcallback(error); 
      })
      .then(function () { }) 
  }
}

export default HttpClient
