import { TabsContext } from "./TabsContext";

export function TabsProvider({ value, children }) {
  return (
    <TabsContext.Provider value={value}>
      {children}
    </TabsContext.Provider>
  );
}