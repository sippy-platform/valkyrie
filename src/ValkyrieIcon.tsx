import clsx from 'clsx';
import { ValkyrieIcon as IValkyrieIcon } from './Valkyrie';

interface ValkyrieProps {
  icon: IValkyrieIcon
  className?: string
  spin?: boolean
}

export default function ValkyrieIcon({
  icon,
  className,
  spin = false
}: ValkyrieProps) {
  return (
    <span
      className={
        clsx(
          'vi',
          className,
          {
            'vi-spin': spin
          }
        )
      }
      dangerouslySetInnerHTML={{ __html: icon.data }}
    />
  );
}