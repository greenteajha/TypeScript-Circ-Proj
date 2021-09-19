const USER_URL_BASE = "https://hacker-news.firebaseio.com/v0/user/";
const STORY_URL_BASE = "https://hacker-news.firebaseio.com/v0/item/";

function getStoryUrl(story: number){
    return `${STORY_URL_BASE}${story}.json`;
}
function getUserUrl(username: string){
    return `${USER_URL_BASE}${username}.json`;
}

export interface Story {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    text: string;
    type: "story" | "comment" | "job" | "poll";
    url: string;
}

export interface User {
    about: string;
    created: number;
    delay: number;
    id: string;
    karma: number;
    submitted: number[];
}

let itemCache: { [itemId: number]: Story } = {};

console.log(itemCache[1]);