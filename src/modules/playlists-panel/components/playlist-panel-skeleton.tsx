import styles from "./playlist-panel.module.css";

type Props = {
  count?: number;
};

export function PlaylistPanelSkeleton({ count = 3 }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: count }).map((_, index) => (
        <a className={styles["playlist-item"]} key={index}>
          <div className="text-white text-2xl">Lorem, ipsum.</div>
        </a>
      ))}
    </div>
  );
}
