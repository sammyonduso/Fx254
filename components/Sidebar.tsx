import Link from 'next/link';
import { LayoutDashboard, Bot, Store, Settings, Activity, LineChart } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-full">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <Activity className="w-6 h-6 text-emerald-400 mr-2" />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
          AlgoTradeX
        </span>
      </div>
      <nav className="flex-1 py-6 px-3 space-y-1">
        <NavItem href="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
        <NavItem href="/trade" icon={<LineChart size={20} />} label="Manual Trade" />
        <NavItem href="/bots" icon={<Bot size={20} />} label="My Bots" />
        <NavItem href="/marketplace" icon={<Store size={20} />} label="Marketplace" />
        <NavItem href="/settings" icon={<Settings size={20} />} label="Settings" />
      </nav>
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-sm font-medium text-slate-300 mb-1">Pro Plan Active</p>
          <p className="text-xs text-slate-500 mb-3">Renews in 14 days</p>
          <div className="w-full bg-slate-700 rounded-full h-1.5">
            <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <p className="text-xs text-slate-400 mt-2">3 / 5 Bots Running</p>
        </div>
      </div>
    </div>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors group"
    >
      <span className="text-slate-400 group-hover:text-emerald-400 transition-colors">{icon}</span>
      <span className="ml-3 font-medium">{label}</span>
    </Link>
  );
}
