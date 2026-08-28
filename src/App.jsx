import { Modal } from "./components/modal/Modal";
import { Accordion } from "./components/accordion/Accordion";
import { Tabs } from "./components/tabs/Tabs";


function App() {
  return (
    <main>
      <h1>Week 6 Assignment</h1>

      <Modal>
        <Modal.Trigger>
          Open Modal
        </Modal.Trigger>

        <Modal.Content>
          <Modal.Title>
            Delete Project?
          </Modal.Title>

          <Modal.Description>
            This action cannot be undone.
          </Modal.Description>

          <button type="button">
            Confirm Delete
          </button>

          <Modal.Close>
            Cancel
          </Modal.Close>
        </Modal.Content>
      </Modal>


      <h1>Accordion</h1>

            <Accordion type="single" defaultValue="react">
        <Accordion.Item value="react">
          <Accordion.Trigger>
            What is React?
          </Accordion.Trigger>

          <Accordion.Panel>
            React is a JavaScript library for building user interfaces.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="context">
          <Accordion.Trigger>
            What is Context?
          </Accordion.Trigger>

          <Accordion.Panel>
            Context allows data to be shared with deeply nested
            components.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="hooks">
          <Accordion.Trigger>
            What are Hooks?
          </Accordion.Trigger>

          <Accordion.Panel>
            Hooks allow function components to use React features
            such as state and effects.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Tabs defaultValue="overview">
  <Tabs.List>
    <Tabs.Tab value="overview">
      Overview
    </Tabs.Tab>

    <Tabs.Tab value="settings">
      Settings
    </Tabs.Tab>

    <Tabs.Tab value="activity">
      Activity
    </Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="overview">
    <h2>Overview</h2>
    <p>Overview content.</p>
  </Tabs.Panel>

  <Tabs.Panel value="settings">
    <h2>Settings</h2>
    <p>Settings content.</p>
  </Tabs.Panel>

  <Tabs.Panel value="activity">
    <h2>Activity</h2>
    <p>Activity content.</p>
  </Tabs.Panel>
</Tabs>
    </main>
  );
}

export default App;