  <template>
    <header>
      <div class="header flex jc-sb">
        <img class="header-img" src="./img/IMG_AC9FA0F843A4-1.jpeg" alt="" />
        <div class="header-nav flex jc-sb">
          <div class="flex jc-sb">
            <router-link to="/fourth" class="a">Лента новостей</router-link>
            <router-link to="/fifth" class="a">Список пользователей</router-link>
          </div>
          <div class="flex jc-sb">
            <router-link to="/third" class="a">Личный кабинет</router-link>
            <button @click="logOut" class="header-btn">Exit</button>
          </div>
        </div>
      </div>
    </header>
  </template>
<script >
export default {
  methods: {
    logOut() {
      localStorage.removeItem("user");
      this.$router.push("/second")
    },
  },
};
</script>


<style scoped>
header {
  height: 55px;
  box-shadow: 5px 3px 6px gray;
}
.header {
  padding: 5px 170px;
}
.flex {
  display: flex;
}
.jc-sb {
  justify-content: space-between;
  align-items: center;
}

.header-nav {
  width: 600px;
}
.header-img {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 3px solid black;
  margin-right: 50px;
}
.header-btn {
  width: 45px;
  height: 25px;
  background-color: black;
  color: white;
  border-radius: 7px;
  cursor: pointer;
}
.a {
  color: rgb(100 100 100);
  margin-right: 30px;
  text-decoration: none;
  font-size: 20px;
  text-shadow: 2px 2px 3px rgb(128 128 128);
}
.c-w {
  color: rgb(52, 52, 52);
}
a:hover {
  color: rgb(52, 52, 52);
}
</style>
