---
title: npm淘宝镜像延迟
date: 2022-11-23
categories:
 - 前端
tags:
 - npm
 - 淘宝镜像
---

::: danger
*起初，我也不过是以为是一个简单的BUG*
:::

## 问题的开始

公司同事让我帮忙打包一个项目的前端包(`我是后端`)，由于太久没拉过代码，代码冲突了，我重新从云端拉了新的代码，下载依赖，此时并没有任何问题，构建运行的时候，报了这个错

::: warning
**Syntax Error: TypeError: Cannot set property 'parent' of undefined**
:::

百度结果说`vue`版本号去掉 `^`

## ^和~的区别

[npm官方说明](https://docs.npmjs.com/cli/v6/using-npm/semver#tilde-ranges-123-12-1)如下：

**Tilde Ranges `~1.2.3` `~1.2` `~1`**

Allows patch-level changes if a minor version is specified on the comparator. Allows minor-level changes if not.

- `~1.2.3` := `>=1.2.3 <1.(2+1).0` := `>=1.2.3 <1.3.0-0`
- `~1.2` := `>=1.2.0 <1.(2+1).0` := `>=1.2.0 <1.3.0-0` (Same as `1.2.x`)
- `~1` := `>=1.0.0 <(1+1).0.0` := `>=1.0.0 <2.0.0-0` (Same as `1.x`)
- `~0.2.3` := `>=0.2.3 <0.(2+1).0` := `>=0.2.3 <0.3.0-0`
- `~0.2` := `>=0.2.0 <0.(2+1).0` := `>=0.2.0 <0.3.0-0` (Same as `0.2.x`)
- `~0` := `>=0.0.0 <(0+1).0.0` := `>=0.0.0 <1.0.0-0` (Same as `0.x`)
- `~1.2.3-beta.2` := `>=1.2.3-beta.2 <1.3.0-0` Note that prereleases in the `1.2.3` version will be allowed, if they are greater than or equal to `beta.2`. So, `1.2.3-beta.4` would be allowed, but `1.2.4-beta.2` would not, because it is a prerelease of a different `[major, minor, patch]` tuple.

**Caret Ranges `^1.2.3` `^0.2.5` `^0.0.4`**

Allows changes that do not modify the left-most non-zero element in the `[major, minor, patch]` tuple. In other words, this allows patch and minor updates for versions `1.0.0` and above, patch updates for versions `0.X >=0.1.0`, and *no* updates for versions `0.0.X`.

Many authors treat a `0.x` version as if the `x` were the major "breaking-change" indicator.

Caret ranges are ideal when an author may make breaking changes between `0.2.4` and `0.3.0` releases, which is a common practice. However, it presumes that there will *not* be breaking changes between `0.2.4` and `0.2.5`. It allows for changes that are presumed to be additive (but non-breaking), according to commonly observed practices.

- `^1.2.3` := `>=1.2.3 <2.0.0-0`
- `^0.2.3` := `>=0.2.3 <0.3.0-0`
- `^0.0.3` := `>=0.0.3 <0.0.4-0`
- `^1.2.3-beta.2` := `>=1.2.3-beta.2 <2.0.0-0` Note that prereleases in the `1.2.3` version will be allowed, if they are greater than or equal to `beta.2`. So, `1.2.3-beta.4` would be allowed, but `1.2.4-beta.2` would not, because it is a prerelease of a different `[major, minor, patch]` tuple.
- `^0.0.3-beta` := `>=0.0.3-beta <0.0.4-0` Note that prereleases in the `0.0.3` version *only* will be allowed, if they are greater than or equal to `beta`. So, `0.0.3-pr.2` would be allowed.

When parsing caret ranges, a missing `patch` value desugars to the number `0`, but will allow flexibility within that value, even if the major and minor versions are both `0`.

- `^1.2.x` := `>=1.2.0 <2.0.0-0`
- `^0.0.x` := `>=0.0.0 <0.1.0-0`
- `^0.0` := `>=0.0.0 <0.1.0-0`

A missing `minor` and `patch` values will desugar to zero, but also allow flexibility within those values, even if the major version is zero.

- `^1.x` := `>=1.0.0 <2.0.0-0`
- `^0.x` := `>=0.0.0 <1.0.0-0`

::: warning
**总结：如果想要自动修复补丁则使用 Tilde ~,如果不想改变大的版本又想使用较新的版本则使用 Caret  ^。**
:::

## ^和~的设置

[官网说明](https://docs.npmjs.com/cli/v9/using-npm/config#save-prefix)

```bash
npm config set save-prefix=''	//固定版本
npm config set save-prefix='~'	//自动修复补丁
npm config set save-prefix ^	//较新版本，注意有空格
```

## 官方镜像与淘宝镜像

[官方镜像](https://registry.npmjs.org/)

[淘宝镜像](https://registry.npmmirror.com/)

- 经过排查，发现前端同事的电脑可以正常运行与构建，代码与我的完全一样
- 我把我本地中的`^`去掉之后 ，发现居然不报错了，这就奇了个怪了，
- 然后我把同事电脑的依赖删除，重新安装，发现不报错，卧槽？
- 然后我查看了同事电脑的仓库地址是 `npm`默认的官方镜像，又看了下我的，发现是 `淘宝镜像`   这就不奇怪了，这就不奇怪了
- 我把本地改成官方镜像 重新带上 `^` 安装测试，发现果然不报错了，那就是说，官方镜像和淘宝镜像有出入
- 后来我又改回了淘宝镜像，版本号也带上了`^`  ，居然也不报错了 
- 淘宝镜像比官方镜像延迟，这是无可厚非的，

::: warning
**当我第一次使用淘宝镜像安装依赖的时候，淘宝镜像同步尚未完成，报错原因是因为依赖之间的关系不完善，第二次安装可以成功，说明淘宝镜像已经同步完成。以上仅代表个人看法，如有错误，请指正！**
:::