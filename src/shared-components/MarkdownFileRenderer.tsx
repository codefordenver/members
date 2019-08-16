import React, { useState } from 'react';
import marked from 'marked';
import LoadingIndicator from './LoadingIndicator';

marked.setOptions({
  gfm: true,
  sanitize: true // DO NOT CHANGE - helps avoid XSS attack possibility
});

async function getMarkdownHTML(fileName: string) {
  const request = await fetch(`/markdown/${fileName}.md`);
  const markdown = await request.text();
  return marked(markdown);
}

interface MarkdownFileRendererProps {
  fileName: string;
}

const MarkdownFileRenderer: React.FC<MarkdownFileRendererProps> = ({
  fileName
}) => {
  const [html, setHtml] = useState<string | void>(undefined);

  if (!fileName) {
    throw new TypeError('fileName must be specified for MarkdownFileRenderer');
  }
  getMarkdownHTML(fileName).then(html => setHtml(html));

  return (
    <div className="MarkdownFileRenderer">
      {html ? (
        [
          <a
            key="markdown-edit-link"
            className="MarkdownFileRenderer-edit"
            href={`https://github.com/codefordenver/members/edit/master/public/markdown/${fileName}.md`}
          >
            suggest edit
          </a>,

          <div
            key="markdown-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ]
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
};

export default MarkdownFileRenderer;
