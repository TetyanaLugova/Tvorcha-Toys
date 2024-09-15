import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import UserAuth from "../UserAuth/UserAuth";
import Menu from "../Menu/Menu";
export default function Header() {

  return (
    <header className={css.header}>
      <Logo />
      <Menu/>
      <UserAuth /> 
    </header>
  );
}