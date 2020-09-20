import React from 'react';
import Marked from "marked";
import './Preview.css';

Marked.setOptions({
  gfm: true,
  breaks: true,
});

const Preview = (props) => {
  return (     
      <div id="preview" className="markdown-body" dangerouslySetInnerHTML={{__html: Marked(props.text)}} />
    )
}

export default Preview;