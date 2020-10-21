import React, { useState,useCallback } from 'react';
import { TabContext } from './TabContext';
// one way to do it; import child component
import Tab from "./Tab";
import TabPanel from "./TabPanel";

const Tabs = ({ children }) => {
  const [activeId,setActiveId] = useState("a");

  // better since this is memoized
  const handleClick = useCallback((id) => setActiveId(id),[]); // not sure why []

  // ({activeId,handleClick})memoized, will only recompute if [activeId] changes
  const value = React.useMemo(() => ({activeId, handleClick}), [activeId]);
  return(
    // returns child components, but then you need to pass the state with tabContext provider
    <TabContext.Provider value={{activeId, handleClick }}>
      {children} 
    </TabContext.Provider>
  );
}


Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;