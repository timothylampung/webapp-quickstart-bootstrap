import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgbAlertModule, NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

const FLEX_LAYOUT_MODULES: any[] = [
  FlexLayoutModule,
];

const ANGULAR_MODULES: any[] = [
  FormsModule, ReactiveFormsModule,
];

const BOOTSTRAP_MODULES: any[] = [
  NgbCarouselModule,
  NgbAlertModule,
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    ANGULAR_MODULES,
    BOOTSTRAP_MODULES,
    FLEX_LAYOUT_MODULES,
  ],
  declarations: [],
  exports: [
    NgbModule,
    ANGULAR_MODULES,
    BOOTSTRAP_MODULES,
    FLEX_LAYOUT_MODULES,
  ],
  providers: [],
})
export class SharedModule {
}
