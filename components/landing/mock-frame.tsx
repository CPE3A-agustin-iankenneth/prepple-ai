import { cn } from '@/lib/utils';

export function MockFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-2xl rounded-[1.25rem] border border-white/10 bg-[#12151c]/90 p-1.5 shadow-[0_24px_80px_-24px_hsl(var(--primary)/0.35)] backdrop-blur-md',
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-[1.5rem] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.14),transparent_70%)]"
      />
      <div className="relative overflow-hidden rounded-[calc(1.25rem-0.375rem)]">
        {children}
      </div>
    </div>
  );
}
