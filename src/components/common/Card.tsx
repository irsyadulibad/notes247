export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`backdrop-blur-sm border border-gray-100 rounded-xl p-4 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
