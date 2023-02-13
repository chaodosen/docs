import{_ as t}from"./chunks/ArticleMetadata.e5f171a4.js";import{_ as c,c as r,f as y,w as F,a as l,e as i,D as A,h as D,o as p,b as B,v as C}from"./app.4993e908.js";const E="/docs/assets/9e9ec3ca030d4c229a7f76ce5fdf650d.7985c56a.png",d="/docs/assets/f67f195218b34242a452df52c27a8db0.1c94e649.png",u="/docs/assets/1980f488416e4f27873341478f928eda.6ec190cc.png",h="/docs/assets/fc312a088d814b8ca72e855bca0d9cea.d0010dc2.png",f="/docs/assets/b106c218386d4caa9fd623a7bf3d4ef9.e9ac1107.png",b="/docs/assets/b4f18c4a52ce4b2aa5cd2abfa9d46d4f.19ef27ca.png",g="/docs/assets/425e2e707b7a4ba9924e7ed3acafaa6b.92f48846.png",m="/docs/assets/41ec0a93b407448f9c591a7a3645bb3a.f0aa4e47.png",j=JSON.parse('{"title":"多线程和IO","description":"","frontmatter":{"title":"多线程和IO","date":"2023-02-13T00:00:00.000Z","categories":["马某兵","面试题"],"tags":["多线程","IO"]},"headers":[{"level":2,"title":"1.介绍下进程和线程的关系","slug":"_1-介绍下进程和线程的关系","link":"#_1-介绍下进程和线程的关系","children":[]},{"level":2,"title":"2.说说Java中实现多线程的几种方法","slug":"_2-说说java中实现多线程的几种方法","link":"#_2-说说java中实现多线程的几种方法","children":[]},{"level":2,"title":"3.如何停止一个正在运行的线程","slug":"_3-如何停止一个正在运行的线程","link":"#_3-如何停止一个正在运行的线程","children":[]},{"level":2,"title":"4.介绍下线程中的常用方法","slug":"_4-介绍下线程中的常用方法","link":"#_4-介绍下线程中的常用方法","children":[{"level":3,"title":"1.start方法","slug":"_1-start方法","link":"#_1-start方法","children":[]},{"level":3,"title":"2.run方法","slug":"_2-run方法","link":"#_2-run方法","children":[]},{"level":3,"title":"3.getName方法","slug":"_3-getname方法","link":"#_3-getname方法","children":[]},{"level":3,"title":"4.优先级","slug":"_4-优先级","link":"#_4-优先级","children":[]},{"level":3,"title":"5.sleep方法","slug":"_5-sleep方法","link":"#_5-sleep方法","children":[]},{"level":3,"title":"6.isAlive","slug":"_6-isalive","link":"#_6-isalive","children":[]},{"level":3,"title":"7.join","slug":"_7-join","link":"#_7-join","children":[]},{"level":3,"title":"8.yield","slug":"_8-yield","link":"#_8-yield","children":[]},{"level":3,"title":"9.wait和notify/notifyAll","slug":"_9-wait和notify-notifyall","link":"#_9-wait和notify-notifyall","children":[]}]},{"level":2,"title":"5.介绍下线程的生命周期","slug":"_5-介绍下线程的生命周期","link":"#_5-介绍下线程的生命周期","children":[]},{"level":2,"title":"6.为什么wait, notify和notifyAll这些方法不在thread类里面？","slug":"_6-为什么wait-notify和notifyall这些方法不在thread类里面","link":"#_6-为什么wait-notify和notifyall这些方法不在thread类里面","children":[]},{"level":2,"title":"7.为什么wait和notify方法要在同步块中调用？","slug":"_7-为什么wait和notify方法要在同步块中调用","link":"#_7-为什么wait和notify方法要在同步块中调用","children":[]},{"level":2,"title":"8.synchronized和ReentrantLock的区别","slug":"_8-synchronized和reentrantlock的区别","link":"#_8-synchronized和reentrantlock的区别","children":[]},{"level":2,"title":"9.什么是线程安全","slug":"_9-什么是线程安全","link":"#_9-什么是线程安全","children":[]},{"level":2,"title":"10.Thread类中yield方法的作用","slug":"_10-thread类中yield方法的作用","link":"#_10-thread类中yield方法的作用","children":[]},{"level":2,"title":"11.常用的线程池有哪些","slug":"_11-常用的线程池有哪些","link":"#_11-常用的线程池有哪些","children":[]},{"level":2,"title":"12. 简述一下你对线程池的理解","slug":"_12-简述一下你对线程池的理解","link":"#_12-简述一下你对线程池的理解","children":[]},{"level":2,"title":"13.线程池的拒绝策略有哪些?","slug":"_13-线程池的拒绝策略有哪些","link":"#_13-线程池的拒绝策略有哪些","children":[]},{"level":2,"title":"14.线程安全需要保证几个基本特性?","slug":"_14-线程安全需要保证几个基本特性","link":"#_14-线程安全需要保证几个基本特性","children":[]},{"level":2,"title":"15.说下线程间是如何通信的?","slug":"_15-说下线程间是如何通信的","link":"#_15-说下线程间是如何通信的","children":[]},{"level":2,"title":"16.说说ThreadLocal的原理","slug":"_16-说说threadlocal的原理","link":"#_16-说说threadlocal的原理","children":[]},{"level":2,"title":"17.解释下：同步、异步、阻塞、非阻塞","slug":"_17-解释下-同步、异步、阻塞、非阻塞","link":"#_17-解释下-同步、异步、阻塞、非阻塞","children":[]},{"level":2,"title":"18.什么是BIO?","slug":"_18-什么是bio","link":"#_18-什么是bio","children":[]},{"level":2,"title":"19.什么是NIO？","slug":"_19-什么是nio","link":"#_19-什么是nio","children":[]},{"level":2,"title":"20.什么是AIO？","slug":"_20-什么是aio","link":"#_20-什么是aio","children":[]},{"level":2,"title":"21.介绍下IO流的分类","slug":"_21-介绍下io流的分类","link":"#_21-介绍下io流的分类","children":[]}],"relativePath":"interview/mashibing-2023/2.多线程和IO.md","lastUpdated":null}'),v={name:"interview/mashibing-2023/2.多线程和IO.md"},T=l("h1",{id:"二、多线程和io",tabindex:"-1"},[i("二、多线程和IO "),l("a",{class:"header-anchor",href:"#二、多线程和io","aria-hidden":"true"},"#")],-1),k=A("",147);function _(s,q,x,S,w,I){const o=t,e=D("ClientOnly");return p(),r("div",null,[T,y(e,null,{default:F(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(p(),B(o,{key:0,article:s.$frontmatter},null,8,["article"])):C("",!0)]}),_:1}),k])}const N=c(v,[["render",_]]);export{j as __pageData,N as default};
