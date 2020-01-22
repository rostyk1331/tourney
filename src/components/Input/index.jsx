import React from 'react';
import styles from './style.module.scss';

class Input extends React.Component {
    render() {
        return (
            <div style={{"padding": "10px"}}>
                <label className={styles.formLabel}>Search</label>
                <div className={styles.searchInputContainer}>
                    <input type="text" name="search" className={styles.searchInput} placeholder="Search"/>
                </div>
                <label className={styles.formLabel}>Select</label>
                <div className={styles.selectInputContainer}>
                    <select className={styles.selectInput}>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <label className={styles.formLabel}>Input</label>
                <div>
                    <input type="text" name="input" className={styles.inputText}/>
                </div>
                <label className={styles.formLabel}>Input with info</label>
                <div className={styles.inputTextInfoContainer}>
                    <input type="text" name="input" className={styles.inputTextInfo}/>
                </div>
                <label className={styles.formLabel}>Textarea</label>
                <div>
                    <textarea name="" className={styles.inputTextarea} cols="30" rows="10"></textarea>
                </div>
                <label className={styles.formLabel}>Bracket Type</label>
                <div>
                    <div>
                        <input type="radio" name="bracket-type" id="single" className={styles.inputRadio}/>
                        <label htmlFor="single" className={styles.inputRadioLabel}>Single Elimination</label>
                    </div>
                    <div>
                        <input type="radio" name="bracket-type" id="double" className={styles.inputRadio}/>
                        <label htmlFor="double" className={styles.inputRadioLabel}>Double Elimination</label>
                    </div>
                    <div>
                        <input type="radio" name="bracket-type" id="three" className={styles.inputRadio}/>
                        <label htmlFor="three" className={styles.inputRadioLabel}>3 Game Elimination</label>
                    </div>
                </div>
                <label className={styles.formLabel}>Checkbox</label>
                <div>
                    <input type="checkbox" name="playoffs" id="playoffs" className={styles.inputCheckbox}/>
                    <label htmlFor="playoffs" className={styles.inputChechboxLabel}>Playoffs</label>
                </div>
                <div>
                <input type="checkbox" name="playoffs" id="backtoback" className={styles.inputCheckbox}/>
                    <label htmlFor="backtoback" className={styles.inputChechboxLabel}>Back to Back Game Warning</label>
                </div>
                <label className={styles.formLabel}>Start Date</label>
                <div>
                    <input type="date" name="date" id="" className={styles.inputDate}/>
                </div>
                <label className={styles.formLabel}>End Date</label>
                <div>
                    <input type="date" name="date" id="" className={styles.inputDate}/>
                </div>
            </div>
        )
    }
}

export default Input; 