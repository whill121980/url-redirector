const currentPath = window.location.pathname;

if (currentPath in pathMap) {
  const redirectUrl = pathMap[currentPath];
  window.location.replace(redirectUrl);
} else {
      const defaultRedirectUrl = pathMap['*'];
      window.location.replace(defaultRedirectUrl);
}
