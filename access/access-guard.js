(function () {
  var ACCESS_KEY = "site_access_granted";

  // Derive login page URL from this script's own location (works on any base path)
  var scriptSrc = document.currentScript.src;
  var LOGIN_URL = scriptSrc.replace("access-guard.js", "login.html");

  function isLoginPage() {
    return window.location.pathname.indexOf("/access/login") !== -1;
  }

  if (!isLoginPage() && sessionStorage.getItem(ACCESS_KEY) !== "1") {
    var next = window.location.pathname + window.location.search + window.location.hash;
    var target = LOGIN_URL + "?next=" + encodeURIComponent(next);
    window.location.replace(target);
    return;
  }

  window.logout = function () {
    sessionStorage.removeItem(ACCESS_KEY);
    window.location.replace(LOGIN_URL);
  };
})();
