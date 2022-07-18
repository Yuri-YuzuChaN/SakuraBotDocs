# Arcaea

Arcaea API以及静态资源使用说明

::: waring 注意
api站点未搭建，暂时无法使用
:::
## API

API提供 `GET` 请求方法

```http:no-line-numbers
GET https://api.yuzuai.xyz/Arcaea
```

## 获取谱面信息

### 请求

```http:no-line-numbers
GET https://api.yuzuai.xyz/Arcaea?songid={songid}
```

|  参数名   |  数据类型  |  默认值  |   说明   |
|  :----:  |  :------: |  :-----: | :------: |
|  songid   |   str    |   必须   |   谱面ID  |

### 响应

#### 示例

- 查询谱面 `Grievous Lady`
```http:no-line-numbers
GET https://api.yuzuai.xyz/Arcaea?songid=grievouslady
```

```json
{
    "songid": "grievouslady",
    "artist": "Team Grimoire vs Laur",
    "name_en": "Grievous Lady",
    "name_jp": "",
    "base_url": "https://api.yuzuai.xyz/Arcaea/grievouslady/base.jpg",
    "byd_url": ""
}
```

## 获取所有谱面信息

### 请求

```http:no-line-numbers
GET https://api.yuzuai.xyz/Arcaea/songlist
```

### 响应

```json
{
    "songs": [
        {
            "idx": 0,
            "id": "sayonarahatsukoi",
            "title_localized": {
                "en": "Sayonara Hatsukoi"
            },
            "artist": "REDSHiFT",
            "bpm": "178",
            "bpm_base": 178,
            "set": "base",
            "purchase": "",
            "audioPreview": 44494,
            "audioPreviewEnd": 76853,
            "side": 0,
            "bg": "",
            "date": 1487980800,
            "version": "1.0",
            "difficulties": [
                {
                "ratingClass": 0,
                "chartDesigner": "Nitro",
                "jacketDesigner": "",
                "rating": 1
                },
                {
                "ratingClass": 1,
                "chartDesigner": "Nitro",
                "jacketDesigner": "",
                "rating": 4
                },
                {
                "ratingClass": 2,
                "chartDesigner": "Toaster",
                "jacketDesigner": "",
                "rating": 7
                }
            ]
        }
    ], ...
}
```