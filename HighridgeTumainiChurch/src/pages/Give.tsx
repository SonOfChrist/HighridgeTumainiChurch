import { ShieldCheck, CreditCard, Smartphone } from "lucide-react";

export default function Give() {
  return (
    <div className="bg-[#F1F5F9] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Online Giving</h1>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Your generosity supports the mission and outreach of HighRidge Tumaini Church. 
            All transactions are secure and encrypted.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="mb-8">
              <h2 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">1. Select an Amount</h2>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[1000, 2500, 5000].map(amt => (
                  <button key={amt} className="py-2.5 rounded-md border border-slate-200 text-slate-700 font-bold text-sm hover:border-cyan-500 hover:bg-cyan-50 transition-colors focus:ring-2 focus:ring-cyan-500 outline-none">
                    KES {amt.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-slate-50 border-r border-slate-200 rounded-l-md flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-500">KES</span>
                </div>
                <input 
                  type="number" 
                  placeholder="Other Amount" 
                  className="w-full pl-16 pr-4 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm font-semibold"
                />
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">2. Designation</h2>
              <select className="w-full px-4 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm bg-white font-medium appearance-none">
                <option>Tithes & Offerings</option>
                <option>Building Fund</option>
                <option>Youth Ministry</option>
                <option>Missions & Outreach</option>
              </select>
            </div>

            <div className="pt-4 border-t border-slate-100">
               <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3.5 rounded-md transition-colors shadow-sm flex items-center justify-center gap-2">
                 Proceed to Payment
               </button>
               <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                 <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                 Secure 256-bit SSL Encrypted Transaction
               </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <Smartphone className="w-4 h-4 text-green-600" />
                  Paybil / Till Info
                </h3>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-2">
                   <div className="text-[10px] font-bold text-slate-500 uppercase">Paybill Number</div>
                   <div className="text-xl font-bold text-slate-900 tracking-wider">524 998</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                   <div className="text-[10px] font-bold text-slate-500 uppercase">Account Number</div>
                   <div className="text-sm font-bold text-slate-900">Your Phone Number</div>
                </div>
             </div>

             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <CreditCard className="w-4 h-4 text-blue-600" />
                  Bank Transfer
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For direct wire transfers, please use the banking details provided in your member portal or contact the finance office at <strong className="text-slate-900">finance@highridge.org</strong>.
                </p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}