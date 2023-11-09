import React from "react";

const Tags= ({tags,logement})=> {

    return(
        <ul className="tags">
            {logement?.tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
    )
};

export default Tags;