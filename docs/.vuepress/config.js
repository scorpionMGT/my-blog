module.exports = {
  "title": "maoguotao",
  "description": "笔记",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "valineConfig": {
      appId: 'zTa2HLtPyhAN5dxA9qoo5EGj-gzGzoHsz',// your appId
      appKey: 'RUOo35em7GxMQEicvYPCDf48', // your appKey
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "github",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/guotaomao",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "maoguotao",
        "desc": "笔记",
        "email": "1142656486@qq.com",
        "link": "https://github.com/guotaomao"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "搭建博客的模板",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "base": `/site`,
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "maoguotao",
    "authorAvatar": "/logo.png",
    "record": "xxxx",
    "startYear": "2018"
  },
  "markdown": {
    "lineNumbers": true
  }
}