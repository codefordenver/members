import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import './MarkdownRenderer.css';

marked.setOptions({
  gfm: true,
  sanitize: true // DO NOT CHANGE - helps avoid XSS attack possibility
});

async function getMarkdownHTML(fileName) {
  const markdownUrl = await import(`../markdown/${fileName}.md`);
  const request = await fetch(markdownUrl);
  const markdown = await request.text();
  return marked(markdown);
}

class MarkdownRenderer extends React.Component {
  static propTypes = {
    fileName: PropTypes.string.isRequired
  };

  state = {
    html: undefined
  };

  componentWillMount() {
    const { fileName } = this.props;
    if (!fileName) {
      throw new TypeError('fileName must be specified for MarkdownRenderer');
    }
    getMarkdownHTML(fileName).then(html => this.setState({ html }));
  }

  render() {
    return (
      <div className="MarkdownRenderer">
        {this.state.html ? (
          [
            <a
              key="markdown-edit-link"
              className="MarkdownRenderer-edit"
              href={`https://github.com/codefordenver/members/edit/master/src/markdown/${
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
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default MarkdownRenderer;
