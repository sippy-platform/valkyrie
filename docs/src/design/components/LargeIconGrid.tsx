import Valkyrie, { type IValkyrie } from '@sippy-platform/valkyrie';
import clsx from 'clsx';

export function LargeIconGrid({ icon }: { icon: IValkyrie }) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/40 p-8 backdrop-blur-xl">
      <div
        className={clsx(
          'flex items-center justify-center rounded-md border',
          // Grid background
          'bg-size-[var(--Valkyrie-scale,16px)_var(--Valkyrie-scale,16px)] bg-position-[-1px_-1px]',
          'bg-[linear-gradient(to_right,var(--color-blue-300)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-blue-300)_1px,transparent_1px)]',
          // Sizing
          'h-[calc(var(--Valkyrie-scale,16px)*16)] w-[calc(var(--Valkyrie-scale,16px)*16)]',
          // Border color
          'border-blue-400'
        )}
      >
        <Valkyrie icon={icon} className="text-[calc(var(--Valkyrie-scale,16px)*16)] text-neutral-800" />
      </div>
    </div>
  );
}
