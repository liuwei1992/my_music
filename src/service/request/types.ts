import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IInterceptors<T = AxiosResponse> {
  requestOnFulfilled: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestOnRejected: (err: any) => any
  responseOnFulfilled: (res: T) => T
  responseOnRejected: (err: any) => any
}

export interface Iconfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IInterceptors<T>
}
