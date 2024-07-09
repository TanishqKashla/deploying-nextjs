import React from 'react'
import Link from 'next/link'

const getTweets = async () => {
    try {
        const res = await fetch('http:localhost:3000/api/tweets')

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
                <div key={tweet._id}>
                    <h3 key={tweet._id}>{tweet.title}</h3>
                    <p key={tweet._id}>{tweet.body}</p>
                </div>
            ))}
        </>
    )
}

export default TweetList