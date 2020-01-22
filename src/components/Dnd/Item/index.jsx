import React from 'react';
import styles from './style.module.scss';
import { useDrag } from 'react-dnd';

const Item = ({item}) => {
    const [{ isDragging }, drag] = useDrag({ 
        item: { item, type: 'item' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                console.log(`You dropped ${item.item} into ${dropResult.name}`)
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        }),
    })
    return (
        <div className={styles.item} ref={drag}>{item}</div>
    )
}

export default Item;