# webpack5 vs webpack4: bundle-esm-cmd

1. 分析webpack5打包文件代码，查看cmd、esm打包区别。    
2. lodash和lodash-es正好作为实验对象。     
3. 对比webpack4 与 webpack5的bundle文件差异     

##  webpack5 按照webpack4实验方式来操作
## 🙄 Target
1. 分析webpack5打包文件代码，查看cmd、esm打包区别。
2. lodash和lodash-es正好作为实验对象；lodash最佳使用推荐，以及推荐理由(通过bundle代码角度)


## 🤔 Try 多场景
> 😘Try000 cmd: 全引入lodash，`import { debounce } from 'lodash'`
>> `main.js`中依然引入的是整个`lodash.js`文件      
>> `chunk-vendors`中近`2w`行的lodash代码, 且没有`ununsed harmony`标识，意味着不会被shaking掉       

<img src="./log_imgs/000-cmd-all-in.png" width="999">
<img src="./log_imgs/000-cmd-all-in-chunk.png" width="999">

-------------       

> 😘Try001 cmd: 全路径引入lodash/debounce，`import debounce from 'lodash/debounce'`
>> `main.js`中引入的是`lodash/debounce`文件,对比Try000，仅引入了相关代码      
>> `chunk-vendors`中近`600`行的lodash代码, 且没有`ununsed harmony`标识，意味着不会被shaking掉       
>> lodash的打包代码量明显减小：`2w->600` 🤙🏻 🤙🏻 🤙🏻

<img src="./log_imgs/000-cmd-full-path.png" width="999">
<img src="./log_imgs/000-cmd-full-path-chunk.png" width="999">

-------------    

> 😘 Try010 esm: 全引入lodash，`import { debounce } from 'lodash-es'`
>> `main.js` 中会引入的是`我靠，直接引用的lodash-es/debounce.js`    🐮🐮🐮`跟webapck4不一样哦`       
>> `chunk-vendors`中近`600`行的lodash代码，已经shaking了

<img src="./log_imgs/010-esm-all-in.png" width="999">
<img src="./log_imgs/010-esm-all-in-chunk.png" width="999">

-------------      

> 😘 Try011 esm: 全路径引入lodash，`import debounce from 'lodash-es/debounce'`
>> `main.js` 中会引入的是`lodash-es/debounce.js`  
>> `chunk-vendors`中近`600`行的lodash代码，已经shaking了

<img src="./log_imgs/010-esm-all-in.png" width="999">
<img src="./log_imgs/010-esm-all-in-chunk.png" width="999">



# 可以看来，在esm下，全路径引入、与all in都一样了
# 整理一下bunder图片也行