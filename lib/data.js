import { ConnectMongo } from "./connection"
import { Tweet } from "./models"

export const getTweet = async () => {
    try {
        await ConnectMongo()
        const tweets = await Tweet.findOne()
        if (tweets.length === 0) {
            console.log('No tweets found')
        }
        return tweets;
    } catch (err) {
        console.error('Error fetching tweets:', err)
    }
}