var posts=["2025/07/17/notice/","2025/07/19/article1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };