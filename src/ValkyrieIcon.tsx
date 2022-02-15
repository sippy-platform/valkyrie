import clsx from 'clsx';
import { ValkyrieIcon as IValkyrieIcon } from './Valkyrie';

interface ValkyrieProps {
  icon: IValkyrieIcon
  className?: string
  rotate?: 0 | 90 | 180 | 270 | false
  flip?: true | 'x' | 'y' | false
  spin?: boolean
}

export default function ValkyrieIcon({
  icon,
  className,
  spin = false,
  rotate = false,
  flip,
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
            'vi-spin': spin,
            [`vi-rotate-${rotate}`]: rotate,
            'vi-flip': flip === true,
            [`vi-flip-${flip}`]: flip === 'x' || flip === 'y'
          }
        )
      }
      dangerouslySetInnerHTML={{ __html: icon.data }}
    />
  );
}