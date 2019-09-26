import container from "../inversify.config";
import {TweetCollection} from "../interfaces/collections/TweetCollection";
import TYPES from "../types";
import {TweetService} from "../interfaces/services";
import * as TweetsData from "./tweet_fixture.json"

describe('Tweet service', () =>{
    test('tweets', async () =>{
        const tweetService = container.get<TweetService>(TYPES.TweetService)
        jest.spyOn(tweetService, 'tweets')
            .mockImplementation((user:string)=>{
                return Promise.resolve(TweetsData)
            })

        const result = await tweetService.tweets('someuser', 1)
        expect(result).toHaveLength(2)
    })
})