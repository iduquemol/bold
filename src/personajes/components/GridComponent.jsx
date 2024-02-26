import React from 'react'
import { getClients } from '../helpers';
import { PagedTable, Button, Icon } from 'bold-ui'

export const GridComponent = () => {
    const clients = getClients();

    return (
        <PagedTable
            columns={[
                {
                    header: 'ID',
                    name: 'id',
                    render: item => item.id,
                    sortable: true
                },
                {
                    header: 'First Name',
                    name: 'firstName',
                    render: item => item.firstName,
                    sortable: true
                },
                {
                    header: 'Last Name',
                    name: 'lastName',
                    render: item => item.lastName,
                    sortable: true
                },
                {
                    header: 'Email',
                    name: 'email',
                    render: item => item.email,
                    sortable: true
                },
                {
                    header: 'Id Number',
                    name: 'idNumber',
                    render: item => item.idNumber,
                    sortable: true
                },
                {
                    name: 'actions',
                    align: 'right',
                    render: item => (
                        <Button size='small' skin='ghost'>
                            <Icon icon='penOutline' />
                        </Button>
                    ),
                }
            ]}
            // onPageChange={function noRefCheck() { }}
            // onSizeChange={function noRefCheck() { }}
            // onSortChange={function noRefCheck() { }}
            page={0}
            rows={ clients }
            size={8}
            sizeOptions={[
                10,
                30,
                50,
                100
            ]}
            sort={[
                '-id',
                'name'
            ]}
            totalElements={100}
            totalPages={5}
        />
    )
}
