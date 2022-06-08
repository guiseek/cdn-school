import { render } from '@testing-library/react';

import NavbarPage from './navbar-page';

describe('NavbarPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavbarPage />);
    expect(baseElement).toBeTruthy();
  });
});
