import React from 'react';
import styles from './goals.module.scss'
import { ShadowCard } from '../shadow-card/shadow-card';
import { Icon } from '../icon/Icon';

export interface GoalsProps {
    className?: string;
}

export const Goals: React.FC<GoalsProps> = ({ className }) => {
    return <div className={styles.root}>
        <ShadowCard showCard={true}>
            <div className={styles.price}>550$<div className={styles.date}>12/20/20</div>
            </div>
            <div className={styles.footer}><Icon icon={'calendar'} className={styles.icon}></Icon>
                <div className={styles.category}>Holidays</div></div>
        </ShadowCard></div>;
};