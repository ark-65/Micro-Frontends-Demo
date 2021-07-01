export interface SystemRoute {
  alwaysShow: boolean;
  component: string;
  hidden: boolean;
  id: string;
  label: string;
  meta: { icon: string; breadcrumb: boolean };
  parentId: string;
  path: string;
  sortValue: number;
  children?: SystemRoute[];
}
