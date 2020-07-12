import React, { useEffect } from "react";
import Router from "next/router";
import { useUser } from "../../../core/app/swr/use-user";
import { logoutRepository } from "../../../core/data/repository/auth-repository";

function DashboardScreen() {
  const { user, loading, loggedOut, mutate } = useUser();

  useEffect(() => {
    if (loggedOut) Router.replace("/");
  }, [loggedOut]);

  if (loggedOut) return "redirecting...";
  if (loading) return "loading...";

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {user.name}. This is your dashboard</h2>
      <button
        onClick={() => {
          logoutRepository();
          mutate(null);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardScreen;
