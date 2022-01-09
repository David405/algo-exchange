// this entials our config files
export const formatUrlHeader = query => {
  let firstLetter = query.charAt(0).toUpperCase();
  const rest = query.slice(1);

  return `${firstLetter}${rest}`;
};
