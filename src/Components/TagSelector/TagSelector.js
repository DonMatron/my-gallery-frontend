import './TagSelector.css';
import React, { useState, useEffect } from 'react';

function TagSelector(props) {

    const [selectedTag, setSelectedTag] = useState("");

    function setTag(tag) {
        if (selectedTag === tag) {
            setSelectedTag("");
            return;
        }
        setSelectedTag(tag);
    }

    return (
        <div className="container-liquid p-3 text-center overflow-auto">
            <div className="col overflow-auto" >
                {props.tags.map((tag) => (
                    <button
                        key={tag}
                        type="button"
                        className={selectedTag === tag ? "Button Active " + tag : "Button"}
                        onClick={() => setTag(tag)}>
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TagSelector;