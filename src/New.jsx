import React from "react";

const New = ({new: {author, title, description}}) => {
    return (
        <div className="new">
            <h1 className="title">{title}</h1>
            <h2 className="desc">{description}</h2>
            <h3 className="author">{author}</h3>
        </div>
    );
}

export default New;
