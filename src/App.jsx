import { ModalDemo } from "./demos/ModalDemo";
import { AccordionDemo } from "./demos/AccordionDemo";
import { TabsDemo } from "./demos/TabsDemo";

function App() {
  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <h1>Accessible UI Components - Week 6 Assignment</h1>
        </div>
      </header>

      <main className="doc-container">
        <ModalDemo />
        <AccordionDemo />
        <TabsDemo />
      </main>
    </>
  );
}

export default App;
