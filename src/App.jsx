import { Modal } from "./components/modal/Modal";
import { Accordion } from "./components/accordion/Accordion";
import { Tabs } from "./components/tabs/Tabs";

function App() {
  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <h1>Accessible UI Components - Week 6 Assignment</h1>
        </div>
      </header>

      <main className="doc-container">
        
        <section className="doc-section">
          <div className="doc-section-header">
            <h2>Modal</h2>
            <p>A dialog that interrupts the user with important content and expects a response.</p>
          </div>
          
          <div className="component-preview">
            <Modal>
              <Modal.Trigger>
                Open Modal
              </Modal.Trigger>

              <Modal.Content>
                <Modal.Title>
                  Delete Project?
                </Modal.Title>

                <Modal.Description>
                  This action cannot be undone. All project data will be permanently removed.
                </Modal.Description>
                
                <div className="modal-actions">
                  <Modal.Close>
                    Cancel
                  </Modal.Close>
                  <button className="btn-primary" type="button">
                    Confirm Delete
                  </button>
                </div>
              </Modal.Content>
            </Modal>
          </div>
        </section>

        <section className="doc-section">
          <div className="doc-section-header">
            <h2>Accordion</h2>
            <p>A vertically stacked set of interactive headings that each reveal a section of content.</p>
          </div>
          
          <div className="component-preview">
            <Accordion type="single" defaultValue="react">
              <Accordion.Item value="react">
                <Accordion.Trigger>What is React?</Accordion.Trigger>
                <Accordion.Panel>React is a JavaScript library for building user interfaces.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="context">
                <Accordion.Trigger>What is Context?</Accordion.Trigger>
                <Accordion.Panel>Context allows data to be shared with deeply nested components.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="hooks">
                <Accordion.Trigger>What are Hooks?</Accordion.Trigger>
                <Accordion.Panel>Hooks allow function components to use React features such as state and effects.</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>

        <section className="doc-section">
          <div className="doc-section-header">
            <h2>Tabs</h2>
            <p>A set of layered sections of content—known as tab panels—that are displayed one at a time.</p>
          </div>
          
          <div className="component-preview">
            <Tabs defaultValue="overview">
              <Tabs.List>
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="settings">Settings</Tabs.Tab>
                <Tabs.Tab value="activity">Activity</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="overview">
                <p>Overview content goes here.</p>
              </Tabs.Panel>

              <Tabs.Panel value="settings">
                <p>Settings content goes here.</p>
              </Tabs.Panel>

              <Tabs.Panel value="activity">
                <p>Activity content goes here.</p>
              </Tabs.Panel>
            </Tabs>
          </div>
        </section>

      </main>
    </>
  );
}

export default App;