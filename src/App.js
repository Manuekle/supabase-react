import { useState, useEffect } from "react";
import { supabase } from "./client";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, []);

  async function checkUser() {
    const user = supabase.auth.user();
    console.log("user", user);
    setUser(user);
  }

  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: "github",
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  if (user) {
    return (
      <div className="flex flex-col mt-10">
        <h1 className="flex justify-center text-center font-bold">
          Hello, {user.email}
        </h1>
        <div className="flex justify-center">
          <button
            className="bg-black hover:bg-zinc-600 rounded-md py-2 px-2 text-white"
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-10">
      <h1 className="flex justify-center text-center font-bold">
        Hello, please sign in!
      </h1>
      <div className="flex justify-center">
        <button
          className="bg-black hover:bg-zinc-600 rounded-md py-2 px-2 text-white"
          onClick={signInWithGithub}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default App;
