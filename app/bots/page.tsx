'use client';

import { useState } from 'react';
import { Settings2, Save, Play, AlertTriangle } from 'lucide-react';

export default function MyBots() {
  const [riskLevel, setRiskLevel] = useState(2); // 1-5
  const [takeProfit, setTakeProfit] = useState(50);
  const [stopLoss, setStopLoss] = useState(25);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Bot Configuration</h1>
          <p className="text-slate-400 text-sm mt-1">Customize your strategy parameters</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center">
            <Save size={16} className="mr-2" /> Save Draft
          </button>
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-lg text-sm font-medium transition-colors flex items-center">
            <Play size={16} className="mr-2" /> Deploy Bot
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Settings2 className="mr-2 text-emerald-400" size={20} /> Base Strategy
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Trading Pair</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500">
                  <option>EUR/USD</option>
                  <option>GBP/USD</option>
                  <option>USD/JPY</option>
                  <option>XAU/USD (Gold)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Strategy Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-emerald-500 bg-emerald-500/10 rounded-lg p-3 cursor-pointer">
                    <div className="font-medium text-emerald-400 mb-1">Mean Reversion</div>
                    <div className="text-xs text-slate-400">Trades against short-term trends.</div>
                  </div>
                  <div className="border border-slate-800 bg-slate-950 rounded-lg p-3 cursor-pointer hover:border-slate-700">
                    <div className="font-medium text-white mb-1">Trend Following</div>
                    <div className="text-xs text-slate-400">Rides momentum breakouts.</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">Risk Level</label>
                  <span className="text-sm text-emerald-400 font-medium">Level {riskLevel}</span>
                </div>
                <input 
                  type="range" 
                  min="1" max="5" 
                  value={riskLevel}
                  onChange={(e) => setRiskLevel(parseInt(e.target.value))}
                  className="w-full accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>Conservative</span>
                  <span>Aggressive</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Risk Management</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Take Profit (Pips)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={takeProfit}
                    onChange={(e) => setTakeProfit(parseInt(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                  <span className="absolute right-4 top-2.5 text-slate-500 text-sm">Pips</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Stop Loss (Pips)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={stopLoss}
                    onChange={(e) => setStopLoss(parseInt(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                  <span className="absolute right-4 top-2.5 text-slate-500 text-sm">Pips</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-start p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <AlertTriangle className="text-amber-500 mr-3 shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="text-sm font-medium text-amber-500 mb-1">Risk Warning</h4>
                <p className="text-xs text-amber-500/80">
                  A stop loss of {stopLoss} pips with a risk level of {riskLevel} could result in a maximum drawdown of ~{(stopLoss * riskLevel * 0.1).toFixed(1)}% per trade on a standard lot.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Summary */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Bot Summary</h2>
            <div className="space-y-4">
              <SummaryRow label="Pair" value="EUR/USD" />
              <SummaryRow label="Strategy" value="Mean Reversion" />
              <SummaryRow label="Timeframe" value="15m" />
              <SummaryRow label="Risk/Reward" value={`1:${(takeProfit / stopLoss).toFixed(1)}`} />
              <SummaryRow label="Lot Size" value={`${(riskLevel * 0.1).toFixed(2)} Lots`} />
              
              <div className="pt-4 border-t border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-400">Estimated Win Rate</span>
                  <span className="text-sm font-medium text-emerald-400">~62%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5">
                  <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6 text-center">
            <h3 className="text-white font-medium mb-2">Need more power?</h3>
            <p className="text-slate-400 text-sm mb-4">Upgrade to Pro to unlock trailing stops and news filters.</p>
            <button className="w-full py-2 bg-slate-950 hover:bg-slate-900 border border-slate-700 text-white rounded-lg text-sm font-medium transition-colors">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-slate-400">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}
