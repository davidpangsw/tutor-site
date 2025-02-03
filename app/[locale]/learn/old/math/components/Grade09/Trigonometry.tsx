import React from 'react'
import FlashcardDeck from '../../../utils/Flashcard/FlashcardDeck'
import { usePortfolio } from '../../../utils/Flashcard/FlashcardModel';

const deck = {
  id: 'trigonometry definition (grade 9)',
  label: 'Trigonometry Definition (Grade 9)',
  isNew: true,
  cards: [
    { front: "1", back: "H : Hydrogen" },
  ],
};

const Trigonometry = () => {
  const [portfolio, setPortfolio] = usePortfolio();
  return (
    <div>
      <h1>Trigonometry</h1>
      <p>
        The first challenge of Trigometry is to **recite** the definitions.
        Yes, you need to recite in Maths. It provides you the **cognitive ease** and pleasures to study further topics. The only challenge is: how to make reciting fun and efficient?
        It depends on different students. But usually, a visual trick, together with a flashcard software, would be extremely efficient. Always learn how to learn!
      </p>
      {/* TODO: add the deck into the portfolio, and display using component*/}
      {/* <FlashcardDeck
        portfolio={portfolio}
        setPortfolio={setPortfolio}
        deck={deck}
      /> */}
    </div>
  )
}

export default Trigonometry