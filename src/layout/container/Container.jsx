import React from 'react';

import styles from './Container.module.scss'

export const Container = ({children}) => {
  return (
    <div className={styles.container_layout}>{children}</div>
  )
}
