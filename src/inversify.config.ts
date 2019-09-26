import 'reflect-metadata'
import { Container } from 'inversify';
import TYPES from './types';
import {TweetService} from "./interfaces/services/TweetService";
import {TweetServiceImpl} from "./services/TweetServiceImpl";
import {TweetCollection} from "./interfaces/collections/TweetCollection";
import {TweetCollectionImpl} from "./collections/TweetCollectionImpl";


const container =  new Container();

container.bind<TweetService>(TYPES.TweetService).to(TweetServiceImpl);
container.bind<TweetCollection>(TYPES.TweetCollection).to(TweetCollectionImpl)

export default container