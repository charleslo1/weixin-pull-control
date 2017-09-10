# weixin-pull-control
微信下拉控制

# Api

* pullControl.disable()：禁用微信下拉
* pullControl.disable()：启用微信下拉


# Install
``` sh
$ npm install weixin-pull-control --save
```

# Example

``` js
import pullControl from 'weixin-pull-control'

// 禁用微信下拉
pullControl.disable()

// 10 秒后启用
setTimeout(() => {
    pullControl.enable()
}, 10000)
```
