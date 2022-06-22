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
  selector: 'bh-eligibility',
  templateUrl: './eligibility.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class eligibilityComponent {
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
      this.sd_fpocsndKSSIkvyrK(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_fpocsndKSSIkvyrK(bh) {
    try {
      bh = this.sd_r8lmReCUBKlsMbhu(bh);
      //appendnew_next_sd_fpocsndKSSIkvyrK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fpocsndKSSIkvyrK');
    }
  }

  //appendnew_flow_eligibilityComponent_start

  sd_r8lmReCUBKlsMbhu(bh) {
    try {
      this.page.items = [];
      bh = this.sd_PSPP7jGr9UPk5NI0(bh);
      //appendnew_next_sd_r8lmReCUBKlsMbhu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r8lmReCUBKlsMbhu');
    }
  }

  sd_PSPP7jGr9UPk5NI0(bh) {
    try {
      const page = this.page;
      page.items = [
        {
          row1: [
            { icon: 'accessible', text: 'Disability Insurance' },
            { icon: 'personal_injury', text: 'Accidental Insurance' },
            { icon: 'monitor_heart', text: 'Life Insurance' },
          ],
        },
        {
          row2: [
            { icon: 'discount', text: 'Discount Plans' },
            { icon: 'volunteer_activism', text: 'Health Insurance' },
            { icon: 'business_center', text: 'Business Insurance' },
          ],
        },
      ];
      //appendnew_next_sd_PSPP7jGr9UPk5NI0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PSPP7jGr9UPk5NI0');
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
  //appendnew_flow_eligibilityComponent_Catch
}
