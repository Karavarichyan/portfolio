<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-row">
        <a href="./index.html" class="logo"
          ><strong>Karavarichyan</strong> portfolio</a
        >
        <button
          class="dark-mode-btn"
          :class="dark && 'dark-mode-btn--active'"
          @click="dark = !dark"
        >
          <img
            src="@/img/icons/sun.svg"
            alt="Light mode"
            class="dark-mode-btn__icon"
          />
          <img
            src="@/img/icons/moon.svg"
            alt="Dark mode"
            class="dark-mode-btn__icon"
          />
        </button>

        <ul class="nav-list">
          <li class="nav-list__item">
            <router-link
              to="/"
              class="nav-list__link"
              active-class="nav-list__link--active"
            >
              Home
            </router-link>
          </li>
          <li class="nav-list__item">
            <router-link
              to="/contacts"
              class="nav-list__link"
              active-class="nav-list__link--active"
            >
              Contacts
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <ul class="social">
          <li class="social__item">
            <a href="#!"><img src="@/img/icons/vk.svg" alt="Link" /></a>
          </li>
          <li class="social__item">
            <a href="#!"><img src="@/img/icons/instagram.svg" alt="Link" /></a>
          </li>
          <li class="social__item">
            <a href="#!"><img src="@/img/icons/twitter.svg" alt="Link" /></a>
          </li>
          <li class="social__item">
            <a href="#!"><img src="@/img/icons/gitHub.svg" alt="Link" /></a>
          </li>
          <li class="social__item">
            <a href="https://www.linkedin.com/in/narek-karavarichyan-5b8573222/"
              ><img src="@/img/icons/linkedIn.svg" alt="Link"
            /></a>
          </li>
        </ul>
        <div class="copyright">
          <p>© 2022 frontend-dev.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
    };
  },
  watch: {
    dark(dark) {
      if (dark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
  },
};
</script>
