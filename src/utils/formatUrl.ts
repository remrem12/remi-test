export const formatUrl = (url: string) => {
  // support youtube url and embed url
  if (!url.includes("embed")) {
    let path = url.split("?v=")[1];
    let id = path.split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  } else {
    return url;
  }
};
