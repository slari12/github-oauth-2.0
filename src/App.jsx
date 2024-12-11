import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [userData, setUserData] = useState(null);

  const loginGithub = () => {
    const redirectUri = "http://localhost:5173/auth/callback";
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}`;
    window.open(authUrl, "_blank");
  };
  // const handleLogin = async () => {
  //   try {
  //     const tokenResponse = await axios.post(
  //       "https://github.com/login/oauth/access_token",
  //       {
  //         params: {
  //           client_id: CLIENT_ID,
  //           client_secret: CLIENT_SECRET,
  //           code: code,
  //         },
  //         headers: {
  //           Accept: "aplication/json",
  //         },
  //       }
  //     );
  //     const access_token = tokenResponse.data.access_token;
  //     const userRes = await axios.get("https://api.github.com/user", {
  //       header: {
  //         Authorization: `Bearer ${access_token}`,
  //       },
  //     });
  //     setUserData(userRes.data);
  //   } catch (error) {
  //     console.error("error fetching data");
  //   }
  // };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      handleLogin(code);
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <a href="" target="_blank">
        <button
          className="bg-green-900 bold px-10 py-3 mb-6 rounded-md bold hover:bg-green-800 hover:underline"
          onClick={loginGithub}
        >
          Login with Github
        </button>
      </a>
    </section>
  );
}

export default App;

//must add logout (most probably with localStorage)
//display github account username and bio first
//redux toolkit aplication
