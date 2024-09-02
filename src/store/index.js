import { createStore } from "vuex";
import postdata from "@/assets/postdata";

export default createStore({
  state() {
    //데이터 저장소
    return {
      postdata: postdata,
      name: "sh",
      age: 20,
      likes: postdata.map((post) => post.likes),
    };
  },
  getters: {},
  mutations: {
    //데이터 수정 방법을 정의
    이름변경(state) {
      state.name = "hm";
    },
    plus(state) {
      state.age++;
    },
    like(state, idx) {
      state.likes[idx]++;
    },
    changePosts(state, posts) {
      state.posts = posts;
      state.likes = posts.map((post) => post.likes);
    },
  },
  actions: {},
  modules: {},
});
