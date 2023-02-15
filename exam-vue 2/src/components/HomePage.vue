<template>
  <body>
    <div>
      <EditData v-if="editWind"></EditData>
      <Header></Header>
      <main>
        <div class="date">
          <div class="data_text">
            Имя: <span class="acc hpName">{{ user.name }}</span
            ><br />
            Фамилия: <span class="acc hpSurname">{{ user.surname }}</span
            ><br />
            Возраст: <span class="acc hpAge">{{ user.age }}</span
            ><br />
          </div>
          <button class="btn-data" @click="add">редактировать профиль</button>
        </div>
        <hr />
        <CreateNewPost />
        <hr />
        <PostsUser />
        <hr />
      </main>
      <Footer></Footer>
    </div>
  </body>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import EditData from "./EditData.vue";
import CreateNewPost from "./CreateNewPost.vue";
import PostsUser from "./PostsUser.vue";
export default {
  components: {
    Header,
    Footer,
    EditData,
    CreateNewPost,
    PostsUser,
  },
  data() {
    return {
      user: {},
      posts: JSON.parse(localStorage.getItem("posts")),
      editWind: false,
    };
  },
  methods: {
    add() {
      this.editWind = !this.editWind;
    },
    editData() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },
  },
  created() {
    this.editData();
  },
  beforeUpdate() {
    this.editData();
  },
};
</script>
<style scoped>
.date {
  margin-top: 50px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.data_text {
  color: rgb(94, 91, 91);
  font-size: 20px;
  margin-top: 60px;
}
.acc {
  color: rgb(73, 72, 72);
  font-size: 25px;
}
.btn-data {
  width: 110px;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 30px;
}
hr {
  margin: 50px 160px;
  border-bottom: 1px;
  box-shadow: 1px 1px 3px rgb(65 65 65);
}
</style>