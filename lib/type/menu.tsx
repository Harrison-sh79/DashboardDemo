import dynamicIconImports from 'lucide-react/dynamicIconImports';
export type menuType = {
  id: string;
  role: string;
  level1: menuItemType[];
  level2?: menuItemType[] | undefined;
};
export type menuItemType = {
  title: string;
  href: string;
  icon: keyof typeof dynamicIconImports;
  variant: "default" | "ghost";
  children: menuChildItemType[];
};

export type menuChildItemType = {
  title: string;
  href: string;
};

export type TopMenusType = {
  id: string;
  name: string;
  url: string;
}

export type TabsType = {
  id: string;
  name: string;
  url: string;
}
