import React from "react";

function About({ image, about})
    {
    return(
        //add default value
        <aside>
            <img src={image || "https://via.placeholder.com/215"} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About