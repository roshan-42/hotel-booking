export const useRole = () => {
  const user = localStorage.getItem("user");
  console.log("Check what is in user:", user);

  const parsedUser = user ? JSON.parse(user) : null;

  return parsedUser?.role || null;
};
