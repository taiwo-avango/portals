import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="page-wrapper" dir="ltr">
      <xds-sidebar side="left" side-width="200px" max-width="" content-min="50%" space="1rem" flexible-width="">
        <xds-sidenav slot="sidebar" open="true" navigation-width="200px">
          <xds-sidenav-item>
            <a href="/">
              <xds-sidenav-item-content icon="library" label="Overview" is-link="true"></xds-sidenav-item-content>
            </a>
          </xds-sidenav-item>
          <xds-sidenav-item>
            <a href="/forms">
              <xds-sidenav-item-content icon="edit" label="Forms" is-link="true"></xds-sidenav-item-content>
            </a>
          </xds-sidenav-item>
          <xds-sidenav-item>
            <a href="/data">
              <xds-sidenav-item-content icon="table" label="Data" is-link="true"></xds-sidenav-item-content>
            </a>
          </xds-sidenav-item>
          <xds-sidenav-item>
            <a href="/layouts">
              <xds-sidenav-item-content icon="environment" label="Layouts" is-link="true"></xds-sidenav-item-content>
            </a>
          </xds-sidenav-item>
          <xds-sidenav-item>
            <a href="/notifications">
              <xds-sidenav-item-content icon="bell" label="Notifications" is-link="true"></xds-sidenav-item-content>
            </a>
          </xds-sidenav-item>
        </xds-sidenav>
        <div className="content-area">
          {children}
        </div>
      </xds-sidebar>
    </div>
  );
};

export default Sidebar;
