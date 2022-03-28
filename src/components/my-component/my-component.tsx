import React from 'react';
import styles from './my-component.module.scss'

export interface MyComponentProps {
    className?: string;
    foo?: string;
    bar?: number;
}

export const MyComponent: React.FC<MyComponentProps> = ({ className }) => {
    return <div className={styles.root}>MyComponent</div>;
};