export const getInitials = (fullName: string) => {
  return fullName
    .split(' ')
    .slice(0, 2)
    .map((namePart) => namePart[0]?.toUpperCase())
    .join('');
};
