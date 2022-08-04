import { useState, useEffect } from "react";
import { supabase } from "../utils/client";

// Icons
import Github from "../assets/svg/Github";

function SessionComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, []);

  async function checkUser() {
    const user = supabase.auth.user();
    console.log("user", user.user_metadata.preferred_username);
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
      <>
        <div className="flex gap-3 items-center">
          <button onClick={signOut}>
            <img
              src={user.user_metadata.avatar_url}
              alt="Github"
              className="w-8 rounded-full"
            />
          </button>
          <h1 className="font-black">{user.user_metadata.preferred_username}</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={signInWithGithub} className="flex items-center gap-2 bg-black py-2 px-2 font-bold rounded-lg">
        <h1 style={{color: 'white'}}>Login with Github</h1>
        <Github width={35} height={35} />
      </button>
    </>
  );
}

export default SessionComponent;
