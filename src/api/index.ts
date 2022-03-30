import { Game } from '@/typings'
import * as mocks from './index.mock'
import axios from 'axios'

axios.defaults['baseURL'] = 'https://www.freetogame.com'
export const getGames = () => {
  return axios.get<Game[]>('/api/games').catch(mocks.getGames)
}

export const getGame = (id: number) => {
  return axios.get<Game>('/api/game', { params: { id } }).catch(() => mocks.getGame(id))
}
