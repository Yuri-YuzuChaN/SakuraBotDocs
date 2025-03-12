# osu!

osu ppv2 API使用说明

## API

API提供 `POST` 请求方法

```http
POST https://api.yuzuchan.moe/osu/ppcalc
```

## 请求

***为必带参数**

|  参数名   |     数据类型       | 默认值 |                           说明                            |
| :-------: | :--------------: | :------: | :--------------------------------------------------------:|
| **beatmap** *|   int       |          |                           地图ID                            |
| **mode** *  |       int      |          |      模式，`0`：std，`1`：taiko，`2`：ctb，`3`：mania      |
|  score    |       dict       |          |               精确数据，详见 `score`                      |
|  isplay   |       bool       |          |            是否为游玩成绩，如果为否则只计算地图信息         |

### score

|   参数名   |     数据类型      |  默认值  |                           说明                             |
| :--------: | :--------------: | :------: | :--------------------------------------------------------:|
|  accuracy  |      double      |   null   |                       准确度 0-100                         |
|  combo     |       int        |   null   |                         连击数                             |
|  n300      |       int        |   null   |                        combo 300                           |
|  n100      |       int        |   null   |                        combo 100                          |
|  n50       |       int        |   null   |                        combo 50                           |
|  misses    |       int        |   null   |                           miss                             |
|  n_geki    |       int        |   null   |                         mania的黄 `300`                    |
|  n_katu    |       int        |   null   |           catch的 `SmallTickMiss` / mania的 `200`          |
|  mods      |      string      |   null   |                   附带mods，如 `DTHD`                      |

## 示例

### Std

- 计算地图ID：`2717460` 的 `std` 模式

```http
POST https://api.yuzuchan.moe/osu/ppcalc
Content-Type: application/json

{
   "beatmap": 2717460,
   "mode": 0
}
```

- 计算游玩地图ID：`2717460` 的 `std` 模式的结果

```http:no-line-numbers
POST https://api.yuzuchan.moe/osu/ppcalc
Content-Type: application/json

{
   "beatmap": 2717460,
   "mode": 0,
   "score": {
      "accuracy": 99.17,
      "combo": 1564
      "n300": 1026,
      "n100": 13,
      "mods": "HDDT",
   },
   "isplay": true
}
```

### Taiko

- 计算游玩地图ID：`2717460` 的 `taiko` 模式

```http:no-line-numbers
POST https://api.yuzuchan.moe/osu/ppcalc
Content-Type: application/json

{
   "beatmap": 2717460,
   "mode": 1,
   "score": {
      "accuracy": 98.73,
      "n100": 37,
      "misses": 0,
   },
   "isplay": true
}
```

### Ctb

- 计算游玩地图ID：`2717460` 的 `ctb` 模式

```http:no-line-numbers
POST https://api.yuzuchan.moe/osu/ppcalc
Content-Type: application/json

{
   "beatmap": 2717460,
   "mode": 2,
   "score": {
      "accuracy": 99.92,
      "misses": 1,
   },
   "isplay": true
}
```

### Mania

- 计算游玩地图ID：`2717460` 的 `mania` 模式

```http:no-line-numbers
POST https://api.yuzuchan.moe/osu/ppcalc
Content-Type: application/json

{
   "beatmap": 2717460,
   "mode": 3,
   "score": {
      "n300": 1634,
      "n_geki": 157,
      "n_katu": 10,
      "n100": 1,
      "n50": 1,
   },
   "isplay": true
}
```

## 响应

|   字段名                |  数据类型 |         说明          |
| :-------------------:  | :------: | :--------------------:  |
|       StarRating       |  double  |        地图难度         |
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
