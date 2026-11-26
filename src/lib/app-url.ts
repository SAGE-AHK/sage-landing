const base = (import.meta.env.VITE_SAGE_APP_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const appLinks = {
  login: `${base}/login`,
  register: `${base}/register`,
};
