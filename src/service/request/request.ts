import { default as axios } from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import { Iconfig } from './types'

class Request {
  instance: AxiosInstance

  constructor(config: Iconfig) {
    const instance = axios.create(config)
    this.instance = instance

    // 添加请求拦截器
    instance.interceptors.request.use(
      function (config) {
        console.log('在发送请求之前做些什么')
        return config
      },
      function (error) {
        console.log('对请求错误做些什么')
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    instance.interceptors.response.use(
      function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        console.log('对响应数据做点什么')
        return response
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        console.log('对响应错误做点什么')
        return Promise.reject(error)
      }
    )

    const { interceptors } = config
    // 添加请求拦截器
    instance.interceptors.request.use(
      interceptors?.requestOnFulfilled,
      interceptors?.requestOnRejected
    )

    // 添加响应拦截器
    instance.interceptors.response.use(
      interceptors?.responseOnFulfilled,
      interceptors?.responseOnRejected
    )
  }

  request<T>(config: Iconfig) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestOnFulfilled) {
      config = config.interceptors.requestOnFulfilled(config)
    }

    return new Promise<T>((resolve, reject) => {
      try {
        this.instance
          .request<any, AxiosResponse<T, any>>({ method: 'get', ...config })
          .then((response) => {
            // 单词响应的成功拦截处理
            if (config.interceptors?.responseOnFulfilled) {
              response = config.interceptors.responseOnFulfilled(response)
            }

            resolve(response.data)
          })
      } catch (e) {
        // 全局弹窗的处理等
        reject(e)
      }
    })
  }

  get<T = any>(url: string, config?: Iconfig) {
    return this.request<T>({ method: 'get', url, ...config })
  }

  post<T = any>(url: string, config?: Iconfig) {
    return this.request<T>({ method: 'post', url, ...config })
  }
}

export default Request
