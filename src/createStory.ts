import { Story } from "./api"

export function createStory(story: Story){
    if(!story.url || !story.title) return;
    const storyWrapper = document.createElement("li");
    storyWrapper.classList.add("post");
    const title = document.createElement("a");
    title.classList.add("link");
    title.href = story.url;
    title.innerText = story.title;
    storyWrapper.appendChild(title);

    const tagline = document.createElement("p");
    tagline.classList.add("meta-info");
    tagline.appendChild(document.createTextNode("by "));

    const authorLink = document.createElement("a");
    authorLink.href = "#";
    authorLink.addEventListener("click", () => {
        document.dispatchEvent(
            new CustomEvent<{user: string}>("user", { detail: {user: story.by}})
        );
    });
    authorLink.innerText = story.by;
    tagline.appendChild(authorLink);
}