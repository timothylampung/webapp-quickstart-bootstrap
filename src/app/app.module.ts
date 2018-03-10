import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';
import {DashboardPage} from './dashboard/dashboard.page';
import {AssetCategoryPipe} from './dashboard/asset-category.pipe';
import {HeaderComponent} from './main/components/header/header.component';
import {SidebarComponent} from './main/components/sidebar/sidebar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import { UsersComponent } from './users/users.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
// showing relevant configuration only
@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    AssetDetailPage,
    MainLayout,
    HeaderComponent,
    SidebarComponent,
    AssetCategoryPipe,
    UsersComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),  ],
  providers: [AssetService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
