import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  DateTimePickerModule
} from 'ngx-openmrs-formentry/dist/ngx-formentry/';
import { EtlApi } from '../etl-api/etl-api.module';
import { DataListsModule } from '../shared/data-lists/data-lists.module';

@NgModule({
  imports: [
    DateTimePickerModule,
    EtlApi,
    DataListsModule,
    CommonModule,
    FormsModule
  ],
  exports: [],
  declarations: [],
  providers: [],

})
export class OncologyProgramModule { }
