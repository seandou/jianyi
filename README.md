jiǎn yì (简译)
---------------

jianyi is a simple translate tool from English to Chinese or reverse.


Installation
==============

jianyi is a node module, just use npm to install it globally.

```
npm install -g jianyi
```

Before use it, you should init ```$HOME/.jianyi```, register key and pass from [youdao api](http://fanyi.youdao.com/openapi?path=data-mode).

```
> cat $HOME/.jianyi
{"keyfrom":"yourkey","key":"yourpass"}
```

Usage
=======

```
> t hello

[hə'ləʊ; he-]
你好
--------------------
n. 表示问候， 惊奇或唤起注意时的用语
int. 喂；哈罗
n. (Hello)人名；(法)埃洛


> t 你好

[nǐ hǎo]
How are you
--------------------
hello；hi
```