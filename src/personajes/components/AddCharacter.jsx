import { useNavigate } from 'react-router-dom'
import { Button, Cell, Checkbox, FormControl, Grid, HFlow, MaskedTextField, Radio, TextField, 
    Select, DateField, DateRangePicker, FileUploader, Switch } from 'bold-ui'
import React, { useState } from 'react'

export const AddCharacter = () => {
    const navigate = useNavigate();
    const items = ['Stark', 'Lannister', 'Targaryen']
    const [formState, setFormState] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
        color: '',
        agreed: false,
      })

    const itemToString = (item) => item

    const onReset = () => {
        navigate('/stark', {
          replace: true
        });
      }
      
  
    return (
        <>
        <form >
        <Grid wrap>
          <Cell xs={6}>
            <TextField
              name='id'
              label='Id Character'
              placeholder='Enter character id'
              value={formState.id}
              required
            />
          </Cell>
          <Cell xs={6}>
            <TextField
              name='name'
              label='Name Character'
              placeholder='Enter character name'
              value={formState.name}
              required
            />
          </Cell>
          <Cell xs={6}>
          <Select
            clearable
            error=""
            itemToString={itemToString}
            items={items}
            label="House"
            menuMinWidth={30}
            name="house"
            openOnFocus
            placeholder="Select a value..."
            />
          </Cell>
          <Cell xs={6}>
            <FormControl label="It's Alive?">
                <HFlow>
                <Checkbox
                    label=""
                    name="check"            
                />
                </HFlow>
            </FormControl>          
          </Cell>
          <Cell xs={6}>
            <FormControl label="Birth Date">
                <HFlow>
                <DateField
                    icon="calendarOutline"
                    name="date"
                    transformTwoYearDigit={false}
                    value={undefined}/>
                </HFlow>
            </FormControl>          
          </Cell>
          <Cell xs={12}>
            <FormControl>
                <HFlow>
                <DateRangePicker
                    clearable
                    error=""
                    icon="calendarOutline"
                    label="Reign"
                    onlyWeeks={false}
                    value={{
                        endDate: new Date('2024-02-17T21:50:58.082Z'),
                        startDate: new Date('2024-02-07T21:50:58.082Z')
                    }}
                />
                </HFlow>
            </FormControl>          
          </Cell>
          <Cell xs={6}>
            <FormControl label="Image">
                <HFlow>
                <FileUploader
                    text="Click or drop file here"
                />
                </HFlow>
            </FormControl>          
          </Cell>
          <Cell xs={6}>
            <MaskedTextField
              name='phone'
              label='Phone number'
              mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              placeholder='(__) ____-____'
              value={formState.phone}
              required
            />
          </Cell>
          <Cell xs={6}>
            <TextField
              name='email'
              label='E-mail'
              type='email'
              placeholder='Enter your e-mail'
              value={formState.email}
            />
          </Cell>
          <Cell xs={6}>
            <FormControl label='Favorite color'>
              <HFlow>
                <Radio name='color' value='red' label='Red'  />
                <Radio name='color' value='green' label='Green'  />
                <Radio name='color' value='blue' label='Blue'  />
              </HFlow>
            </FormControl>
          </Cell>
          <Cell xs={6}>
            <FormControl label="It's Alive?">
              <HFlow>
              <Switch
                label="Label"
                name="switch"                
                />
              </HFlow>
            </FormControl>
          </Cell>
          <Cell xs={12}>
            <HFlow justifyContent='flex-end'>
              <Button type='reset' skin='outline' onClick={onReset}>
                Reset
              </Button>
              <Button type='submit' kind='primary'>
                Submit
              </Button>
            </HFlow>
          </Cell>
        </Grid>
      </form>
    </>
  )
}
