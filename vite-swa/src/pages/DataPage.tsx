import React from 'react';
import Sidebar from '../components/Sidebar';
import './shared.css';
import './DataPage.css';

const DataPage: React.FC = () => {
  return (
    <Sidebar>
      <div className="page-container">
        <h2>Data Display Components</h2>
        <p className="page-description">Tables, lists, and data visualization components for displaying structured information.</p>

        <section className="component-section">
          <h3>Employee Directory</h3>
          <xds-table>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Alice Johnson</td>
                  <td>Senior Developer</td>
                  <td>Engineering</td>
                  <td>New York</td>
                  <td><xds-badge variant="success">Active</xds-badge></td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Bob Smith</td>
                  <td>Product Manager</td>
                  <td>Product</td>
                  <td>San Francisco</td>
                  <td><xds-badge variant="success">Active</xds-badge></td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Carol White</td>
                  <td>UX Designer</td>
                  <td>Design</td>
                  <td>London</td>
                  <td><xds-badge variant="warning">On Leave</xds-badge></td>
                </tr>
                <tr>
                  <td>004</td>
                  <td>David Brown</td>
                  <td>DevOps Engineer</td>
                  <td>Engineering</td>
                  <td>Berlin</td>
                  <td><xds-badge variant="success">Active</xds-badge></td>
                </tr>
                <tr>
                  <td>005</td>
                  <td>Emma Davis</td>
                  <td>Sales Director</td>
                  <td>Sales</td>
                  <td>Tokyo</td>
                  <td><xds-badge variant="error">Offline</xds-badge></td>
                </tr>
              </tbody>
            </table>
          </xds-table>
        </section>

        <section className="component-section">
          <h3>Project Statistics</h3>
          <div className="stats-grid">
            <xds-card>
              <div slot="header">Total Projects</div>
              <div slot="content">
                <div className="stat-number">24</div>
                <xds-badge variant="success">+12% this month</xds-badge>
              </div>
            </xds-card>
            <xds-card>
              <div slot="header">Active Users</div>
              <div slot="content">
                <div className="stat-number">1,248</div>
                <xds-badge variant="info">+5% this week</xds-badge>
              </div>
            </xds-card>
            <xds-card>
              <div slot="header">Completion Rate</div>
              <div slot="content">
                <div className="stat-number">87%</div>
                <xds-badge variant="warning">-2% this month</xds-badge>
              </div>
            </xds-card>
            <xds-card>
              <div slot="header">Revenue</div>
              <div slot="content">
                <div className="stat-number">$52,400</div>
                <xds-badge variant="success">+18% this quarter</xds-badge>
              </div>
            </xds-card>
          </div>
        </section>

        <section className="component-section">
          <h3>Project Progress</h3>
          <div className="progress-list">
            <div className="progress-item">
              <div className="progress-header">
                <span>Website Redesign</span>
                <span>85%</span>
              </div>
              <xds-progress-bar value="85" max="100"></xds-progress-bar>
            </div>
            <div className="progress-item">
              <div className="progress-header">
                <span>Mobile App Development</span>
                <span>62%</span>
              </div>
              <xds-progress-bar value="62" max="100"></xds-progress-bar>
            </div>
            <div className="progress-item">
              <div className="progress-header">
                <span>API Integration</span>
                <span>45%</span>
              </div>
              <xds-progress-bar value="45" max="100"></xds-progress-bar>
            </div>
            <div className="progress-item">
              <div className="progress-header">
                <span>Testing & QA</span>
                <span>30%</span>
              </div>
              <xds-progress-bar value="30" max="100"></xds-progress-bar>
            </div>
          </div>
        </section>
      </div>
    </Sidebar>
  );
};

export default DataPage;
