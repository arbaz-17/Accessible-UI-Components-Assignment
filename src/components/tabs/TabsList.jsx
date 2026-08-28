import { useRef } from "react";

import { TabsListContext } from "./TabsListContext";

export function TabsList({ children }) {
  const listRef = useRef(null);

  const contextValue = {
    listRef,
  };

  return (
    <TabsListContext.Provider value={contextValue}>
      <div
        ref={listRef}
        role="tablist"
        aria-orientation="horizontal"
      >
        {children}
      </div>
    </TabsListContext.Provider>
  );
}