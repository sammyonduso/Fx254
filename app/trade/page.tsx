'use client';

import { useState } from 'react';
import { TradingChart } from '@/components/TradingChart';
import { ArrowUpCircle, ArrowDownCircle, Info, History, LayoutGrid, List } from 'lucide-react';

// Mock candlestick data
const initialData = [
  { time: '2024-04-01', open: 1.0820, high: 1.0850, low: 1.0810, close: 1.0840 },
  { time: '2024-04-02', open: 1.0840, high: 1.0860, low: 1.0830, close: 1.0855 },
  { time: '2024-04-03', open: 1.0855, high: 1.0870, low: 1.0845, close: 1.0850 },
  { time: '2024-04-04', open: 1.0850, high: 1.0880, low: 1.0840, close: 1.0875 },
  { time: '2024-04-05', open: 1.0875, high: 1.0895, low: 1.0870, close: 1.0890 },
  { time: '2024-04-06', open: 1.0890, high: 1.0910, low: 1.0885, close: 1.0905 },
  { time: '2024-04-07', open: 1.0905, high: 1.0920, low: 1.0895, close: 1.0915 },
];

export default function TradePage() {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [lotSize, setLotSize] = useState('0.10');
  const [pair, setPair] = useState('EUR/USD');

  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">Live Trading</h1>
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1">
            <button 
              onClick={() => setPair('EUR/USD')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${pair === 'EUR/USD' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              EUR/USD
            </button>
            <button 
              onClick={() => setPair('GBP/USD')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${pair === 'GBP/USD' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              GBP/USD
            </button>
            <button 
              onClick={() => setPair('USD/JPY')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${pair === 'USD/JPY' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}
            >
              USD/JPY
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-slate-400">Spread:</span>
          <span className="text-emerald-400 font-mono">0.8 pips</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-white font-semibold">{pair}</span>
                <span className="text-emerald-400 font-mono">1.09154</span>
                <span className="text-xs text-slate-500">H: 1.09200 L: 1.08950</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded"><LayoutGrid size={16} /></button>
                <button className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded"><List size={16} /></button>
              </div>
            </div>
            <div className="h-[500px] w-full p-4">
              <TradingChart data={initialData} />
            </div>
          </div>

          {/* Positions Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">Open Positions</h2>
              <button className="text-xs text-slate-400 hover:text-white flex items-center">
                <History size={14} className="mr-1" /> History
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-950/50 text-slate-400">
                  <tr>
                    <th className="px-6 py-3 font-medium">Ticket</th>
                    <th className="px-6 py-3 font-medium">Type</th>
                    <th className="px-6 py-3 font-medium">Volume</th>
                    <th className="px-6 py-3 font-medium">Price</th>
                    <th className="px-6 py-3 font-medium">S/L</th>
                    <th className="px-6 py-3 font-medium">T/P</th>
                    <th className="px-6 py-3 font-medium">Profit (KSh)</th>
                    <th className="px-6 py-3 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 text-slate-400 font-mono">#82931</td>
                    <td className="px-6 py-4"><span className="text-emerald-400 font-medium">BUY</span></td>
                    <td className="px-6 py-4 text-white">0.50</td>
                    <td className="px-6 py-4 text-white font-mono">1.09020</td>
                    <td className="px-6 py-4 text-slate-400 font-mono">1.08800</td>
                    <td className="px-6 py-4 text-slate-400 font-mono">1.09500</td>
                    <td className="px-6 py-4 text-emerald-400 font-bold">+ KSh 8,420</td>
                    <td className="px-6 py-4 text-right">
                      <button className="px-3 py-1 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded hover:bg-rose-500/20 transition-colors">Close</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Order Panel */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Execute Trade</h2>
            
            <div className="flex p-1 bg-slate-950 border border-slate-800 rounded-xl mb-6">
              <button 
                onClick={() => setOrderType('buy')}
                className={`flex-1 flex items-center justify-center py-2.5 rounded-lg font-bold transition-all ${
                  orderType === 'buy' ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <ArrowUpCircle size={18} className="mr-2" /> BUY
              </button>
              <button 
                onClick={() => setOrderType('sell')}
                className={`flex-1 flex items-center justify-center py-2.5 rounded-lg font-bold transition-all ${
                  orderType === 'sell' ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <ArrowDownCircle size={18} className="mr-2" /> SELL
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Volume (Lots)</label>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setLotSize((prev) => Math.max(0.01, parseFloat(prev) - 0.01).toFixed(2))}
                    className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700"
                  >-</button>
                  <input 
                    type="text" 
                    value={lotSize}
                    onChange={(e) => setLotSize(e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-center text-white font-mono focus:outline-none focus:border-emerald-500"
                  />
                  <button 
                    onClick={() => setLotSize((prev) => (parseFloat(prev) + 0.01).toFixed(2))}
                    className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700"
                  >+</button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Stop Loss</label>
                  <input type="text" placeholder="None" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-rose-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Take Profit</label>
                  <input type="text" placeholder="None" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white font-mono text-sm focus:outline-none focus:border-emerald-500" />
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Margin Required</span>
                  <span className="text-slate-300 font-mono">KSh 12,450.00</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Available Margin</span>
                  <span className="text-emerald-400 font-mono">KSh 945,200.00</span>
                </div>
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-lg mt-4 transition-all ${
                orderType === 'buy' ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950' : 'bg-rose-500 hover:bg-rose-600 text-white'
              }`}>
                {orderType === 'buy' ? 'PLACE BUY ORDER' : 'PLACE SELL ORDER'}
              </button>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center text-amber-500 mb-3">
              <Info size={16} className="mr-2" />
              <span className="text-xs font-bold uppercase tracking-wider">Market Sentiment</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-emerald-400">64% Long</span>
                <span className="text-rose-400">36% Short</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
                <div className="bg-emerald-500 h-full" style={{ width: '64%' }}></div>
                <div className="bg-rose-500 h-full" style={{ width: '36%' }}></div>
              </div>
              <p className="text-[10px] text-slate-500 italic">Based on top 10,000 retail traders in the last 4 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
