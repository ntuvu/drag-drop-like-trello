import theme from '../../../theme.js'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

export default function BoardBar() {
  return (<Box sx={{
    width: '100%',
    height: theme.trello.boardBarHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
    overflowX: 'auto',
    paddingX: 2
  }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Chip
        sx={MENU_STYLE}
        icon={<DashboardIcon />}
        label="Board"
        clickable/>
      <Chip
        sx={MENU_STYLE}
        icon={<VpnLockIcon />}
        label="Public/Private Workspace"
        clickable/>
      <Chip
        sx={MENU_STYLE}
        icon={<AddToDriveIcon />}
        label="Add to Google drive"
        clickable/>
      <Chip
        sx={MENU_STYLE}
        icon={<BoltIcon />}
        label="Automation"
        clickable/>
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
      <AvatarGroup max={7} sx={{
        '& .MuiAvatar-root': {
          width: 34,
          height: 34,
          fontSize: 16
        }
      }}>
        <Tooltip title="tuvu">
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        </Tooltip>
        <Tooltip title="tuvu">
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        </Tooltip>
        <Tooltip title="tuvu">
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        </Tooltip>
        <Tooltip title="tuvu">
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        </Tooltip>
        <Tooltip title="tuvu">
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        </Tooltip>
        <Tooltip title="tuvu">
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        </Tooltip>
        <Tooltip title="tuvu">
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
        </Tooltip>
      </AvatarGroup>
    </Box>
  </Box>)
}
