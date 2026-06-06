import { ArrowRight, BookOpen, Calendar, Video, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function PublicHome() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* A subtle geometric or abstract background pattern placeholder */}
          <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary-900/40 via-slate-900 to-slate-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="inline-flex items-center rounded-full bg-primary-900/50 px-3 py-1 text-sm font-medium text-primary-100 ring-1 ring-inset ring-primary-500/20 mb-8 tracking-wide">
            Welcome home.
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight max-w-4xl tracking-tight">
            Encounter God, <br />
            <span className="text-primary-400 italic">Transform Your World.</span>
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mb-12 font-light leading-relaxed">
            Join a community of believers dedicated to the rigorous pursuit of truth, 
            compassionate outreach, and profound spiritual renewal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link 
              to="/portal" 
              className="inline-flex justify-center items-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-200"
            >
              Join the Portal
            </Link>
            <Link 
              to="/sermons" 
              className="inline-flex justify-center items-center gap-2 rounded-lg bg-white/10 px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-200 ring-1 ring-white/20"
            >
              Watch Latest Service <Video className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={BookOpen}
              title="Expository Preaching"
              description="We believe in the transformative power of God's Word, unpacking scripture verse by verse to reveal its truth for our lives today."
            />
            <FeatureCard 
              icon={Heart}
              title="Transformative Community"
              description="Life isn't meant to be lived alone. Join specialized ministries for youth, men, women, and profound outreach."
            />
            <FeatureCard 
              icon={Calendar}
              title="Dynamic Events"
              description="From deep-dive theological seminars to vibrant youth camps. Stay connected with our robust calendar of events."
            />
          </div>
        </div>
      </section>

      {/* Digital Call to Action */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif mb-6">A Digital Extension of the Sanctuary</h2>
            <p className="text-slate-600 text-lg mb-10">
              The HighRidge Tumaini Management System offers an entirely integrated experience. 
              Manage your tithes, browse ministries, register for events, and stay connected with leadership—all from our secure member portal.
            </p>
            <Link to="/portal" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
              Access your Dashboard <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
         </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="group rounded-2xl bg-slate-50 p-8 border border-slate-100 hover:border-slate-200 transition-colors">
      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-primary-600" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  )
}