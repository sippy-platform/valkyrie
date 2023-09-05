import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Card, Typography } from '@mui/joy';
import { accordionDetailsClasses } from '@mui/joy/AccordionDetails';

import Code from '@/design/components/Code';

export default function Usage() {
  return (
    <Card sx={{ textAlign: 'initial', contain: 'paint' }}>
      <AccordionGroup
        variant="outlined"
        sx={{
          borderRadius: 'sm',
          [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]: {
            py: 1
          }
        }}
      >
        <Accordion>
          <AccordionSummary>Install Vaklyrie</AccordionSummary>
          <AccordionDetails>
            <Typography>Run the following command in npm to get started.</Typography>
            <Code>npm install @sippy-platform/valkyrie@next</Code>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Card>
  );
}
