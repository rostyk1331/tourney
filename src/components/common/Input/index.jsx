import React from 'react';
import styles from './style.module.scss';

const Input = ({ label, type, placeholder }) => (
    <div className={styles.formGroup}>
        <label className={styles.formLabel}>{label}</label>
        <div className={styles[`input${type}Container`]}>
            <input
                type="text"
                name="input"
                className={styles[`input${type}`]}
                placeholder={placeholder}
            />
        </div>
    </div>
);

export default Input;