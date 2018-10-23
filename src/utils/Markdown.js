import React from 'react';
import marked from 'marked';
import './Markdown.css';

marked.setOptions({
  gfm: true,
  sanitize: true // DO NOT CHANGE - helps avoid XSS attack possibility
});

const Markdown = ({ text }) => {
  if (typeof text !== 'string') {
    return <div />;
  }
  return (
    <div
      key="markdown-content"
      className="Markdown"
      dangerouslySetInnerHTML={{ __html: marked(text) }}
    />
  );
};

export default Markdown;
