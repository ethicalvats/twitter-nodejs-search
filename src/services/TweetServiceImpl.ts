import {TweetService} from "../interfaces/services/TweetService";
import {TweetCollection} from "../interfaces/collections/TweetCollection";
import TYPES from "../types";
import {inject, injectable} from "inversify";

@injectable()
export class TweetServiceImpl implements TweetService{
    private collection : TweetCollection
    constructor(@inject(TYPES.TweetCollection) collection: TweetCollection){
        this.collection = collection
    }

    tweets(){

    }
}