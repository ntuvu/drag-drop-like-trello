import theme from '~/theme.js'
import Box from '@mui/material/Box'

export default function BoardContent() {
  return (
    <Box sx={{
      width: '100%',
      height: `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
            Board content
    </Box>
  )
}
