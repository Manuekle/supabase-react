import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
// ? Switch DarkMode
import SwitchComponent from "../components/SwitchComponent";

// img
import Slime from "../assets/slime.png";
import Bars from "../assets/svg/Bars";

//SessionComponent
import SessionComponent from "../components/SessionComponent";

// Language: javascript
function Layout() {
  const [themes, setThemes] = useState("dark");
  const isDark = themes === "dark";

  const toggleTheme = () => {
    setThemes(isDark ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <StyledLayout>
        {/* Start Navbar section */}
        <nav className="bg-zinc-800">
          <section className="grid grid-cols-2 py-2 gap-2 container mx-auto">
            <div className="col-span-1 lg:col-span-1 px-4">
              <div className="flex justify-start items-center">
                <img src={Slime} alt="" className="w-20" />
                <h1 className="text-2xl lg:text-3xl font-black">
                  Minimal
                </h1>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-1 px-4 mt-4">
              <ul className="flex justify-end items-center gap-6">
                <li className="mt-1.5">
                  <SwitchComponent toggleTheme={toggleTheme} isDark={isDark} />
                </li>
                <li>
                  <SessionComponent />
                </li>
              </ul>
            </div>
            <div className="lg:col-span-1 flex justify-end items-center lg:hidden block px-4">
              <button>
                <Bars width={30} height={30} />
              </button>
            </div>
          </section>
        </nav>
        {/* End Navbar section */}
      </StyledLayout>
    </ThemeProvider>
  );
}

export default Layout;

//Styled Components
const StyledLayout = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  h1 {
    color: ${({ theme }) => theme.text};
  }
  h2 {
    color: ${({ theme }) => theme.text};
  }
  h3 {
    color: ${({ theme }) => theme.text};
  }
  h4 {
    color: ${({ theme }) => theme.text};
  }
  h5 {
    color: ${({ theme }) => theme.text};
  }
  h6 {
    color: ${({ theme }) => theme.text};
  }
  p {
    color: ${({ theme }) => theme.text};
  }
  span {
    color: ${({ theme }) => theme.text};
  }
  svg {
    fill: ${({ theme }) => theme.svg};
    color: ${({ theme }) => theme.svg};
  }
  nav {
    background: ${({ theme }) => theme.nav};
  }
`;

const dark = {
  background: "#333",
  text: "#fff",
  svg: "#fff",
  nav: "##27272A",
};

const light = {
  background: "#fff",
  text: "#333",
  svg: "#fff",
  nav: "#eee",
};
