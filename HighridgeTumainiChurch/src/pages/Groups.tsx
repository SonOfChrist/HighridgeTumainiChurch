import { Users, Heart, Music, BookOpen } from "lucide-react";

export default function Groups() {
  const groups = [
    {
      id: "youth",
      name: "Radiant Youth",
      description: "A vibrant community for high school and college students focusing on identity and purpose.",
      members: 142,
      meetingTime: "Sundays at 2:00 PM",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      id: "womens",
      name: "Women of Grace",
      description: "Empowering women through prayer, mentorship, and deep fellowship.",
      members: 256,
      meetingTime: "Thursdays at 6:00 PM",
      icon: Heart,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      id: "worship",
      name: "Worship Ministry",
      description: "Dedicated vocalists and musicians leading the congregation into God's presence.",
      members: 48,
      meetingTime: "Saturdays at 9:00 AM",
      icon: Music,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      id: "study",
      name: "Men's Bible Study",
      description: "Iron sharpening iron in rigorous theological study and life application.",
      members: 189,
      meetingTime: "Wednesdays at 7:00 PM",
      icon: BookOpen,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <div className="bg-[#F1F5F9] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-center md:text-left">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Ministries & Groups</h1>
            <p className="text-slate-600 max-w-xl text-sm">
              Discover your place in our community. Join a ministry group to serve, grow, and connect deeply with others.
            </p>
          </div>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs px-6 py-3 rounded-lg shadow-sm transition-colors">
            Start a Small Group
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map(group => {
            const Icon = group.icon;
            return (
              <div key={group.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:border-cyan-200 transition-colors">
                <div className="p-6 flex-1">
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${group.bg} border border-slate-100`}>
                    <Icon className={`w-6 h-6 ${group.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{group.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{group.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      {group.members} Members
                    </span>
                    <span>{group.meetingTime}</span>
                  </div>
                </div>
                <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 shrink-0">
                  <button className="w-full bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs px-4 py-2.5 rounded-lg transition-colors shadow-sm">
                    Request to Join
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  );
}