import React from 'react';
import marked from 'marked';
import './Markdown.css';

marked.setOptions({
  gfm: true,
  sanitize: true // DO NOT CHANGE - helps avoid XSS attack possibility
});

interface Props {
  text: string;
}

const Markdown: React.SFC<Props> = ({ text }) => {
  if (typeof text !== 'string') {
    return <div />;
  }
  return (
    <div
      className="Markdown"
      key="markdown-content"
      dangerouslySetInnerHTML={{ __html: marked(text) }}
    />
  );
};

export default Markdown;
