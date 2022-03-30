import { Game } from '@/typings'
import { AxiosResponse } from 'axios'

const games = import('./data/games.json')

export const getGames = async () => {
  const data = (await games).default
  return { data } as unknown as AxiosResponse<Game[], any>
}

export const getGame = async (id: number) => {
  const data = (await games).default
  return { data: data.find((v) => v.id === id) } as unknown as AxiosResponse<Game, any>
}
