import { Clock, History, FileText, Settings, LogOut, LogIn } from "lucide-react";
import { useAuth } from "../../lib/AuthContext";

export default function MemberDashboard() {
  const { user, loading, signInWithGoogle, logout } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-[calc(100vh-(--spacing(20)))] bg-slate-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Member Portal</h2>
        <p className="text-slate-600 mb-8 max-w-sm text-center">Sign in to manage your giving, view your digital profile, and register for events.</p>
        <button 
          onClick={signInWithGoogle}
          className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
        >
          <LogIn className="w-5 h-5" />
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-1 overflow-hidden bg-[#F1F5F9]">
      <aside className="w-56 bg-slate-100 border-r border-slate-200 hidden md:flex flex-col p-4 gap-1 shrink-0 overflow-y-auto">
        <div className="text-[10px] font-bold text-slate-500 uppercase px-3 py-2 mb-1">Your Portal</div>
        <nav className="space-y-1">
          <SidebarItem icon={Clock} label="Overview" active />
          <SidebarItem icon={History} label="Giving History" />
          <SidebarItem icon={FileText} label="Event Registrations" />
          <SidebarItem icon={Settings} label="Settings" />
        </nav>
        <div className="mt-auto pt-4 border-t border-slate-200">
          <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors text-slate-600 hover:bg-slate-200 hover:text-slate-900 text-xs">
            <LogOut className="w-4 h-4 text-slate-400" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm shrink-0">
          <h1 className="text-xl font-bold text-slate-900 mb-1">Welcome Back, {user.displayName?.split(' ')[0] || 'Member'}</h1>
          <p className="text-slate-500 text-xs mb-6">Here is your customized portal overview.</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Recent Giving</span>
              <div className="mt-2 text-2xl font-bold text-slate-900">KES 0</div>
              <div className="text-xs text-slate-400 mt-1">No recent tithes</div>
            </div>
            <div className="p-4 rounded-lg bg-cyan-50 border border-cyan-100 text-cyan-900 flex flex-col justify-between">
              <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Upcoming Event</span>
              <div className="mt-2 text-xl font-bold truncate">No Registered Events</div>
              <div className="text-xs opacity-80 mt-1">Check the calendar to sign up</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden min-h-0 flex-1 flex flex-col">
          <div className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
            <h3 className="font-bold text-slate-800 text-sm">Your Ministry Groups</h3>
          </div>
          <div className="p-4 flex-1 overflow-auto">
            <p className="text-slate-500 text-xs">You are not currently active in any ministry groups. Join one to connect with others!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors ${active ? "bg-cyan-50 text-cyan-700 border-l-2 border-cyan-500" : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"}`}>
      <Icon className={`w-4 h-4 ${active ? "text-cyan-600" : "text-slate-400"}`} />
      {label}
    </a>
  )
}