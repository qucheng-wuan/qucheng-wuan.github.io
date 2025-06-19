var posts=["/二分查找/","/C++算法蓝桥杯速成/","/4.12有感/","/hello-world/","/3月反思/","/Pytorch-环境配置/","/To-future/","/Transformer/","/迷茫中/","/2-21blog/","/LLM模型/","/Future/","/CS启蒙课/","/DevC-如何有效调用GTK库/","/C-语法学习/","/反思/","/算法学习（Algorithm-Learning)/","/First-blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };