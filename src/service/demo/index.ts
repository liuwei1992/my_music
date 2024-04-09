import { IResponseData } from '../baseTypes'
import request from '../request'

interface IDemoData {
  secretKey: string
}

export const getDemoData = () => {
  return request.get<IResponseData<IDemoData>>(
    'https://dict.youdao.com/plugin/search/key?product=googlePlugin&appVersion=1&client=web&mid=1&vendor=web&screen=1&model=1&imei=1&network=wifi&keyid=googlePlugin-key-getter&mysticTime=1712560067492&yduuid=abcdefg&sign=693139b9b881d88b3069024e1c98570d&pointParam=appVersion,client,imei,keyid,mid,model,mysticTime,network,product,screen,vendor,yduuid,key'
  )
}
