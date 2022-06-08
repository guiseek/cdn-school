import { render } from '@testing-library/react';

import PlatformUiLayout from './platform-ui-layout';

describe('PlatformUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlatformUiLayout />);
    expect(baseElement).toBeTruthy();
  });
});
