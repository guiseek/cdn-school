import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App title='' />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });
});
