<template>
  <div class="block">
    <h2>Login</h2>
    <input class="inf email" type="text" placeholder="email" v-model="email" />
    <input
      class="inf password"
      type="password"
      name=""
      id=""
      placeholder="password"
      v-model="password"
    />
    <div class="block2">
      <span> <a @click="goToRegistrPage">registration</a></span>
    </div>
    <button class="btn" @click="logIn">Sign up</button>
  </div>
</template>
<script >
import url from "../url";
export default {
  components: {
    url,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    goToRegistrPage() {
      this.$router.push("/first");
    },
    
    logIn() {
      fetch(url.BASE_URL + "/accounts")
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem("users", JSON.stringify(result));
        })
        .catch(() => console.log(err));
      let users = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i <= users.length - 1; i++) {
        if (!this.validateEmail(this.email)) {
          alert("Incorrect email!");
          break;
        } else if (
          this.email == users[i].email &&
          this.password == users[i].password
        ) {
          localStorage.setItem("user", JSON.stringify(users[i]));
          this.goToHomePage();
        }
      }
    },
    validateEmail() {
      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(this.email) === false) {
        this.error = "Enter a valid email address";
        return false;
      }
      return true;
    },
    goToHomePage() {
      this.$router.push("/third");
    },
  },
};
</script>

<style>
.block {
  width: 200px;
  height: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 40px;
  color: rgb(116, 115, 115);
}

.block2 {
  width: 200px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  align-items: center;
}

.inf {
  width: 193px;
  height: 20px;
  margin-top: 10px;
  border-radius: 5px;
}

a {
  color: rgb(116, 115, 115);
  cursor: pointer;
}

.btn {
  width: 70px;
  height: 25px;
  cursor: pointer;
  background-color: rgb(116, 115, 115);
  border-radius: 5px;
  color: white;
}

span {
  font-size: 13px;
  color: rgb(116, 115, 115);
}
</style>
