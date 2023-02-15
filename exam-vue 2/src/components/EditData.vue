<template>
  <div v-if="editWind" class="back-block">
    <div class="edit-data">
      <p>Имя</p>
      <input id="edName" type="text" v-model="name" />
      <p>Фамилия</p>
      <input id="edSurname" type="text" v-model="surname" />
      <p>Возраст</p>
      <input id="edAge" type="number" v-model="age" /><br />
      <button @click="saveNewData" class="btn mt-20">Сохранить</button>
      <button @click="cancelBtn" class="btn mt-20">Отмена</button>
    </div>
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
      name: "",
      surname: "",
      age: "",
      editWind: true,
      user: JSON.parse(localStorage.getItem("user")),
      users: JSON.parse(localStorage.getItem("users")),
    };
  },
  methods: {
    saveNewData() {
      if (this.name == "") {
        return;
      } else {
        this.user.name = this.name;
      }
      if (this.surname == "") {
        return;
      } else {
        this.user.surname = this.surname;
      }
      if (this.age == "") {
        return;
      } else {
        this.user.age = this.age;
      }

      this.users = this.users.map((item) =>
        item.email == this.user.email ? this.user : item
      );
      localStorage.setItem("user", JSON.stringify(this.user));
      localStorage.setItem("users", JSON.stringify(this.users));
      fetch(url.BASE_URL + "/accounts/" + this.user._id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(this.user),
      })
        .then(() => console.log("good"))
        .then(() => alert("Ok"))
        .catch(() => alert("err"));

      this.editWind = !this.editWind;
    },

    cancelBtn() {
      this.editWind = !this.editWind;
    },
  },
};
</script>
<style scoped>
.btn {
  width: 80px;
  height: 35px;
  background-color: black;
  color: white;
  border-radius: 7px;
  cursor: pointer;
  margin: 30px 10px;
}

.edit-data {
  width: 300px;
  height: 400px;
  border-radius: 10px;
  padding: 10px 40px;
  box-sizing: border-box;

  background-color: rgb(219, 219, 219);
  margin: 30px auto;
  text-align: center;
  border: 1px solid rgb(101, 101, 101);
  color: rgb(94, 91, 91);
  font-size: 20px;
}

#edName,
#edSurname,
#edAge,
#edTitle,
#edPost {
  background-color: rgb(229, 226, 226);
  outline: none;
  width: 150px;
  font-size: 20px;
  border-radius: 6px;
  color: rgb(70, 70, 70);
}

.back-block {
  width: 100%;
  height: 100vh;
  background-color: rgba(197, 197, 197, 0.564);
  position: fixed;
}
</style>