# osu!

osu ppv2 API使用说明

::: waring 注意
api站点未搭建，暂时无法使用
:::

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
   Content-Type: application/json
   ```

   </CodeGroupItem>
</CodeGroup>

## 请求

***为必带参数**

|  参数名   |     数据类型     | 默认值 |                            说明                            |
| :-------: | :--------------: | :----: | :--------------------------------------------------------: |
| ***mode** |       int        |        |       模式，`0`：std，`1`：taiko，`2`：ctb，`3`：mania       |
| ***map**  |       int        |        |                           地图ID                           |
| accuracy  |      float       |   0    |                           准确度                           |
|   score   |       int        |   0    |                 游玩分数，仅用于mania模式                  |
|   combo   |       int        |   0    |                           连击数                           |
|   tick    |       int        |   0    |                       仅用于ctb模式                        |
|   drop    |       int        |   0    |                       仅用于ctb模式                        |
|   good    |       int        |   0    |                            100                             |
|    bad    |       int        |   0    |                             50                             |
|   miss    |       int        |   0    |                            miss                            |
|   mods    | List[str] \| str |        |                          附带mods                          |

## 示例

### Std

- 计算地图ID：`2717460` 的 `std` 模式

<CodeGroup>
   <CodeGroupItem title='GET' active>

   ```http
  GET https://api.yuzuai.xyz/osu?mode=0&map=2717460
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http
   POST https://106.53.138.218:6321/api/osu
   Content-Type: application/json
   
   {
   	mode: 0,
   	map: 2717460
   }
   ```

   </CodeGroupItem>
</CodeGroup>

- 计算游玩地图ID：`2717460` 的 `std` 模式的结果

<CodeGroup>
   <CodeGroupItem title='GET' active>

   ```http:no-line-numbers
   GET https://api.yuzuai.xyz/osu?mode=0&map=2717460&accuracy=99.17&combo=1026&good=13&mods=HDDT
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http:no-line-numbers
   POST https://api.yuzuai.xyz/osu
   Content-Type: application/json
   
   {
   	mode: 0,
   	map: 2717460,
   	accuracy: 99.17,
   	combo: 1026,
   	good: 13,
   	mods: ["HD", "DT"]
   }
   ```

   </CodeGroupItem>
</CodeGroup>

### Taiko

- 计算游玩地图ID：`2717460` 的 `taiko` 模式

<CodeGroup>
   <CodeGroupItem title='GET' active>

   ```http:no-line-numbers
   GET https://api.yuzuai.xyz/osu?mode=1&map=2717460&accuracy=98.73&good=37&miss=0
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http:no-line-numbers
   POST https://api.yuzuai.xyz/osu
   Content-Type: application/json
   
   {
   	mode: 1,
   	map: 2717460,
   	accuracy: 98.73,
   	good: 37,
   	miss: 0
   }
   ```

   </CodeGroupItem>
</CodeGroup>

### Ctb

- 计算游玩地图ID：`2717460` 的 `ctb` 模式

<CodeGroup>
   <CodeGroupItem title='GET' active>

   ```http:no-line-numbers
   GET https://api.yuzuai.xyz/osu?mode=12&map=2717460&accuracy=99.92&miss=1
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http:no-line-numbers
   POST https://api.yuzuai.xyz/osu
   Content-Type: application/json
   
   {
   	mode: 2,
   	map: 2717460,
   	accuracy: 99.92,
   	miss: 1
   }
   ```
   
   </CodeGroupItem>
</CodeGroup>

### Mania

- 计算游玩地图ID：`2717460` 的 `mania` 模式

<CodeGroup>
   <CodeGroupItem title='GET' active>

   ```http:no-line-numbers
   GET https://api.yuzuai.xyz/osu?mode=3&map=2717460&score=903000
   ```

   </CodeGroupItem>
   <CodeGroupItem title='POST' active>

   ```http:no-line-numbers
   POST https://api.yuzuai.xyz/osu
   Content-Type: application/json
   
   {
   	mode: 3,
   	map: 2717460,
   	score: 903000
   }
   ```

   </CodeGroupItem>
</CodeGroup>

## 响应

|   字段名   |  数据类型   |                   说明                    |
| :--------: | :---------: | :---------------------------------------: |
|  Beatmap   |     str     |                  地图名                   |
| Statistics |  Dict[str]  |    详见下方[Statistics](#statistics)    |
|    Aim     |    float    |                  Aim PP                   |
|   Speed    |    float    |                 Speed PP                  |
|  Accuracy  |    float    |                  Acc PP                   |
| Flashlight |     int     |                暂不知用处                 |
|     OD     |    float    |      地图OD值，会随着开启的Mods变化       |
|     AR     |    float    |      地图AR值，会随着开启的Mods变化       |
| Max Combo  |     int     |                最大Combo数                |
|    Mods    |     str     |                开启的Mods                 |
|     pp     |    float    |                 计算的PP                  |
|   accpp    | List[float] |   计算acc 95-100的PP，仅计算 `std` 模式   |
|    ifpp    |    float    |          计算如果游玩为FC的成绩           |
|  mapinfo   |  Dict[str]  | 地图信息，详情见下方[mapinfo](#mapinfo) |

### Statistics

|    字段名     | 数据类型 |          说明          |
| :-----------: | :------: | :--------------------: |
|   Accuracy    |  float   |         准确度         |
|     Combo     |   int    |         连击数         |
|     Great     |   int    |          300           |
|      Ok       |   int    |          100           |
|      Meh      |   int    |           50           |
|     Miss      |   int    |          miss          |
| LargeTickHit  |   int    |     仅 `ctb` 模式      |
| SmallTickHit  |   int    |     仅 `ctb` 模式      |
| SmallTickMiss |   int    |     仅 `ctb` 模式      |
|    Perfect    |   int    | 彩300，仅 `mania` 模式 |
|     Good      |   int    |  200，仅 `mania` 模式  |

### mapinfo

|    字段名    | 数据类型 |           说明           |
| :----------: | :------: | :----------------------: |
| star_rating  |  float   |         地图难度         |
|  aim_rating  |  float   |  aim难度，仅 `std` 模式  |
| speed_rating |  float   | speed难度，仅 `std` 模式 |
|  ar_rating   |  float   |  ar难度，仅 `std` 模式   |
|  od_rating   |  float   |  od难度，仅 `std` 模式   |

## 示例

**仅显示 `std` 模式**

```json
{
    "Beatmap":"Suzuyu - Euphorium (GodKei) [Koori's White Snow Extra]",
    "Statistics":{
        "Accuracy":100.0,
        "Combo":1565.0,
        "Great":1039.0,
        "Ok":0.0,
        "Meh":0.0,
        "Miss":0.0
    },
    "Aim":389.0841220790005,
    "Speed":284.86206231387206,
    "Accuracy":199.5151216710896,
    "Flashlight":0.0,
    "OD":10.311111238267687,
    "AR":10.53333346048991,
    "Max Combo":1565.0,
    "Mods":"DT, HD",
    "pp":888.4478746833375,
    "accpp":[
        500.3719254955025,
        536.8176616638145,
        593.4861765312446,
        658.8430713342487,
        771.8632184144637,
        888.4478746833375
    ],
    "ifpp":888.4478746833375,
    "mapinfo":{
        "star_rating":8.25,
        "aim_rating":4.2,
        "speed_rating":3.71,
        "ar_rating":10.53,
        "od_rating":10.31
    }
}
```