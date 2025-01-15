import theme from '../../theme.js'
import ModeSelect from '../ModeSelect'
import Box from '@mui/material/Box'

export default function AppBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelect />
    </Box>
  )
}
