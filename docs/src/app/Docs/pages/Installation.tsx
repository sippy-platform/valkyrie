import { Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';
import Codeblock from '@/design/components/Codeblock';

export default function PageInstallation() {
  return (
    <Stack gap={2}>
      <Typography level="h2">Install Valkyrie</Typography>
      <Typography>Get started with Valkyrie by running the following command in your project.</Typography>
      <Codeblock>npm install @sippy-platform/valkyrie</Codeblock>
      <Typography level="h3">Including the styling</Typography>
      <Typography>Next, import the style for Valkyrie into your project's CSS file.</Typography>
      <Codeblock>@import '@sippy-platform/valkyrie/valkyrie.css';</Codeblock>
      <Typography>
        Now you can use the <Code>Valkyrie</Code> component wherever you like.
      </Typography>
    </Stack>
  );
}
