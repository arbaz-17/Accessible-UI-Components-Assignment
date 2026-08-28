import { Modal } from "./components/modal/Modal";

function App() {
  return (
    <div>
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

          <Modal.Close>
            Cancel
          </Modal.Close>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default App;