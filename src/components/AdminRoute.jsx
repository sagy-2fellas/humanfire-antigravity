import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { localAuth } from "@/api/localAuth";
import { Loader2 } from "lucide-react";

export default function AdminRoute({ children }) {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const isDev = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if (isDev) {
      // Auto-login as admin on localhost
      const sessionKey = "hf_admin_session";
      if (!localStorage.getItem(sessionKey)) {
        localStorage.setItem(sessionKey, JSON.stringify({
          email: "sagy.shein@gmail.com",
          full_name: "Humanfire Admin",
          role: "admin",
          loggedInAt: new Date().toISOString()
        }));
      }
      setIsAuthed(true);
      setIsChecking(false);
      return;
    }
    localAuth.isAuthenticated().then((authed) => {
      setIsAuthed(authed);
      setIsChecking(false);
    });
  }, []);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Loader2 className="h-12 w-12 text-slate-400 animate-spin" />
      </div>
    );
  }

  if (!isAuthed) {
    return <Navigate to="/AdminLogin" replace />;
  }

  return children;
}
