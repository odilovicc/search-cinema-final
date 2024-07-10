import type { MenuItem, MenuItemCommandEvent } from "primevue/menuitem"

export interface INavLinks {
    label: string | ((...args: any) => string) | undefined;
    icon?: string | undefined;
    command?: (event: MenuItemCommandEvent) => void;
    url?: string | undefined;
    items?: MenuItem[] | undefined;
    disabled?: boolean | ((...args: any) => boolean) | undefined;
    visible?: boolean | ((...args: any) => boolean) | undefined;
    target?: string | undefined;
    separator?: boolean | undefined;
    style?: any;
    class?: any;
    key?: string | undefined;
    [key: string]: any;
}

export interface IButtonCategories {
    label: string,
    icon: string,
    query: string
}