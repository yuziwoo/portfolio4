window.addEventListener("DOMContentLoaded", (e) => {

  let footer = document.createElement("footer");
  footer.innerHTML = `
  <div class="site_map">
    <ul>
      <li>
        <a href="index.html">
          <span>HOME</span>
        </a>
      </li>
      <li>
        <a href="about.html">
          <span>ABOUT</span>
        </a>
      </li>
      <li>
        <a href="works.html">
          <span>WORKS</span>
        </a>
      </li>
      <li>
        <a href="contact.html">
          <span>CONTACT</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="info">
    <span>
      MON - SUN : 00:00 - 24:00<br>
      Call. 010 2649 9674<br>
      Instagram. jiw_1012<br>
      Email. yuziwoo@naver.com<br>
      COPYRIGHT (C)2022 YUZIWOO ALL RIGHTS RESERVED.
    </span>
  </div>`;
  document.body.appendChild(footer);

});
