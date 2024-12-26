import {GridColDef} from "@mui/x-data-grid/models/colDef/gridColDef";

export interface IDataTableApiProps<T> {
    columns: GridColDef[];
    checkboxSelection?: boolean;
    pageSizeOptions?: ReadonlyArray<number | {
        value: number;
        label: string;
    }>;
}