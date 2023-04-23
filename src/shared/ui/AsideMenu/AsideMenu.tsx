import React from 'react';
import styles from './AsideMenu.module.scss';

export const AsideMenu = () => {

    return (
        <>
            <label className={styles['hamburger-menu']}>
                <input type="checkbox"/>
            </label>
            <aside className={styles.sidebar}>
                <div>This</div>
                <div>Is</div>
                <div>The</div>
                <div>Sidebar</div>
            </aside>
        </>
    );
};
