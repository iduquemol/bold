import { Button, Cell, Grid, Paper, Text, HFlow, Heading } from 'bold-ui'
import { PrototipoLayout } from '../layout/PrototipoLayout'
import { GridComponent } from '../components/GridComponent';

export const GridPage = () => {
    return (
        <PrototipoLayout>
            <Heading level={1} color='primary'>
                Information with Grid
            </Heading>
            <hr />
            <GridComponent />
        </PrototipoLayout>
    )
}

