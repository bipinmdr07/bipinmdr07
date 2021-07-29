import './public';

import { render } from 'react-dom';
import { StrictMode } from 'react';

import RedBox from 'redbox-react';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

import config from './config';

const renderComponent = (rootElement: HTMLElement) => {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const reactElement = document.getElementById('root');

  if (reactElement) {
    if (config.env === 'development') {
      try {
        renderComponent(reactElement);
      } catch (e) {
        render(<RedBox error={e} />, reactElement);
      }
    } else {
      renderComponent(reactElement);
    }
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
