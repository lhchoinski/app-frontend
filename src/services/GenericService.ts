import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { IGenericRequest } from '../types/IGeneric';
import { ApiClient } from './ApiService';
import {
    IPaginationResponse,
    IPaginationSimpleRequest,
} from '../types/components/IPagination';
import { ISelect2Options } from '../types/ISelect2';

export const findPaginationGet = <T>(
    route: string,
    req: IPaginationSimpleRequest,
): AxiosPromise<IPaginationResponse<T>> => {
    return ApiClient.get(`/${route}`, {
        params: req,
        paramsSerializer: {
            indexes: null,
        },
    });
};

export const findPaginationPost = <T>(
    route: string,
    req: IPaginationSimpleRequest,
): AxiosPromise<IPaginationResponse<T>> => {
    return ApiClient.post(`/${route}`, req);
};

export const findById = <T>(
    route: string,
    id: number | string,
): AxiosPromise<T> => {
    return ApiClient.get(`/${route}/${id}`);
};

export const save = <T extends IGenericRequest, R>(
    route: string,
    data: T,
    config?: AxiosRequestConfig<unknown>,
): AxiosPromise<R> => {
    const isMultipart =
        config && config.headers?.['Content-Type'] === 'multipart/form-data';

    const payload =
        isMultipart && !(data instanceof FormData)
            ? objectToFormData<T>(data)
            : data;

    if (data.id) {
        return ApiClient.put(`/${route}/${data.id}`, payload, config);
    }

    return ApiClient.post(`/${route}`, payload, config);
};

export const objectToFormData = <T extends Record<string, any>>(
    obj: T,
    formData = new FormData(),
    parentKey = '',
): FormData => {
    Object.entries(obj).forEach(([key, value]) => {
        const fullKey = parentKey ? `${parentKey}.${key}` : key;

        if (value instanceof File) {
            formData.append(fullKey, value);
        } else if (Array.isArray(value)) {
            value.forEach(arrayItem => {
                const arrayKey = `${fullKey}[]`;
                if (
                    arrayItem instanceof Object &&
                    !(arrayItem instanceof File)
                ) {
                    objectToFormData(arrayItem, formData, arrayKey);
                } else {
                    formData.append(arrayKey, arrayItem);
                }
            });
        } else if (value instanceof Object && !(value instanceof Date)) {
            objectToFormData(value, formData, fullKey);
        } else {
            formData.append(fullKey, value);
        }
    });

    return formData;
};

export const deleteData = (
    route: string,
    id: number | string,
): AxiosPromise<void> => {
    return ApiClient.delete(`/${route}/${id}`);
};

export const enableData = (
    route: string,
    id: number | string,
): AxiosPromise<void> => {
    return ApiClient.put(`/${route}/${id}/enable`);
};

export const disableData = (
    route: string,
    id: number | string,
): AxiosPromise<void> => {
    return ApiClient.put(`/${route}/${id}/disable`);
};

export const findSelect2 = async <T, L>(
    route: string,
    search?: string | null,
): Promise<ISelect2Options<T, L>[]> => {
    const response = await ApiClient.get(`/${route}/select2`, {
        params: {
            search: search,
        },
    });

    return response.data;
};

export const getRequest = <T>(
    route: string,
    config?: AxiosRequestConfig<unknown>,
): AxiosPromise<T> => {
    return ApiClient.get(`/${route}`, config);
};

export const postRequest = <T>(
    route: string,
    data?: object,
    config?: AxiosRequestConfig<unknown>,
): AxiosPromise<T> => {
    return ApiClient.post(`/${route}`, data, config);
};

export const putRequest = <T>(
    route: string,
    data?: T,
    config?: AxiosRequestConfig<unknown>,
): AxiosPromise<T> => {
    return ApiClient.put(`/${route}`, data, config);
};

export const deleteRequest = <T>(
    route: string,
    config?: AxiosRequestConfig<unknown>,
): AxiosPromise<T> => {
    return ApiClient.delete(`/${route}`, config);
};

export const downloadFile = async (route: string, finalFileName?: string) => {
    const response = await ApiClient({
        url: route,
        method: 'GET',
        responseType: 'blob',
    });

    const contentDisposition = response.headers['content-disposition'];
    let fileName = finalFileName;
    console.log(response.headers, contentDisposition);
    if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(
            /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/,
        );

        if (fileNameMatch && fileNameMatch[1]) {
            fileName = fileNameMatch[1].replace(/['"]/g, '');
        }
    }

    if (!fileName) {
        const contentType = response.headers['content-type'];
        const extension = contentType ? contentType.split('/')[1] : 'bin';
        fileName = `download.${extension}`;
    }

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);

    document.body.appendChild(link);
    link.click();

    link.parentNode?.removeChild(link);
};
