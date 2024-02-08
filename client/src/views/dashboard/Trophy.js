// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {
  // ** Hook
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6' sx={{color:'rgb(105, 108, 255)'}}>Congratulations John! 🎉</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px', mt: 4}}>
        You have done 72% more sales today.
        </Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
        Check your new badge in your profile.
        </Typography>
        {/* <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          $42.8k
        </Typography> */}
        <Button size='small' variant='contained' sx={{ my: 4, backgroundColor:'white', color:'rgb(105, 108, 255)', border:'1px solid rgba(105, 108, 255, 0.5)'}}>
          VIEW Badges
        </Button>
        {/* <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} /> */}
        <TrophyImg alt='trophy' src='/images/cards/illustration-john-light.png' sx={{width:'207px', height:'170px', bottom:'-1px'}}/>
      </CardContent>
    </Card>
  )
}

export default Trophy
