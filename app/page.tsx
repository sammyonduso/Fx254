'use client';

import Link from 'next/link';
import { DollarSign, TrendingUp, Activity, Percent, Play, Pause, Settings2, LineChart } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { name: 'Mon', balance: 1000000 },
  { name: 'Tue', balance: 1015000 },
  { name: 'Wed', balance: 1012000 },
  { name: 'Thu', balance: 1030000 },
  { name: 'Fri', balance: 1028000 },
  { name: 'Sat', balance: 1045000 },
  { name: 'Sun', balance: 1060000 },
];

const activeBots = [
  { id: 1, name: 'EUR/USD Scalper', strategy: 'Mean Reversion', pnl: '+ KSh 18,850', status: 'running', pair: 'EUR/USD' },
  { id: 2, name: 'GBP/JPY Trend Rider', strategy: 'Trend Following', pnl: '- KSh 4,225', status: 'running', pair: 'GBP/JPY' },
  { id: 3, name: 'Gold HFT', strategy: 'Arbitrage', pnl: '+ KSh 54,600', status: 'paused', pair: 'XAU/USD' },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <div className="flex gap-2">
          <Link href="/trade" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center">
            <LineChart size={16} className="mr-2" /> Trading Terminal
          </Link>
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors">
            Deposit Funds
          </button>
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-lg text-sm font-medium transition-colors flex items-center">
            <Play size={16} className="mr-2" /> Start All Bots
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Balance" value="KSh 1,060,000" change="+6.0%" icon={<DollarSign size={20} />} positive />
        <StatCard title="24h PnL" value="+KSh 31,265" change="+2.4%" icon={<TrendingUp size={20} />} positive />
        <StatCard title="Active Bots" value="2 / 5" change="Running" icon={<Activity size={20} />} neutral />
        <StatCard title="Win Rate" value="68.4%" change="+1.2%" icon={<Percent size={20} />} positive />
      </div>

      {/* Chart Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Portfolio Performance (7 Days)</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `KSh ${value / 1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                itemStyle={{ color: '#34d399' }}
              />
              <Area type="monotone" dataKey="balance" stroke="#34d399" strokeWidth={2} fillOpacity={1} fill="url(#colorBalance)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active Bots Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Your Bots</h2>
          <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950/50 text-slate-400">
              <tr>
                <th className="px-6 py-3 font-medium">Bot Name</th>
                <th className="px-6 py-3 font-medium">Pair</th>
                <th className="px-6 py-3 font-medium">Strategy</th>
                <th className="px-6 py-3 font-medium">Today&apos;s PnL</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {activeBots.map((bot) => (
                <tr key={bot.id} className="hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{bot.name}</td>
                  <td className="px-6 py-4 text-slate-300">{bot.pair}</td>
                  <td className="px-6 py-4 text-slate-300">{bot.strategy}</td>
                  <td className={`px-6 py-4 font-medium ${bot.pnl.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {bot.pnl}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      bot.status === 'running' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {bot.status === 'running' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>}
                      {bot.status.charAt(0).toUpperCase() + bot.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors">
                        <Settings2 size={16} />
                      </button>
                      <button className={`p-1.5 rounded transition-colors ${
                        bot.status === 'running' 
                          ? 'text-rose-400 hover:text-rose-300 bg-rose-400/10 hover:bg-rose-400/20' 
                          : 'text-emerald-400 hover:text-emerald-300 bg-emerald-400/10 hover:bg-emerald-400/20'
                      }`}>
                        {bot.status === 'running' ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon, positive, neutral }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-800 rounded-lg text-emerald-400">
          {icon}
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          neutral ? 'bg-slate-800 text-slate-300' : 
          positive ? 'bg-emerald-400/10 text-emerald-400' : 'bg-rose-400/10 text-rose-400'
        }`}>
          {change}
        </span>
      </div>
      <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
