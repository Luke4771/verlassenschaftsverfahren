(function () {
  var ACCESS_KEY = "site_access_granted";
  var LOGIN_PATH = "/access/login.html";

  function isLoginPage(pathname) {
    return pathname === LOGIN_PATH || pathname === "/access/login";
  }

  if (!isLoginPage(window.location.pathname) && sessionStorage.getItem(ACCESS_KEY) !== "1") {
    var next = window.location.pathname + window.location.search + window.location.hash;
    var target = LOGIN_PATH + "?next=" + encodeURIComponent(next);
    window.location.replace(target);
    return;
  }

  window.logout = function () {
    sessionStorage.removeItem(ACCESS_KEY);
    window.location.replace(LOGIN_PATH);
  };
})();
