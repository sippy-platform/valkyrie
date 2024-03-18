import { ReactNode } from 'react';

import { Typography, TypographyProps } from '@mui/joy';

interface ICodeProps extends TypographyProps {
  children: ReactNode;
}

export default function Code({ children, ...props }: ICodeProps) {
  return (
    <Typography fontSize="sm" color="primary" variant="soft" sx={{ display: 'inline' }} {...props}>
      <code>{children}</code>
    </Typography>
  );
}
