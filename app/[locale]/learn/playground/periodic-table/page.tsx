"use client";

import React, { useEffect, useState } from 'react'

import { FlashcardDeckData, usePortfolio } from "@/app/utils/components/Flashcard/FlashcardModel";
import FlashcardDeck from '@/app/utils/components/Flashcard/FlashcardDeck';

const defaultDeck: FlashcardDeckData = {
  id: 'periodic table',
  label: 'Periodic Table',
  isNew: true,
  cards: [
    { front: "1", back: "H : Hydrogen" },
    { front: "2", back: "He : Helium" },
    { front: "3", back: "Li : Lithium" },
    { front: "4", back: "Be : Beryllium" },
    { front: "5", back: "B : Boron" },
    { front: "6", back: "C : Carbon" },
    { front: "7", back: "N : Nitrogen" },
    { front: "8", back: "O : Oxygen" },
    { front: "9", back: "F : Fluorine" },
    { front: "10", back: "Ne : Neon" },
    { front: "11", back: "Na : Sodium" },
    { front: "12", back: "Mg : Magnesium" },
    { front: "13", back: "Al : Aluminum" },
    { front: "14", back: "Si : Silicon" },
    { front: "15", back: "P : Phosphorus" },
    { front: "16", back: "S : Sulfur" },
    { front: "17", back: "Cl : Chlorine" },
    { front: "18", back: "Ar : Argon" },
    { front: "19", back: "K : Potassium" },
    { front: "20", back: "Ca : Calcium" },
  ]
};

const PeriodicTablePage = () => {
  const [portfolio, setPortfolio] = usePortfolio();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures useLocalStorage runs only on the client
  }, []);

  if (!isClient) {
    return null; // You can return a loading state or nothing during SSR
  }


  let deck = null;
  if (Object.keys(portfolio.decks).includes(defaultDeck.id)) {
    deck = portfolio.decks[defaultDeck.id];
  } else {
    deck = JSON.parse(JSON.stringify(defaultDeck)) as FlashcardDeckData;
    portfolio.decks[deck.id] = deck;
  }
  return (
    <div>
      <FlashcardDeck
        {...{ portfolio, setPortfolio, deck }}
      />
    </div>
  )
}

export default PeriodicTablePage