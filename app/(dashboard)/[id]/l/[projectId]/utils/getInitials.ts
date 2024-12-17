export const getInitials = (fullName: string) => {
  if (!fullName) return;
  return fullName
    .split(" ")
    .slice(0, 2)
    .map((namePart) => namePart[0]?.toUpperCase())
    .join("");
};
