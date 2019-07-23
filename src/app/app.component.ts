import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { STColumn } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  url = `/users?total=100`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '头像', type: 'img', width: 50, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
  // @delon/form
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算'
        }
      }
    },
    required: ['name']
  };
  constructor(public msg: NzMessageService) { }
  submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
