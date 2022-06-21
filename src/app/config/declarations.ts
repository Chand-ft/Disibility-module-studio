import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-eligibilityComponent
import { eligibilityComponent } from '../components/middle_components/eligibility.component';
//CORE_REFERENCE_IMPORT-date_pickerComponent
import { date_pickerComponent } from '../components/middle_components/date_picker.component';
//CORE_REFERENCE_IMPORT-three_iconsComponent
import { three_iconsComponent } from '../components/middle_components/three_icons.component';
//CORE_REFERENCE_IMPORT-four_iconsComponent
import { four_iconsComponent } from '../components/middle_components/four_icons.component';
//CORE_REFERENCE_IMPORT-footerComponent
import { footerComponent } from '../components/inside_base/footer.component';
//CORE_REFERENCE_IMPORT-stepperComponent
import { stepperComponent } from '../components/inside_base/stepper.component';
//CORE_REFERENCE_IMPORT-navBarComponent
import { navBarComponent } from '../components/inside_base/navBar.component';
//CORE_REFERENCE_IMPORT-base_layoutComponent
import { base_layoutComponent } from '../components/base_layout.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-eligibilityComponent
  eligibilityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-date_pickerComponent
  date_pickerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-three_iconsComponent
  three_iconsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-four_iconsComponent
  four_iconsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerComponent
  footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-stepperComponent
  stepperComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navBarComponent
  navBarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-base_layoutComponent
  base_layoutComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'home', component: base_layoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
