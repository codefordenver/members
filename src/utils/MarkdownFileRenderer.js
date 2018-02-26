import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import LoadingIndicator from '../sections/LoadingIndicator';
import './MarkdownFileRenderer.css';

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

class MarkdownFileRenderer extends React.Component {
  static propTypes = {
    fileName: PropTypes.string.isRequired
  };

  state = {
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
          <LoadingIndicator />
        )}
      </div>
    );
  }
}

export default MarkdownFileRenderer;
