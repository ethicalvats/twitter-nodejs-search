export interface TweetService {
    init(): void
    tweets(user: string, sort: number): Promise<any[]>
}