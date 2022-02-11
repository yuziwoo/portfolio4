window.addEventListener("DOMContentLoaded", (e) => {
  let main = document.getElementsByTagName("main")[0];
  let bg = document.getElementsByClassName("bg")[0];
  let sec_01 = document.getElementsByClassName("sec_01")[0];
  let sec_02 = document.getElementsByClassName("sec_02")[0];
  let sec_03 = document.getElementsByClassName("sec_03")[0];
  let top = document.documentElement.scrollTop;
  let scale = 1;

  if (top >= main.offsetTop + sec_01.offsetTop - window.innerHeight  + sec_01.offsetHeight - 200) {
    if (!sec_01.classList.contains("sec_01_on")) {
      sec_01.classList.add("sec_01_on");
    }
  }

  if (top >= main.offsetTop + sec_02.offsetTop - window.innerHeight  + 300) {
    if (!sec_02.classList.contains("sec_02_on")) {
      sec_02.classList.add("sec_02_on");
    }
  }

  if (top >= main.offsetTop + sec_03.offsetTop - window.innerHeight  + sec_03.offsetHeight - 200) {
    if (!sec_03.classList.contains("sec_03_on")) {
      sec_03.classList.add("sec_03_on");
    }
  }

  window.addEventListener("scroll", (e) => {
    top = document.documentElement.scrollTop;

    if (top >= bg.offsetTop + main.offsetTop) {
      if (scale <= 1.2) {
        scale = (top - bg.offsetTop - main.offsetTop) / 3750 + 1;
        bg.style.transform = `scale(${scale})`;
      }
    }

    if (top >= main.offsetTop + sec_01.offsetTop - window.innerHeight  + sec_01.offsetHeight - 100) {
      if (!sec_01.classList.contains("sec_01_on")) {
        sec_01.classList.add("sec_01_on");
      }
    }

    if (top >= main.offsetTop + sec_02.offsetTop - window.innerHeight  + 300) {
      if (!sec_02.classList.contains("sec_02_on")) {
        sec_02.classList.add("sec_02_on");
      }
    }

    if (top >= main.offsetTop + sec_03.offsetTop - window.innerHeight  + sec_03.offsetHeight - 200) {
      if (!sec_03.classList.contains("sec_03_on")) {
        sec_03.classList.add("sec_03_on");
      }
    }
  })
});
