import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import IconHeader from "../IconHeader/IconHeader";

export default function Header() {

  return (
    <header className={css.header}>
      <Logo />
      <Menu/>
      <IconHeader /> 
    </header>
  );
}