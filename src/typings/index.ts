export interface Screenshot {
  id: number
  image: string
}
export interface Game {
  id: number
  title: string
  thumbnail: string
  short_description: string
  description: string
  genre: string
  platform: string
  developer: string
  release_date: string
  screenshots: Screenshot[]
}
