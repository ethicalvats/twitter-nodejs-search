import DSNParser = require('dsn-parser')

const Config = {
    mongo: function(){
        if(process.env.MONGO_URL) {
            // let dsn = new DSNParser(process.env.MONGO_URL)
            // console.log('Mongo connection ..', dsn.getParts())
            // const host = dsn.get('host'),
            // port = dsn.get('port'),
            // username = dsn.get('user'),
            // password = dsn.get('password'),
            // database = dsn.get('database')
            // return `mongodb://${username}:${password}@${host}:${port}/${database}`
            return process.env.MONGO_URL
        }else{
            return 'mongodb://localhost:27017/dexhigh'
        }
    },
    twitter:{
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    }
}

export default Config