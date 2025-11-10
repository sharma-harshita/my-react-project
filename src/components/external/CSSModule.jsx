import React from 'react';
import styles from './CSSModule.module.css';

export function CSSModule (){
    return(
        <div>
            <button className={styles.btn}>Click ME !!</button>
        </div>
    )
}