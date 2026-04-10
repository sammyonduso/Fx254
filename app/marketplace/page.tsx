'use client';

import { Check, Zap, Shield, Bot, BarChart3, Clock } from 'lucide-react';

const tiers = [
  {
    name: 'Novice',
    price: 'KSh 1,500',
    period: '/month',
    description: 'Perfect for beginners learning the ropes of automated trading.',
    features: [
      '1 Active Bot',
      'Major Pairs Only (EUR/USD, etc.)',
      'Standard Indicators (RSI, MACD)',
      'Daily Performance Reports',
      'Community Support'
    ],
    buttonText: 'Current Plan',
    popular: false,
  },
  {
    name: 'Pro Trader',
    price: 'KSh 6,500',
    period: '/month',
    description: 'Advanced tools and multi-pair trading for serious retail traders.',
    features: [
      'Up to 5 Active Bots',
      'All Forex Pairs + Gold/Silver',
      'Advanced Strategies (Trailing Stops, Grid)',
      'News Event Filter',
      'Priority Email Support',
      '1-Minute Execution Speed'
    ],
    buttonText: 'Upgrade to Pro',
    popular: true,
  },
  {
    name: 'Quantum Elite',
    price: 'KSh 19,500',
    period: '/month',
    description: 'Institutional-grade algorithms and AI sentiment analysis.',
    features: [
      'Unlimited Active Bots',
      'All Markets (Forex, Crypto, Indices)',
      'AI Sentiment Analysis Engine',
      'High-Frequency Trading (HFT) Modes',
      'Custom Webhooks & API Access',
      'Dedicated Account Manager'
    ],
    buttonText: 'Get Elite Access',
    popular: false,
  }
];

export default function Marketplace() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Bot Marketplace & Tiers</h1>
        <p className="text-slate-400">
          Upgrade your trading arsenal with our premium bot tiers. Unlock advanced strategies, faster execution, and AI-driven insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`relative bg-slate-900 rounded-2xl border ${
              tier.popular ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)]' : 'border-slate-800'
            } p-8 flex flex-col`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-blue-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-slate-400 text-sm h-10">{tier.description}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">{tier.price}</span>
              {tier.period && <span className="text-slate-400">{tier.period}</span>}
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start">
                  <Check size={18} className="text-emerald-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              className={`w-full py-3 rounded-xl font-medium transition-colors ${
                tier.popular 
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}
            >
              {tier.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-white mb-6 text-center">Why Trade With AlgoTradeX?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature icon={<Bot className="text-blue-400" />} title="No-Code Builder" desc="Customize complex strategies using our intuitive visual builder." />
          <Feature icon={<Zap className="text-emerald-400" />} title="Lightning Fast" desc="Trades executed in milliseconds via direct broker integrations." />
          <Feature icon={<Shield className="text-rose-400" />} title="Risk Managed" desc="Built-in drawdown protection and dynamic stop-losses." />
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}
