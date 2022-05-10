import { render } from '@testing-library/react';

import CourseFeatureChallenge from './course-feature-challenge';

describe('CourseFeatureChallenge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseFeatureChallenge />);
    expect(baseElement).toBeTruthy();
  });
});
