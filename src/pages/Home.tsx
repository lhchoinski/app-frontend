import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import StatCard from '../components/StatCard';
import {data} from "./DataHome";
import DataTableApi from "../components/DataTable/Api/DataTableApi";

const Home = () => {

    const columns = [
        {field: 'idCentroServico', headerName: 'ID', width: 70},
        {field: 'nome', headerName: 'Nome', width: 70},
    ];

    return (
        <>
            <Box sx={{width: '100%', maxWidth: {sm: '100%', md: '1700px'}}}>
                {/* cards */}
                <Typography component="h2" variant="h6" sx={{mb: 2}}>
                    Home
                </Typography>
                <Grid
                    container
                    spacing={2}
                    columns={12}
                    sx={{mb: (theme) => theme.spacing(2)}}
                >
                    {data.map((card, index) => (
                        <Grid key={index} size={{xs: 12, sm: 6, lg: 3}}>
                            <StatCard {...card} />
                        </Grid>
                    ))}
                </Grid>
                <Copyright sx={{my: 4, bottom: 0}}/>
            </Box>

            <DataTableApi
                columns={columns}
                pageSizeOptions={[10, 20, 30, 40]}

            />

        </>

    );
}

export default Home;