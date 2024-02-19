import { HFlow, InfoLabel, Text, Paper, Heading, VFlow } from 'bold-ui'

export const CharacterCard = ({
    id,
    name,
    house,
    actor,
    origin,
    title
}) => {
    const characterImageUrl = `/assets/personajes/${ id }.jpg`;
    

  return (
    <HFlow
        alignItems="center"
        hSpacing={2}
        justifyContent="flex-start"
        style={{
          float: 'left',
          widt: '50%' ,
          padding: '1rem'
        }}
    >
        <img src={ characterImageUrl } alt={ name } />
        <VFlow
          vSpacing={1}          
        >        
        <Paper
          elevation={20}
          style={{
            marginBottom: '2rem',
            marginTop: '0.5rem',
            padding: '1rem'
          }}
        >
        <Heading level={2}>
          Name
        </Heading>
        <Text
          component="span"
          variant="h2"
        >
          { name }
        </Text>
        <InfoLabel
          placeholder="-"
          title="House"
        >
          { house }
        </InfoLabel>
        <InfoLabel
          placeholder="-"
          title="Actor"
        >
          { actor }
        </InfoLabel>
        <InfoLabel
          placeholder="-"
          title="Origin"
        >
          { origin }
        </InfoLabel>
        <InfoLabel
          placeholder="-"
          title="Title"
        >
          { title }
        </InfoLabel>
        </Paper>
        
       
        
        </VFlow>
       
    </HFlow>
  )
}
