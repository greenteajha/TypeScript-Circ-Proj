import { getItem } from "./api";
import { createStory } from "./createStory";
import { formatDate } from "./util/formatDate";

export async function renderComments(storyId: number){
    const story = await getItem(storyId);
    const commentsContainer = document.createElement("div");
    commentsContainer.classList.add("comments-container");

    const storyMarkup = createStory(story);

    if(storyMarkup){
        commentsContainer.appendChild(storyMarkup);
    }

    const comments = await Promise.all(
        story.kids.slice(0,30).map(renderComment)
    );

    comments.forEach((comment) => {
        commentsContainer.appendChild(comment);
    });
    return commentsContainer;
}

async function renderComment(id: number){
    const story = await getItem(id);
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment");
}