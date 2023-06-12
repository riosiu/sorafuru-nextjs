import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-between">
        <div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          <ul className="flex flex-row ml-3 gap-4">
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>Project</Link>
            </li>
            <li>
              <Link href={""}>Features</Link>
            </li>
            <li>
              <Link href={""}>Success Stories</Link>
            </li>
          </ul>
        </div>
        <div className="mr-4 flex flex-row gap-4">
          <span className="btn btn-outline btn-accent">Sign In</span>
          <span className="btn btn-outline btn-accent">Sign Up</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
