import { Tabs } from "../components/tabs/Tabs";

export function TabsDemo() {
  return (
    <section className="doc-section">
      <div className="doc-section-header">
        <h2>Tabs</h2>
        <p>
          A reusable tab system with automatic activation,
          keyboard navigation, and ARIA relationships.
        </p>
      </div>

      <div className="demo-card">
        <h3>Project Dashboard</h3>
        <p>
          Navigate between different sections of the project.
        </p>

        <Tabs defaultValue="overview">
          <Tabs.List>
            <Tabs.Tab value="overview">
              Overview
            </Tabs.Tab>

            <Tabs.Tab value="tasks">
              Tasks
            </Tabs.Tab>

            <Tabs.Tab value="team">
              Team
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview">
            <h3>Overview</h3>
            <p>
              The project is progressing well with most milestones
              currently on schedule.
            </p>
          </Tabs.Panel>

          <Tabs.Panel value="tasks">
            <h3>Tasks</h3>
            <p>
              18 tasks are completed, 7 are in progress,
              and 3 remain.
            </p>
          </Tabs.Panel>

          <Tabs.Panel value="team">
            <h3>Team</h3>
            <p>
              5 developers and 2 designers are currently
              assigned to this project.
            </p>
          </Tabs.Panel>
        </Tabs>
      </div>
    </section>
  );
}