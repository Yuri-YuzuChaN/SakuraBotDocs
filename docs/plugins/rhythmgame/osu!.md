# osu!

PC端音游 `osu` 查询插件，不支持查询 `lazer` 端以及私人服务器，项目地址 [Github](https://github.com/Yuri-YuzuChaN/osuv2)

::: tip 提示
此插件为自制插件，遇到问题可及时[反馈](/start/#bot出问题了怎么办？)，或者前往Github提[issues](https://github.com/Yuri-YuzuChaN/osuv2/issues)
:::

## 开启/关闭

- 开启/关闭指令为：`插件 osu on` | `插件 osu off`

::: warning 注意
此插件搭建在次框架并且默认开启，开启/关闭指令不同于其它插件
:::


## 指令

::: warning 注意
为防止无意触发指令，osu指令需使用命令前缀 `！` 或 `!`
:::

::: tip 提示
参数 `mode` 各个数字代表的模式：`0` std | `1` taiko | `2` ctb | `3` mania

该参数必须带冒号 `:` 或 `：`
:::

## 绑定和解绑

- `!bind [name | @]`：绑定用户

- `!unbind`：解除绑定

## 查询信息

- `!info`：查询自己默认模式的信息

- `!info [:mode]`：查询其它模式

    - 例如：`!info :3`

- `!info [name | @]`：查询Ta人信息

- `!info [name | @] [:mode]`：查询Ta人其它模式信息

    - 例如：`!info Aihara Yuzu :3` 或 `!info@柚子 :1`

## 查询最近成绩

- `!re`：查询自己最近游玩

- `!re [:mode]`：查询其它模式

- `!re [name | @]`：查询Ta人最近游玩

- `!re [name | @] [:mode]`：查询Ta人其它模式最近游玩

## 查询地图成绩

- `!score [mapid]`：查询地图成绩

- `!score [mapid] [+mods]`：查询地图附加 `mods` 的成绩

    - 例如：`!score 1154292 +DTHD`

- `!score [mapid] [:mode]`：查询地图其它模式成绩

- `!score [mapid] [:mode] [+mods]`：查询地图其它模式加mods的成绩

    - 例如：`!score 1154292 :3 +DTHD`

- `!score [name | @] [mapid]`：查询Ta人地图成绩

- `!score [name | @] [mapid] [+mods]`：查询Ta人地图附加 `mods` 的成绩

- `!score [name | @] [mapid] [:mode]`：查询Ta人地图其它模式成绩

- `!score [name | @] [mapid] [:mode] [+mods]`：查询Ta人地图其它模式加mods的成绩

    - 例如：`!score Aihara Yuzu 1154292 :3 +DTHD`  或 `!info@柚子 1154292 :3 +DTHD`

::: warning 注意
目前附加 `mods` 参数目前无法使用

参数 `mods` 在多mods之间不需要空格，必须在前添加前缀 `+`
:::

## 查询bp成绩

- `!bp [num]`：查询bp成绩

- `!bp [num] [+mods]`：查询附加 `mods` 的bp成绩

- `!bp [num] [:mode]`：查询其它模式bp成绩

- `!bp [num] [:mode] [+mods]`：查询其它模式附加 `mods` 的bp成绩

    - 例如：`!bp 10 :3 +DT`

::: tip 查询Ta人
**指令与 `!score` 相似，只需在 `num` 前附带用户参数**

例如 `!bp Aihara Yuzu 5 :2 +HD`：查询 `Aihara Yuzu` 的 `ctb` 模式附加 `HD` mods的第 5 个成绩
:::

## 查询bp指定范围成绩

- `!pfm [min]-[max]`：查询bp范围内的成绩

    - 例如：`!pfm 1-20`

- `!pfm [min]-[max] [:mode]`：查询其它模式范围成绩

- `!pfm [min]-[max] [+mods]`：查询范围内附加 `mods` 的成绩

- `!pfm [min]-[max] [:mode] [+mods]`：查询其它模式范围内附加 `mods` 的成绩

::: tip 查询Ta人
**指令与 `!score` 相似，只需在 `min` 前附带用户参数**

例如：`!pfm Aihara Yuzu 1-10 :1 +DT`：查询 `Aihara Yuzu` 的 `taiko` 模式附加 `DT` mods的第 1-10 个成绩
:::

## 查询当天新增bp

- `!tbp`：查询当天新增bp

- `!tbp [name | @]`：查询Ta人当天新增bp

- `!tbp [:mode]`：查询其它模式新增bp

- `!tbp [name | @] [:mode]`：查询Ta人其它模式新增bp

## 查看地图信息

- `!map [mapid]`：查询地图信息

- `!map [mapid] [+mods]`：查询地图附加 `mods` 的信息

## 获取地图BG

- `!getbg [mapid]`：提取地图BG

## 查看图组信息

- `!bmap [setid]`：查询图组信息

- `!bmap -b [mapid]`：使用地图ID查询图组信息

## 下载地图上传到群

- `!osudl [setid]`：下载地图

## API

提供PP计算[API](/API/osu!.md)