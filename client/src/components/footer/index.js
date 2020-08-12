import React from 'react'

import {
    MDBContainer,
    MDBFooter
  } from 'mdbreact';

import styles from './index.module.css'

const Footer = () => {
    
    return (
        <MDBFooter color='primary-color-dark' className={styles.footers}>
            <div className='footer-copyright text-center py-3'>
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    Kratun
                </MDBContainer>
            </div>
    </MDBFooter>
    );
};

export default Footer;