import React from 'react';
var ReactDOM = require('react-dom')

export default (props) => {
  fetch('https://rvug8fiyr6.execute-api.us-east-1.amazonaws.com/prod/docs?url=' + (props.params.id || 'README.md'))
    .then(res => res.text())
    .then(html => {
      ReactDOM.render(<div dangerouslySetInnerHTML={({ __html: html })} />, document.getElementById('README'))
    });

  return (
    <div className="ui container segment">
      <div className="markdown-body" id="README">
      </div>
    </div>)
}