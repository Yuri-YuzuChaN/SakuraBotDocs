# Arcaea

移动端音游 `Arcaea` 查询插件，项目地址 [Github](https://github.com/Yuri-YuzuChaN/arcaea)

::: tip 提示
该插件为自制插件，遇到问题可及时[反馈](/start/#bot出问题了怎么办)
:::

## 开启/关闭

- 使用 `开启/关闭` 指令开启/关闭 `arcaea` 插件

## 指令

- archelp
- arcbind
- arcun
- arcre
- arcinfo
- arcsc
- arcset
- arcrd

### 帮助

- 查看帮助页：`archelp`

### 绑定与解绑

- 绑定：`arcbind arcid`
- 解绑：`arcun`

::: tip 提示
`arcid` 为好友码
:::

### 查询成绩

#### 查询最近一次游玩成绩

- 查询自己：`arcre`
- 查询Ta人(好友码)成绩：`arcre arcid`

    - 例如：`arcre 114514810`
    
- 查询Ta人(群成员)成绩：`arcre @柚子`

#### 查询b30成绩

- 查询自己b30成绩：`arcinfo`

- 查询Ta人(好友码)b30成绩：`arcinfo arcid`

    - 例如：`arcinfo 114514810`

- 查询Ta人(群成员)b30成绩：`arcinfo @柚子`
::: tip 提示
金色边框为7天内的新成绩
:::
::: warning 注意
由于服务器带宽较小，发送成绩图可能需要等待一点时间
:::

#### 查询单曲成绩

- 查询自己：`arcsc 曲名/别名 难度`

    - 例如：`arcsc 白魔王 byd`

- 查询Ta人(好友码)成绩：`arcsc arcid 曲名/别名 难度`

    - 例如：`arcsc 114514810 白魔王 byd`

- 查询Ta人(群成员)成绩：`arcsc @柚子 曲名/别名 难度`

::: tip 提示
难度可以识别三种格式，例如beyond难度：`3` | `beyond` | `byd`

不带难度参数默认为 `ftr` 难度，不区分大小写
:::

### 更换成绩图

- 更改指令 `arcre` 输出的成绩图，默认为随机样式 `0`，更改指令：`arcset num`

    - 例如：`arcset 2`

    - 样式 `1`：![re1](/images/re1.png)

    - 样式 `2`：![re2](/images/re2.png)

### 随机曲目

- 随机指定定数的谱面：`arcrd 定数`
- 随机指定难度的谱面：`arcrd 定数 难度`

    - 例如：`arcrd 10+ byd`

::: tip 提示
定数可识别三种类型，例如：`9` | `9.8` | `10+`

推荐联机打歌使用该功能
:::

## API

提供静态资源站和曲目信息[API](/API/Arcaea.md)
