import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";

export default function Home() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get("code");

  const handleLogout = () => {
    localStorage.removeItem("code");
    console.log("code value rmeoved from the lcoalStorage");
  };

  if (code) {
    localStorage.setItem("code", code);
    console.log("Code saved to local storage:", code);
  } else {
    console.log("No code value found in URL");
  }

  return (
    <section>
      <div>Welcome to the Github Dashboard!</div>
      <p>{code} stored</p>
      <button
        className="bg-red-700 text-white px-4 py-2 my-4 rounded-md"
        onClick={handleLogout}
      >
        <Link to="/">Logout</Link>
      </button>
    </section>
  );
}
