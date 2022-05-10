import { Route, Link } from 'react-router-dom';

import styles from './student-feature-dashboard.module.css';

/* eslint-disable-next-line */
export interface StudentFeatureDashboardProps {}

export function StudentFeatureDashboard(props: StudentFeatureDashboardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StudentFeatureDashboard!</h1>

      <ul>
        <li>
          <Link to="/">student-feature-dashboard root</Link>
        </li>
      </ul>
    </div>
  );
}

export default StudentFeatureDashboard;
