import React from 'react';
import styles from './style.module.scss';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Select from '../common/Select';
import Radio from '../common/Buttons/Radio';

const selectOptions = ['Male', 'Female'];
const radioOptions = [
    {name: 'bracketsType', id: 'single', label: 'Single Elimination'},
    {name: 'bracketsType', id: 'double', label: 'Double Elimination'},
    {name: 'bracketsType', id: 'threeGame', label: '3 Game Minimum'}
];

class Inputs extends React.Component {
    render() {
        return (
            <div style={{"padding": "10px"}}>
                <Input label='Standart input' type='Text' placeholder='Text'/>
                <Input label='Info input' type='TextInfo'/>
                <Input label='Search' type='Search' placeholder='Search'/>
                <Textarea placeholder='Message'/>
                <Select options={selectOptions}/>
                <Radio options={radioOptions}/>
                <hr/>
                
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
                <div>
                    <button type="button" className={styles.primaryBtn}>Primary</button>
                    <button type="button" className={styles.linkBtn}>Link</button>
                    <button type="button" className={styles.dangerBtn}>Danger</button>
                    <button type="button" className={styles.secondaryBtn}>Secondary</button>
                    <button type="button" className={styles.outlineBtn}>Outline</button>
                </div>
            </div>
        )
    }
}

export default Inputs; 