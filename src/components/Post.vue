<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${post.userImage})` }"
      ></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <div
      class="post-body"
      :style="{ backgroundImage: `url(${post.postImage})` }"
    ></div>
    <div class="post-content">
      <p @click="$store.commit('like', idx)">
        {{ $store.state.likes[idx] }} &#128151;
      </p>
      <p>
        <strong>{{ post.name }}</strong> {{ post.content }}
      </p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
    idx: Number,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://pbs.twimg.com/media/GLSpdARXEAAiZDG.jpg:large");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.post-content p {
  cursor: pointer;
}
.date {
  font-size: 11px;
  color: gray;
  margin-top: -8px;
}
</style>
