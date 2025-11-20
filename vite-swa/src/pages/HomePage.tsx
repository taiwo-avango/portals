import React from 'react';
import Sidebar from '../components/Sidebar';
import './shared.css';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <Sidebar>
      <div className="page-container">
        <h2>XDS Components Showcase</h2>
        <p className="page-description">Explore the comprehensive Munich Re XDS Design System components. This showcase demonstrates the full range of UI elements available for building modern web applications.</p>

        {/* Buttons Section */}
        <section className="component-section">
          <h3>Buttons</h3>
          <div className="button-group">
            <xds-button variant="primary">Primary Button</xds-button>
            <xds-button variant="secondary">Secondary Button</xds-button>
            <xds-button variant="tertiary">Tertiary Button</xds-button>
            <xds-button variant="primary" disabled>Disabled Button</xds-button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="component-section">
          <h3>Cards</h3>
          <div className="card-group">
            <xds-card>
              <div slot="header">Card Title</div>
              <div slot="content">
                <p>This is a sample card component with header and content slots.</p>
                <p>Cards are great for organizing information in digestible chunks.</p>
              </div>
            </xds-card>
            <xds-card>
              <div slot="header">Another Card</div>
              <div slot="content">
                <p>Multiple cards can be displayed side by side to create layouts.</p>
              </div>
            </xds-card>
          </div>
        </section>

        {/* Alert Section */}
        <section className="component-section">
          <h3>Alerts</h3>
          <xds-alert type="info" icon="info">
            This is an informational alert message.
          </xds-alert>
          <xds-alert type="success" icon="check">
            Operation completed successfully!
          </xds-alert>
          <xds-alert type="warning" icon="warning">
            Please review this warning message.
          </xds-alert>
          <xds-alert type="error" icon="error">
            An error has occurred.
          </xds-alert>
        </section>

        {/* Input Fields Section */}
        <section className="component-section">
          <h3>Input Fields</h3>
          <div className="input-group">
            <xds-input label="Name" placeholder="Enter your name"></xds-input>
            <xds-input label="Email" type="email" placeholder="Enter your email"></xds-input>
            <xds-textarea label="Description" placeholder="Enter description" rows="4"></xds-textarea>
          </div>
        </section>

        {/* Checkbox & Radio Section */}
        <section className="component-section">
          <h3>Checkboxes & Radio Buttons</h3>
          <div className="form-controls">
            <xds-checkbox label="Accept terms and conditions"></xds-checkbox>
            <xds-checkbox label="Subscribe to newsletter"></xds-checkbox>
            <xds-radio-group label="Select an option">
              <xds-radio name="option" value="1" label="Option 1"></xds-radio>
              <xds-radio name="option" value="2" label="Option 2"></xds-radio>
              <xds-radio name="option" value="3" label="Option 3"></xds-radio>
            </xds-radio-group>
          </div>
        </section>

        {/* Badge Section */}
        <section className="component-section">
          <h3>Badges</h3>
          <div className="badge-group">
            <xds-badge variant="default">Default</xds-badge>
            <xds-badge variant="success">Success</xds-badge>
            <xds-badge variant="warning">Warning</xds-badge>
            <xds-badge variant="error">Error</xds-badge>
            <xds-badge variant="info">Info</xds-badge>
          </div>
        </section>

        {/* Progress Bar Section */}
        <section className="component-section">
          <h3>Progress Indicators</h3>
          <xds-progress-bar value="25" max="100" label="25% Complete"></xds-progress-bar>
          <xds-progress-bar value="50" max="100" label="50% Complete"></xds-progress-bar>
          <xds-progress-bar value="75" max="100" label="75% Complete"></xds-progress-bar>
        </section>

        {/* Tabs Section */}
        <section className="component-section">
          <h3>Tabs</h3>
          <xds-tabs>
            <xds-tab slot="tab" label="Overview" active>
              <div>Overview content - This tab shows general information about the application.</div>
            </xds-tab>
            <xds-tab slot="tab" label="Details">
              <div>Details content - More detailed information can be found here.</div>
            </xds-tab>
            <xds-tab slot="tab" label="Settings">
              <div>Settings content - Configure your preferences in this section.</div>
            </xds-tab>
          </xds-tabs>
        </section>

        {/* Table Section */}
        <section className="component-section">
          <h3>Data Table</h3>
          <xds-table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>Developer</td>
                  <td>Engineering</td>
                  <td><xds-badge variant="success">Active</xds-badge></td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>Designer</td>
                  <td>Design</td>
                  <td><xds-badge variant="success">Active</xds-badge></td>
                </tr>
                <tr>
                  <td>Bob Johnson</td>
                  <td>Manager</td>
                  <td>Operations</td>
                  <td><xds-badge variant="warning">Away</xds-badge></td>
                </tr>
              </tbody>
            </table>
          </xds-table>
        </section>
      </div>
    </Sidebar>
  );
};

export default HomePage;
