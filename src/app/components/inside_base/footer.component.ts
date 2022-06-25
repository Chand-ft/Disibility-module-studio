/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-footer',
  templateUrl: './footer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class footerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_NrFMaEZ9G67OqXAO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_NrFMaEZ9G67OqXAO(bh) {
    try {
      bh = this.sd_wplBT9R18VEwLdQg(bh);
      //appendnew_next_sd_NrFMaEZ9G67OqXAO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NrFMaEZ9G67OqXAO');
    }
  }

  date_pick_route(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_yyfh1E3aYSa8uQN9(bh);
      //appendnew_next_date_pick_route
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4znlrscan7ZhOlgA');
    }
  }

  //appendnew_flow_footerComponent_start

  sd_wplBT9R18VEwLdQg(bh) {
    try {
      this.page.current_page = 'three_icons';
      //appendnew_next_sd_wplBT9R18VEwLdQg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wplBT9R18VEwLdQg');
    }
  }

  sd_yyfh1E3aYSa8uQN9(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.current_page,
          'three_icons',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_70LNGVCwEIsExtNO(bh);
      } else if (
        this.sdService.operators['eq'](
          this.page.current_page,
          'four_icons',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_I3YNx1metUjpojd8(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yyfh1E3aYSa8uQN9');
    }
  }

  async sd_70LNGVCwEIsExtNO(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/four');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_70LNGVCwEIsExtNO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_70LNGVCwEIsExtNO');
    }
  }

  async sd_I3YNx1metUjpojd8(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/date');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_I3YNx1metUjpojd8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_I3YNx1metUjpojd8');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_footerComponent_Catch
}
