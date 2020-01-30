import React from 'react';
import styles from './style.module.scss';

const Radio = ({ options }) => (
    <div className={styles.formGroup}>
        <label className={styles.formLabel}>Bracket Type</label>
        <div>
            { options.map(option => (
                <div key={option.id}>
                    <input type="radio" name={option.name} id={option.id} className={styles.inputRadio}/>
                    <label htmlFor={option.id} className={styles.inputRadioLabel}>{option.label}</label>
                </div>
            )) }
        </div>
    </div>
);

export default Radio;