import { useState } from 'react';

import { Button, Card, Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import ValkyrieIcon, { viArrowsRotateRight, viHeart, viMessageSmile, viSpinnerThird } from '@sippy-platform/valkyrie';

export default function Usage() {
  const [rotate, setRotate] = useState(false);

  return (
    <Stack gap={2}>
      <Typography level="h1">Documentation</Typography>
      <Card sx={{ textAlign: 'initial', contain: 'paint' }}>
        <Typography level="h3">Install Valkyrie</Typography>
        <Typography>
          Run the following command in npm to get started <Code>npm install @sippy-platform/valkyrie@next</Code>.
        </Typography>
      </Card>
      <Card>
        <Typography level="h3">Spin</Typography>
        <Typography>
          The <Code>ValkyrieIcon</Code> component supports a basic spin animation.
        </Typography>

        <Stack direction="row" fontSize={32} spacing={1}>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viSpinnerThird} />
              </Typography>
              <Code>null</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viSpinnerThird} spin />
              </Typography>
              <Code>spin</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viSpinnerThird} spin={false} />
              </Typography>
              <Code>spin={`{false}`}</Code>
            </Stack>
          </Sheet>
        </Stack>

        <Table variant="outlined">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Property name</th>
              <th style={{ width: '25%' }}>Default</th>
              <th style={{ width: '50%' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>--vi-animation-duration</Code>
              </td>
              <td>
                <Code>2s</Code>
              </td>
              <td>Time for a full play through of the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--vi-animation-timing-function</Code>
              </td>
              <td>
                <Code>linear</Code>
              </td>
              <td>The timing function used for the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--vi-animation-iteration-count</Code>
              </td>
              <td>
                <Code>infinite</Code>
              </td>
              <td>Number of times the animation is repeated.</td>
            </tr>
          </tbody>
        </Table>
      </Card>
      <Card>
        <Typography level="h3">Rotation</Typography>
        <Typography>
          The <Code>ValkyrieIcon</Code> component supports a changing the orientation of the icon.
        </Typography>

        <Stack direction="row" fontSize={32} spacing={1}>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} />
              </Typography>
              <Code>null</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} rotate={0} />
              </Typography>
              <Code>rotate={`{0}`}</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} rotate={90} />
              </Typography>
              <Code>rotate={`{90}`}</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} rotate={180} />
              </Typography>
              <Code>rotate={`{180}`}</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} rotate={270} />
              </Typography>
              <Code>rotate={`{270}`}</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} rotate={false} />
              </Typography>
              <Code>rotate={`{false}`}</Code>
            </Stack>
          </Sheet>
        </Stack>

        <Typography level="h4">Rotation animation</Typography>

        <Stack direction="row" fontSize={32} spacing={1} alignItems="flex-start">
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} rotate={rotate ? 0 : 180} />
              </Typography>
              <Code>rotate={rotate ? 0 : 180}</Code>
            </Stack>
          </Sheet>
          <Button onClick={() => setRotate(!rotate)} startDecorator={<ValkyrieIcon icon={viArrowsRotateRight} />}>
            Rotate
          </Button>
        </Stack>

        <Table variant="outlined">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Property name</th>
              <th style={{ width: '25%' }}>Default</th>
              <th style={{ width: '50%' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>--vi-transition-duration</Code>
              </td>
              <td>
                <Code>0.2s</Code>
              </td>
              <td>Time for a full play through of the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--vi-transition-easing</Code>
              </td>
              <td>
                <Code>ease-in-out</Code>
              </td>
              <td>The easing function used for the animation.</td>
            </tr>
          </tbody>
        </Table>
      </Card>
      <Card>
        <Typography level="h3">Flip</Typography>
        <Typography>
          The <Code>ValkyrieIcon</Code> component supports flipping the icon on its axis.
        </Typography>

        <Stack direction="row" fontSize={32} spacing={1}>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} />
              </Typography>
              <Code>null</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} flip />
              </Typography>
              <Code>flip</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} flip="x" />
              </Typography>
              <Code>flip={`"x"`}</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viMessageSmile} flip="y" />
              </Typography>
              <Code>flip={`"y"`}</Code>
            </Stack>
          </Sheet>
        </Stack>
      </Card>
      <Card>
        <Typography level="h3">Beat</Typography>
        <Typography>
          The <Code>ValkyrieIcon</Code> component supports a basic beat animation.
        </Typography>

        <Stack direction="row" fontSize={32} spacing={1}>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viHeart} />
              </Typography>
              <Code>null</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viHeart} beat />
              </Typography>
              <Code>beat</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <ValkyrieIcon icon={viHeart} beat={false} />
              </Typography>
              <Code>beat={`{false}`}</Code>
            </Stack>
          </Sheet>
        </Stack>

        <Table variant="outlined">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Property name</th>
              <th style={{ width: '25%' }}>Default</th>
              <th style={{ width: '50%' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>--vi-animation-duration</Code>
              </td>
              <td>
                <Code>1s</Code>
              </td>
              <td>Time for a full play through of the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--vi-animation-timing-function</Code>
              </td>
              <td>
                <Code>ease-in-out</Code>
              </td>
              <td>The timing function used for the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--vi-animation-iteration-count</Code>
              </td>
              <td>
                <Code>infinite</Code>
              </td>
              <td>Number of times the animation is repeated.</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Stack>
  );
}
