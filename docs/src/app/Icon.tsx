
import { Box, IconButton, Stack, Typography } from '@mui/joy';


import ValkyrieIcon, { viArrowLeft } from '@sippy-platform/valkyrie';
import { lazy, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default async function Icon() {
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    Promise.resolve(lazy(() => import(`../data/icons/${slug}.yaml`))).then((response) => console.log(response));
  }, [slug]);

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="baseline">
          <IconButton variant="outlined" onClick={() => navigate('/')}><ValkyrieIcon icon={viArrowLeft} /></IconButton>
          <Typography level="h2">{slug}</Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(9.5rem, 100%), 1fr))',
          gap: { xs: 1 }
        }}
      >
        Content
      </Box>
    </Stack>
  );
}
