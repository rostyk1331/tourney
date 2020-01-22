import React from 'react';
import styles from './style.module.scss';
import { useDrop } from 'react-dnd';

const Target = () => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'item',
        drop: () => ({ name: 'Target' }),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    })
    const isActive = canDrop && isOver;
    console.log(isActive);
    let backgroundColor = 'grey';
    if (isActive) {
        backgroundColor = 'green';
    } else if (canDrop) {
        backgroundColor = 'yellow';
    }
    console.log(backgroundColor);
    return (
        <div className={`${styles.target} ${styles[backgroundColor]}`} ref={drop}>
            {isActive ? 'Release to drop' : 'Drag here'}
        </div>
    )
}

export default Target;
