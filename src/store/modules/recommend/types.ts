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

export interface IHotRecommend {}
