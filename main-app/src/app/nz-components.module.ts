import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzCheckboxModule,
    NzFormModule,
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
  ],
})
export class NzComponentsModule {}
