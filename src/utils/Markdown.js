import React from 'react';
import marked from 'marked';

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
      dangerouslySetInnerHTML={{ __html: marked(text) }}
    />
  );
};

export default Markdown;
