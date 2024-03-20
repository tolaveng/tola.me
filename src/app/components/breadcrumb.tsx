import React from 'react';
import styles from './breadcrumb.module.css';

export type BreadcrumbPath = {
  name: string,
  link?: string,
};

const Breadcrumb = ({ paths }: {paths: BreadcrumbPath[]}) => {
  return <div className={styles.breadcrumbContainer}>
    <ul className={styles.breadcrumb}>
      <li>📓 <a href="/">Home</a></li>
      {
        paths.map((path) => <li key={path.name}>
          {path.link && <a href={path.link}>{path.name}</a>}
          {!path.link && <span>{path.name}</span>}
        </li>)
      }
    </ul>
  </div>
};

export default Breadcrumb;
