import React, { FC } from 'react';
import moment from "moment";
import { Props } from './ItemsScreen.types'
import {Grid} from "@mui/material";
import {Box} from "@mui/system";
import SearchField from "../../../components/moleculs/SearchField";
import CardItem from "../../../components/moleculs/CardItem";

const ItemsScreen: FC<Props> = ({ data }) => {
    return (
        <Grid container>
            <Box component={Grid} item xs={12} p={1}>
                <SearchField label={"Cari buku"} />
            </Box>
            <Box component={Grid} xs={12} container>
                {
                    data && data.data.map((item:any) => {
                        let randomBackground = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')';
                        return (
                            <Box key={item.id} component={Grid} item xs={6} p={1}>
                                <CardItem background={randomBackground} title={"Judul"} date={moment(item.created_at, "YYYYMMDD").fromNow()} status={item.ready} />
                            </Box>
                        )
                    })
                }
            </Box>
        </Grid>
    )
}
export default ItemsScreen