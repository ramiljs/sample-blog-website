import { FC } from 'react'
import { ContactContainerStyle } from './contact.style'
import { useToast , Stack , Input , Textarea , Button } from '@chakra-ui/react'

export const Contact: FC = () => {
  const toast = useToast();

  const onClickSubmitButton = () => {
    toast({
      title: 'Successful',
      description: "Xabar jiberildi.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <div style={ContactContainerStyle}>
      <Stack spacing={4} sx={{ width: '500px' }}>
        <Input 
          variant='filled' 
          size='lg' 
          placeholder='Fullname'  
        />
        <Input 
          variant='filled' 
          size='lg' 
          placeholder='Email' 
        />
        <Textarea 
          variant='filled' 
          size='lg' 
          placeholder='Send to message'  
        />
        <Button
          mt={4}
          onClick={onClickSubmitButton}
          colorScheme='teal'
          type='submit'
        >
          Submit
        </Button>
      </Stack>
    </div>
  )
}