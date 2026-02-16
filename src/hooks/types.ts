export interface Event {
  id: string
  title: string
  date: string
  description: string
  link?: string
}

export interface NewsItem {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
}