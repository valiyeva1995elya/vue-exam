<template>
  <div class="create_post flex">
    <h2>Новый пост</h2>
    <input class="post-title" type="text" placeholder="Тема" v-model="title" />
    <textarea
      class="post-text"
      name="post"
      cols="40"
      rows="10"
      v-model="post"
    ></textarea>
    <button @click="addPost" class="post-btn">Добавить</button>
  </div>
</template>

<script>
import url from "../url";
export default {
  components: {
    url,
  },
  data() {
    return {
      title: "",
      post: "",
      user: JSON.parse(localStorage.getItem("user")),
      users: JSON.parse(localStorage.getItem("users")),
    };
  },
  methods: {
    addPost() {
      let payload = {
        email: this.user.email,
        title: this.title,
        post: this.post,
      };
      fetch(url.BASE_URL + "/posts", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(payload),
      })
        .then(() => alert("post added!"))
        .then(() => console.log("ok"))
        .catch(() => alert("err"));
      fetch(url.BASE_URL + "/posts")
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem("posts", JSON.stringify(result));
        });

      this.title = ""
      this.post = ""
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
h2 {
  color: rgb(73, 72, 72);
  font-size: 30px;
}
.create_post {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.post-title {
  background-color: rgb(229, 226, 226);
  outline: none;
  margin: 30px;
  width: 415px;
  font-size: 20px;
  border-radius: 6px;
  color: rgb(70, 70, 70);
  border: 1px solid rgb(70, 70, 70);
}

.post-text {
  background-color: rgb(229, 226, 226);
  font-size: 20px;
  border-radius: 10px;
  color: rgb(70, 70, 70);
}

hr {
  margin: 50px 160px;
  border-bottom: 1px;
  box-shadow: 1px 1px 3px rgb(65 65 65);
}

.post-btn {
  width: 100px;
  height: 30px;
  background-color: black;
  color: white;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 30px;
}
</style>