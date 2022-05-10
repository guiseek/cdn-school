import { render } from '@testing-library/react';

import CourseFeatureContent from './course-feature-content';

describe('CourseFeatureContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseFeatureContent />);
    expect(baseElement).toBeTruthy();
  });
});
