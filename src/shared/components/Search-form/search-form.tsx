import clsx from "clsx";
import styles from "./search-form.module.css";
import { useState } from "react";
import { useTracks } from "./hooks/use-get-search-tracks";

export const SearchForm = () => {
  const [value, setValue] = useState<string>("");

  const tracks = useTracks(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  console.log(tracks.data, "test");
  return (
    <form className="flex items-center w-full">
      <div className={styles["input-wrapper"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx(styles.icon, "size-4.5")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Поиск"
          className={styles.input}
          value={value}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
