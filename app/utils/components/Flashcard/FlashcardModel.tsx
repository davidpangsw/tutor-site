"use client";

/**
 * Supermemo 2 algorithm
 */
import dayjs from "dayjs";
import { ReactElement } from "react";
import { supermemo, SuperMemoGrade, SuperMemoItem } from "supermemo";
import { useLocalStorage } from "@/app/utils/io";

const FLASHCARD_GRADES = [
  { grade: 0, label: 'No idea', explain: 'Complete blackout.' },
  { grade: 1, label: 'Difficult', explain: 'Incorrect response; the correct one remembered.' },
  { grade: 2, label: 'Hard', explain: 'Incorrect response; where the correct one seemed easy to recall.' },
  { grade: 3, label: 'Okay', explain: 'Correct response recalled with serious difficulty.' },
  { grade: 4, label: 'Good', explain: 'Correct response after a hesitation.' },
  { grade: 5, label: 'Easy', explain: 'Perfect response.' },
];


interface FlashcardPortfolioData {
  id: string,
  decks: { [id: string]: FlashcardDeckData },
  settings: FlashcardSettings,
}

interface FlashcardSettings {
  flipMs: number,
  flipBack: boolean,
}

interface FlashcardDeckData {
  id: string, // deck id
  label: string,
  isNew: boolean,
  cards: FlashcardData[],
}

interface FlashcardData {
  front: FlashcardFace;
  back: FlashcardFace;
  dueDate?: string;
  sm?: SuperMemoItem; // interval, repetition, efactor
}

type FlashcardFace = ReactElement | string;

const practice = (data: FlashcardData, grade: SuperMemoGrade) => {
  const { sm } = data;
  const { interval, repetition, efactor } = supermemo(sm!, grade);
  const dueDate = dayjs(Date.now()).add(interval, 'day').toISOString();
  return { ...data, dueDate, sm: { interval, repetition, efactor } } as FlashcardData;
}

const forwardDays = (cards: FlashcardData[], updateDeck: (newDeck: FlashcardDeckData) => void, days: number) => {
  return cards.map((card, index) => {
    return { ...card, dueDate: dayjs(card.dueDate).subtract(days, 'day').toISOString(), }
  });
}

/**
 * TODO: Move this function out (Persistance not related to model)
 * Will use default if not found
 * @param id 
 * @returns 
 */
const usePortfolio = (id: string = 'default'): [FlashcardPortfolioData, (value: FlashcardPortfolioData) => void] => {
  const [portfolio, setPortfolio] = useLocalStorage<FlashcardPortfolioData>(
    `flashcard/portfolio/${id}`,
    {
      id,
      decks: {
        // [defaultDeck.id]: defaultDeck,
      },
      settings: {
        flipMs: 0,
        flipBack: true,
      }
    },
  );

  return [portfolio, setPortfolio];
};

export type {
  FlashcardSettings,
  FlashcardPortfolioData,
  FlashcardDeckData,
  FlashcardData,
  FlashcardFace,
}

export {
  FLASHCARD_GRADES,
  practice,
  forwardDays,
  usePortfolio,
}