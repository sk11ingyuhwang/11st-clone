import axios from 'axios'

export default {
  install(app){
      app.config.globalProperties.$fetch = async options => {
        const {requestName} = options 
        const {data} = await axios({
          url:`https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main?apiKey=1216&requestName=${requestName}`,
          method: 'GET'
        })
        return data
      },
      app.config.globalProperties.$search = async options => {
          const {searchText} = options
          const {data} = await axios({
            url:`https://trusting-williams-8cacfb.netlify.app/.netlify/functions/search?apiKey=1216&searchText=${searchText}`,
            method: 'GET'
          })
          return data
      } 
  }
}
