export interface IRecommendState {
  banners: IBanner[]
  hotRecommends: IHotRecommend[]
  newAlbums: any[]
  rankings: any[]
  settleSingers: any[]
}

export interface IBanner {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  exclusive: boolean
  encodeId: string
  scm: string
  bannerBizType: string
  url?: string
}

export interface IHotRecommend {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}
