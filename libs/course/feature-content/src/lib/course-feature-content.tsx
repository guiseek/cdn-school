import { Route, Link } from 'react-router-dom';
import {} from '@cdn-school/course/data-access'
import {} from '@cdn-school/course/ui-content'
import styles from './course-feature-content.module.css';

/* eslint-disable-next-line */
export interface CourseFeatureContentProps {}

export function CourseFeatureContent(props: CourseFeatureContentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CourseFeatureContent!</h1>

      <ul>
        <li>
          <Link to="/">course-feature-content root</Link>
        </li>
      </ul>
      {/* <Route
        path="/"
        element={<div>This is the course-feature-content root route.</div>}
      /> */}
    </div>
  );
}

export default CourseFeatureContent;
