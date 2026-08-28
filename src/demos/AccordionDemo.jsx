import { Accordion } from "../components/accordion/Accordion";

export function AccordionDemo() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <h2>Accordion</h2>
        <p>
          Expandable content supporting both single and multiple
          open-item modes with keyboard navigation.
        </p>
      </div>

      <div className="demo-stack">
        <div className="demo-card">
          <h3>Single Mode</h3>
          <p>
            Only one item can remain open at a time.
          </p>

          <Accordion
            type="single"
            defaultValue="components"
          >
            <Accordion.Item value="components">
              <Accordion.Trigger>
                What are React Components?
              </Accordion.Trigger>

              <Accordion.Panel>
                Components are reusable pieces of UI that
                encapsulate structure, behavior, and presentation.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="props">
              <Accordion.Trigger>
                What are Props?
              </Accordion.Trigger>

              <Accordion.Panel>
                Props allow data to be passed from a parent
                component to its children.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="state">
              <Accordion.Trigger>
                What is State?
              </Accordion.Trigger>

              <Accordion.Panel>
                State is data managed by a component that can
                change over time and trigger re-renders.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="demo-card">
          <h3>Multiple Mode</h3>
          <p>
            Multiple items can remain open at the same time.
          </p>

          <Accordion
            type="multiple"
            defaultValue={["composition"]}
          >
            <Accordion.Item value="composition">
              <Accordion.Trigger>
                Composition
              </Accordion.Trigger>

              <Accordion.Panel>
                Composition allows smaller components to be
                combined while keeping the structure flexible.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="context">
              <Accordion.Trigger>
                Context
              </Accordion.Trigger>

              <Accordion.Panel>
                Context allows shared values to reach deeply
                nested descendants without prop drilling.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="hooks">
              <Accordion.Trigger>
                Custom Hooks
              </Accordion.Trigger>

              <Accordion.Panel>
                Custom hooks allow reusable React-specific
                behavior to be extracted from components.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
}