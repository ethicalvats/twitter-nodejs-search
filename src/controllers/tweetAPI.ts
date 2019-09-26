import {BaseController} from './BaseController'
import { inject } from "inversify";
import { interfaces, httpGet, controller } from "inversify-express-utils";
import * as express from 'express'
import {ISearchService} from "../interfaces";
import TYPES from "../types";
import {TweetService} from "../interfaces/services/TweetService";

/**
 * Controller class for /movies/users API
 * 
 * @export
 * @class MoviesUsersController
 * @extends {BaseController}
 * @implements {interfaces.Controller}
 */
@controller('/tweets')
export class TweetAPI extends BaseController implements interfaces.Controller {

    /**
     *Private service binding
     *
     * @private
     * @type {ISearchService}
     * @memberof TweetAPI
     */
    private _service: TweetService;

    /**
     * Creates an instance of UserContorller
     * @constructor UserController
     */
    constructor( @inject(TYPES.TweetService) service:  TweetService ){
        super();
        this._service = service
    }

    /**
     * Lists all the users present in the system
     * 
     * @private
     * @param {express.Request} req 
     * @param {express.Response} res 
     * @param {express.NextFunction} next 
     * @returns {Promise<express.Response>} 
     * @memberof userController
     */
    @httpGet('/')
    private async getUsersTweets(req: express.Request, res: express.Response, next: express.NextFunction): Promise<express.Response> {

    }

}