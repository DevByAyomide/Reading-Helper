import { HomeIcon, Library, Plus } from 'lucide-react';

import NavButton from './NavButton';

function Navigation() {
  return (
    <nav className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-neutral-950 px-1.5 py-1.5 text-white shadow-[0_16px_35px_-12px_rgba(0,0,0,0.55)]">
      <NavButton label="Home" className="bg-white text-neutral-950 shadow-sm">
        <HomeIcon size={19} strokeWidth={2} />
      </NavButton>
      <NavButton label="Library" className="bg-transparent text-white">
        <Library size={19} strokeWidth={2} />
      </NavButton>
      <NavButton label="Import" className="bg-transparent text-white">
        <Plus size={19} strokeWidth={2} />
      </NavButton>
    </nav>
  );
}

export default Navigation;
