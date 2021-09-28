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
  spin = false,
  ...props
}: ValkyrieProps) {
  return (
    <span
      {...props}
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