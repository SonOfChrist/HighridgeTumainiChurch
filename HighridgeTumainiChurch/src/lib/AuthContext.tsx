import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import type { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  role: string | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
  signInWithGoogle: async () => {},
  signInWithEmail: async () => {},
  registerWithEmail: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setRole(docSnap.data().role || 'member');
          } else {
            await setDoc(docRef, {
              uid: currentUser.uid,
              email: currentUser.email,
              role: 'member',
              profile: {
                firstName: currentUser.displayName?.split(' ')[0] || '',
                lastName: currentUser.displayName?.split(' ').slice(1).join(' ') || '',
              },
              createdAt: new Date().toISOString()
            });
            setRole('member');
          }
        } catch (e) {
            console.log("Error fetching role", e)
        }
      } else {
        setRole(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Successfully logged in!");
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in");
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully logged in!");
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in");
      throw error;
    }
  };

  const registerWithEmail = async (email: string, password: string, firstName: string, lastName: string) => {
     try {
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       const u = userCredential.user;
       const docRef = doc(db, "users", u.uid);
       await setDoc(docRef, {
          uid: u.uid,
          email: u.email,
          role: 'member',
          profile: {
             firstName,
             lastName
          },
          createdAt: new Date().toISOString()
       });
       toast.success("Registration successful!");
     } catch (error: any) {
       toast.error(error.message || "Failed to register");
       throw error;
     }
  }

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, loading, signInWithGoogle, signInWithEmail, registerWithEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);