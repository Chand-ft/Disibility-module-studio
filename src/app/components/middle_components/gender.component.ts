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
//append_imports_end

@Component({
  selector: 'bh-gender',
  templateUrl: './gender.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class genderComponent {
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
      this.sd_7Tj1UcnqiI266ENS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_7Tj1UcnqiI266ENS(bh) {
    try {
      bh = this.sd_MuTVPON3rxyHgr6r(bh);
      //appendnew_next_sd_7Tj1UcnqiI266ENS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7Tj1UcnqiI266ENS');
    }
  }

  //appendnew_flow_genderComponent_start

  sd_MuTVPON3rxyHgr6r(bh) {
    try {
      //appendnew_next_sd_MuTVPON3rxyHgr6r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MuTVPON3rxyHgr6r');
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
  //appendnew_flow_genderComponent_Catch
}
