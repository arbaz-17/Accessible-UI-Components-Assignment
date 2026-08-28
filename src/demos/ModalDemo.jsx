import { Modal } from "../components/modal/Modal";

export function ModalDemo() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <h2>Modal</h2>
        <p>
          A reusable dialog with Escape handling, focus management,
          focus restoration, and ARIA semantics.
        </p>
      </div>

      <div className="demo-grid">
        <div className="demo-card">
          <h3>Delete Confirmation</h3>
          <p>
            A confirmation dialog for a destructive action.
          </p>

          <Modal>
            <Modal.Trigger>
              Delete Project
            </Modal.Trigger>

            <Modal.Content>
              <Modal.Title>
                Delete Project?
              </Modal.Title>

              <Modal.Description>
                This action cannot be undone. All project data
                will be permanently removed.
              </Modal.Description>

              <div className="modal-actions">
                <Modal.Close>
                  Cancel
                </Modal.Close>

                <button
                  className="btn-primary"
                  type="button"
                >
                  Confirm Delete
                </button>
              </div>
            </Modal.Content>
          </Modal>
        </div>

        <div className="demo-card">
          <h3>Project Details</h3>
          <p>
            An informational dialog containing structured project
            information.
          </p>

          <Modal>
            <Modal.Trigger>
              View Project
            </Modal.Trigger>

            <Modal.Content>
              <Modal.Title>
                Project Details
              </Modal.Title>

              <Modal.Description>
                Overview of the current project.
              </Modal.Description>

              <div className="info-list">
                <p>
                  <strong>Status:</strong> In Progress
                </p>

                <p>
                  <strong>Priority:</strong> High
                </p>

                <p>
                  <strong>Owner:</strong> Development Team
                </p>

                <p>
                  <strong>Due Date:</strong> September 15
                </p>
              </div>

              <div className="modal-actions">
                <Modal.Close>
                  Close
                </Modal.Close>
              </div>
            </Modal.Content>
          </Modal>
        </div>
      </div>
    </section>
  );
}