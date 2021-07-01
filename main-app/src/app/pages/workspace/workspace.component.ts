import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../../service/workspace.service';
import { SystemRoute } from '../../interface/workspace.state';

import { customRoutes } from '../../app-routing/custom-routing';

@Component({
  selector: 'main-app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.less'],
})
export class WorkspaceComponent implements OnInit {
  isCollapsed = false;
  noShowPath = ['userInformation'];
  menus = [];

  constructor(private workspaceService: WorkspaceService) {}

  ngOnInit(): void {
    // this.setRouter();
    this.setMenu();
  }

  setMenu(): void {
    const systemMenus = JSON.parse(
      String(sessionStorage.getItem('systemMenu'))
    );
    console.log(systemMenus);
    // this.menus = systemMenus.filter(
    //   (item: { path: string }) => !this.noShowPath.includes(item.path)
    // );
    systemMenus.map((item: { data: { title: string; use: boolean } }) => {
      if (item.data.title === '用户信息') {
        item.data.use = false;
      }
    });
    this.menus = systemMenus;
  }
  // setRouter(): void {
  //   const user = JSON.parse(String(sessionStorage.getItem('user')));
  //   console.log(user);
  //   const userRouter = JSON.parse(String(sessionStorage.getItem('userRouter')));
  //   console.log(userRouter);
  //   console.log(customRoutes[1]);
  //   for (const route of userRouter) {
  //     if (route.label === '系统菜单') {
  //       this.menus = route.children;
  //     }
  //   }
  // this.workspaceService.getUserRouter(user.id).subscribe((resp) => {
  //   console.log(resp);
  //   if (resp.code === 0) {
  //   }
  // });
  // }
}
