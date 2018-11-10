import React from 'react';
import marked from 'marked';
import LoadingIndicator from './LoadingIndicator';
import './MarkdownFileRenderer.css';

marked.setOptions({
  gfm: true,
  sanitize: true // DO NOT CHANGE - helps avoid XSS attack possibility
});

async function getMarkdownHTML(fileName: string) {
  const request = await fetch(`/markdown/${fileName}.md`);
  const markdown = await request.text();
  return marked(markdown);
}

interface Props {
  fileName: string;
}
interface State {
  html?: string;
}

class MarkdownFileRenderer extends React.Component<Props, State> {
  state: State = {
    html: undefined
  };

  componentWillMount() {
    const { fileName } = this.props;
    if (!fileName) {
      throw new TypeError(
        'fileName must be specified for MarkdownFileRenderer'
      );
    }
    getMarkdownHTML(fileName).then(html => this.setState({ html }));
  }

  render() {
    return (
      <div className="MarkdownFileRenderer">
        {this.state.html ? (
          [
            <a
              key="markdown-edit-link"
              className="MarkdownFileRenderer-edit"
              href={`https://github.com/codefordenver/members/edit/master/public/markdown/${
                this.props.fileName
              }.md`}
            >
              suggest edit
            </a>,

            <div
              key="markdown-content"
              dangerouslySetInnerHTML={{ __html: this.state.html }}
            />
          ]
        ) : (
          <LoadingIndicator />
        )}
      </div>
    );
  }
}

export default MarkdownFileRenderer;
