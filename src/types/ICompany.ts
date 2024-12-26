export interface ICompany {
    id: number;
    name: string;
    cnpj: string | null;
    corporateName: string | null;
    ie: string | null;
    tenant: string | null;
}

export interface ICompanyRequest {
    id?: number | null;
    name: string | null;
    cnpj: string | null;
    corporateName: string | null;
    ie: string | null;
    tenant: string | null;
}

export interface ICompanyResponse {
    id: number;
    name: string;
    cnpj: string;
    corporateName: string;
    ie: string;
    tenant: string;
}
