<template>
  <div>
    <header class="header">
      <div class="header__wrapper">
        <h1 class="header__title">
          <strong>Hi, my name is <em>Narek</em></strong
          ><br />
          a frontend developer
        </h1>
        <div class="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" class="btn">Download CV</a>
      </div>
    </header>

    <main class="section">
      <div class="container">
        <ul class="content-list">
          <li class="content-list__item">
            <h2 class="title-2">Frontend</h2>
            <p>JavaScript, TypeScript, ReactJS, HTML, CSS, BootStrap,</p>
          </li>
          <li class="content-list__item">
            <h2 class="title-2">Backend</h2>
            <p>python, MySQL</p>
          </li>
        </ul>
      </div>
    </main>
  </div>
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
