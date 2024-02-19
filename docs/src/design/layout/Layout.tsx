import { Outlet, useNavigate } from 'react-router-dom';

import {
  Button,
  Container,
  Dropdown,
  IconButton,
  Link,
  ListItemDecorator,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  Stack,
  Typography,
  useColorScheme
} from '@mui/joy';

import ValkyrieIcon, { viCircleHalfInner, viGithub, viMoon, viSun } from '@sippy-platform/valkyrie';

export default function Layout() {
  const navigate = useNavigate();
  const { mode, setMode } = useColorScheme();

  return (
    <>
      <Sheet variant="outlined" sx={{ borderWidth: 0, borderBottomWidth: 1 }}>
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="space-between" sx={{ py: 1.5 }}>
            <Link
              color="neutral"
              underline="none"
              level="h1"
              fontSize="xl"
              sx={{
                backgroundImage: 'linear-gradient(135deg, #0061c9, #c455f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              onClick={() => navigate('/')}
            >
              Valkyrie
            </Link>
            <Stack direction="row" gap={0.5}>
              <Button onClick={() => navigate('/')} variant="plain" size="sm" color="neutral">
                Icons
              </Button>
              <Button onClick={() => navigate('/usage')} variant="plain" size="sm" color="neutral">
                Usage
              </Button>
              <IconButton size="sm" variant="outlined" component="a" href="https://github.com/sippy-platform/valkyrie" target="_blank">
                <ValkyrieIcon icon={viGithub} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Sheet>
      <Container maxWidth="xl" sx={{ my: 2 }}>
        <Outlet />
      </Container>
      <Sheet variant="outlined" sx={{ borderWidth: 0, borderTopWidth: 1, bgcolor: 'transparent' }}>
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography level="body-sm">&copy; Sippy 2023</Typography>
              <Dropdown>
                <MenuButton size="sm" startDecorator={<ValkyrieIcon icon={mode === 'dark' ? viMoon : mode === 'light' ? viSun : viCircleHalfInner} />}>
                  {mode === 'dark' ? 'Dark theme' : mode === 'light' ? 'Light theme' : 'System theme'}
                </MenuButton>
                <Menu size="sm">
                  <MenuItem selected={mode === 'light'} onClick={() => setMode('light')}>
                    <ListItemDecorator>
                      <ValkyrieIcon icon={viSun} />
                    </ListItemDecorator>
                    Light
                  </MenuItem>
                  <MenuItem selected={mode === 'dark'} onClick={() => setMode('dark')}>
                    <ListItemDecorator>
                      <ValkyrieIcon icon={viMoon} />
                    </ListItemDecorator>
                    Dark
                  </MenuItem>
                  <MenuItem selected={mode === 'system'} onClick={() => setMode('system')}>
                    <ListItemDecorator>
                      <ValkyrieIcon icon={viCircleHalfInner} />
                    </ListItemDecorator>
                    System
                  </MenuItem>
                </Menu>
              </Dropdown>
            </Stack>
          </Stack>
        </Container>
      </Sheet>
    </>
  );
}
