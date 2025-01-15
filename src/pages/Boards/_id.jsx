import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar'
import theme from '../../theme'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
            Board bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}>
            Board content
      </Box>
    </Container>
  )
}

export default Board