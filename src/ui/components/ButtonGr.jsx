import { useNavigate } from 'react-router-dom'
import { HFlow, Button, Icon, ButtonGroup, Tooltip } from 'bold-ui'

export const ButtonGr = () => {
  const navigate = useNavigate();
  
  const onAddCharacter = () => {
    navigate('/add', {
      replace: true
    });    
  }

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

  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  }
  
  return (
    <HFlow hSpacing={1}>
  <ButtonGroup>
    <Button
      kind="primary"
      size="small"
      skin="outline"
      onClick= {onStarkNavigate}
    >
      Stark House
    </Button>
    <Button
      kind="primary"
      size="small"
      skin="outline"
      onClick= {onLannisterNavigate}
    >
      Lannister House
    </Button>
    <Button
      kind="primary"
      size="small"
      skin="outline"
      onClick= {onTargaryenNavigate}
    >
      Targaryen House
    </Button>
  </ButtonGroup>
  <ButtonGroup>
    <Tooltip text='Add a character'>
    <Button
      kind="normal"
      size="small"
      skin="default"
      onClick= {onAddCharacter}
    >
      <Icon
        icon="crossOutline"
        size={1.5}
      />
    </Button>
    </Tooltip>
    <Tooltip text='Search a character'>    
    <Button
      kind="normal"
      size="small"
      skin="default"
    >
      <Icon
        icon="zoomOutline"
        size={1.5}
      />
    </Button>
    </Tooltip>
    </ButtonGroup>
    <HFlow justifyContent='flex-end'></HFlow>
    <ButtonGroup>
    
    <Tooltip text='Logout'>    
    <Button
      kind="primary"
      size="small"
      skin="default"
      onClick= {onLogout}
    >
      <Icon
        icon="userReturn"
        size={1.5}
      />
    </Button>
    </Tooltip>      
  </ButtonGroup>
</HFlow>
  )
}
