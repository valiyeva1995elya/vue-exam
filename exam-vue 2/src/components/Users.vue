<template>
  <body>
    <div>
      <Header></Header>
      <main>
        <h1>Все пользователи</h1>
        <div class="main-table">
          <table class="users-list" id="table">
            <tr>
              <th>email</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Возраст</th>
              <th>Follow/Unfollow</th>
            </tr>
            <tr v-for="acc in usersAll" :key="acc._id">
              <td>{{ acc.email }}</td>
              <td>{{ acc.name }}</td>
              <td>{{ acc.surname }}</td>
              <td>{{ acc.age }}</td>
              <td>
                <button
                  v-if="this.user.follows.includes(acc._id)"
                  @click="unfollowAd(acc._id)"
                  class="btn-main"
                >
                  unfollow
                </button>
                <button v-else @click="followAd(acc._id)" class="btn-main">
                  follow
                </button>
              </td>
            </tr>
          </table>
        </div>
      </main>
      <Footer></Footer>
    </div>
  </body>
</template>
<script >
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import url from "../url";
export default {
  components: {
    url,
    Header,
    Footer,
  },
  data() {
    return {
      usersAll: [],
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {
    async postData(route, payload) {
      await fetch(url.BASE_URL + route, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: payload,
      })
        .then(() => console.log("parsed"))
        .catch(() => console.log("Error sending request"));
    },
    followAd(followedUserId) {
      const payload = {
        userId: this.user._id,
        followedUserId: followedUserId,
      };
      const jsonPayload = JSON.stringify(payload);
      this.postData("/accounts/follow", jsonPayload);
      this.user.follows.push(followedUserId);
      console.log(this.user);
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    unfollowAd(followedUserId) {
      const payload = {
        userId: this.user._id,
        followedUserId: followedUserId,
      };
      const jsonPayload = JSON.stringify(payload);
      this.postData("/accounts/unfollow", jsonPayload);
      this.user.follows = this.user.follows.filter(
        (item) => item != followedUserId
      );
      console.log(this.user.follows);
      localStorage.setItem("user", JSON.stringify(this.user));
    },
  },
  created() {
    let users = JSON.parse(localStorage.getItem("users"));
    this.usersAll = users.filter((item) => item._id !== this.user._id);
  },
};
</script>

<style scoped>
.main-table {
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  border: 3px solid rgb(100 100 100);
  border-collapse: collapse;
  color: rgb(100 100 100);
}

td,
th {
  border: 3px solid rgb(100 100 100);
  padding: 10px 40px;
  color: rgb(100 100 100);
}
h1 {
  font-size: 40px;
  color: rgb(100 100 100);
  text-align: center;
}
.btn-main {
  width: 65px;
  height: 25px;
  background-color: black;
  color: white;
  border-radius: 7px;
  cursor: pointer;
  margin-bottom: 5px;
  margin-left: 25px;
}
</style>