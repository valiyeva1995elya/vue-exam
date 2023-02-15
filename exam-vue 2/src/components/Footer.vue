<template>
  <footer>
    <div class="footer flex jc-sb">
      <div class="footer-logo flex">
        <img class="footer-img" src="./img/IMG_AC9FA0F843A4-1.jpeg" alt="" />
        <p class="text-logo-footer">
          © 1995-2023 Reverso Technologies Inc. <br />
          Все права защищены.
        </p>
      </div>
      <div class="footer-nav">
        <router-link to="/fourth" class="a">Лента новостей</router-link>
        <router-link to="/fifth" class="a">Список пользователей</router-link>
        <router-link to="/third" class="a">Личный кабинет</router-link>
      </div>
      <div class="footer-cont flex">
        <div class="footer-lang flex">
          <div class="footer-l">KAZ</div>
          <div class="footer-l c-w border-s">RU</div>
          <div class="footer-l">EN</div>
        </div>
        <div class="footer-block">
          <a href="https://www.instagram.com/">
            <img class="footer-img-cont" src="./img/instagram (1).png" alt="" />
          </a>
          <a href="https://telegram.org/">
            <img class="footer-img-cont" src="./img/telegram.png" alt="" />
          </a>
          <a href="https://twitter.com/">
            <img class="footer-img-cont" src="./img/twitter-sign.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
</script>
<style scoped>
.flex {
  display: flex;
}
.jc-sb {
  justify-content: space-between;
  align-items: center;
}
.header,
.footer {
  padding: 5px 170px;
}
.a,
a {
  color: rgb(100 100 100);
  margin-right: 30px;
  text-decoration: none;
  font-size: 20px;
  text-shadow: 2px 2px 3px rgb(128 128 128);
}

footer {
  box-shadow: 5px -3px 6px gray;
  margin-top: 100px;
}
.footer-logo {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.footer-img {
  width: 35px;
  height: 35px;
  border-radius: 50px;
  border: 3px solid black;
}
.footer-img-cont {
  width: 20px;
  height: 20px;
  padding: 5px;
  margin: 8px -25px 2px 4px;
  cursor: pointer;
}
.text-logo-footer {
  color: rgb(100 100 100);
  font-size: 9px;
  text-align: center;
  text-shadow: 2px 2px 3px rgb(128 128 128);
}
.footer-nav {
  flex-direction: column;
}
.text-nav-footer {
  font-size: 14px;
  margin-bottom: 5px;
}
.footer-cont {
  flex-direction: column;
}
.footer-l {
  width: 30px;
  height: 16px;
  padding: 6px;
  color: rgb(100 100 100);
  text-align: center;
  font-size: 13px;
  text-shadow: 2px 2px 3px rgb(128 128 128);
  margin-top: 16px;
  cursor: pointer;
}
.border-s {
  border-left: 1px solid rgb(100 100 100);
  border-right: 1px solid rgb(100 100 100);
}
.c-w {
  color: rgb(52, 52, 52);
}
a:hover {
  color: rgb(52, 52, 52);
}
.footer-l:hover {
  color: rgb(52, 52, 52);
}
</style>
