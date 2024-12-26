export interface IMenuForm {
    id?: number | null;
    menu?: number;
    icon?: string;
    title: string;
    uri?: string;
    ref: string;
    header: boolean;
    visible: boolean;
}

export interface IMenuRequest {
    id?: number | null;
    menuFatherId?: number | null;
    icon?: string | null;
    title: string;
    uri?: string | null;
    ref: string;
    header: boolean;
    visible: boolean;
}

export interface IMenuResponse {
    id: number;
    menuFather?: IMenuResponse | null;
    icon: string;
    title: string;
    uri: string;
    header: boolean;
    ref: string;
    visible: boolean;
    active: boolean;
    children: IMenuResponse[];
    order: number;
    level: number;
}

export interface IMenuOrder {
    id: string;
    title: string;
    order: number;
    icon: string;
    children: IMenuOrder[];
}

export interface IMenuSaveOrder {
    id: number;
    fatherId?: number | null;
    order: number;
}
