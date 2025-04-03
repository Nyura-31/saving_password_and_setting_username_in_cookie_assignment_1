document.addEventListener("DOMContentLoaded", function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split("; ");
    let cookie = cookieArray.find((row) => row.startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }

  // 1️ Get the current count from the cookie
  let count = getCookie("count");

  // 2️ If the cookie exists, increment it, otherwise set it to 1
  if (count) {
    count = parseInt(count) + 1;
  } else {
    count = 1;
  }

  // 3️ Update the cookie with the new count
  setCookie("count", count, 7); // Cookie will expire in 7 days

  // 4️ Display the count on the respective page
  let countDisplay = document.getElementById("countDisplay");
  let pageViewDisplay = document.getElementById("pageViewCount");

  if (countDisplay) {
    countDisplay.innerText = `Page Views: ${count}`;
  }

  if (pageViewDisplay) {
    pageViewDisplay.innerText = count;
  }
});
