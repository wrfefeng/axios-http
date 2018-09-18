/**
 * Created by WebStorm.
 * User: wrf
 * Date: 2018/9/18
 * Time: 15:16
 */

const config = {
  timeout: 5 * 1000,
  baseURL: process.env.NODE_ENV === 'development' ? '' : '',
  deviantHandle: function (params) {
    // ...
    return params
  }
}

export default config
