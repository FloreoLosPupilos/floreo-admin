import { Typography } from '@mui/material'

export const Title = ({ title }) => {
  return (
    <Typography variant='h4' marginTop='5px' sx={{
        display:'flex',
        flex:'auto',
        justifyContent: 'center',
        color:'primary'
    }} >
        { title }
    </Typography>
  )
}
