import styles from './course-ui-content.module.css';

/* eslint-disable-next-line */
export interface CourseUiContentProps {}

export function CourseUiContent(props: CourseUiContentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CourseUiContent!</h1>
    </div>
  );
}

export default CourseUiContent;
