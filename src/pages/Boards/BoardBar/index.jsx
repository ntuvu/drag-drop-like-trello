import theme from '../../../theme.js'
import Box from '@mui/material/Box'

export default function BoardBar() {
  return (<Box sx={{
    backgroundColor: 'primary.dark',
    width: '100%',
    height: theme.trello.boardBarHeight,
    display: 'flex',
    alignItems: 'center'
  }}>
    Board bar
  </Box>)
}
