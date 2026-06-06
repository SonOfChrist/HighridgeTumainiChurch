import { MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { getUpcomingEvents } from "../lib/api";

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // For this demo, let's use some mocked events if API is empty
  const FALLBACK_EVENTS = [
    {
      id: "1",
      title: "Annual Youth Camp",
      description: "A 3-day retreat for spiritual growth and fellowship.",
      date: new Date(new Date().getTime() + 86400000 * 5).toISOString(),
      location: "Limuru Conference Center"
    },
    {
      id: "2",
      title: "Men's Breakfast & Prayer",
      description: "Monthly gathering for men. Breakfast served.",
      date: new Date(new Date().getTime() + 86400000 * 12).toISOString(),
      location: "Church Hall"
    },
    {
      id: "3",
      title: "Night of Worship",
      description: "Join us for an extended evening of uninterrupted worship and praise.",
      date: new Date(new Date().getTime() + 86400000 * 20).toISOString(),
      location: "Main Sanctuary"
    }
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getUpcomingEvents();
        setEvents(data.length > 0 ? data : FALLBACK_EVENTS);
      } catch (e) {
        setEvents(FALLBACK_EVENTS);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="bg-[#F1F5F9] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Upcoming Events</h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            Stay connected with the church community. Register for upcoming events, seminars, and fellowship gatherings.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-slate-500">Loading events...</div>
        ) : (
          <div className="space-y-4">
            {events.map((event) => {
               const d = new Date(event.date);
               return (
                <div key={event.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-start gap-6 hover:border-cyan-200 transition-colors">
                  <div className="shrink-0 w-24 h-24 bg-slate-50 border border-slate-100 rounded-lg flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">{d.toLocaleString('default', { month: 'short' })}</span>
                    <span className="text-3xl font-bold text-slate-900 leading-none my-1">{d.getDate()}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-slate-900 mb-2">{event.title}</h2>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                      <div className="flex items-center gap-1.5 border border-slate-100 bg-slate-50 px-2.5 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-cyan-600" />
                        {d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      <div className="flex items-center gap-1.5 border border-slate-100 bg-slate-50 px-2.5 py-1 rounded-md">
                        <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                        {event.location}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col justify-center h-24">
                    <button className="bg-cyan-50 hover:bg-cyan-100 text-cyan-700 font-bold text-xs px-5 py-2.5 rounded-lg transition-colors border border-cyan-100">
                      Register Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}