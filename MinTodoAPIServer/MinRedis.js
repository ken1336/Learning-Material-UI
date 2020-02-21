import redis from 'redis'

export const CreateConnection = ()=>{
    
    return client = redis.createClient(6379,'10.253.8.188');
}