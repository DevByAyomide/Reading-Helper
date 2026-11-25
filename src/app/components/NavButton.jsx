import Link from 'next/link';

function NavButton({ children, label, className }) {
  return (
    <Link
      href="/"
      className={`flex h-13.5 w-18 flex-col items-center justify-center gap-0.5 rounded-full ${className}`}
    >
      {children}
      <span className="text-[10px] leading-4 font-semibold">{label}</span>
    </Link>
  );
}

export default NavButton;
