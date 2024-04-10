// import { IResponseData } from '../../baseTypes'
// import request from '../../request'
// import parse from '@/utils/tools'
import { banners } from './data'
import request from '@/service/request'

export function queryBannerData() {
  // console.log(JSON.stringify(parse(banners)))
  return Promise.resolve(banners)
}

export function getTopBanner() {
  return request.get('/banner')
}

export function getHotRecommend(limit = 10) {
  return request.get('/personalized', {
    params: {
      limit,
    },
  })
}

export function getNewAlbum(offset = 0, limit = 10) {
  return request.get('/album/new', {
    params: {
      offset,
      limit,
    },
  })
}

export function getPlayListDetail(id: number) {
  return request.get('/playlist/detail', {
    params: {
      id,
    },
  })
}

export function getArtistList(cat: number, limit: number) {
  return request.get('/artist/list', {
    params: {
      cat,
      limit,
    },
  })
}
