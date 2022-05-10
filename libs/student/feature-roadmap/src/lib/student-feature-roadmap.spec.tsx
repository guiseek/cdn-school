import { render } from '@testing-library/react';

import StudentFeatureRoadmap from './student-feature-roadmap';

describe('StudentFeatureRoadmap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StudentFeatureRoadmap />);
    expect(baseElement).toBeTruthy();
  });
});
