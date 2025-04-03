import { useState } from "react";
import { Logo } from "../../../shared/components/Logo/Logo";

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={`w-71 h-screen bg-black-theme pt-6 pl-8`}>
      <div className="wrapper">
        <div className="logo">
          <Logo />
        </div>
        <div className="btn-trigger mt-7">
          <button onClick={() => setOpen(!open)} className="btn-trigger__btn">
            Click
          </button>
        </div>

        <div
          className={`sidebar ${open ? "opacity-100" : "opacity-0"} transition-opacity mt-21`}
        >
          <ul>
            <li className="mb-6">
              <a href="#">Главная</a>
            </li>
            <li className="mb-6">
              <a href="#">Мои треки</a>
            </li>
            <li className="mb-6">
              <a href="#">Выйти</a>
            </li>
            <li>
              <button>изменить цвет</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
