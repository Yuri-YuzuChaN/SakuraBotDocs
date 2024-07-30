# maimaiDX

maimai API使用说明

## API

EndPoint：`https://api.yuzuchan.moe/maimaidx`

## 获取所有别名

### 请求

```http
GET https://api.yuzuchan.moe/maimaidx/maimaidxalias
```

### 响应

|   字段                 |          数据类型           |         说明          |
| :-------------------:  | :-----------------------: | :--------------------:  |
|   status               |            `int`           |         状态码         |
|   content              |        `List[Alias]`       |        所有别名         |

#### Alias

|   字段                 |         数据类型           |         说明          |
| :-------------------:  | :-----------------------: | :--------------------: |
|   SongID               |          `int`             |         曲目ID         |
|   Name                 |          `str`             |          曲名          |
|   Alias                |        `List[str]`          |        别名列表         |

### 示例

```json
{
    "status": 200,
    "content" [
        {
            "SongID": 8,
            "Name": "true love song",
            "Alias": [
                "true love song",
                "真爱歌",
                "糖糖",
                "小管弦乐",
                "真爱",
                "真情歌",
                "会员制餐厅",
                "真的爱情歌"
            ]
        },
        ...
    ]
}
```

## 获取投票状态

### 请求

```http
GET https://api.yuzuchan.moe/maimaidx/getaliasstatus
```

### 响应

|   字段                 |         数据类型           |         说明          |
| :-------------------:  | :-----------------------: | :--------------------:  |
|   status               |          `int`            |         状态码         |
|   content              |      `List[Status]`       |       所有别名         |

#### Status

|   字段                 |         数据类型           |         说明          |
| :-------------------:  | :-----------------------: | :--------------------: |
|   Tag                  |          `str`            |        投票标签         |
|   SongID               |          `int`            |         曲目ID          |
|   ApplyAlias           |          `str`            |       申请的别名        |
|   IsNew                |          `bool`           |    是否为新申请别名     |
|   IsEnd                |          `bool`           |    是否为已结束别名     |
|   Time                 |          `str`            |        申请时间         |
|   AgreeVotes           |          `int`            |        已投票数         |
|   Votes                |          `int`            |          票数          |

### 示例

```json
{
    "status_code": 200,
    "content": [
        {
            "Tag": "7XFDL",
            "SongID": 772,
            "ApplyAlias": "牢大坠机",
            "IsNew": false,
            "IsEnd": false,
            "Time": "2024-07-17 21:16:40",
            "AgreeVotes": 2,
            "Votes": 5
        },
        ...
    ]
}
```

## 获取已结束投票

### 请求

```http
GET https://api.yuzuchan.moe/maimaidx/getaliasend
```

### 响应

与[获取投票状态](/api/maimaiDX#响应-1)一致

## 获取别名曲目

### 请求

```http
GET https://api.yuzuchan.moe/maimaidx/getsongs
```

#### 请求参数

|   字段                 |          数据类型          |         说明           |
| :-------------------:  | :-----------------------: | :--------------------: |
|   songs                |        `str / int`        |    曲目、别名或曲目ID   |

#### 响应

与[获取所有别名](/api/maimaiDX#响应)一致

## 查询指定曲目的所有别名

```http
GET https://api.yuzuchan.moe/maimaidx/getsongsalias
```

#### 请求参数

|   字段                 |         数据类型           |         说明           |
| :-------------------:  | :-----------------------: | :--------------------: |
|    name                |          `str`            |         曲名           |
|    song_id             |          `int`            |        曲目ID          |

#### 响应

|   字段                 |         数据类型           |         说明          |
| :-------------------:  | :-----------------------: | :--------------------: |
|   status               |          `int`            |         状态码         |
|   content              |         `Alias`           |       所有别名         |

#### 示例

```json
{
    "status_code": 200,
    "content": {
        "SongID": 11451,
        "Name": "transcend lights",
        "Alias": [
            "transcend lights",
            "114514",
            "超越光",
            "tl",
            "bright主题曲",
            "别急19",
            "音击的雨",
            "音击的武士",
            "九月的雨",
            "压力马斯内",
            "好啊，来吧",
            "正在拆弹",
            "封面全是老婆",
            "急急急",
            "音击妹妹",
            "我知道你很急但你先别急",
            "美瞳广告",
            "加速同调",
            "耳朵",
            "臭歌",
            "迷你世界",
            "萝莉的雨"
        ]
    }
}
```