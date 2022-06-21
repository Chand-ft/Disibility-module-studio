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
  selector: 'bh-base_layout',
  templateUrl: './base_layout.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class base_layoutComponent {
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
      this.sd_iCQjSUXKDPzGNIA0(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_iCQjSUXKDPzGNIA0(bh) {
    try {
      bh.local = { displayedObject: [] };
      bh = this.sd_lDUH7s1A5X2UPApW(bh);
      //appendnew_next_sd_iCQjSUXKDPzGNIA0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iCQjSUXKDPzGNIA0');
    }
  }

  displayFourIcons(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_TtBr0oVhM2W200jK(bh);
      //appendnew_next_displayFourIcons
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MXTPT7GxtzmdSv2r');
    }
  }

  displayDatePicker(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_SHAMiSLwBF0hl8uH(bh);
      //appendnew_next_displayDatePicker
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jGylx1eY26dsGy2n');
    }
  }

  displayEligibility(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_vGVMovbxqKVow60F(bh);
      //appendnew_next_displayEligibility
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TIZD6HJOivpsG444');
    }
  }

  //appendnew_flow_base_layoutComponent_start

  sd_lDUH7s1A5X2UPApW(bh) {
    try {
      bh = this.sd_rmLke8YTR9aFJI6M(bh);
      //appendnew_next_sd_lDUH7s1A5X2UPApW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lDUH7s1A5X2UPApW');
    }
  }

  sd_rmLke8YTR9aFJI6M(bh) {
    try {
      const page = this.page;
      page.displayedObject = [
        { icon: 'home', paragraph: 'i need to protect my income or family' },
        { icon: 'group', paragraph: 'i need to protect my family' },
        {
          icon: 'account balance wallet',
          paragraph: 'i need to protect my income',
        },
      ];
      console.log('three icons', page.displayedObject);
      //appendnew_next_sd_rmLke8YTR9aFJI6M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rmLke8YTR9aFJI6M');
    }
  }

  sd_TtBr0oVhM2W200jK(bh) {
    try {
      const page = this.page;
      page.displayedObject = [
        { icon: 'accessible', paragraph: 'Disability Insurance' },
        { icon: 'airport shuttle', paragraph: 'Accidental Insurance' },
        { icon: 'group add', paragraph: 'Life Insurance' },
        { icon: 'grain', paragraph: 'Discount Plans' },
      ];
      //appendnew_next_sd_TtBr0oVhM2W200jK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TtBr0oVhM2W200jK');
    }
  }

  sd_SHAMiSLwBF0hl8uH(bh) {
    try {
      //appendnew_next_sd_SHAMiSLwBF0hl8uH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SHAMiSLwBF0hl8uH');
    }
  }

  sd_vGVMovbxqKVow60F(bh) {
    try {
      //appendnew_next_sd_vGVMovbxqKVow60F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vGVMovbxqKVow60F');
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
  //appendnew_flow_base_layoutComponent_Catch
}
