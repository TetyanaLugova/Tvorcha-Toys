import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import css from "./UserAuth.module.css";

export default function UserAuth() {
  return (
    <div className={css.containerAuth}>
      <NavLink to={"/signin"} className={css.signIn}>
        Sign in
      </NavLink>
      <div>
        <FaRegUser className={css.iconUser} />
      </div>
    </div>
  );
}