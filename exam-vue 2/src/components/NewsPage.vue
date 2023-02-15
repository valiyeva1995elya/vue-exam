<template>
  <body>
    <div>
      <Header></Header>
      <main class="main">
        <div class="posts" v-for="post in posts" :key="post._id">
          <div class="post_item">
            <h4>{{ post.email }}</h4>
            <h3>{{ post.title }}</h3>
            <p class="text_post">{{ post.post }}</p>
            <div>
              <div>
                <img class="like-img" src="./img/like (1).png" alt="" />
                {{ post.like }}
                <button @click="likePost(post._id)">+</button>
                <button @click="unlikePost(post._id)">-</button>
              </div>
              <p class="text_date">
                <i>{{ post.date }}</i>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  </body>
</template>
<script>
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
      posts: [],
    };
  },
  methods: {
    newFunc() {
      fetch(url.BASE_URL + "/posts")
      .then((response) => response.json())
      .then((result) => {
        this.posts = result;
      })
      .catch(() => console.log(err));
      
  },
    async likePost(postId) {
      await fetch(url.BASE_URL + "/posts/like/" + postId);
    },
    async unlikePost(postId) {
      await fetch(url.BASE_URL + "/posts/unlike/" + postId);
     
    },
  },

  created() {
    this.newFunc()
  },
  updated(){
    this.newFunc()
  }
};
</script>

<style scoped>
main {
  color: #6b6b6b;
}
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.post_item {
  width: 500px;
  height: 100%;
  box-shadow: 0px 0px 10px grey;
  margin-bottom: 30px;
  border-radius: 5px;
  padding: 30px;
  box-sizing: border-box;
}
.like-img {
  width: 20px;
  height: 20px;
}
.text_post {
  font-size: 15px;
}
.text_date {
  font-size: 10px;
}
</style>