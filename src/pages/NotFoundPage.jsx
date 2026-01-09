import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-3">404 - Page not found</h1>
      <p className="text-gray-700 mb-6">The page you requested does not exist.</p>
      <NavLink to="/" className="underline">Go back home</NavLink>
    </div>
  );
}
