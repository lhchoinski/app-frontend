import React, {useEffect, useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import {IDataTableApiProps} from "./interfaces";
import {findPaginationGet} from "../../../services/GenericService";

const DataTableApi = <T, >({
                               columns,
                               checkboxSelection = false,
                               pageSizeOptions = []
                           }: IDataTableApiProps<T>) => {

    const apiRoute = 'centro-servico'

    const [rows, setRows] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const params = {
        pageNo: 1,
        pageSize: 10,
        // search: search,
        // status: status,
        // ...extraParams,
    };

    const handleThen = (r: any) => {
        const data = r.data.items;
        setRows(
            data.map((item: T, index: number) => ({
                ...item,
                id: index,
            })),
        );
    };

    const fetchData = async () => {
        try {
            await findPaginationGet(apiRoute, params).then(handleThen)
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const paginationModel = {page: 0, pageSize: 10};

    return (
        <>
            <Paper sx={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    loading={loading}
                    initialState={{pagination: {paginationModel}}}
                    pageSizeOptions={pageSizeOptions}
                    checkboxSelection={checkboxSelection}
                    sx={{border: 0}}
                />
            </Paper>
        </>
    );
};

export default DataTableApi;
