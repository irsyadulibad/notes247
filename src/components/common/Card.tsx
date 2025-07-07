export default function Card({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`backdrop-blur-sm border border-gray-100 rounded-xl p-4 sm:p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
