import { productApiURL } from "@/constants/api-url-constant";
import PortalBlockTypeEnumConstant from "@/constants/portal-block-type-enum-constant";
import Mock from "mockjs";
//把JSON数据格式引入进来[JSON数据格式根本没有对外暴露，但是可以引入]
//webpack默认对外暴露的：图片、JSON数据格式

Mock.setup({
  timeout: '100 - 600'
})

Mock.mock(productApiURL.queryPortalBlocks,
   {
  "message": "success",
  "statusCode": 10000,
  "data": [
    //手机
    {
      "type": PortalBlockTypeEnumConstant.getProductShowBlockType(),
      "title": "手机",
      "ad": {
        "firstAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac5cafc68c10ce4471869d378f594b52.png?thumb=1&w=234&h=614&f=webp&q=90"
      },
      "productCategoryList": [
        {
          "categoryName": "手机",
          "productList|8": [
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d764150a470174741d8b0b04515f7a78.jpg?thumb=1&w=200&h=200&f=webp&q=90",
              "title": "Redmi 10A",
              "description": "大电量、大音量、大屏幕",
              "price": "649元起",
              "discountPrice": "699元"
            }
          ]
        }
      ]
    },
    //智能穿戴
    {
      "type": PortalBlockTypeEnumConstant.getProductShowBlockType(),
      "title": "智能穿戴",
      "ad": {
        "firstAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9895c56a7b792fb9053e3085fc261072.jpg"
      },
      "productCategoryList": [
        {
          "categoryName": "热门",
          "productList": () => {
            return [
              ...Mock.mock({
                'a|7': [
                  {
                    "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8259e8fb355acf168c66f75d375c6af.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                    "title": "Xiaomi Watch S1",
                    "description": "腕事具备",
                    "price": "1049元起",
                    "discountPrice": "1099元"
                  }
                ]
              }).a,
              {
                "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fcf24e40ff09a254857ac8b4ace25b8.jpg?thumb=1&w=100&h=100&f=webp&q=90",
                "title": "Redmi Buds 3 青春版",
                "price": "99元",
                "isShowDetail": false
              }
            ]
          }
        },
        {
          "categoryName": "穿戴",
          "productList": () => {
            return [
              ...Mock.mock({
                'a|5': [
                  {
                    "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b28153b80cb2c67564608e56d5c2f3f3.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                    "title": "小米手环6",
                    "description": "全屏实力",
                    "price": "199元起",
                    "discountPrice": "299元"
                  }
                ]
              }).a
            ]
          }
        }
      ],
      "showMore": [
        {
          "title": "浏览更多",
          "tips": "热门",
          "url": "https://www.mi.com/search?keyword=%E6%89%8B%E8%A1%A8%E6%89%8B%E7%8E%AF"
        },
        {
          "title": "浏览更多",
          "tips": "穿戴",
          "url": "https://www.mi.com/p/9289.html"
        },
      ]
    },
    //笔记本 | 平板
    {
      "type": PortalBlockTypeEnumConstant.getProductShowBlockType(),
      "title": "笔记本 | 平板",
      "ad": {
        "firstAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e9896934bb657c3dd0c548952eb27481.jpg?thumb=1&w=234&h=614&f=webp&q=90"
      },
      "productCategoryList": [
        {
          "categoryName": "热门",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f8abb2bc3947c4679e3f1b2aafc28c0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "Redmi Book Pro 15 2022",
                  "description": "全新12代英特尔处理器",
                  "price": "5599元起",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c37478d8b3b553ba0a50adaec2fc775.png?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "Redmi显示器23.8英寸",
              "price": "699元",
              "isShowDetail": false
            }
          ]
        }
      ],
      "showMore": [
        {
          "title": "浏览更多",
          "tips": "热门",
          "url": "https://www.mi.com/search?keyword=%E6%89%8B%E8%A1%A8%E6%89%8B%E7%8E%AF"
        },
        {
          "title": "浏览更多",
          "tips": "热门",
          "url": "https://www.mi.com/search?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC"
        },
      ]
    },
    //家电
    {
      "type": PortalBlockTypeEnumConstant.getProductShowBlockType(),
      "title": "家电",
      "ad": {
        "firstAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=234&h=300&f=webp&q=90",
        "secondAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/229bbaccda43f32f464c0a810b800106.jpg?thumb=1&w=234&h=300&f=webp&q=90",
      },
      "productCategoryList": [
        {
          "categoryName": "热门",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ff5ea76730fdf6f91aba5d3b2e5739.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "小米电视6 65”  OLED",
                  "description": "OLED自发光屏 | 百万级对比度 | 4.6mm超薄全面屏",
                  "price": "6999元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c37478d8b3b553ba0a50adaec2fc775.png?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "米家全自动波轮洗衣机8kg",
              "price": "799元",
              "isShowDetail": false
            }
          ]
        },
        {
          "categoryName": "电视影音",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "小米电视4A 70英寸",
                  "description": "4K超高清 | 人工智能语音系统 | 蓝牙语音遥控器",
                  "price": "3199元",
                  "discountPrice": "3699元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7c37478d8b3b553ba0a50adaec2fc775.png?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "小米电视 EA50 2022款",
              "price": "1399元",
              "isShowDetail": false
            }
          ]
        },
      ],
      "showMore": [
        {
          "title": "浏览更多",
          "tips": "热门",
          "url": "https://www.mi.com/search?keyword=%E6%89%8B%E8%A1%A8%E6%89%8B%E7%8E%AF"
        },
        {
          "title": "浏览更多",
          "tips": "电视影音",
          "url": "https://www.mi.com/a/h/15707.html"
        },
      ]
    },
    //生活电器
    {
      "type": PortalBlockTypeEnumConstant.getProductShowBlockType(),
      "title": "生活电器",
      "ad": {
        "firstAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37973c4bedc27bae38e1b1758ed4b318.png?thumb=1&w=234&h=300&f=webp&q=90",
        "secondAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d51103fe64d90aca747a6d753beae293.jpeg?thumb=1&w=234&h=300&f=webp&q=90",
      },
      "productCategoryList": [
        {
          "categoryName": "扫地机",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61074d24c93da07f76f756b0a160a99e.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米家扫拖机器人 2Pro",
                  "description": "扫拖除菌一步到位",
                  "price": "2299元",
                  "discountPrice": "2699元",
                }
              ]
            }).a
          ]
        },
        {
          "categoryName": "空净",
          "productList": [
            ...Mock.mock({
              "a|6": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9e887830eee09bd341b9ed130db2d9c.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米家空气净化器 4 Pro",
                  "description": "除醛抗菌升级",
                  "price": "1199元",
                  "discountPrice": "1499元",
                }
              ]
            }).a
          ]
        },
        {
          "categoryName": "清洁",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6fcf8a058ddee92f1e47742d1bb2032d.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米家无线吸尘器K10 Pro",
                  "description": "吸拖一体，全屋清洁一机搞定",
                  "price": "1699元",
                  "discountPrice": "1999元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/168fa4454c487c0eec1989e77689a679.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "米家手持无线吸尘器1C",
              "price": "899元",
              "isShowDetail": false
            }
          ]
        },
        {
          "categoryName": "风扇",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca3a3fef6bcecac8035e06934de90396.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米家直流变频塔扇",
                  "description": "立体广角柔风，省空间更安全",
                  "price": "329元",
                  "discountPrice": "349元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/168fa4454c487c0eec1989e77689a679.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "米家直流变频循环落地扇 电池版",
              "price": "599元",
              "isShowDetail": false
            }
          ]
        },
      ],
      "showMore": [
        {
          "title": "浏览更多",
          "tips": "扫地机",
          "url": "https://www.mi.com/search?keyword=%E6%89%AB%E5%9C%B0%E6%9C%BA"
        },
        {
          "title": "浏览更多",
          "tips": "空净",
          "url": "https://www.mi.com/search?keyword=%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8"
        },
        {
          "title": "浏览更多",
          "tips": "清洁",
          "url": "https://www.mi.com/search?keyword=%E6%B8%85%E6%B4%81"
        },
        {
          "title": "浏览更多",
          "tips": "风扇",
          "url": "https://www.mi.com/search?keyword=%E9%A3%8E%E6%89%87"
        },
      ]
    },
    //广告====米家智能冷热饮水机
    {
      "type": PortalBlockTypeEnumConstant.getAdvertisementBlockType(),
      "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c8ac47360d498fe429630e948364a3f1.jpg?thumb=1&w=1226&h=120&f=webp&q=90",
      "title": "米家智能冷热饮水机"
    },
    //厨房电器
    {
      "type": PortalBlockTypeEnumConstant.getProductShowBlockType(),
      "title": "厨房电器",
      "ad": {
        "firstAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0a92bc19df74c4da59563206321320a.jpg?thumb=1&w=234&h=300&f=webp&q=90",
        "secondAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/00c61477413eb05a67b1ec032a148121.png?thumb=1&w=234&h=300&f=webp&q=90",
      },
      "productCategoryList": [
        {
          "categoryName": "净水器",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1889916871e84f151975bb83014ea61f.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "小米净水器1200G",
                  "description": "3.2L/min大流量，鲜活首杯水",
                  "price": "2999元",
                  "discountPrice": "3499元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67ec9efd02e20d10c890dc3fa6a4b9eb.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "小米净水器500G增强版",
              "price": "1299元",
              "isShowDetail": false
            }
          ]
        },
        {
          "categoryName": "烟灶",
          "productList": [
            ...Mock.mock({
              "a|3": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f19bf1611b3a9fe863af68911b769afa.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米家侧吸烟灶套装S1 天然气",
                  "description": "挥手即排，洁净烹饪",
                  "price": "1599元",
                  "discountPrice": "1898元",
                }
              ]
            }).a
          ]
        },
        {
          "categoryName": "电饭煲",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b5e7b8356420596e2116ca901e11cb7b.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米家智能电饭煲 微压版 3L",
                  "description": "看得见的真微压",
                  "price": "399元",
                  "discountPrice": "499元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/07390d2d89220f2e3f06710360ec1077.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "米家智能压力IH电饭煲1S 3L",
              "price": "899元",
              "isShowDetail": false
            }
          ]
        },
        {
          "categoryName": "微蒸烤",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fabb6c16cbadaf300da4a2c2ffb9afa.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米家智能蒸烤箱",
                  "description": "30L大容积， 蒸烤烘炸炖一机多用",
                  "price": "999元",
                  "discountPrice": "1499元",
                }
              ]
            }).a,
          ]
        },
      ],
      "showMore": [
        {
          "title": "浏览更多",
          "tips": "净水器",
          "url": "https://www.mi.com/search?keyword=%E5%87%80%E6%B0%B4%E5%99%A8"
        },
        {
          "title": "浏览更多",
          "tips": "烟灶",
          "url": "https://www.mi.com/search?keyword=%E7%83%9F%E7%81%B6"
        },
        {
          "title": "浏览更多",
          "tips": "电饭煲",
          "url": "https://www.mi.com/search?keyword=%E7%94%B5%E9%A5%AD%E7%85%B2"
        },
        {
          "title": "浏览更多",
          "tips": "微蒸烤",
          "url": "https://www.mi.com/search?keyword=%E5%BE%AE%E8%92%B8%E7%83%A4"
        },
      ]
    },
    //智能家居
    {
      "type": PortalBlockTypeEnumConstant.getProductShowBlockType(),
      "title": "智能家居",
      "ad": {
        "firstAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec383d223d9f38f442268df684c526f6.png?thumb=1&w=234&h=300&f=webp&q=90",
        "secondAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9761c5b49e21b4d5aa03e7ddaf1a09.png?thumb=1&w=234&h=300&f=webp&q=90",
      },
      "productCategoryList": [
        {
          "categoryName": "小爱音箱",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "小米小爱音箱Play 增强版",
                  "description": "是音箱也是床头时钟",
                  "price": "129元",
                  "discountPrice": "149元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1ab7943ae5215e0faacb04f7270d9cfb.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "小米小爱音箱 Art 电池版",
              "price": "349元",
              "isShowDetail": false
            }
          ]
        },
        {
          "categoryName": "门锁",
          "productList": [
            ...Mock.mock({
              "a|3": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0518e14e0e66f546a76802ebc15953b0.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "小米智能门锁 1S",
                  "description": "经典门锁再进一步，性价比首选",
                  "price": "1099元起",
                  "discountPrice": "1299元",
                }
              ]
            }).a
          ]
        },
        {
          "categoryName": "路由器",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/314df4955a5f305de306155078bb103d.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "小米路由器AX3000",
                  "description": "小米路由器AX3000",
                  "price": "349元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4023ef3196d312cda144ecb768b91cdf.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "小米路由器AX9000",
              "price": "1299元",
              "isShowDetail": false
            }
          ]
        },
        {
          "categoryName": "智能设备",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74f5975a77c6d9fcf67e294c47561994.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米家空调伴侣2",
                  "description": "传统空调轻松智能化",
                  "price": "69元",
                  "discountPrice": "79元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/804c0c0f-c8af-78a1-c2fd-c845d104242a.jpg?thumb=1&w=100&h=100",
              "title": "小米无线开关",
              "price": "39元",
              "isShowDetail": false
            }
          ]
        },
      ],
      "showMore": [
        {
          "url": "https://www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1"
        },
        {
          "url": "https://www.mi.com/search?keyword=%E9%97%A8%E9%94%81"
        },
        {
          "url": "https://www.mi.com/search?keyword=%E8%B7%AF%E7%94%B1%E5%99%A8"
        },
        {
          "url": "https://www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E5%AE%B6%E5%BA%AD"
        },
      ]
    },
    //运动出行
    {
      "type": PortalBlockTypeEnumConstant.getProductShowBlockType(),
      "title": "智能家居",
      "ad": {
        "firstAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84fef78042e4056ea589474196780d4e.jpg?thumb=1&w=234&h=300&f=webp&q=90",
        "secondAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecce1c0d981037e58cfa281a06122249.jpg?thumb=1&w=234&h=300&f=webp&q=90",
      },
      "productCategoryList": [
        {
          "categoryName": "平衡车/滑板车",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=200&h=200",
                  "title": "九号平衡车",
                  "description": "年轻人的酷玩具",
                  "price": "2099元",
                  "discountPrice": "2199元",
                }
              ]
            }).a
          ]
        },
        {
          "categoryName": "运动健身",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "小米智能门锁 1S",
                  "description": "轻松掌握身体脂肪率",
                  "price": "99元起",
                }
              ]
            }).a
          ]
        },
        {
          "categoryName": "箱包配饰",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a0ca95bc1de606c2d6a3a44cd28b3490.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "小米旅行箱 20英寸",
                  "description": "一款坚固的旅行箱伴您左右",
                  "price": "279元",
                  "discountPrice": "299元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18ed368638a1d75431e36be0bf6d04f4.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "小米小背包",
              "price": "29元",
              "isShowDetail": false
            }
          ]
        },
        {
          "categoryName": "出行工具",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3fe46e9ba1bf939713b0c3c55bf6776b.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米家充气宝1S",
                  "description": "米家充气宝1S",
                  "price": "199元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/155d7ee69679d173a034576737577342.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "米家电动精修螺丝刀",
              "price": "159元",
              "isShowDetail": false
            }
          ]
        },
      ],
      "showMore": [
        {
        },
        {
        },
        {
        },
        {
        },
      ]
    },
    //广告====小米巨能写中性笔
    {
      "type": PortalBlockTypeEnumConstant.getAdvertisementBlockType(),
      "url": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1226&h=120&f=webp&q=90",
      "title": "小米巨能写中性笔"
    },
    //日用百货
    {
      "type": PortalBlockTypeEnumConstant.getProductShowBlockType(),
      "title": "日用百货",
      "ad": {
        "firstAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5769bd53177a9301113f799fdc8511d.jpg?thumb=1&w=234&h=300&f=webp&q=90",
        "secondAd": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/65950f83f429f2a05125bea297d8df6b.jpg?thumb=1&w=234&h=300&f=webp&q=90",
      },
      "productCategoryList": [
        {
          "categoryName": "个护健康",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2ad7080408a1434b90f824f50293b89.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米家声波电动牙刷T700",
                  "description": "米家声波电动牙刷T700",
                  "price": "299元",
                  "discountPrice": "399元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5afc0b5d19db30a62ed15b5435008033.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "米家自动香氛机套装",
              "price": "89元",
              "isShowDetail": false
            }
          ]
        },
        {
          "categoryName": "电源/线材",
          "productList": [
            ...Mock.mock({
              "a|3": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8831809c4acc20b1b9380522407fc49e.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "小米充电宝10000mAh 33W口袋版Pro",
                  "description": "可以装进口袋的充电宝",
                  "price": "169元起",
                  "discountPrice": "199元",
                }
              ]
            }).a
          ]
        },
        {
          "categoryName": "儿童用品",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2562c4a892f018a979ff0cd8b992251f.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "米兔儿童电话手表5C",
                  "description": "视频通话，守护孩子“看得见”",
                  "price": "349元",
                  "discountPrice": "399元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53b86e4b732d362adc7a58008aa01e98.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "木星黎明系列积木 智能积木 天蝎座防御塔",
              "price": "279元",
              "isShowDetail": false
            }
          ]
        },
        {
          "categoryName": "家居床品",
          "productList": [
            ...Mock.mock({
              "a|7": [
                {
                  "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db0bdebf7a991abf8a307f289491a37.jpg?thumb=1&w=200&h=200&f=webp&q=90",
                  "title": "8H释压舒弹纤维枕 抗菌对装",
                  "description": "8H释压舒弹纤维枕 抗菌对装",
                  "price": "99元",
                }
              ]
            }).a,
            {
              "picture": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/62ce711a4c595c78dee5e647f1295240.jpg?thumb=1&w=100&h=100&f=webp&q=90",
              "title": "8H记忆绵多功能午睡枕",
              "price": "69元",
              "isShowDetail": false
            }
          ]
        },
      ],
      "showMore": [
        {
        },
        {
        },
        {
        },
        {
        },
      ]
    },
    //视频
    {
      "type": PortalBlockTypeEnumConstant.getVideoBLockType(),
      "title": "视频",
      "videoList|4": [
        {
          "thumb": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90",
          "title": "Redmi 10X系列发布会",
          "description": "Redmi 10X系列发布会",
        }
      ]
    },
  ]
}
)
