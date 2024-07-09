import { ConnectMongo } from "@/lib/connection";
import { Tweet } from "@/lib/models";
import { NextResponse } from "next/server";

export async function GET(req) {
    await ConnectMongo();
    const tweets = await Tweet.find({});
    return NextResponse.json(tweets)
}