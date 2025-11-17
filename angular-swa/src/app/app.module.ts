import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomePage } from "./pages/home/home.page";
import { FormsPage } from "./pages/forms/forms.page";
import { DataPage } from "./pages/data/data.page";
import { LayoutsPage } from "./pages/layouts/layouts.page";
import { NotificationsPage } from "./pages/notifications/notifications.page";
import { RoutingModule } from "./routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomePage,
    FormsPage,
    DataPage,
    LayoutsPage,
    NotificationsPage
  ],
  imports: [RoutingModule, BrowserModule],
  bootstrap: [AppComponent],
  // Add the CUSTOM_ELEMENTS_SCHEMA to the module's schema
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
