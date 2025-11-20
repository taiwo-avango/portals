import React from 'react';
import Sidebar from '../components/Sidebar';
import './shared.css';
import './LayoutsPage.css';

const LayoutsPage: React.FC = () => {
  return (
    <Sidebar>
      <div className="page-container">
        <h2>Layout Components</h2>
        <p className="page-description">Cards, containers, and layout utilities for organizing content.</p>

        <section className="component-section">
          <h3>Card Layouts</h3>
          <div className="layout-grid">
            <xds-card>
              <div slot="header">Simple Card</div>
              <div slot="content">
                <p>This is a basic card with header and content.</p>
                <xds-button>Action</xds-button>
              </div>
            </xds-card>
            <xds-card>
              <div slot="header">Featured Content</div>
              <div slot="content">
                <p>Cards are versatile containers for displaying information.</p>
                <xds-button variant="primary">Learn More</xds-button>
              </div>
            </xds-card>
            <xds-card>
              <div slot="header">Statistics</div>
              <div slot="content">
                <div className="card-stat">
                  <div className="stat-value">42</div>
                  <div className="stat-label">Active Projects</div>
                </div>
              </div>
            </xds-card>
          </div>
        </section>

        <section className="component-section">
          <h3>Feature Grid</h3>
          <div className="feature-grid">
            <xds-card>
              <div slot="content">
                <xds-icon name="check-circle" size="large"></xds-icon>
                <h4>Easy to Use</h4>
                <p>Intuitive interface designed for productivity.</p>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <xds-icon name="lightning" size="large"></xds-icon>
                <h4>Fast Performance</h4>
                <p>Optimized for speed and efficiency.</p>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <xds-icon name="shield" size="large"></xds-icon>
                <h4>Secure</h4>
                <p>Enterprise-grade security built in.</p>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <xds-icon name="globe" size="large"></xds-icon>
                <h4>Global Reach</h4>
                <p>Available in multiple regions worldwide.</p>
              </div>
            </xds-card>
          </div>
        </section>

        <section className="component-section">
          <h3>Tabbed Layout</h3>
          <xds-tabs>
            <xds-tab label="Overview" active>
              <div className="tab-content">
                <h4>Overview Information</h4>
                <p>This is the overview tab content. Tabs are useful for organizing related content into separate views.</p>
                <xds-card>
                  <div slot="header">Quick Stats</div>
                  <div slot="content">
                    <p>Users: 1,248 | Projects: 24 | Tasks: 156</p>
                  </div>
                </xds-card>
              </div>
            </xds-tab>
            <xds-tab label="Details">
              <div className="tab-content">
                <h4>Detailed Information</h4>
                <p>This tab contains more detailed information and specifications.</p>
              </div>
            </xds-tab>
            <xds-tab label="Settings">
              <div className="tab-content">
                <h4>Settings Panel</h4>
                <p>Configure your preferences and options here.</p>
              </div>
            </xds-tab>
          </xds-tabs>
        </section>

        <section className="component-section">
          <h3>Responsive Grid</h3>
          <div className="responsive-grid">
            <xds-card>
              <div slot="content">
                <h4>Column 1</h4>
                <p>Responsive grids adapt to different screen sizes.</p>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <h4>Column 2</h4>
                <p>Content flows naturally across the layout.</p>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <h4>Column 3</h4>
                <p>Maintains readability on all devices.</p>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <h4>Column 4</h4>
                <p>Optimized for mobile and desktop.</p>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <h4>Column 5</h4>
                <p>Flexible and customizable layouts.</p>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <h4>Column 6</h4>
                <p>Perfect for dashboards and reports.</p>
              </div>
            </xds-card>
          </div>
        </section>
      </div>
    </Sidebar>
  );
};

export default LayoutsPage;
