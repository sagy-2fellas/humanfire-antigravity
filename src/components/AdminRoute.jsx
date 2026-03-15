import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { localAuth } from "@/api/localAuth";
import { Loader2 } from "lucide-react";

export default function AdminRoute({ children }) {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
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
