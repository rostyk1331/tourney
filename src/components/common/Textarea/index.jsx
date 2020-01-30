import React from 'react';
import styles from './style.module.scss';

const Textarea = ({ placeholder }) => (
    <div className={styles.formGroup}>
        <label className={styles.formLabel}>Textarea</label>
        <div>
            <textarea
                className={styles.inputTextarea}
                cols="60"
                rows="5"
                placeholder={placeholder}
            />
        </div>
    </div>
);

export default Textarea;