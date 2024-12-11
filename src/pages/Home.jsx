import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import axios from "axios";


export default function Home() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get("code");

  const handleLogout = () => {
    localStorage.removeItem("code");
    console.log("code value removed from the lcoalStorage");
  };

  if (code) {
    localStorage.setItem("code", code);
    console.log("Code saved to local storage:", code);
  } else {
    console.log("No code value found in URL");
  }

  const fetchUser = async () => {
    try {
      const tokenRes = await axios.post(
        "https://github.com/login/oauth/access_token",
        {
          params: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code,
          },
          headers: {
            Accept: "application/json",
          },
        }
      );
      const accessToken = tokenRes.data.access_token;
      if (accessToken) {
        console.log("Access Token:", accessToken);
      } else {
        console.log("No Access Token found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div>Welcome to the Github Dashboard!</div>
      <p>{code} stored</p>
      <div className="flex justify-center gap-2">
        <button
          className="bg-red-700 text-white px-4 py-2 my-4 rounded-md"
          onClick={handleLogout}
        >
          <Link to="/">Logout</Link>
        </button>
        <button
          className="bg-green-800 text-white px-4 py-2 my-4 rounded-md"
          onClick={fetchUser}
        >
          Render Access Token
        </button>
      </div>
    </section>
  );
}
