export interface TweetCollection{
    storeTweets(tweet: any): Promise<boolean>
    fetchTweetsByUser(user: string, sort: number): Promise<any[]>
}