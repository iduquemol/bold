import { useNavigate } from 'react-router-dom'
import { VFlow, Heading, Button, Icon, Text } from 'bold-ui'
import React from 'react'

export const SideBar = ({ drawerWidth = 140 }) => {
    const navigate = useNavigate();

    const onStarkNavigate = () => {
        navigate('/stark', {
            replace: true
        });
    }

    const onLannisterNavigate = () => {
        navigate('/lannister', {
            replace: true
        });
    }

    const onTargaryenNavigate = () => {
        navigate('/targaryen', {
            replace: true
        });
    }

    const onGridNavigate = () => {
        navigate('/grid', {
            replace: true
        });
    }

    const onAddNavigate = () => {
        navigate('/add', {
            replace: true
        });
    }

    return (
        <VFlow
            vSpacing={0.5}
        >
            <Button
                kind="primary"
                size="small"
                skin="default"
                onClick={onStarkNavigate}
            >
                <Icon icon='rocket' style={{ marginRight: '0.5rem' }} />
                <Text color='inherit' component='span' style={{ paddingRight: 28 }}>Stark House</Text>
            </Button>
            <Button
                kind="primary"
                size="small"
                skin="default"
                onClick={onLannisterNavigate}
            >
                <Icon icon='rocket' style={{ marginRight: '0.5rem' }} />
                <Text color='inherit' component='span' style={{ paddingRight: 3 }}>Lannister House</Text>
            </Button>
            <Button
                kind="primary"
                size="small"
                skin="default"
                onClick= {onTargaryenNavigate}
            >
                <Icon icon='rocket' style={{ marginRight: '0.5rem' }} />
                <Text color='inherit' component='span'>Targaryen House</Text>
            </Button>
            <Button
                kind="primary"
                size="small"
                skin="default"
                onClick= {onGridNavigate}
            >
                <Icon icon='rocket' style={{ marginRight: '0.5rem' }} />
                <Text
                    color='inherit'
                    component='span'
                    style={{ paddingRight: 16 }}
                >
                    Info with Grid
                </Text>
            </Button>
            <Button
                kind="primary"
                size="small"
                skin="default"
                onClick= {onAddNavigate}
            >
                <Icon icon='rocket' style={{ marginRight: '0.5rem' }} />
                <Text color='inherit' component='span' style={{ paddingRight: 2 }}>Add a Character</Text>
            </Button>
        </VFlow>
    )
}
