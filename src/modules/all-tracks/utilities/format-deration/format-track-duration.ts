export const formatDuration = (durationInSeconds?: number): string | null => {
  if (!durationInSeconds) return null;
  const minutes = Math.floor(durationInSeconds / 60);
  let seconds = String(durationInSeconds % 60);

  if (Number(seconds) < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
};
