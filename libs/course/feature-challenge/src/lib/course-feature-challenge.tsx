import { Route, Link } from 'react-router-dom';
import {} from '@cdn-school/course/data-access'
import styles from './course-feature-challenge.module.css';

/* eslint-disable-next-line */
export interface CourseFeatureChallengeProps {}

export function CourseFeatureChallenge(props: CourseFeatureChallengeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CourseFeatureChallenge!</h1>

      <ul>
        <li>
          <Link to="/">course-feature-challenge root</Link>
        </li>
      </ul>
      {/* <Route
        path="/"
        element={<div>This is the course-feature-challenge root route.</div>}
      /> */}
    </div>
  );
}

export default CourseFeatureChallenge;
