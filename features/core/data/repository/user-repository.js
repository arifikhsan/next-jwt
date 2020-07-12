export const getUserRepository = async () => {
  await new Promise((res) => setTimeout(res, 500));
  if (document.cookie.includes("swr-test-token=swr")) {
    return {
      name: "Shu",
      avatar: "https://github.com/shuding.png",
    };
  } else {
    const error = new Error("Not authorized!");
    error.status = 403;
    throw error;
  }
};
