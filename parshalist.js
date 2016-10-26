"use strict";

/*
 * ["name", "websafename", "view name"]
 * "name" : {
 *  "video" : "url to video",
 *  "text" : "text" || ["protestant text","jewish text"]
 * }
 */
let parshalist = () => { return {
  "parshas" : [["bereshit","Bereshit","Genesis 1:1-6:8"],
  ["noach","Noach","Genesis 6:9-11:32"],
  ["lechlecha","Lech-Lecha","Genesis 12:1-17:27"],
  ["vayera","Vayera","Genesis 18:1-22:24"],
  ["chayeisara","Chayei Sara","Genesis 23:1-25:18"],
  ["toldot","Toldot","Genesis 25:19-28:9"],
  ["vayetzei","Vayetzei","Genesis 28:10-32:2"],
  ["vayishlach","Vayishlach","Genesis 32:3 - 36:43"],
  ["vayeshev","Vayeshev","Genesis 37:1-40:23"],
  ["miketz","Miketz","Genesis 41:1-44:17"],
  ["vayigash","Vayigash","Genesis 44:18-47:27"],
  ["vayechi","Vayechi","Genesis 47:28-50:26"],
  ["shemot","Shemot","Exodus 1:1-6:1"],
  ["vaera","Vaera","Exodus 6:2-9:35"],
  ["bo","Bo","Exodus 10:1-13:16"],
  ["beshalach","Beshalach","Exodus 13:17-17:16"],
  ["yitro","Yitro","Exodus 18:1-20:26"],
  ["mishpatim","Mishpatim","Exodus 21:1-24:18"],
  ["terumah","Terumah","Exodus 25:1-27:19"],
  ["tetzaveh","Tetzaveh","Exodus 27:20-30:10"],
  ["kitisa","Ki Tisa","Exodus 30:11-34:35"],
  ["vayakhel","Vayakhel","Exodus 35:1-38:20"],
  ["pekudei","Pekudei","Exodus 38:21-40:38"],
  ["vayikra","Vayikra","Leviticus 1:1-5:19"],
  ["tzav","Tzav","Leviticus 6:1-8:36"],
  ["shmini","Shmini","Leviticus 9:1-11:47"],
  ["tazria","Tazria","Leviticus 12:1-13:59"],
  ["metzora","Metzora","Leviticus 14:1-15:33"],
  ["achreimot", "Achrei Mot","Leviticus 16:1-18:30"],
  ["kedoshim","Kedoshim","Leviticus 19:1-20:27"],
  ["emor","Emor","Leviticus 21:1-24:23"],
  ["behar","Behar","Leviticus 25:1-26:2"],
  ["bechukotai","Bechukotai","Leviticus 26:3-27:34"],
  ["bamidbar","Bamidbar","Numbers 1:1-4:20"],
  ["nasso","Nasso","Numbers 4:21-7:89"],
  ["behaalotcha","Beha'alotcha","Numbers 8:1-12:16"],
  ["shlach","Sh'lach","Numbers 13:1-15:41"],
  ["korach","Korach","Numbers 16:1-18:32"],
  ["chukat","Chukat","Numbers 19:1-22:1"],
  ["balak","Balak","Numbers 22:2-25:9"],
  ["pinchas","Pinchas","Numbers 25:10-29:40"],
  ["matot","Matot","Numbers 30:1-32:42"],
  ["masei","Masei","Numbers 33:1-36:13"],
  ["devarim","Devarim","Deuteronomy 1:1-3:22"],
  ["vaetchanan","Vaetchanan","Deuteronomy 3:23-7:11"],
  ["eikev","Eikev","Deuteronomy 7:12-11:25"],
  ["reeh","Re'eh","Deuteronomy 11:26-16:17"],
  ["shoftim","Shoftim","Deuteronomy 16:18-21:9"],
  ["kiteitzei","Ki Teitzei","Deuteronomy 21:10-25:19"],
  ["kitavo","Ki Tavo","Deuteronomy 26:1-29:9"],
  ["nitzavim","Nitzavim","Deuteronomy 29:10-30:20"],
  ["vayeilech","Vayeilech","Deuteronomy 31:1-31:30"],
  ["haazinu","Ha'Azinu","Deuteronomy 32:1-32:52"],
  ["vzothaberachah","V'Zot HaBerachah","Deuteronomy 33:1-34:12"]],
  "bereshit" : {
    "display" : "Bereshit",
    "video" : "https://www.youtube.com/embed/cdUcJXqKS7M",
    "text" : "Genesis 1:1-6:8"
  },
  "noach" : {
    "display" : "Noach",
    "video" : "https://www.youtube.com/embed/-zL5QBeUy34",
    "text" : "Genesis 6:9-11:32"
  },
  "lechlecha" :{
    "display" : "Lech-Lecha",
    "video": "https://www.youtube.com/embed/0GseHYTbzFo",
    "text" : "Genesis 12:1-17:27"
  },
  "vayera" :{
    "display" : "Vayera",
    "video": "https://www.youtube.com/embed/i6kmnDXRpEc",
    "text" : "Genesis 18:1-22:24"
  },
  "chayeisara" :{
    "display" : "Chayei Sara",
    "video": "https://www.youtube.com/embed/aoITHLkcN8s",
    "text" : "Genesis 23:1-25:18"
  },
  "toldot" :{
    "display" : "Toldot",
    "video": "https://www.youtube.com/embed/zxqRW-bFfKQ",
    "text" : "Genesis 25:19-28:9"
  },
  "vayetzei" :{
    "display" : "Vayetzei",
    "video": "https://www.youtube.com/embed/k5y5RBbAqMU",
    "text" : "Genesis 28:10-32:2",
    "alt" : "Genesis 28:10-32:3"
  },
  "vayishlach" :{
    "display" : "Vayishlach",
    "video": "https://www.youtube.com/embed/WOig2FjjYE0",
    "text" : "Genesis 32:3-36:43",
    "alt" : "Genesis 32:4-36:43"
  },
  "vayeshev" :{
    "display": "Vayeshev",
    "video": "https://www.youtube.com/embed/GIn46rwVAaA",
    "text" : "Genesis 37:1-40:23"
  },
  "miketz" :{
    "display" : "Miketz",
    "video": "https://www.youtube.com/embed/LTIUSTpyL_o",
    "text" : "Genesis 41:1-44:17"
  },
  "vayigash" :{
    "display" : "Vayigash",
    "video": "https://www.youtube.com/embed/nXAwVHDB9dM",
    "text" : "Genesis 44:18-47:27"
  },
  "vayechi" :{
    "display" : "Vayechi",
    "video": "https://www.youtube.com/embed/Fn0DsBGePfM",
    "text" : "Genesis 47:28-50:26"
  },
  "shemot" :{
    "display" : "Shemot",
    "video": "https://www.youtube.com/embed/po6LpWQhtFE",
    "text" : "Exodus 1:1-6:1"
  },
  "vaera" :{
    "display" : "Vaera",
    "video": "https://www.youtube.com/embed/ypjm8RIs_U4",
    "text" : "Exodus 6:2-9:35"
  },
  "bo" :{
    "display" : "Bo",
    "video": "https://www.youtube.com/embed/CSvTYkkFU8A",
    "text" : "Exodus 10:1-13:16"
  },
  "beshalach" :{
    "display" : "Beshalach",
    "video": "https://www.youtube.com/embed/poEYJvt5ANE",
    "text" : "Exodus 13:17-17:16"
  },
  "yitro" :{
    "display" : "Yitro",
    "video": "https://www.youtube.com/embed/8xrsTmWCUMo",
    "text" : "Exodus 18:1-20:26",
    "alt" : "Exodus 18:1-20:23"
  },
  "mishpatim" :{
    "display" : "Mishpatim",
    "video": "https://www.youtube.com/embed/bjeUZWLK27U",
    "text" : "Exodus 21:1-24:18"
  },
  "terumah" :{
    "display" : "Terumah",
    "video": "https://www.youtube.com/embed/ce9RHyBOzeU",
    "text" : "Exodus 25:1-27:19"
  },
  "tetzaveh" :{
    "display" : "Tetzaveh",
    "video": "https://www.youtube.com/embed/AZBEmWvuob0",
    "text" : "Exodus 27:20-30:10"
  },
  "kitisa" :{
    "display" : "Ki Tisa",
    "video": "https://www.youtube.com/embed/9n3cDQcRZWE",
    "text" : "Exodus 30:11-34:35"
  },
  "vayakhel" :{
    "display" : "Vayakhel",
    "video": "https://www.youtube.com/embed/ZIVh8ljdfzg",
    "text" : "Exodus 35:1-38:20"
  },
  "pekudei" :{
    "display" : "Pekudei",
    "video": "https://www.youtube.com/embed/41XSOyxvT4s",
    "text" : "Exodus 38:21-40:38"
  },
  "vayikra" :{
    "display" : "Vayikra",
    "video": "https://www.youtube.com/embed/LxoPFZfoEIU",
    "text" : "Leviticus 1:1-5:19",
    "alt" : "Leviticus 1:1-5:26"
  },
  "tzav" :{
    "display" : "Tzav",
    "video": "https://www.youtube.com/embed/hHlc1GZws78",
    "text" : "Leviticus 6:1-8:36"
  },
  "shmini" :{
    "display" : "Shmini",
    "video": "https://www.youtube.com/embed/XB9Klvyr1xM",
    "text" : "Leviticus 9:1-11:47"
  },
  "tazria" :{
    "display" : "Tazria",
    "video": "https://www.youtube.com/embed/QXdFuQTQHT4",
    "text" : "Leviticus 12:1-13:59"
  },
  "metzora" :{
    "display" : "Metzora",
    "video": "https://www.youtube.com/embed/eR4NlgoUnKI",
    "text" : "Leviticus 14:1-15:33"
  },
  "achreimot" :{
    "display" : "Achrei Mot",
    "video": "https://www.youtube.com/embed/4rzxRe9fapo",
    "text" : "Leviticus 16:1-18:30"
  },
  "kedoshim" :{
    "display" : "Kedoshim",
    "video": "https://www.youtube.com/embed/juBjImRe0tU",
    "text" : "Leviticus 19:1-20:27"
  },
  "emor" :{
    "display" : "Emor",
    "video": "https://www.youtube.com/embed/24JYzgXKNVo",
    "text" : "Leviticus 21:1-24:23"
  },
  "behar" :{
    "display" : "Behar",
    "video": "https://www.youtube.com/embed/m21P-O8XWxY",
    "text" : "Leviticus 25:1-26:2"
  },
  "bechukotai" :{
    "display" : "Bechukotai",
    "video": "https://www.youtube.com/embed/7Zr0-Ptv5No",
    "text" : "Leviticus 26:3-27:34"
  },
  "bamidbar" :{
    "display" : "Bamidbar",
    "video": "https://www.youtube.com/embed/vEKN7cBxWdQ",
    "text" : "Numbers 1:1-4:20"
  },
  "nasso" :{
    "display" : "Nasso",
    "video": "https://www.youtube.com/embed/yRCwvI517es",
    "text" : "Numbers 4:21-7:89"
  },
  "behaalotcha" :{
    "display" : "Beha'alotcha",
    "video": "https://www.youtube.com/embed/F-PLR1zaMOA",
    "text" : "Numbers 8:1-12:16"
  },
  "shlach" :{
    "display" : "Sh'lach",
    "video": "https://www.youtube.com/embed/lK4-A_zuwCU",
    "text" : "Numbers 13:1-15:41"
  },
  "korach" :{
    "display" : "Korach",
    "video": "https://www.youtube.com/embed/WmBGrGsnkfU",
    "text" : "Numbers 16:1-18:32"
  },
  "chukat" :{
    "display" : "Chukat",
    "video": "https://www.youtube.com/embed/rOH3CAr36T0",
    "text" : "Numbers 19:1-22:1"
  },
  "balak" :{
    "display" : "Balak",
    "video": "https://www.youtube.com/embed/3m6SixkQGQc",
    "text" : "Numbers 22:2-25:9"
  },
  "pinchas" :{
    "display" : "Pinchas",
    "video": "https://www.youtube.com/embed/KuaSQHAOOxA",
    "text" : "Numbers 25:10-29:40",
    "alt" : "Numbers 25:10-30:1"
  },
  "matot" :{
    "display" : "Matot",
    "video": "https://www.youtube.com/embed/98AcJTKQkN8",
    "text" : "Numbers 30:1-32:42",
    "alt" : "Numbers 30:2-32:42"
  },
  "masei" :{
    "display" : "Masei",
    "video": "https://www.youtube.com/embed/UeOeAq10PA4",
    "text" : "Numbers 33:1-36:13"
  },
  "devarim" :{
    "display" : "Devarim",
    "video": "https://www.youtube.com/embed/gITADJ4fg3I",
    "text" : "Deuteronomy 1:1-3:22"
  },
  "vaetchanan" :{
    "display" : "Vaetchanan",
    "video": "https://www.youtube.com/embed/LsixYJoAPuI",
    "text" : "Deuteronomy 3:23-7:11"
  },
  "eikev" :{
    "display" : "Eikev",
    "video": "https://www.youtube.com/embed/JY8w0jtLc9w",
    "text" : "Deuteronomy 7:12-11:25"
  },
  "reeh" :{
    "display" : "Re'eh",
    "video": "https://www.youtube.com/embed/ZDbjwmWed7s",
    "text" : "Deuteronomy 11:26-16:17"
  },
  "shoftim" :{
    "display" : "Shoftim",
    "video": "https://www.youtube.com/embed/GdGcIsVuVgE",
    "text" : "Deuteronomy 16:18-21:9"
  },
  "kiteitzei" :{
    "display" : "Ki Teitzei",
    "video": "https://www.youtube.com/embed/xeC6MD_hFRY",
    "text" : "Deuteronomy 21:10-25:19"
  },
  "kitavo" :{
    "display" : "Ki Tavo",
    "video": "https://www.youtube.com/embed/h8TJ6bubL70",
    "text" : "Deuteronomy 26:1-29:9",
    "alt" : "Deuteronomy 26:1-29:8"
  },
  "nitzavim" :{
    "display" : "Nitzavim",
    "video": "https://www.youtube.com/embed/OdbfLBP-zOc",
    "text" : "Deuteronomy 29:10-30:20",
    "alt" : "Deuteronomy 29:9-30:20"
  },
  "vayeilech" :{
    "display" : "Vayeilech",
    "video": "https://www.youtube.com/embed/JrtrChHfnXQ",
    "text" : "Deuteronomy 31:1-31:30"
  },
  "haazinu" :{
    "display" : "Ha'Azinu",
    "video": "https://www.youtube.com/embed/c0kv1PRdzXE",
    "text" : "Deuteronomy 32:1-32:52"
  },
  "vzothaberachah" :{
    "display" : "V'Zot HaBerachah",
    "video": "https://www.youtube.com/embed/Zim3nG8cYU0",
    "text" : "Deuteronomy 33:1-34:12"
  }
};
}

module.exports = parshalist;
