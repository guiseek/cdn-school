import { render } from '@testing-library/react';

import StudentFeatureDashboard from './student-feature-dashboard';

describe('StudentFeatureDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StudentFeatureDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
