<template>
  <body>
    <div class="block">
      <h2>Registration</h2>
      <input
        class="inf email"
        type="text"
        placeholder="email"
        v-model="email"
      />
      <input
        class="inf password"
        type="password"
        placeholder="password"
        v-model="password"
      />
      <input class="inf name" type="text" placeholder="Name" v-model="name" />
      <input
        class="inf surname"
        type="text"
        placeholder="Surname"
        v-model="surname"
      />
      <input class="inf age" type="number" placeholder="Age" v-model="age" />
      <button @click="newAcc" class="btn mt-20">Sign up</button>
    </div>
  </body>
</template>
<script>
import url from "../url";
export default {
  components: {
    url,
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      surname: "",
      age: "",
      allUsers: [],
      allUsers2: [],
    };
  },
  methods: {
    newAcc() {
      let user = {
        email: this.email,
        password: this.password,
        name: this.name,
        surname: this.surname,
        age: this.age,
      };
      if (this.checkErrors(user)) {
        fetch(url.BASE_URL + "/accounts", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify(user),
        })
          .then(() => this.goToLogin())
          .catch(() => alert("err"));
      } else {
        console.log("err");
      }
    },
    checkData() {
      if (
        this.email === "" ||
        this.password === "" ||
        this.name === "" ||
        this.surname === "" ||
        this.age === ""
      ) {
        return false;
      }
      return true;
    },
    validateEmail() {
      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(this.email) === false) {
        this.error = "Enter a valid email address";
        alert("Incorrect email!");
        return false;
      }
      return true;
    },

    validatePassword() {
      let reg =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      if (reg.test(this.password) === false) {
        this.error = "Enter a strong password";
        alert("Incorrect password!");
        return false;
      }
      return true;
    },
    getAllusers() {
      fetch(url.BASE_URL + "/accounts")
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem("users", JSON.stringify(result))})
        .catch(() => console.log(err));
        let users = JSON.parse(localStorage.getItem("users"));
        if (users.find(item => item.email == this.email)) {
            alert("Данный email занят");
            return false;
          } else {
            return true;
          }
       
    },

    checkErrors() {
      if (
        this.checkData() &&
        this.validateEmail() &&
        this.validatePassword() &&
        this.getAllusers()
      ) {
        return true;
      }
      return false;
    },
    goToLogin() {
      this.$router.push("/second");
    },
  },
};
</script>

<style scoped>
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

.inf {
  width: 193px;
  height: 20px;
  margin-top: 10px;
  border-radius: 5px;
}

.btn {
  width: 70px;
  height: 25px;
  cursor: pointer;
  background-color: rgb(116, 115, 115);
  border-radius: 5px;
  color: white;
}

.mt-20 {
  margin-top: 20px;
}
</style>
