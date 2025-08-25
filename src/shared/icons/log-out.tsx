type Props = {
  width?: string;
  height?: string;
};

export function LogOut({ width = "24", height = "24" }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 24"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
    >
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
      <path d="M7 12h14l-3 -3m0 6l3 -3" />
    </svg>
  );
}
