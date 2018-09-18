/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/9/18
 * Time: 15:15
 */
import axios from 'axios'
import config from './config'

axios.defaults.timeout = config.timeout
axios.defaults.baseURL = config.baseURL

axios.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application'
  }
  return config
})

axios.interceptors.response.use()

// get请求
export function getHandle (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params | null
    })
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(config.deviantHandle(error))
      })
  })
}

// post请求
export function postHandle (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(config.deviantHandle(error))
      })
  })
}

// delete请求
export function deleteHandle (url) {
  return new Promise((resolve, reject) => {
    axios.delete(url)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(config.deviantHandle(error))
      })
  })
}

// patch请求
export function patchHandle (url, data) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(config.deviantHandle(error))
      })
  })
}
