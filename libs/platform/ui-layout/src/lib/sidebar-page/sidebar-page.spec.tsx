import { render } from '@testing-library/react';

import SidebarPage from './sidebar-page';

describe('SidebarPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarPage />);
    expect(baseElement).toBeTruthy();
  });
});
