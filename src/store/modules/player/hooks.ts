import { useTypeDispatch, useTypedSelector } from '@/store/hooks'
import { shallowEqual, useDispatch } from 'react-redux'
import { changePlaySongListAction, setCurrentSongAction } from '.'

export function useCurrentPlaySong(): [
  (typeof playSongList)[0],
  (params: { id?: number; next?: boolean; pre?: boolean }) => void,
] {
  const dispatch = useTypeDispatch()
  const { playSongIndex, playSongList } = useTypedSelector(
    (state) => ({
      playSongIndex: state.player.playSongIndex,
      playSongList: state.player.playSongList,
    }),
    shallowEqual
  )

  const setPlaySong = ({
    id,
    next = false,
    pre = false,
  }: {
    id?: number
    next?: boolean
    pre?: boolean
  }) => {
    if (id) {
      dispatch(setCurrentSongAction(id))
    } else if (next || pre) {
      let newIndex = next ? playSongIndex + 1 : playSongIndex - 1
      if (newIndex < 0) newIndex = playSongList.length - 1
      if (newIndex > playSongList.length - 1) newIndex = 0
      dispatch(changePlaySongListAction(newIndex))
    }
  }

  return [playSongList[playSongIndex], setPlaySong]
}
