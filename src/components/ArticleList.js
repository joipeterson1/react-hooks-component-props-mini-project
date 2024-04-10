import React from "react";
import Article from "./Article"

const ArticleList = ({posts}) => {
    //add a key to each article
    return (
        <main>
        {posts.map((post) => (
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
        ))}
        </main>
    )
}

export default ArticleList