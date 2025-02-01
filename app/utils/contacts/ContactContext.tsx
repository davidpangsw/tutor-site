"use client";
import React, { createContext, useState, ReactNode } from 'react';
import { IContact, CONTACTS } from './config';

interface ContactContextProps {
  contacts: IContact;
  setContacts: React.Dispatch<React.SetStateAction<IContact>>;
}

const ContactContext = createContext<ContactContextProps | undefined>(undefined);

const ContactProvider = ({ children }: { children: ReactNode }) => {
  // console.log(CONTACTS);
  const [contacts, setContacts] = useState<IContact>(CONTACTS);

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
