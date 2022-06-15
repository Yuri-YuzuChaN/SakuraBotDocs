# setu

懂得都懂，项目地址 [Github](https://github.com/Yuri-YuzuChaN/setu)

::: tip 提示
该插件为自制插件，遇到问题可及时[反馈](/start/#bot出问题了怎么办)，或者前往Github提[issues](https://github.com/Yuri-YuzuChaN/setu/issues)
:::

## 默认模块

- `涩图` | `来份涩图` | `来[数量]份涩图`：随机获得涩图，可指定数量，最多10份

- `搜涩图[关键词]` | `来[数量]份[关键词]涩图`：搜索指定关键词的涩图

::: warning 注意
默认模块使用的图库数量有限，可能搜不到需要的涩图
:::

## Pixiv模块

::: warning 注意
参数 `num` 为第几张，如果不带 `num` 为随机一张
:::

- `pvid [pid]`：查看指定图片

- `pvuid [uid]`：查看指定用户

- `pvimg [uid] [num]`：查看该用户的一张插画

- `pvrank [mode] [num]`：查看排行榜

::: tip mode参数
`mode`: `day` | `week` | `month` | `day_male` | `day_female` | `week_original` | `day_manga` | `week_rookie`

`r18 mode`: `day_r18` | `day_male_r18` | `day_female_r18` | `week_r18` | `week_r18g`
:::

- `pvre [pid] [num]`：查看该插图的相关作品

- `pvse [word] [duration]` 搜索该标签的相关作品

::: tip duration参数
`duration`: `day` | `week` | `month`
:::

## 设置

- `setu help`：setu帮助说明

- `setu me`： 获取今日剩余次数

- `setu get`：获取群配置

- `setu set [模块] [单项] 或 [值]`：修改群配置，仅允许群主和白名单用户设置

    - 模块：`lolicon` 和 `pixiv`

    - 单项或值：
        - `on` | `off`：该模块开关
        - `withdraw [时间]`：撤回时间，值为秒
        - `r18 [on | off]`：是否发送r18，on|true 或 off|false
        - `only_r18 [on | off]`：只发送r18，on|true 或 off|false
    
    例如开启 `pixiv` 模块：`setu set pixiv on`

    或者设置 `pixiv` 模块的撤回时间：`setu set pixiv withdraw 10`