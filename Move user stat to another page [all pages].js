(function () {
  const path = window.location.pathname;

  // Match only if path is exactly like /u1, /u123, etc.
  const match = path.match(/^\/u(\d+)$/);

  if (match) {
    const userId = match[1];
    window.location.replace(`/h2-userprofile-page?uid=${userId}`);
  }
})();
