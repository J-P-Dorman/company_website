export const decodeString = (string: string) => {
  try {
    const token = string ? atob(decodeURIComponent(string)) : undefined;
    return token;
  } catch {
    return undefined;
  }
};

export const encodeString = (string: string) => {
  const encoded = btoa(encodeURIComponent(string));
  return encoded;
};
