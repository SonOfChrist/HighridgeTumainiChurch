import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "../../lib/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const { signInWithEmail, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      await signInWithEmail(data.email, data.password);
      navigate("/portal");
    } catch (e) {
      // toast is handled in AuthContext
    }
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate("/portal");
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[#F1F5F9]">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
            H
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Sign in to your account</h1>
          <p className="text-sm text-slate-500 mt-2">Welcome back to the HighRidge Tumaini Management Portal</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              {...register("email")}
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              {...register("password")}
              className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2.5 rounded-md transition-colors text-sm disabled:opacity-70 flex justify-center items-center gap-2"
          >
            {isSubmitting ? "Signing in..." : <>Sign In <LogIn className="w-4 h-4" /></>}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <div className="border-t border-slate-200 flex-1"></div>
          <span className="text-xs text-slate-500 px-4 uppercase font-bold tracking-wider">Or continue with</span>
          <div className="border-t border-slate-200 flex-1"></div>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          className="w-full mt-6 bg-white border border-slate-300 text-slate-700 font-semibold py-2.5 rounded-md hover:bg-slate-50 transition-colors text-sm flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
          </svg>
          Google
        </button>

        <p className="mt-8 text-center text-sm text-slate-600">
          Not a member? <Link to="/register" className="text-cyan-600 font-semibold hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}