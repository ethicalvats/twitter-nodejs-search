import {TweetService} from "../interfaces/services/TweetService";
import {TweetCollection} from "../interfaces/collections/TweetCollection";
import TYPES from "../types";
import {inject, injectable} from "inversify";
import Twitter = require("twitter");
import Config from "../config";

@injectable()
export class TweetServiceImpl implements TweetService{
    private collection : TweetCollection
    private twitter: Twitter
    private readonly trackyKewords: string  = "blockchain,bitcoin"
    constructor(@inject(TYPES.TweetCollection) collection: TweetCollection){
        this.collection = collection
        this.twitter = new Twitter({
            consumer_key: Config.twitter.consumer_key,
            consumer_secret: Config.twitter.consumer_secret,
            access_token_key: Config.twitter.access_token_key,
            access_token_secret: Config.twitter.access_token_secret
        })
    }

    init(): void {
        this.twitter.stream('statuses/filter', {track:this.trackyKewords}, stream =>{
            stream.on('data', async evt =>{
                await this.collection.storeTweets(evt)
            })

            stream.on('error', err=>{
                console.log("ERROR::", err)
            })
        })
    }

    async tweets(user: string, sort: number){
        return await this.collection.fetchTweetsByUser(user, sort)
    }
}