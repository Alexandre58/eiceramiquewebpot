import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { UserContext } from "@/context/UserContext";
import AsideProfil from "./AsideProfil";

const MyLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <NavBar />

        {children}
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default MyLayout;
