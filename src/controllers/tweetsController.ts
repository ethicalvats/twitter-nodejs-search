import {BaseController} from './BaseController'
import { inject } from "inversify";
import { interfaces, httpGet, controller } from "inversify-express-utils";
import * as express from 'express'
import TYPES from "../types";
import {TweetService} from "../interfaces/services/TweetService";


@controller('/tweets')
export class TweetsController extends BaseController implements interfaces.Controller {


    private _service: TweetService;

    constructor( @inject(TYPES.TweetService) service:  TweetService ){
        super();
        this._service = service
    }


    @httpGet("/")
    private index(req: express.Request, res: express.Response, next: express.NextFunction): express.Response{
        return this.renderJSON(req, res, {
            api:[
                {
                    path: '/init',
                    description:'Initializes the tweet stream to run'
                },
                {
                    path: '/user-tweets',
                    description: 'Fetches the number of tweets by a user',
                    query:[
                        {
                            key: 'sort',
                            values: [1, -1]
                        },
                        {
                            key: 'user',
                            values:'string'
                        }
                    ]
                }
            ]
        })
    }

    @httpGet('/init')
    private initTweets(req: express.Request, res: express.Response, next: express.NextFunction): express.Response {
        this._service.init()
        return this.renderJSON(req, res, {})
    }

    @httpGet('/user-tweets')
    private async getUserTweets(req: express.Request, res: express.Response, next: express.NextFunction): Promise<express.Response> {
        const {user, sort} = req.query
        const result = await this._service.tweets(user, parseInt(sort))
        return this.renderJSON(req, res, {
            user,
            count: result.length,
            tweets:result
        })
    }

}