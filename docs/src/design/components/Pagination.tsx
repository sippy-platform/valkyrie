import { Separator } from '@base-ui/react';
import { PaginationProps } from '@mui/material';
import usePagination from '@mui/material/usePagination';

import { Button } from './Button';
import Valkyrie, { viArrowLeft, viArrowRight, viEllipsisH } from '@sippy-platform/valkyrie';

export function Pagination(props: PaginationProps) {
  const { items } = usePagination(props);

  return (
    <div className="flex items-center justify-center gap-1">
      {items.map(({ page, selected, type, disabled, ...props }, key) => {
        switch (type) {
          case 'page':
            return (
              <Button size="sm" icon variant={selected ? 'primary' : 'secondary'} plain={!selected} disabled={disabled} {...props} key={key}>
                {page}
              </Button>
            );
          case 'previous':
            return (
              <Button size="sm" variant="secondary" plain disabled={disabled} {...props} key={key}>
                <Valkyrie icon={viArrowLeft} /> Prev
              </Button>
            );
          case 'next':
            return (
              <Button size="sm" variant="secondary" plain disabled={disabled} {...props} key={key}>
                Next <Valkyrie icon={viArrowRight} />
              </Button>
            );
          case 'start-ellipsis':
          case 'end-ellipsis':
            return (
              <Button size="sm" icon variant={selected ? 'primary' : 'secondary'} plain={!selected} disabled={disabled} {...props} key={key}>
                <Valkyrie icon={viEllipsisH} />
              </Button>
            );
        }

        return <Separator orientation="vertical" className="w-px bg-zinc-300" key={key} />;
      })}
    </div>
  );
}
