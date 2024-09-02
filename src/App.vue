<template>
  <div class="header">
    <img src="./assets/logo.png" alt="logo" class="logo" />
    <ul class="header_button">
      <li v-if="step == 0">
        <input
          @change="upload"
          multiple
          accept="image/*"
          type="file"
          id="file"
          class="inputbox"
        />
        <label for="file" class="input_plus">+</label>
      </li>
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
  </div>

  <Container
    :post="post"
    :step="step"
    :imageS="imageS"
    @write="작성한글 = $event"
  />
  <button @click="more" class="more" v-if="step == 0">더보기</button>

  <div class="page" v-if="step == 0">-1-</div>
  <div class="page" v-if="step == 1">-2-</div>
  <div class="page" v-if="step == 2">-3-</div>

  <div class="btn_wrap">
    <button @click="step = 0">Home</button>
    <button @click="step = 1">Filter</button>
    <button @click="step = 2">Upload</button>
  </div>
</template>
<script>
import Container from "./components/Container.vue";
import postdata from "./assets/postdata.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      post: postdata,
      더보기: 1,
      step: 0,
      imageS: "",
      작성한글: "",
    };
  },
  components: {
    Container: Container,
  },
  methods: {
    more() {
      axios
        .get(`https://parksoha.github.io/data/feed${this.더보기}.json`)
        .then((결과) => {
          this.post.push(결과.data);
          this.$store.commit("changePosts", this.post);
          this.더보기++;
        });
    },
    upload(e) {
      let 파일 = e.target.files; //업로드된 모든 파일들이 담겨 있음
      console.log(파일[0]); //업로드한 파일을 콘솔에서 출력
      let url = URL.createObjectURL(파일[0]); //함수로 이용해 url 생성
      console.log(url);
      this.imageS = url; // imageS 라는 변수에 url
      this.step++;
    },
    publish() {
      var 내게시물 = {
        name: "sooooha",
        userImage:
          "https://img0.yna.co.kr/photo/cms/2019/09/19/19/PCM20190919000219505_P2.jpg",
        postImage: this.imageS,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: "perpetua",
      };
      this.post.unshift(내게시물);
      this.step = 0;
      this.$store.commit("changePosts", this.post);
    },
  },
};
</script>
<style>
@import "./css/style.css";
</style>
