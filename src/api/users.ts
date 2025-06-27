export const fetchUserData = async () => {
  // Add cache-busting parameter to get fresh data every time
  const cacheBuster = Date.now();
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?_t=${cacheBuster}`);
  if (!res.ok) throw new Error("Network error");
  return res.json();
};
