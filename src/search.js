'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.scss';
import chrome from './image/chrome.jpg';

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        search text watching 热更新
        <img src={chrome} />
      </div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
);