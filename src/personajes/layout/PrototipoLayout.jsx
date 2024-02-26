
import { Grid, HFlow, VFlow, Paper, Cell } from "bold-ui"
import { ButtonGr, SideBar } from "../../ui/components";

const drawerWidth = 240;

export const PrototipoLayout = ({ children }) => {
    return (

        <Grid
            gap={1}
            gapVertical={1}
            wrap
            style={{ backgroundColor: '#DBF6F2'}}
        >
            <Cell xs={12}>
                <HFlow>
                    <ButtonGr drawerWidth={drawerWidth} />
                </HFlow>
            </Cell>
            <Cell xs={2}>
                <VFlow>
                    <SideBar drawerWidth={drawerWidth} />
                </VFlow>
            </Cell>
            <Cell xs={10}>

                {children}

            </Cell>

        </Grid>
    )
}
