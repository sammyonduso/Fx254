import { Bell, Search, User } from 'lucide-react';

export function TopNav() {
  return (
    <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-6">
      <div className="flex items-center bg-slate-900 rounded-md px-3 py-1.5 w-64 border border-slate-800 focus-within:border-emerald-500 transition-colors">
        <Search size={16} className="text-slate-500" />
        <input 
          type="text" 
          placeholder="Search pairs, bots..." 
          className="bg-transparent border-none outline-none text-sm ml-2 text-slate-200 placeholder-slate-500 w-full"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-slate-400">Live Server:</span>
          <span className="flex items-center text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
            Connected (24ms)
          </span>
        </div>
        <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500 flex items-center justify-center cursor-pointer">
          <User size={16} className="text-slate-950" />
        </div>
      </div>
    </header>
  );
}
