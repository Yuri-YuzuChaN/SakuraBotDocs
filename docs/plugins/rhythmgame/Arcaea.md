# Arcaea

移动端音游 `Arcaea` 查询插件，项目地址 [Github](https://github.com/Yuri-YuzuChaN/Arcaea-BAA)

::: tip 提示
该插件为自制插件，遇到问题可及时[反馈](/start/#bot出问题了怎么办)
:::

## 开启/关闭

- 使用 `开启/关闭` 指令开启/关闭 `arcaea` 插件

### 帮助

- 查看帮助页：`archelp` | `/a help`

### 绑定与解绑

- 绑定：`arcbind arcid` | `/a bind arcid`
- 解绑：`arcun` | `/a unbind`

::: tip 提示
`arcid` 为好友码
:::

### 查询成绩

#### 查询最近一次游玩成绩

- 查询自己：`arcre` | `/a`
- 查询Ta人(好友码)成绩：`arcre arcid`

    - 例如：`arcre 114514810`
    
- 查询Ta人(群成员)成绩：`arcre @柚子` | `/a @柚子`

#### 查询b30成绩

- 查询自己b30成绩：`arcinfo` | `b30` | `/a b30`

- 查询Ta人(好友码)b30成绩：`arcinfo arcid` | `b30 arcid` | `/a b30 arcid`

    - 例如：`arcinfo 114514810` 或 `b30 114514810`

- 查询Ta人(群成员)b30成绩：`arcinfo @柚子` | `b30 @柚子` | `/a b30 @柚子`

::: tip 提示
金色边框为7天内的新成绩
:::

#### 查询单曲成绩

- 查询自己：`arcsc 曲名/别名 难度` | `/a info 曲名/别名 难度`

    - 例如：`arcsc 白魔王 byd` 或 `/a info 白魔王 byd`

- 查询Ta人(好友码)成绩：`arcsc arcid 曲名/别名 难度` | `/a info 114514810 曲名/别名 难度`

    - 例如：`arcsc 114514810 白魔王 byd` 或 `/a info 114514810 白魔王 byd`

- 查询Ta人(群成员)成绩：`arcsc @柚子 曲名/别名 难度` | `/a info @柚子 曲名/别名 难度`

::: tip 提示
难度可以识别三种格式，例如beyond难度：`3` | `beyond` | `byd`

不带难度参数默认为 `ftr` 难度，不区分大小写
:::

### 更换成绩图

- 更改指令 `arcre` 输出的成绩图，默认为随机样式 `0`，更改指令：`arcset num` | `/a set num`

    - 例如：`arcset 2` | `/a set 2`

    - 样式 `1`：![re1](/images/re1.png)

    - 样式 `2`：![re2](/images/re2.png)

### 查看曲目信息

#### 谱面

- 查询谱面：`archart/chart 曲名/别名 难度` | `/a chart 曲名/别名 难度`

    - 例如： `archart testity byd` 或 `chart testity byd`

::: tip 提示
默认为 `FTR` 难度

谱面信息为超高分辨率图片，糊的话请放大观看
:::

#### 曲目详细信息

- 查看谱面信息：`/a song 曲目/别名`

    - 例如：`/a song 病女`

#### 曲目别名

- 查询别名：`/a alias 曲目/别名`

    - 例如：`/a alias 骨折光`

## API

提供静态资源站和曲目信息[API](/API/Arcaea.md)
