import request from '@/service/request'

export function getSongDetail(id: number) {
  return request.get('/song/detail', {
    params: {
      id,
    },
  })
}

export function getSongLyric(id: number) {
  return request.get('/lyric', {
    params: {
      id,
    },
  })
}
