"use client";

/**
 * Load a sm2 algorithm deck
 */
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { SuperMemoGrade } from 'supermemo';
import LoadingSpinner from '../LoadingSpinner';
import { Button } from 'react-bootstrap';
import Flashcard from './Flashcard';
import { FlashcardDeckData, FlashcardPortfolioData, forwardDays, practice } from './FlashcardModel';

interface FlashcardDeckProps {
  portfolio: FlashcardPortfolioData,
  setPortfolio: (value: FlashcardPortfolioData) => void,
  deck: FlashcardDeckData,
}

const FlashcardDeck = (props: FlashcardDeckProps) => {
  const { portfolio, setPortfolio, deck } = props;
  const { settings } = portfolio;
  const { id, label, isNew, cards } = deck;

  const [closestCard, setClosestCard] = useState<number | null>(null);
  const updateDeck = (newDeck: FlashcardDeckData) => {
    setPortfolio({
      ...portfolio,
      decks: {
        ...portfolio.decks,
        [deck.id]: newDeck,
      }
    });
  };

  const header = <h1>Deck : {label}</h1>

  // When deck data changes
  useEffect(() => {
    // initialize deck if it is new
    if (isNew) {
      const newCards = cards.map((card) => ({
        front: card.front,
        back: card.back,
        dueDate: dayjs(Date.now()).toISOString(),

        // super memo item
        sm: {
          interval: 0,
          repetition: 0,
          efactor: 2.5,
        }
      }));
      updateDeck({ ...deck, isNew: false, cards: newCards });
      return;
    }

    // set a random due card to display
    if (cards.length > 0) {
      const sortedCards = cards
        .map((card, index) => ({ card, index }))
        .sort((x, y) => dayjs(x.card.dueDate).diff(dayjs(y.card.dueDate)));
      const filteredCards = sortedCards.filter((x) => x.card.dueDate === sortedCards[0].card.dueDate); // what if no card!!???
      const ind = filteredCards[Math.floor(Math.random() * filteredCards.length)].index;
      setClosestCard(ind);
    } else {
      setClosestCard(-1);
    }
  }, [deck]);

  if (isNew) {
    return <div>
      {header}
      <p>Initializng deck...</p>
    </div>;
  }

  if (closestCard === null) {
    return <LoadingSpinner />;
  }

  if (closestCard === -1) {
    return <div>
      {header}
      <p>No card in this deck</p>
    </div>;
  }

  const today = dayjs();
  const card = deck.cards[closestCard];
  if (dayjs(card.dueDate!).isAfter(today)) {
    return <div>
      {header}
      <p>All cards are done for today!</p>
      <p>Next card: {dayjs(card.dueDate).diff(today, 'days') + 1} day(s) later.</p>
      <Button
        onClick={
          () => updateDeck({
            ...deck, cards: forwardDays(deck.cards, updateDeck, 1)
          })
        }>Forward 1 day</Button>
    </div>
  }

  return (
    <div>
      {header}
      <Flashcard
        card={card}
        setGrade={(g: SuperMemoGrade) => {
          const newCards = deck.cards;
          newCards[closestCard] = practice(card, g);
          updateDeck({ ...deck, cards: newCards });
        }}
        settings={{
          flipMs: settings.flipMs,
          flipBack: settings.flipBack,
        }}
      />
    </div>
  );
}

export type { FlashcardDeckData };
export default FlashcardDeck;