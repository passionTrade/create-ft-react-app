import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import './index.css';
import App from './App';

Sentry.init({
  dsn: fashionTradeSettings.sentry_url,
  release: window.releaseVersion, // this is defined in index.ejs
  environment: fashionTradeSettings.environment,
});

ReactDOM.render(<App />, document.getElementById('ft-app'));
