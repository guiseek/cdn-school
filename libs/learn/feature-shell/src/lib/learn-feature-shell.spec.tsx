import { render } from '@testing-library/react';

import LearnFeatureShell from './learn-feature-shell';

describe('LearnFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LearnFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
