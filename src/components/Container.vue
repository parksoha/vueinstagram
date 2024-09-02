<template>
  <div>
    <!-- 컨테이너 영역 게시물 갯수 만큼 반복 : step0 이면 보이는 영ㅇ역-->
    <div v-if="step == 0">
      <Post :post="post[i]" v-for="(a, i) in post" :key="i" :idx="i" />
    </div>

    <!-- 필터 선택 페이지  : step1 이면 보이는 영ㅇ역 -->
    <div v-if="step == 1">
      <div
        class="upload-image"
        :style="`background-image:url(${imageS})`"
      ></div>
      <div class="filters">
        <div class="filter-1" :style="`background-image:url(${imageS})`"></div>
        <div class="filter-1" :style="`background-image:url(${imageS})`"></div>
        <div class="filter-1" :style="`background-image:url(${imageS})`"></div>
        <div class="filter-1" :style="`background-image:url(${imageS})`"></div>
        <div class="filter-1" :style="`background-image:url(${imageS})`"></div>
      </div>
    </div>
    <!-- 글 작성 업로드 페이지   : step3 이면 보이는 영ㅇ역-->
    <div v-if="step == 2">
      <div
        class="upload-image"
        :style="`background-image:url(${imageS})`"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="$emit('write', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "Container",
  data() {
    return {};
  },
  components: {
    Post: Post,
  },
  props: {
    post: Array,
    step: Number,
    imageS: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  display: block;
  margin: auto;
  outline: none;
}
</style>
