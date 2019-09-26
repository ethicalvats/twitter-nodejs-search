import DSNParser = require('dsn-parser')

const Config = {
    mongo: function(){
        if(process.env.MONGO_URL) {
            let dsn = new DSNParser(process.env.MONGO_URL)
            console.log('Mongo connection ..', dsn.getParts())
            const host = dsn.get('host'),
            port = dsn.get('port'),
            username = dsn.get('user'),
            password = dsn.get('password'),
            database = dsn.get('database')
            return `mongodb://${username}:${password}@${host}:${port}/${database}`
        }else{
            return 'mongodb://localhost:27017/geek_trust'
        }
    }
}

export default Config