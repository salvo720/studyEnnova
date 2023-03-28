import Article from './iarticle'
export default interface INewApi {
    status: string
    totalResults: number
    articles: Article[]
}
