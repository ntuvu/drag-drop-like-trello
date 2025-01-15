import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/index.jsx'

import BoardBar from './BoardBar/index.jsx'
import BoardContent from './BoardContent/index.jsx'

export default function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}
