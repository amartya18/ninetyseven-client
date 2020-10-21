import React from 'react';
import { useTabContext } from './TabContext';


export default function Tab({ children, id }) { 
  const {handleClick} = useTabContext();
  function selectTab() {
    handleClick(id); // passed in function gets called when the tab button is clicked
  }
  return(
    <button onClick={selectTab}>{children}</button>
  );
}