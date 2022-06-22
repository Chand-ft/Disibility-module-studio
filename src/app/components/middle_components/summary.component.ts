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
  selector: 'bh-summary',
  templateUrl: './summary.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class summaryComponent {
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
      this.sd_3PyCMzUzwALEhUzC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_3PyCMzUzwALEhUzC(bh) {
    try {
      bh = this.sd_fxgNZeeiEz2riAIY(bh);
      //appendnew_next_sd_3PyCMzUzwALEhUzC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3PyCMzUzwALEhUzC');
    }
  }

  //appendnew_flow_summaryComponent_start

  sd_fxgNZeeiEz2riAIY(bh) {
    try {
      this.page.items = [];
      bh = this.sd_c1yUlom12U6bZRi8(bh);
      //appendnew_next_sd_fxgNZeeiEz2riAIY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fxgNZeeiEz2riAIY');
    }
  }

  sd_c1yUlom12U6bZRi8(bh) {
    try {
      const page = this.page;
      page.items = [
        { category: 'Protection type', selected: 'empty-for-now' },
        { category: 'Insurance type', selected: 'empty-for-now' },
        { category: 'Date of birth', selected: 'empty-for-now' },
        { category: 'Gender at birth', selected: 'empty-for-now' },
        { category: 'Maternity leave coverage?', selected: 'empty-for-now' },
        { category: 'Occupation category', selected: 'empty-for-now' },
        {
          category:
            'Are you employed full time and work at least 30 hours per week?',
          selected: 'empty-for-now',
        },
        { category: 'Monthly gross income', selected: 'empty-for-now' },
        { category: 'Government employee', selected: 'empty-for-now' },
        { category: 'Do you use nicotine', selected: 'empty-for-now' },
      ];
      //appendnew_next_sd_c1yUlom12U6bZRi8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c1yUlom12U6bZRi8');
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
  //appendnew_flow_summaryComponent_Catch
}
