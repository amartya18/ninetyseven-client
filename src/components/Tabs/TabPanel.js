import React from 'react';
import { useTabContext } from './TabContext';

export default function TabPanel({ children, id }) {
  const {activeId} = useTabContext();
  return(
    // if activeId equals to children's id then display
    <>
      {activeId===id && children}
    </>
  );
}