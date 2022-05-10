import { Route, Link, Routes } from 'react-router-dom';

import { StudentFeatureDashboard } from '@cdn-school/student/feature-dashboard';

import { StudentFeatureRoadmap } from '@cdn-school/student/feature-roadmap';

import styles from './student-feature-shell.module.css';

/* eslint-disable-next-line */
export interface StudentFeatureShellProps {}

export function StudentFeatureShell(props: StudentFeatureShellProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StudentFeatureShell!</h1>

      <ul>
        <li>
          <Link to="/student/roadmap">Feature Roadmap</Link>
        </li>
        <li>
          <Link to="/student/dashboard">Feature Dashboard</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Routes>

        <Route path="roadmap" element={<StudentFeatureRoadmap />} />
        <Route
          path="dashboard"
          element={<StudentFeatureDashboard />}
        />
      </Routes>
    </div>
  );
}

export default StudentFeatureShell;
