<template>
  <div v-if="modelWind" class="back-block2">
    <div class="edit-data2">
      <p>Заголовок</p>
      <input id="edTitle" type="text" v-model="title" />
      <p>Пост</p>
      <textarea
        name=""
        id="edPost"
        cols="20"
        rows="5"
        v-model="post"
      ></textarea>
      <button @click="saveNewPost" class="btn mt-20">Сохранить</button>
      <button @click="cancelBtn" class="btn mt-20">Отмена</button>
    </div>
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
      title: "",
      post: "",
      modelWind: true,
     
    };
  },
  methods:{
    saveNewPost(){
        let id = localStorage.getItem("idChangePost")
        const payload = {
           title: this.title,
           post: this.post
        }
        fetch(url.BASE_URL + "/posts/" + id, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(payload)
    }) .then(() => console.log("good"))
        .then(() => alert("Ok"))
        .catch(() => alert("err"))
        this.modelWind = !this.modelWind
    },
    cancelBtn(){
      this.modelWind = !this.modelWind;
    }
  }
};
</script>
<style scoped>
#edTitle,
#edPost {
  background-color: rgb(229, 226, 226);
  outline: none;
  width: 150px;
  font-size: 20px;
  border-radius: 6px;
  color: rgb(70, 70, 70);
}

.back-block2 {
  width: 100%;
  height: 100vh;
  background-color: rgba(197, 197, 197, 0.564);
  position: fixed;
z-index: 1;
    top: 0;
}
.btn {
  width: 80px;
  height: 35px;
  background-color: black;
  color: white;
  border-radius: 7px;
  cursor: pointer;
  margin: 30px 10px;
}

.edit-data2 {
  width: 300px;
  height: 400px;
  border-radius: 10px;
  padding: 10px 40px;
  box-sizing: border-box;

  background-color: rgb(219, 219, 219);
  margin: 150px auto;
  text-align: center;
  border: 1px solid rgb(101, 101, 101);
  color: rgb(94, 91, 91);
  font-size: 20px;
}
</style>