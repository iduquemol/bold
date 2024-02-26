import { useNavigate } from 'react-router-dom'
import { HFlow, Button, Icon, ButtonGroup, Tooltip, Heading } from 'bold-ui'

export const ButtonGr = ({ drawerWidth }) => {
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
    navigate('/auth/login', {
      replace: true
    });
  }

  return (
    <HFlow
      hSpacing={2}
      justifyContent='flex-start'
      alignItems='center'
      style={{ backgroundColor: '#02786D' }}
    >
      <Button
        kind="primary"
        size="small"
        skin="default"
      // onClick= {onLogout}
      >
        <Icon
          icon="hamburguerMenu"
          size={1.5}
          color='inherit'
        />
      </Button>
      <Heading
        color='normal'
        level={3}
        style={{ paddingRight: 900 }}
      >
        Prototipo Bold Design System
      </Heading>
      <Button
        kind="danger"
        size="small"
        skin="default" 
        onClick={onLogout}     
      >
        <Icon
          icon="signOut"
          size={1.5}
          color='inherit'
        />
      </Button>


    </HFlow>
  )
}
