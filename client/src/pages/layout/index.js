import React from 'react'
import Navigation from '../../navigation/navigation';
import styles from './index.module.css'
import Footer from '../../components/footer'

const PageLayout = (props) => {
  return (
    <div className={styles.app}>
      <Navigation />
      <div className={styles.container}>
        
        <div className={styles['inner-container']}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout