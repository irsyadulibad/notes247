export default function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`text-xs font-semibold flex items-center rounded-full px-2 py-1 ${className}`}
    >
      {children}
    </span>
  );
}
