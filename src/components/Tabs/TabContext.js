import { createContext,useContext } from 'react';

// states that wants to be shared with Tabs children
// should be seperated in its own file 
export const TabContext = createContext({
  activeId: "",
  handleClick: () => {} // any function that is passed in will be executed by the component(?)
});

// keep in mind export default and export is different
export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    // throws an error if child component is not inside the parent component
    throw new Error(
      `Tabs compound components cannot be rendered outside the Tab component 🛠`
    )
  }
  return context;
}