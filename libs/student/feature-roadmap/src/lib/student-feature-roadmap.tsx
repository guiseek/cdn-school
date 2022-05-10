import { Route, Link } from 'react-router-dom';

import styles from './student-feature-roadmap.module.css';

/* eslint-disable-next-line */
export interface StudentFeatureRoadmapProps {}

export function StudentFeatureRoadmap(props: StudentFeatureRoadmapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StudentFeatureRoadmap!</h1>

      <ul>
        <li>
          <Link to="/">student-feature-roadmap root</Link>
        </li>
      </ul>
    </div>
  );
}

export default StudentFeatureRoadmap;
