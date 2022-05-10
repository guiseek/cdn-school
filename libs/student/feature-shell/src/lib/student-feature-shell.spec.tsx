import { render } from '@testing-library/react';

import StudentFeatureShell from './student-feature-shell';

describe('StudentFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StudentFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
