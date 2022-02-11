window.addEventListener("DOMContentLoaded", (e) => {
  window.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop > 0) {
      if (!document.getElementsByTagName("header")[0].classList.contains("header_on")) {
        document.getElementsByTagName("header")[0].classList.add("header_on")
      }
    } else if (document.documentElement.scrollTop <= 0) {
      document.getElementsByTagName("header")[0].classList.remove("header_on")
    }
  });
});
