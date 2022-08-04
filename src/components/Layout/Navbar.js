import React from "react";
function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between text-sm md:text-lg px-10 bg-neutral-800 text-white h-10">
      <h1>CRYPTO</h1>
      <ul className="flex items-center justify-around">
        <li>Login</li>
        <li className="mx-5">Sign Up</li>
        <li>Search</li>
      </ul>
    </nav>
  );
}

export default Navbar;
