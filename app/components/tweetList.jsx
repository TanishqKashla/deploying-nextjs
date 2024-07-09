import React from 'react'
import Link from 'next/link'

const getTweets = async () => {
    try {
        const res = await fetch('http:localhost:3000/api/tweets', { cache: "no-store" })

        if (!res.ok) {
            throw new Error('Failed to fetch tweets')
        }

        return res.json()
    } catch (error) {
        console.log(error);
        console.log("ERROR FETCHING COMMENTS")
    }
}

const TweetList = async () => {

    const tweets = await getTweets();

    return (
        <>
            {tweets?.map((tweet) => (
                <div>
                    <h3>{tweet.title}</h3>
                    <p>{tweet.body}</p>
                </div>
            ))}
        </>
    )
}

export default TweetList