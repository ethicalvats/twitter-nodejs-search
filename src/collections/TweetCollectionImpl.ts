import {TweetCollection} from "../interfaces/collections/TweetCollection";
import {injectable} from "inversify";
import {MongoClient} from "mongodb";
import Config from "../config";

@injectable()
export class TweetCollectionImpl implements TweetCollection{
    private readonly collectionName: string = 'tweets'

    storeTweets(tweet: any): Promise<boolean> {
        return new Promise((resolve)=>{
            MongoClient.connect(Config.mongo(), async (error, client)=>{
                if(!error){
                    try {
                        await client.db()
                            .collection(this.collectionName)
                            .insertOne(tweet)
                        resolve(true)
                    }
                    catch (e) {
                        resolve(false)
                    }
                }
                return resolve(false)
            })
        })
    }

    fetchTweetsByUser(user: string, sort: number): Promise<any[]> {
        return new Promise((resolve)=>{
            MongoClient.connect(Config.mongo(), async (error, client)=>{
                if(!error){
                    try {
                        const tweets = await client.db()
                            .collection(this.collectionName)
                            .find({"user.screen_name": user})
                            .sort({"retweet_count":sort})
                            .toArray()
                        resolve(tweets)
                    }
                    catch (e) {
                        resolve([])
                    }
                }
                return resolve([])
            })
        })
    }
}