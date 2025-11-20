import React from 'react';
import Sidebar from '../components/Sidebar';
import './shared.css';
import './NotificationsPage.css';

const NotificationsPage: React.FC = () => {
  return (
    <Sidebar>
      <div className="page-container">
        <h2>Notifications & Alerts</h2>
        <p className="page-description">Alert messages, badges, and notification components for user feedback.</p>

        <section className="component-section">
          <h3>Alert Messages</h3>
          <div className="alerts-container">
            <xds-alert variant="success">
              <strong>Success!</strong> Your changes have been saved successfully.
            </xds-alert>
            <xds-alert variant="info">
              <strong>Information:</strong> A system update is scheduled for tonight at 2 AM.
            </xds-alert>
            <xds-alert variant="warning">
              <strong>Warning:</strong> Your session will expire in 5 minutes.
            </xds-alert>
            <xds-alert variant="error">
              <strong>Error:</strong> Failed to connect to the server. Please try again.
            </xds-alert>
          </div>
        </section>

        <section className="component-section">
          <h3>Badge Indicators</h3>
          <div className="badges-demo">
            <div className="badge-item">
              <span>Notifications</span>
              <xds-badge variant="error">5</xds-badge>
            </div>
            <div className="badge-item">
              <span>Messages</span>
              <xds-badge variant="info">12</xds-badge>
            </div>
            <div className="badge-item">
              <span>Tasks</span>
              <xds-badge variant="warning">8</xds-badge>
            </div>
            <div className="badge-item">
              <span>Completed</span>
              <xds-badge variant="success">23</xds-badge>
            </div>
          </div>
          <div className="badges-demo">
            <xds-badge>Default</xds-badge>
            <xds-badge variant="primary">Primary</xds-badge>
            <xds-badge variant="success">Success</xds-badge>
            <xds-badge variant="warning">Warning</xds-badge>
            <xds-badge variant="error">Error</xds-badge>
            <xds-badge variant="info">Info</xds-badge>
          </div>
        </section>

        <section className="component-section">
          <h3>Notification Center</h3>
          <div className="notifications-list">
            <xds-card>
              <div slot="content">
                <div className="notification-item">
                  <div className="notification-icon success">
                    <xds-icon name="check-circle"></xds-icon>
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">Deployment Successful</div>
                    <div className="notification-text">Your application has been deployed to production.</div>
                    <div className="notification-time">2 minutes ago</div>
                  </div>
                </div>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <div className="notification-item">
                  <div className="notification-icon info">
                    <xds-icon name="information-circle"></xds-icon>
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">New Update Available</div>
                    <div className="notification-text">Version 2.4.0 is now available for download.</div>
                    <div className="notification-time">1 hour ago</div>
                  </div>
                </div>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <div className="notification-item">
                  <div className="notification-icon warning">
                    <xds-icon name="warning"></xds-icon>
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">High CPU Usage</div>
                    <div className="notification-text">Server load is above 80%. Consider scaling resources.</div>
                    <div className="notification-time">3 hours ago</div>
                  </div>
                </div>
              </div>
            </xds-card>
            <xds-card>
              <div slot="content">
                <div className="notification-item">
                  <div className="notification-icon error">
                    <xds-icon name="close-circle"></xds-icon>
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">Build Failed</div>
                    <div className="notification-text">The latest build encountered errors. Check the logs for details.</div>
                    <div className="notification-time">Yesterday</div>
                  </div>
                </div>
              </div>
            </xds-card>
          </div>
        </section>

        <section className="component-section">
          <h3>Progress Notifications</h3>
          <div className="progress-notifications">
            <xds-card>
              <div slot="header">File Upload</div>
              <div slot="content">
                <div className="progress-info">
                  <span>document.pdf</span>
                  <span>75%</span>
                </div>
                <xds-progress-bar value="75" max="100"></xds-progress-bar>
              </div>
            </xds-card>
            <xds-card>
              <div slot="header">Data Sync</div>
              <div slot="content">
                <div className="progress-info">
                  <span>Synchronizing...</span>
                  <span>100%</span>
                </div>
                <xds-progress-bar value="100" max="100"></xds-progress-bar>
                <xds-badge variant="success" style="margin-top: 10px;">Complete</xds-badge>
              </div>
            </xds-card>
          </div>
        </section>
      </div>
    </Sidebar>
  );
};

export default NotificationsPage;
