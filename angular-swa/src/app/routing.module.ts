import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { FormsPage } from './pages/forms/forms.page';
import { DataPage } from './pages/data/data.page';
import { LayoutsPage } from './pages/layouts/layouts.page';
import { NotificationsPage } from './pages/notifications/notifications.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'forms', component: FormsPage },
  { path: 'data', component: DataPage },
  { path: 'layouts', component: LayoutsPage },
  { path: 'notifications', component: NotificationsPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class RoutingModule {}
