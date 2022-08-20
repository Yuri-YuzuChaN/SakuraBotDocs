# osu!

osu ppv2 API使用说明

## API

API提供 `GET` 和 `POST` 两种请求方法

<CodeGroup>
   <CodeGroupItem title='GET' active>


   ```http
   GET https://api.yuzuai.xyz/osu
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http
   POST https://api.yuzuai.xyz/osu
   Content-Type: text/plate
   ```

   </CodeGroupItem>
</CodeGroup>

::: warning 注意
目前仅支持 `GET` 请求
:::

## 请求

***为必带参数**

|  参数名   |     数据类型       | 默认值 |                            说明                             |
| :-------: | :--------------: | :----: | :--------------------------------------------------------:|
| **BeatmapID** *|   int       |        |       模式，`0`：std，`1`：taiko，`2`：ctb，`3`：mania      |
| **Mode** *  |       int       |        |                           地图ID                           |
| Accuracy  |      double      |   0    |                       准确度 0-1                           |
|   Combo   |       int        |   0    |                         连击数                             |
|   C300    |       int        |   0    |                        Combo 300                           |
|   C100    |       int        |   0    |                        Combo 100                          |
|   C50     |       int        |   0    |                        Combo 50                           |
|   Miss    |       int        |   0    |                           Miss                             |
|   Geki    |       int        |   0    |                         Mania的黄 `300`                    |
|   Katu    |       int        |   0    |           Catch的 `SmallTickMiss` / Mania的 `200`          |
|   Mods    |     string       |        |                          附带mods                          |
|   Score   |       int        |1000000 |                    Mania分数，暂时没有用处                  |
|   isPlay  |      bool        |        |            是否为游玩成绩，如果为否则只计算地图信息           |

## 示例

### Std

- 计算地图ID：`2717460` 的 `std` 模式

<CodeGroup>
   <CodeGroupItem title='GET' active>

   ```http
  GET https://api.yuzuai.xyz/osu?BeatmapID=2717460&Mode=0
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http
   POST https://api.yuzuai.xyz/osu
   Content-Type: text/plate
   
   {
   	BeatmapID: 2717460,
   	Mode: 0
   }
   ```

   </CodeGroupItem>
</CodeGroup>

- 计算游玩地图ID：`2717460` 的 `std` 模式的结果

<CodeGroup>
   <CodeGroupItem title='GET' active>

   ```http:no-line-numbers
   GET https://api.yuzuai.xyz/osu?BeatmapID=2717460&Mode=0&Accuracy=0.9917&Combo=1564&C300=1026&C100=13&Mods=HDDT&isPlay=true
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http:no-line-numbers
   POST https://api.yuzuai.xyz/osu
   Content-Type: text/plate
   
   {
   	BeatmapID: 2717460,
   	Mode: 0,
   	Accuracy: 0.9917,
      Combo: 1564
   	C300: 1026,
   	C100: 13,
   	Mods: "HDDT",
      isPlay: "true"
   }
   ```

   </CodeGroupItem>
</CodeGroup>

### Taiko

- 计算游玩地图ID：`2717460` 的 `taiko` 模式

<CodeGroup>
   <CodeGroupItem title='GET' active>

   ```http:no-line-numbers
   GET https://api.yuzuai.xyz/osu?BeatmapID=2717460&Mode=1&Accuracy=0.9873&C100=37&Miss=0&isPlay=true
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http:no-line-numbers
   POST https://api.yuzuai.xyz/osu
   Content-Type: text/plate
   
   {
   	BeatmapID: 2717460,
   	Mode: 1,
   	Accuracy: 0.9873,
   	C100: 37,
   	Miss: 0,
      isPlay: "true"
   }
   ```

   </CodeGroupItem>
</CodeGroup>

### Ctb

- 计算游玩地图ID：`2717460` 的 `ctb` 模式

<CodeGroup>
   <CodeGroupItem title='GET' active>

   ```http:no-line-numbers
   GET https://api.yuzuai.xyz/osu?BeatmapID=2717460&Mode=2&Accuracy=0.9992&Miss=1&isPlay=true
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http:no-line-numbers
   POST https://api.yuzuai.xyz/osu
   Content-Type: text/plate
   
   {
   	BeatmapID: 2717460,
   	Mode: 2,
   	Accuracy: 0.9992,
   	Miss: 1,
      isPlay: "true"
   }
   ```
   
   </CodeGroupItem>
</CodeGroup>

### Mania

- 计算游玩地图ID：`2717460` 的 `mania` 模式

<CodeGroup>
   <CodeGroupItem title='GET' active>

   ```http:no-line-numbers
   GET https://api.yuzuai.xyz/osu?BeatmapID=2717460&Mode=3&C300=1634&Geki=157&Katu=10&C100=1&C50=1&Score=992326&isPlay=true
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http:no-line-numbers
   POST https://api.yuzuai.xyz/osu
   Content-Type: text/plate
   
   {
   	BeatmapID: 2717460,
   	Mode: 3,
      C300: 1634,
      Geki: 157,
      Katu: 10,
      C100: 1,
      C50: 1,
   	Score: 992326,
      isPlay: "true"
   }
   ```

   </CodeGroupItem>
</CodeGroup>

## 响应

|   字段名                |  数据类型 |         说明          |
| :-------------------:  | :------: | :--------------------:  |
|       StarRating       |  double  |         地图难度        |
|           HP           |  double  |         地图 HP         |
|           CS           |  double  |         地图 CS         |
|          Aim           |  double  |      地图 Aim 难度       |
|         Speed          |  double  |      地图 Speed 难度    |
|           AR           |  double  |         地图 AR         |
|           OD           |  double  |         地图 OD         |
|          aim           |  double  |         Aim PP          |
|         speed          |  double  |        Speed PP         |
|        accuracy        |  double  |         Acc PP          |
|       flashlight       |  double  |                         |
|  effective_miss_count  |  double  |                         |
|           pp           |  double  |       计算游玩的PP       |
|          sspp          |  double  |     计算该地图SS的PP      |
|          ifpp          |  double  |  计算游玩的地图如果FC的PP |

## 示例

**仅显示 `std` 模式**

```json
{
   "StarRating": 5.738587643332177,
   "HP": 5.0,
   "CS": 3.5999999046325684,
   "Aim": 2.976119978852806,
   "Speed": 2.502084429304671,
   "AR": 9.300000190734863,
   "OD": 8.800000190734863,
   "aim": 117.62958934808009,
   "speed": 68.54505269302295,
   "accuracy": 69.36988825950219,
   "flashlight": 0.0,
   "effective_miss_count": 0.0,
   "pp": 259.90454059224646,
   "sspp": 293.8718595656594,
   "ifpp": 260.02799911732274
}
```
