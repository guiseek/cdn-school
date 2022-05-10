import { render } from '@testing-library/react';

import CourseUiContent from './course-ui-content';

describe('CourseUiContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseUiContent />);
    expect(baseElement).toBeTruthy();
  });
});
