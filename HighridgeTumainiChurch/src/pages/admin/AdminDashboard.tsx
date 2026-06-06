import { LayoutDashboard, Users, HeartHandshake, Mic2, Megaphone, LogIn, Lock } from "lucide-react";
import { useAuth } from "../../lib/AuthContext";

export default function AdminDashboard() {
  const { user, role, loading, signInWithGoogle } = useAuth();
  
  if (loading) {
    return <div className="h-screen bg-slate-900 text-white flex items-center justify-center">Loading Admin...</div>;
  }

  if (!user || role !== 'admin') {
    return (
      <div className="h-screen bg-slate-900 text-slate-300 flex flex-col items-center justify-center p-4">
        <Lock className="w-12 h-12 text-slate-600 mb-6" />
        <h2 className="text-2xl font-serif text-white mb-2">Restricted Access</h2>
        <p className="text-slate-400 mb-8 max-w-sm text-center">You must be logged in as an administrator to view this portal.</p>
        {!user && (
          <button 
            onClick={signInWithGoogle}
            className="flex items-center gap-2 bg-slate-800 text-white border border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-700 transition"
          >
            <LogIn className="w-5 h-5" />
            Admin Sign In
          </button>
        )}
        {user && role !== 'admin' && (
           <div className="bg-red-500/10 text-red-400 px-6 py-3 rounded-lg border border-red-500/20">
             Your account ({user.email}) does not have admin permissions.
           </div>
        )}
      </div>
    );
  }

  const stats = [
    { label: "Total Members", value: "842", trend: "+12 this month" },
    { label: "Weekly Giving", value: "KES 142.5K", trend: "+8% vs last week" },
    { label: "Active Events", value: "4", trend: "Upcoming this week" },
    { label: "Sermons Indexed", value: "156", trend: "Latest: Oct 15" },
  ];

  return (
    <div className="flex flex-1 overflow-hidden h-full">
      {/* Sidebar */}
      <aside className="w-56 bg-[#1E293B] text-slate-300 flex flex-col p-4 gap-1 border-r border-slate-200 shrink-0 overflow-y-auto">
        <div className="text-[10px] font-bold text-slate-500 uppercase px-3 py-2 mb-1">Operations</div>
        <nav className="space-y-1">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={Users} label="Members" />
          <SidebarItem icon={HeartHandshake} label="Finance & Giving" />
          <SidebarItem icon={Mic2} label="Sermons & Media" />
          <SidebarItem icon={Megaphone} label="Announcements" />
        </nav>
        
        <div className="mt-auto p-3 bg-slate-800/50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-bold text-slate-400">System Status</span>
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
          </div>
          <div className="text-[10px] flex justify-between mb-1">
            <span>API Latency</span>
            <span className="text-white font-mono">14ms</span>
          </div>
          <div className="text-[10px] flex justify-between">
            <span>Storage</span>
            <span className="text-white font-mono">42%</span>
          </div>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-6 flex flex-col gap-6 overflow-hidden bg-[#F1F5F9] text-slate-900">
        <div className="shrink-0 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">System Admin Overview</h1>
          <button className="text-xs font-bold bg-cyan-600 text-white px-3 py-1.5 rounded hover:bg-cyan-500">Generate Report</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
          {stats.map(stat => (
            <div key={stat.label} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <div className="text-xs text-slate-500 font-medium mb-1">{stat.label}</div>
              <div className="flex items-baseline gap-2 mt-1">
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs font-bold text-cyan-600">{stat.trend}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-1 gap-6 min-h-0">
          <div className="flex-2 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
             <div className="p-4 border-b border-slate-100 flex items-center justify-between shrink-0">
               <h3 className="text-sm font-bold text-slate-800">Recent System Activity</h3>
             </div>
             <div className="flex-1 overflow-auto p-4">
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs border-b border-slate-100 pb-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="flex-1 text-slate-600">New user registration: <strong className="text-slate-900">Jane Wanjiku</strong></div>
                    <div className="text-slate-400">2 mins ago</div>
                  </div>
                  <div className="flex items-center gap-4 text-xs border-b border-slate-100 pb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="flex-1 text-slate-600">Successful M-Pesa STK Push: <strong className="text-slate-900">KES 2,000</strong></div>
                    <div className="text-slate-400">14 mins ago</div>
                  </div>
                  <div className="flex items-center gap-4 text-xs pb-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <div className="flex-1 text-slate-600">Pastor John published new sermon audio</div>
                    <div className="text-slate-400">3 hrs ago</div>
                  </div>
               </div>
             </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
              <ShieldIcon />
              <h3 className="text-slate-900 text-sm font-bold mt-4 mb-1">Cloud Security Active</h3>
              <p className="text-xs text-slate-500 leading-relaxed">All data is encrypted in transit and at rest. Role-based firewalls enforced.</p>
            </div>
            
            <div className="bg-[#0F172A] rounded-xl shadow-lg border border-slate-800 flex-1 flex flex-col p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-white">System Logs</h3>
                <span className="px-2 py-0.5 bg-green-600 text-white text-[9px] font-bold rounded animate-pulse">OK</span>
              </div>
              <div className="flex-1 bg-slate-800/50 rounded-lg border border-slate-700 flex items-center justify-center flex-col gap-2 p-4 text-[10px] text-slate-400 font-mono text-left w-full overflow-hidden relative">
                <div className="truncate w-full">&gt; Checking auth endpoints... 200 OK</div>
                <div className="truncate w-full">&gt; M-Pesa API webhook... ACTIVE</div>
                <div className="truncate w-full">&gt; Syncing CDN assets... DONE</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors ${active ? "bg-slate-700/50 text-white border-l-2 border-cyan-500" : "text-slate-300 hover:bg-slate-800"}`}>
      <Icon className={`w-4 h-4 ${active ? "text-cyan-400" : "text-slate-400"}`} />
      {label}
    </a>
  )
}

function ShieldIcon() {
  return (
    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
      <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
  )
}