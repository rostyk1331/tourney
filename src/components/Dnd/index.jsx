import React from 'react';
import Item from './Item';
import Card from './Card';
import Target from './Target';
import styles from './style.module.scss';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import {useState, useCallback} from 'react';
import update from 'immutability-helper';

const items = [1, 2, 3, 4, 5];

const Dnd = () => {
    const [cards, setCards] = useState([
        {
          id: 1,
          text: 'Write a cool JS library',
        },
        {
          id: 2,
          text: 'Make it generic enough',
        },
        {
          id: 3,
          text: 'Write README',
        },
        {
          id: 4,
          text: 'Create some examples',
        },
        {
          id: 5,
          text:
            'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
          id: 6,
          text: '???',
        },
        {
          id: 7,
          text: 'PROFIT',
        },
      ])
      const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
          const dragCard = cards[dragIndex]
          setCards(
            update(cards, {
              $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
              ],
            }),
          )
        },
        [cards],
      )
      const renderCard = (card, index) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        )
      }
    return (
        <DndProvider backend={Backend}>
            <div className={styles.dnd}>
                <div>
                {items.map(item => <Item item={item}/>)}
                </div>
                <Target/>
            </div>
            <div>{cards.map((card, i) => renderCard(card, i))}</div>
        </DndProvider>
    )
}

export default Dnd;