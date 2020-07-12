export function loginRepository() {
  document.cookie = "swr-test-token=swr;";
}

export function logoutRepository() {
  document.cookie = "swr-test-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
