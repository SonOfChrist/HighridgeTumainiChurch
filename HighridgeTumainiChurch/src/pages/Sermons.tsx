import { Calendar, PlayCircle, Search, Clock, Disc } from "lucide-react";

export default function Sermons() {
  const SERMONS = [
    {
      id: 1,
      title: "The Armor of God: Standing Firm",
      speaker: "Pastor Nicholas Maramba",
      date: "Oct 15, 2026",
      series: "Spiritual Warfare",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80",
      duration: "45 min"
    },
    {
      id: 2,
      title: "Grace Under Pressure",
      speaker: "Pastor Nicholas Maramba",
      date: "Oct 8, 2026",
      series: "Philippians",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80",
      duration: "52 min"
    },
    {
      id: 3,
      title: "Building on the Rock",
      speaker: "Pastor Nicholas Maramba",
      date: "Oct 1, 2026",
      series: "Foundations",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
      duration: "48 min"
    }
  ];

  return (
    <div className="bg-[#F1F5F9] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-10 md:flex md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Sermons & Media</h1>
            <p className="text-slate-600 max-w-2xl text-sm">
              Browse our archive of Biblical teaching, series, and guest speakers. 
              Let the Word of Christ dwell in you richly.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search sermons..." 
              className="w-full md:w-64 pl-9 pr-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 bg-white text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERMONS.map(sermon => (
            <div key={sermon.id} className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:border-cyan-300 transition-colors flex flex-col">
              <div className="relative aspect-video overflow-hidden bg-slate-800 shrink-0">
                <img 
                  src={sermon.image} 
                  alt={sermon.title} 
                  className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-[#0F172A]/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-cyan-400 tracking-wider uppercase border border-slate-700">
                    {sermon.series}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-black/80 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-white tracking-wider flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {sermon.duration}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
                    {sermon.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 font-medium mb-4 flex-1">
                  {sermon.speaker}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[10px] uppercase tracking-wider font-bold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {sermon.date}
                  </span>
                  <button className="flex items-center gap-1 hover:text-cyan-600 transition-colors">
                    <Disc className="w-3.5 h-3.5" /> Audio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}