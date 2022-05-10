import { Route, Link, Routes } from 'react-router-dom';
import {} from '@cdn-school/learn/data-access'
import styles from './learn-feature-shell.module.css';

import { CourseFeatureContent } from '@cdn-school/course/feature-content';
import { CourseFeatureChallenge } from '@cdn-school/course/feature-challenge';

/* eslint-disable-next-line */
export interface LearnFeatureShellProps {}

export function LearnFeatureShell(props: LearnFeatureShellProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LearnFeatureShell!</h1>

      <ul>
        <li>
          <Link to="/">learn-feature-shell root</Link>
        </li>
        <li>
          <Link to="/learn/content">course content</Link>
        </li>
        <li>
          <Link to="/learn/challenge">course challenge</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<div>This is the learn-feature-shell root route.</div>}
        />
        <Route path="content" element={<CourseFeatureContent />} />
        <Route path="challenge" element={<CourseFeatureChallenge />} />
      </Routes>
    </div>
  );
}

export default LearnFeatureShell;
