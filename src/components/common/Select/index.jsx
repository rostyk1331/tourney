import React from 'react';
import styles from './style.module.scss';

const Select = ({ options }) => (
    <div className={styles.formGroup}>
        <label className={styles.formLabel}>Select</label>
            <div className={styles.selectInputContainer}>
                <select className={styles.selectInput}>
                    {options.map((option, index) => <option key={index}>{option}</option>)}
                </select>
            </div>
    </div>
);

export default Select;