// import { IResponseData } from '../../baseTypes'
// import request from '../../request'
import parse from '@/utils/tools'
import { banners } from './data'

export function queryBannerData() {
  // console.log(JSON.stringify(parse(banners)))
  return Promise.resolve(banners)
}
