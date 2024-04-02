import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_API_SPACE,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export default client;
