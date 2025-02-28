const rawAlisaFrameData =
  [
    {
      "input": "2+3",
      "hitLevel": "m",
      "damage": "12 (12)",
      "startupFrame": "16",
      "blockFrame": 1,
      "hitFrame": "+2c",
      "counterHitFrame": "",
    },
    {
      "input": "H.d+1+2",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": "",
    },
    {
      "input": "H.f+1+4",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": "",
    },
    {
      "input": "H.2+3",
      "hitLevel": "m",
      "damage": "50 (28)",
      "startupFrame": "20~21",
      "blockFrame": 8,
      "hitFrame": "-15d",
      "counterHitFrame": "",
    },
    {
      "input": "R.df+1+2",
      "hitLevel": "m",
      "damage": "",
      "startupFrame": "20",
      "blockFrame": -15,
      "hitFrame": "+0d",
      "counterHitFrame": "",
    },
    {
      "input": "1",
      "hitLevel": "h",
      "damage": 5,
      "startupFrame": "10",
      "blockFrame": 1,
      "hitFrame": 8,
      "counterHitFrame": "",
    },
    {
      "input": "1,1",
      "hitLevel": "h,h",
      "damage": "5,18",
      "startupFrame": "21",
      "blockFrame": -3,
      "hitFrame": 5,
      "counterHitFrame": "+14a",
    },
    {
      "input": "1,2",
      "hitLevel": "h,h",
      "damage": "5,10",
      "startupFrame": "12",
      "blockFrame": -3,
      "hitFrame": 8,
      "counterHitFrame": "",
    },
    {
      "input": "1,2,2",
      "hitLevel": "h,h,h",
      "damage": "5,10,20",
      "startupFrame": "20~35",
      "blockFrame": "-9~+6",
      "hitFrame": "+21a (+6)",
      "counterHitFrame": "",
    },
    {
      "input": "1,2,d+2",
      "hitLevel": "h,h,l",
      "damage": "5,10,17",
      "startupFrame": "27~28",
      "blockFrame": -11,
      "hitFrame": 2,
      "counterHitFrame": "+33a",
    },
    {
      "input": "1,2,d+2*",
      "hitLevel": "h,h,l",
      "damage": "5,10,22",
      "startupFrame": "36~37",
      "blockFrame": -10,
      "hitFrame": "+34a",
      "counterHitFrame": "",
    },
    {
      "input": "2",
      "hitLevel": "h",
      "damage": 10,
      "startupFrame": "12",
      "blockFrame": -6,
      "hitFrame": 5,
      "counterHitFrame": "",
    },
    {
      "input": "2,2",
      "hitLevel": "h,h",
      "damage": "10,22",
      "startupFrame": "20~35",
      "blockFrame": "-13~+2",
      "hitFrame": "+15a (+5)",
      "counterHitFrame": "",
    },
    {
      "input": "2,3",
      "hitLevel": "h,m",
      "damage": "10,8",
      "startupFrame": "22~23",
      "blockFrame": -10,
      "hitFrame": 1,
      "counterHitFrame": "",
    },
    {
      "input": "2,3,3",
      "hitLevel": "h,m,m",
      "damage": "10,8,25",
      "startupFrame": "20~22",
      "blockFrame": -11,
      "hitFrame": "+16a (-7)",
      "counterHitFrame": "+61a (+41)",
    },
    {
      "input": "2,3,4",
      "hitLevel": "h,m,L",
      "damage": "10,8,20",
      "startupFrame": "42~45",
      "blockFrame": -13,
      "hitFrame": 13,
      "counterHitFrame": "",
    },
    {
      "input": "3",
      "hitLevel": "m",
      "damage": 10,
      "startupFrame": "13~14",
      "blockFrame": -12,
      "hitFrame": -1,
      "counterHitFrame": "",
    },
    {
      "input": "3,2",
      "hitLevel": "m,h",
      "damage": "10,20",
      "startupFrame": "26~27",
      "blockFrame": -2,
      "hitFrame": "+20a (+11)",
      "counterHitFrame": "",
    },
    {
      "input": "3,f+2",
      "hitLevel": "m,m",
      "damage": "10,20",
      "startupFrame": "24~28 i1~4 i1~4 i1~4 i1",
      "blockFrame": -12,
      "hitFrame": 5,
      "counterHitFrame": "",
    },
    {
      "input": "4",
      "hitLevel": "h",
      "damage": 24,
      "startupFrame": "13~14",
      "blockFrame": -5,
      "hitFrame": "+14g",
      "counterHitFrame": "+38a",
    },
    {
      "input": "1+2",
      "hitLevel": "m",
      "damage": 22,
      "startupFrame": "19~20",
      "blockFrame": -4,
      "hitFrame": "+15a",
      "counterHitFrame": "",
    },
    {
      "input": "1+2+3",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": "",
    },
    {
      "input": "1+2+4",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": "",
    },
    {
      "input": "f+2",
      "hitLevel": "m",
      "damage": 12,
      "startupFrame": "17~18",
      "blockFrame": -4,
      "hitFrame": 7,
      "counterHitFrame": "",
    },
    {
      "input": "f+2,1",
      "hitLevel": "m,m",
      "damage": "12,20",
      "startupFrame": "24~25",
      "blockFrame": -10,
      "hitFrame": "+14c",
      "counterHitFrame": "",
    },
    {
      "input": "f+2,3",
      "hitLevel": "m,h",
      "damage": "12,8",
      "startupFrame": "22",
      "blockFrame": -8,
      "hitFrame": 4,
      "counterHitFrame": "",
    },
    {
      "input": "f+2,3,3",
      "hitLevel": "m,h,m",
      "damage": "12,8,22",
      "startupFrame": "35~36",
      "blockFrame": -10,
      "hitFrame": "+12a (-3)",
      "counterHitFrame": "",
    },
    {
      "input": "f+3",
      "hitLevel": "h",
      "damage": 10,
      "startupFrame": "14~15",
      "blockFrame": -14,
      "hitFrame": -3,
      "counterHitFrame": "",
    },
    {
      "input": "f+3,2",
      "hitLevel": "h,h",
      "damage": "10,20",
      "startupFrame": "25",
      "blockFrame": -4,
      "hitFrame": "+38d (+30)",
      "counterHitFrame": "",
    },
    {
      "input": "f+3,1+2",
      "hitLevel": "h,m",
      "damage": "10,25",
      "startupFrame": "24~25",
      "blockFrame": -13,
      "hitFrame": 8,
      "counterHitFrame": "",
    },
    {
      "input": "f+4",
      "hitLevel": "m",
      "damage": 14,
      "startupFrame": "16",
      "blockFrame": -9,
      "hitFrame": 1,
      "counterHitFrame": "",
    },
    {
      "input": "f+4,1",
      "hitLevel": "m,h",
      "damage": "14,14",
      "startupFrame": "25~26",
      "blockFrame": -9,
      "hitFrame": "+15d (+7)",
      "counterHitFrame": "",
    },
    {
      "input": "f+4,1,4",
      "hitLevel": "m,h,m",
      "damage": "14,14,19 (13)",
      "startupFrame": "27~65",
      "blockFrame": "-12~+26g",
      "hitFrame": "+1a",
      "counterHitFrame": "",
    },
    {
      "input": "f+1+2",
      "hitLevel": "m",
      "damage": 25,
      "startupFrame": "14~15",
      "blockFrame": -12,
      "hitFrame": "+14c",
      "counterHitFrame": "",
    },
    {
      "input": "f+3+4",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": "",
    },
    {
      "input": "df+1",
      "hitLevel": "m",
      "damage": 10,
      "startupFrame": "13",
      "blockFrame": -6,
      "hitFrame": 5,
      "counterHitFrame": 8,
    },
    {
      "input": "df+1,1",
      "hitLevel": "m,h",
      "damage": "10,20",
      "startupFrame": "30~31",
      "blockFrame": 1,
      "hitFrame": 8,
      "counterHitFrame": "",
    },
    {
      "input": "df+1,1,2",
      "hitLevel": "m,h,h",
      "damage": "10,20,28",
      "startupFrame": "22~25",
      "blockFrame": 6,
      "hitFrame": 8,
      "counterHitFrame": "",
    },
    {
      "input": "df+1,4",
      "hitLevel": "m,m",
      "damage": "10,17",
      "startupFrame": "26~27",
      "blockFrame": -11,
      "hitFrame": "+3c",
      "counterHitFrame": "+13c",
    },
    {
      "input": "df+2",
      "hitLevel": "m",
      "damage": 16,
      "startupFrame": "16~17",
      "blockFrame": -9,
      "hitFrame": "+32a (+22)",
      "counterHitFrame": "",
    },
    {
      "input": "df+3",
      "hitLevel": "m",
      "damage": 14,
      "startupFrame": "16",
      "blockFrame": -9,
      "hitFrame": 1,
      "counterHitFrame": "",
    },
    {
      "input": "df+3,3",
      "hitLevel": "m,L",
      "damage": "14,17",
      "startupFrame": "23~24",
      "blockFrame": -12,
      "hitFrame": 1,
      "counterHitFrame": "+14a",
    },
    {
      "input": "df+4",
      "hitLevel": "m",
      "damage": 13,
      "startupFrame": "12",
      "blockFrame": -7,
      "hitFrame": 4,
      "counterHitFrame": "",
    },
    {
      "input": "d+2",
      "hitLevel": "M",
      "damage": 14,
      "startupFrame": "24~26",
      "blockFrame": -12,
      "hitFrame": "+2c",
      "counterHitFrame": "",
    },
    {
      "input": "d+2,4",
      "hitLevel": "M,M",
      "damage": "14,24",
      "startupFrame": "18~21",
      "blockFrame": -9,
      "hitFrame": "+28 (+13)",
      "counterHitFrame": "",
    },
    {
      "input": "d+3",
      "hitLevel": "L",
      "damage": 17,
      "startupFrame": "23~32",
      "blockFrame": "-10~-1",
      "hitFrame": "+8c~+17c",
      "counterHitFrame": "+32a",
    },
    {
      "input": "d+4",
      "hitLevel": "L",
      "damage": 15,
      "startupFrame": "17~18",
      "blockFrame": -12,
      "hitFrame": -1,
      "counterHitFrame": "+8g",
    },
    {
      "input": "d+4,1+2",
      "hitLevel": "L,h",
      "damage": "15,20",
      "startupFrame": "20~21",
      "blockFrame": "+0~+1",
      "hitFrame": "+11a (+2)",
      "counterHitFrame": "",
    },
    {
      "input": "d+1+2",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": "",
    },
    {
      "input": "d+3+4",
      "hitLevel": "L",
      "damage": 20,
      "startupFrame": "27~i28",
      "blockFrame": -37,
      "hitFrame": "+67a (+51)",
      "counterHitFrame": "",
    },
    {
      "input": "db+1",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "db+2",
      "hitLevel": "m",
      "damage": 10,
      "startupFrame": "18~19",
      "blockFrame": -18,
      "hitFrame": -5,
      "counterHitFrame": ""
    },
    {
      "input": "db+2,2",
      "hitLevel": "m,m",
      "damage": "10,10",
      "startupFrame": "19~20",
      "blockFrame": -9,
      "hitFrame": 5,
      "counterHitFrame": ""
    },
    {
      "input": "db+3",
      "hitLevel": "L",
      "damage": 11,
      "startupFrame": "16",
      "blockFrame": -13,
      "hitFrame": -2,
      "counterHitFrame": 3
    },
    {
      "input": "db+4",
      "hitLevel": "L",
      "damage": 23,
      "startupFrame": "24~25",
      "blockFrame": -17,
      "hitFrame": "+9a",
      "counterHitFrame": ""
    },
    {
      "input": "b+1",
      "hitLevel": "m",
      "damage": 15,
      "startupFrame": "15~16",
      "blockFrame": -5,
      "hitFrame": 8,
      "counterHitFrame": ""
    },
    {
      "input": "b+1,1+2",
      "hitLevel": "m,SL,m",
      "damage": "15,1,30",
      "startupFrame": "25~40 ,i26~28",
      "blockFrame": -16,
      "hitFrame": "+71a",
      "counterHitFrame": ""
    },
    {
      "input": "b+1+3",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "b+1+3,P",
      "hitLevel": "m!",
      "damage": 25,
      "startupFrame": "20~21",
      "blockFrame": "",
      "hitFrame": "-5a (-14)",
      "counterHitFrame": ""
    },
    {
      "input": "b+2",
      "hitLevel": "m",
      "damage": 12,
      "startupFrame": "18",
      "blockFrame": -9,
      "hitFrame": 1,
      "counterHitFrame": ""
    },
    {
      "input": "b+2,1",
      "hitLevel": "m,m",
      "damage": "12,17",
      "startupFrame": "25~26",
      "blockFrame": -13,
      "hitFrame": "+3c",
      "counterHitFrame": "+17a"
    },
    {
      "input": "b+2,3",
      "hitLevel": "m,m",
      "damage": "12,22",
      "startupFrame": "23~24",
      "blockFrame": -15,
      "hitFrame": "+9a (-8)",
      "counterHitFrame": ""
    },
    {
      "input": "b+2,4",
      "hitLevel": "m,h",
      "damage": "12,20",
      "startupFrame": "16~17",
      "blockFrame": -7,
      "hitFrame": "+12g",
      "counterHitFrame": "+36a"
    },
    {
      "input": "b+3",
      "hitLevel": "m",
      "damage": 22,
      "startupFrame": "20~22",
      "blockFrame": -8,
      "hitFrame": "+5a (-4)",
      "counterHitFrame": ""
    },
    {
      "input": "b+4",
      "hitLevel": "m",
      "damage": 17,
      "startupFrame": "15~16",
      "blockFrame": -13,
      "hitFrame": -4,
      "counterHitFrame": "+54a"
    },
    {
      "input": "b+4,3",
      "hitLevel": "m,m",
      "damage": "17,20",
      "startupFrame": "29~30",
      "blockFrame": -11,
      "hitFrame": "+6c",
      "counterHitFrame": "+10a"
    },
    {
      "input": "b+4,4",
      "hitLevel": "m,M",
      "damage": "17,17",
      "startupFrame": "25~27",
      "blockFrame": -37,
      "hitFrame": "+9a (-1)",
      "counterHitFrame": ""
    },
    {
      "input": "b+1+2",
      "hitLevel": "m",
      "damage": 25,
      "startupFrame": "19~20",
      "blockFrame": -13,
      "hitFrame": 8,
      "counterHitFrame": ""
    },
    {
      "input": "b+2+3",
      "hitLevel": "m!",
      "damage": 50,
      "startupFrame": "75~76",
      "blockFrame": "",
      "hitFrame": 44,
      "counterHitFrame": ""
    },
    {
      "input": "b+3+4",
      "hitLevel": "m",
      "damage": 22,
      "startupFrame": "18~19",
      "blockFrame": -17,
      "hitFrame": "+32a (+22)",
      "counterHitFrame": ""
    },
    {
      "input": "b+3+4,3+4",
      "hitLevel": "m,M",
      "damage": "22,25",
      "startupFrame": "56~61",
      "blockFrame": "+5c~+10c",
      "hitFrame": "+59a",
      "counterHitFrame": ""
    },
    {
      "input": "ub+2",
      "hitLevel": "h",
      "damage": 23,
      "startupFrame": "16~20",
      "blockFrame": -9,
      "hitFrame": "+38a (-20)",
      "counterHitFrame": ""
    },
    {
      "input": "ub+4",
      "hitLevel": "m",
      "damage": 10,
      "startupFrame": "18",
      "blockFrame": -9,
      "hitFrame": 7,
      "counterHitFrame": ""
    },
    {
      "input": "ub+3+4",
      "hitLevel": "M",
      "damage": 25,
      "startupFrame": "37~39",
      "blockFrame": "+2c~+4c",
      "hitFrame": "+25a",
      "counterHitFrame": ""
    },
    {
      "input": "ub+3+4,1+2",
      "hitLevel": "M,m",
      "damage": "25,20",
      "startupFrame": "26~27",
      "blockFrame": -14,
      "hitFrame": "+32a (+22)",
      "counterHitFrame": ""
    },
    {
      "input": "u+1+2",
      "hitLevel": "m",
      "damage": 21,
      "startupFrame": "33~34",
      "blockFrame": -5,
      "hitFrame": "+56a",
      "counterHitFrame": ""
    },
    {
      "input": "uf+1",
      "hitLevel": "m,m,m",
      "damage": "20,20,20",
      "startupFrame": "19~20,i25,i17",
      "blockFrame": -13,
      "hitFrame": "+68a (+52)",
      "counterHitFrame": ""
    },
    {
      "input": "uf+2",
      "hitLevel": "h",
      "damage": 22,
      "startupFrame": "16~17",
      "blockFrame": -2,
      "hitFrame": "+20a (+11)",
      "counterHitFrame": ""
    },
    {
      "input": "uf+3",
      "hitLevel": "m",
      "damage": 15,
      "startupFrame": "17~18",
      "blockFrame": -52,
      "hitFrame": -25,
      "counterHitFrame": ""
    },
    {
      "input": "uf+3,2",
      "hitLevel": "m,m",
      "damage": "15,30",
      "startupFrame": "17~22",
      "blockFrame": -14,
      "hitFrame": "+32a (-26)",
      "counterHitFrame": ""
    },
    {
      "input": "uf+4",
      "hitLevel": "m",
      "damage": 8,
      "startupFrame": "15~16",
      "blockFrame": -15,
      "hitFrame": -4,
      "counterHitFrame": ""
    },
    {
      "input": "uf+4,4",
      "hitLevel": "m,M",
      "damage": "8,8",
      "startupFrame": "24~26",
      "blockFrame": -13,
      "hitFrame": "+45a (+37)",
      "counterHitFrame": ""
    },
    {
      "input": "uf+3+4",
      "hitLevel": "M",
      "damage": 28,
      "startupFrame": "38~41",
      "blockFrame": "+0~+3",
      "hitFrame": 4,
      "counterHitFrame": ""
    },
    {
      "input": "1+2+3+4",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "b,B+1+4",
      "hitLevel": "h!",
      "damage": 50,
      "startupFrame": "63~84",
      "blockFrame": "",
      "hitFrame": "+37a (-18)",
      "counterHitFrame": ""
    },
    {
      "input": "f,F+2",
      "hitLevel": "m",
      "damage": 18,
      "startupFrame": "16~17",
      "blockFrame": -18,
      "hitFrame": "+5a",
      "counterHitFrame": ""
    },
    {
      "input": "f,F+2,3",
      "hitLevel": "m,m",
      "damage": "18,25",
      "startupFrame": "22~24",
      "blockFrame": -13,
      "hitFrame": "+28a (+2)",
      "counterHitFrame": ""
    },
    {
      "input": "f,F+3",
      "hitLevel": "m",
      "damage": 12,
      "startupFrame": "18~19",
      "blockFrame": -14,
      "hitFrame": -6,
      "counterHitFrame": ""
    },
    {
      "input": "f,F+3,4",
      "hitLevel": "m,h",
      "damage": "12,15",
      "startupFrame": "19~20",
      "blockFrame": -10,
      "hitFrame": "+20a (+11)",
      "counterHitFrame": ""
    },
    {
      "input": "f,F+3,4,4",
      "hitLevel": "m,h,m",
      "damage": "12,15,25",
      "startupFrame": "27~29",
      "blockFrame": -10,
      "hitFrame": "+20a",
      "counterHitFrame": ""
    },
    {
      "input": "f,F+4",
      "hitLevel": "m,m",
      "damage": "14,22",
      "startupFrame": "22~29,i34~39",
      "blockFrame": "-9~-2",
      "hitFrame": "+9a (+0)",
      "counterHitFrame": ""
    },
    {
      "input": "f,F+1+2",
      "hitLevel": "m,m",
      "damage": "5,10",
      "startupFrame": "17~18 i12~13",
      "blockFrame": -9,
      "hitFrame": 4,
      "counterHitFrame": 13
    },
    {
      "input": "f,f,F+2",
      "hitLevel": "h",
      "damage": 30,
      "startupFrame": "13~15",
      "blockFrame": "+5~+7",
      "hitFrame": "+28a (+20)",
      "counterHitFrame": ""
    },
    {
      "input": "f,f,F+3",
      "hitLevel": "m",
      "damage": 15,
      "startupFrame": "18~19",
      "blockFrame": -4,
      "hitFrame": 6,
      "counterHitFrame": ""
    },
    {
      "input": "f,f,F+3,4",
      "hitLevel": "m,m",
      "damage": "15,20",
      "startupFrame": "20~22",
      "blockFrame": -7,
      "hitFrame": "+31a (+5)",
      "counterHitFrame": ""
    },
    {
      "input": "f,f,F+1+2",
      "hitLevel": "M",
      "damage": 24,
      "startupFrame": "18~36",
      "blockFrame": -3,
      "hitFrame": "-17a (-26)",
      "counterHitFrame": ""
    },
    {
      "input": "ws>1+2",
      "hitLevel": "m",
      "damage": 22,
      "startupFrame": "28~29",
      "blockFrame": -4,
      "hitFrame": 21,
      "counterHitFrame": ""
    },
    {
      "input": "ws1",
      "hitLevel": "M",
      "damage": 12,
      "startupFrame": "13~14",
      "blockFrame": -12,
      "hitFrame": 1,
      "counterHitFrame": ""
    },
    {
      "input": "ws1,2",
      "hitLevel": "M,h",
      "damage": "12,12",
      "startupFrame": "24~25",
      "blockFrame": -5,
      "hitFrame": 6,
      "counterHitFrame": ""
    },
    {
      "input": "ws1,2,3",
      "hitLevel": "M,h,m",
      "damage": "12,12,23",
      "startupFrame": "25~26",
      "blockFrame": -10,
      "hitFrame": "+33a (+23)",
      "counterHitFrame": ""
    },
    {
      "input": "ws2",
      "hitLevel": "m",
      "damage": 24,
      "startupFrame": "17~18",
      "blockFrame": -13,
      "hitFrame": "+33a (+23)",
      "counterHitFrame": ""
    },
    {
      "input": "ws3",
      "hitLevel": "m",
      "damage": 18,
      "startupFrame": "19~20",
      "blockFrame": 4,
      "hitFrame": 15,
      "counterHitFrame": ""
    },
    {
      "input": "ws4",
      "hitLevel": "m",
      "damage": 15,
      "startupFrame": "11~12",
      "blockFrame": -5,
      "hitFrame": 6,
      "counterHitFrame": ""
    },
    {
      "input": "ws1+2",
      "hitLevel": "m",
      "damage": 20,
      "startupFrame": "20~21",
      "blockFrame": -8,
      "hitFrame": 21,
      "counterHitFrame": ""
    },
    {
      "input": "ws1+2*",
      "hitLevel": "m",
      "damage": 28,
      "startupFrame": "39~40",
      "blockFrame": 0,
      "hitFrame": "+33a",
      "counterHitFrame": ""
    },
    {
      "input": "SS.4",
      "hitLevel": "L",
      "damage": 16,
      "startupFrame": "24~25",
      "blockFrame": -12,
      "hitFrame": 2,
      "counterHitFrame": ""
    },
    {
      "input": "SS.4,1+2",
      "hitLevel": "L,h,h,h,m",
      "damage": "16,5,5,5,5",
      "startupFrame": "18~19 i3~5 i5~7 i4~5",
      "blockFrame": -10,
      "hitFrame": 8,
      "counterHitFrame": ""
    },
    {
      "input": "FC.1+2",
      "hitLevel": "L,L",
      "damage": "10,16",
      "startupFrame": "21~23 i6~8",
      "blockFrame": "-11c",
      "hitFrame": "+5c",
      "counterHitFrame": ""
    },
    {
      "input": "FC.d+1",
      "hitLevel": "sl",
      "damage": 5,
      "startupFrame": "10",
      "blockFrame": -5,
      "hitFrame": 6,
      "counterHitFrame": ""
    },
    {
      "input": "FC.d+2",
      "hitLevel": "sl",
      "damage": 8,
      "startupFrame": "11",
      "blockFrame": -4,
      "hitFrame": 7,
      "counterHitFrame": ""
    },
    {
      "input": "FC.d+3",
      "hitLevel": "L",
      "damage": 10,
      "startupFrame": "16",
      "blockFrame": -17,
      "hitFrame": -6,
      "counterHitFrame": ""
    },
    {
      "input": "FC.d+4",
      "hitLevel": "l",
      "damage": 6,
      "startupFrame": "12",
      "blockFrame": -15,
      "hitFrame": -4,
      "counterHitFrame": ""
    },
    {
      "input": "(Back to wall).b,b,UB",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "BKP.1",
      "hitLevel": "h",
      "damage": 31,
      "startupFrame": "11~13",
      "blockFrame": "+4~+6",
      "hitFrame": "+27a (+1)",
      "counterHitFrame": ""
    },
    {
      "input": "BKP.2",
      "hitLevel": "h",
      "damage": 34,
      "startupFrame": "11~33",
      "blockFrame": "-9~+13",
      "hitFrame": "+21 (+6)",
      "counterHitFrame": ""
    },
    {
      "input": "BKP.3",
      "hitLevel": "m",
      "damage": 30,
      "startupFrame": "24~27",
      "blockFrame": -9,
      "hitFrame": "+72a",
      "counterHitFrame": ""
    },
    {
      "input": "BKP.4",
      "hitLevel": "m",
      "damage": 30,
      "startupFrame": "18~23",
      "blockFrame": "-9~-4",
      "hitFrame": "+31a (+21)",
      "counterHitFrame": ""
    },
    {
      "input": "BKP.1+2",
      "hitLevel": "h!",
      "damage": "20,3",
      "startupFrame": "34~71",
      "blockFrame": "",
      "hitFrame": 58,
      "counterHitFrame": ""
    },
    {
      "input": "BT.4",
      "hitLevel": "m",
      "damage": 20,
      "startupFrame": "16~17",
      "blockFrame": -3,
      "hitFrame": "+19a (+2)",
      "counterHitFrame": ""
    },
    {
      "input": "CLK(Two spins).3",
      "hitLevel": "m",
      "damage": 22,
      "startupFrame": "13~14",
      "blockFrame": 0,
      "hitFrame": "+63a (+43)",
      "counterHitFrame": ""
    },
    {
      "input": "CLK.3",
      "hitLevel": "m",
      "damage": 20,
      "startupFrame": "13~14",
      "blockFrame": -9,
      "hitFrame": "+12g",
      "counterHitFrame": ""
    },
    {
      "input": "CLK.B",
      "hitLevel": "m",
      "damage": 18,
      "startupFrame": "19~20",
      "blockFrame": -12,
      "hitFrame": -1,
      "counterHitFrame": ""
    },
    {
      "input": "CLK.d+3",
      "hitLevel": "L",
      "damage": 20,
      "startupFrame": "30~31",
      "blockFrame": -12,
      "hitFrame": "+73a (+57)",
      "counterHitFrame": ""
    },
    {
      "input": "DBT.1",
      "hitLevel": "h,h,h,h,h,h",
      "damage": 30,
      "startupFrame": "24~28, i1~6, i1~6, i1~6, i1~6, i1~2",
      "blockFrame": 9,
      "hitFrame": "+11g",
      "counterHitFrame": ""
    },
    {
      "input": "DBT.2",
      "hitLevel": "M,M,h,h,h",
      "damage": 25,
      "startupFrame": "16~18, i1~5, i1~5, i1~5, i1~1",
      "blockFrame": -14,
      "hitFrame": "+32a (+14)",
      "counterHitFrame": ""
    },
    {
      "input": "DBT.2,1",
      "hitLevel": "M,M,h,h,hh",
      "damage": 2545,
      "startupFrame": "26~28",
      "blockFrame": "-11c",
      "hitFrame": "+14a",
      "counterHitFrame": ""
    },
    {
      "input": "DBT.3",
      "hitLevel": "L",
      "damage": 17,
      "startupFrame": "16~20, i1~5",
      "blockFrame": -14,
      "hitFrame": "+4c~+8c",
      "counterHitFrame": "+28a"
    },
    {
      "input": "DBT.4",
      "hitLevel": "M",
      "damage": "22,5",
      "startupFrame": "17~19",
      "blockFrame": -27,
      "hitFrame": "+68a",
      "counterHitFrame": ""
    },
    {
      "input": "DBT.1+2",
      "hitLevel": "m,m,M,M",
      "damage": "5,5,5,20",
      "startupFrame": "12~15, i1~4, i1~5, i1~6",
      "blockFrame": 0,
      "hitFrame": "+21a (+0)",
      "counterHitFrame": ""
    },
    {
      "input": "DBT.f+1",
      "hitLevel": "m,t",
      "damage": 49,
      "startupFrame": "19~21",
      "blockFrame": -11,
      "hitFrame": "+0d",
      "counterHitFrame": ""
    },
    {
      "input": "DBT.f+2",
      "hitLevel": "L",
      "damage": 16,
      "startupFrame": "19~20",
      "blockFrame": -16,
      "hitFrame": -6,
      "counterHitFrame": ""
    },
    {
      "input": "DBT.f+2,2",
      "hitLevel": "L,m",
      "damage": "16,14 (9)",
      "startupFrame": "35~37",
      "blockFrame": -33,
      "hitFrame": "-6a (-13)",
      "counterHitFrame": ""
    },
    {
      "input": "DES.1",
      "hitLevel": "m,m,h,h,h,m",
      "damage": 35,
      "startupFrame": "13~18 i1~5 i1~7 i1~5 i1~4 i16~17",
      "blockFrame": -9,
      "hitFrame": "+23a",
      "counterHitFrame": ""
    },
    {
      "input": "DES.2",
      "hitLevel": "M,M,m",
      "damage": "5,5,5",
      "startupFrame": "20~21 i1~2 i1~2",
      "blockFrame": -8,
      "hitFrame": "+37a (+27)",
      "counterHitFrame": ""
    },
    {
      "input": "DES.2,1",
      "hitLevel": "M,M,m,h!",
      "damage": "5,5,520",
      "startupFrame": "28~56",
      "blockFrame": "",
      "hitFrame": "+85a (+69)",
      "counterHitFrame": ""
    },
    {
      "input": "DES.3",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "DES.1+2",
      "hitLevel": "h,h,h",
      "damage": "7,7,20",
      "startupFrame": "16~18, i5~7, i9~11",
      "blockFrame": 4,
      "hitFrame": "+15g",
      "counterHitFrame": ""
    },
    {
      "input": "DES.BT.1",
      "hitLevel": "m,m,m,m,m,m",
      "damage": "4,4,4,4,4,4",
      "startupFrame": "19~22, i1~3, i1~3, i1~3, i1~3, i1~3",
      "blockFrame": -9,
      "hitFrame": "+25a",
      "counterHitFrame": ""
    },
    {
      "input": "DES.b,b",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "DES.b+2",
      "hitLevel": "m",
      "damage": 17,
      "startupFrame": "18~20",
      "blockFrame": -12,
      "hitFrame": 0,
      "counterHitFrame": "+18a"
    },
    {
      "input": "DES.b+2,1",
      "hitLevel": "m,m,SL,SL,SL,SL",
      "damage": "17,8,5,5,5,5",
      "startupFrame": "20~21, i1~6, i1~5, i1~5, i1~3",
      "blockFrame": -3,
      "hitFrame": 5,
      "counterHitFrame": ""
    },
    {
      "input": "DES.b+3",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "DES.d+1",
      "hitLevel": "L,L,L,L,L",
      "damage": 20,
      "startupFrame": "20~24, i1~5, i1~5, i1~5, i1~3",
      "blockFrame": -12,
      "hitFrame": 4,
      "counterHitFrame": ""
    },
    {
      "input": "DES.d+2",
      "hitLevel": "L,L,L",
      "damage": "3,3,20",
      "startupFrame": "22~23",
      "blockFrame": -14,
      "hitFrame": "+4c",
      "counterHitFrame": ""
    },
    {
      "input": "DES.d+3",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "DES.d+3,1",
      "hitLevel": ",m",
      "damage": ",25",
      "startupFrame": "20~21",
      "blockFrame": -13,
      "hitFrame": 14,
      "counterHitFrame": ""
    },
    {
      "input": "DES.f,f",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "DES.f+1",
      "hitLevel": "h",
      "damage": 21,
      "startupFrame": "11~13, i1~3, i1~3, i1~3, i1~3, i1~3, i1~1",
      "blockFrame": 3,
      "hitFrame": 9,
      "counterHitFrame": ""
    },
    {
      "input": "DES.f+2",
      "hitLevel": "m,m",
      "damage": 9,
      "startupFrame": "15, i1~1",
      "blockFrame": -9,
      "hitFrame": "+0c",
      "counterHitFrame": ""
    },
    {
      "input": "DES.f+2,1",
      "hitLevel": "m,m,m,m",
      "damage": "9,9",
      "startupFrame": "23, i1~1",
      "blockFrame": -12,
      "hitFrame": "-3c",
      "counterHitFrame": ""
    },
    {
      "input": "DES.f+2,1,2",
      "hitLevel": "m,m,m,m,m,m",
      "damage": "9,9,23",
      "startupFrame": "23~24, i4~5",
      "blockFrame": -13,
      "hitFrame": "+30d",
      "counterHitFrame": ""
    },
    {
      "input": "DES.f+3",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "DES.f+3",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "DES.f+1+2",
      "hitLevel": "m,m,m,m,m,m,m,m",
      "damage": 34,
      "startupFrame": "23~27, i1~5, i1~4, i1~4, i1~5, i1~5, i1~4, i1~1",
      "blockFrame": 5,
      "hitFrame": 33,
      "counterHitFrame": ""
    },
    {
      "input": "DES.f+1+2,1+2",
      "hitLevel": "m,m,m,m,m,m,m,m,m",
      "damage": "34,20",
      "startupFrame": "20~26",
      "blockFrame": -53,
      "hitFrame": 41,
      "counterHitFrame": ""
    },
    {
      "input": "DES.uf+2",
      "hitLevel": "h,h,h,h,h",
      "damage": "5,5,5,5,5",
      "startupFrame": "10~14, i1~5, i1~5, i1~5, i1~1",
      "blockFrame": "",
      "hitFrame": "+35a (+28)",
      "counterHitFrame": ""
    },
    {
      "input": "DES.uf+1+2",
      "hitLevel": "m,M,M",
      "damage": 27,
      "startupFrame": "29~31, i1~3, i1~2",
      "blockFrame": "-9c",
      "hitFrame": "+23a",
      "counterHitFrame": ""
    },
    {
      "input": "FUFT.1+2",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "FUFT.1+2,3",
      "hitLevel": ",m",
      "damage": ",35",
      "startupFrame": "22~23",
      "blockFrame": -10,
      "hitFrame": "+60a",
      "counterHitFrame": ""
    },
    {
      "input": "OTG.db+1+2",
      "hitLevel": "L",
      "damage": 25,
      "startupFrame": "25~27",
      "blockFrame": -14,
      "hitFrame": "+4a",
      "counterHitFrame": ""
    },
    {
      "input": "SBT.1",
      "hitLevel": "m",
      "damage": 12,
      "startupFrame": "13~14",
      "blockFrame": -15,
      "hitFrame": 0,
      "counterHitFrame": ""
    },
    {
      "input": "SBT.1,2",
      "hitLevel": "m,m",
      "damage": "12,13",
      "startupFrame": "18~19",
      "blockFrame": -9,
      "hitFrame": 2,
      "counterHitFrame": "+7c"
    },
    {
      "input": "SBT.1,2,1",
      "hitLevel": "m,m,m",
      "damage": "12,13,7",
      "startupFrame": "20~21",
      "blockFrame": -12,
      "hitFrame": -20,
      "counterHitFrame": -12
    },
    {
      "input": "SBT.1,2,1,3+4",
      "hitLevel": "m,m,m,m,m",
      "damage": "12,13,7,33",
      "startupFrame": "18",
      "blockFrame": -18,
      "hitFrame": "+4 (-13)",
      "counterHitFrame": ""
    },
    {
      "input": "SBT.2",
      "hitLevel": "m",
      "damage": 25,
      "startupFrame": "16~17",
      "blockFrame": -7,
      "hitFrame": "+6a (-4)",
      "counterHitFrame": ""
    },
    {
      "input": "SBT.3",
      "hitLevel": "L",
      "damage": 17,
      "startupFrame": "16~20, i1~5",
      "blockFrame": -14,
      "hitFrame": "+4c~+8c",
      "counterHitFrame": "+28a"
    },
    {
      "input": "SBT.4",
      "hitLevel": "M",
      "damage": "22,5",
      "startupFrame": "17~19",
      "blockFrame": -27,
      "hitFrame": "+68a",
      "counterHitFrame": ""
    },
    {
      "input": "SBT.1+2",
      "hitLevel": "h!",
      "damage": 20,
      "startupFrame": "27~28",
      "blockFrame": "",
      "hitFrame": 8,
      "counterHitFrame": ""
    },
    {
      "input": "SBT.D",
      "hitLevel": "",
      "damage": "",
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "",
      "counterHitFrame": ""
    },
    {
      "input": "1+3",
      "hitLevel": "t",
      "damage": 35,
      "startupFrame": "12~14",
      "blockFrame": -7,
      "hitFrame": "+0d",
      "counterHitFrame": ""
    },
    {
      "input": "2+4",
      "hitLevel": "t",
      "damage": 35,
      "startupFrame": "12~14",
      "blockFrame": -5,
      "hitFrame": "+0d",
      "counterHitFrame": ""
    },
    {
      "input": "Back throw",
      "hitLevel": "t",
      "damage": 55,
      "startupFrame": "",
      "blockFrame": "",
      "hitFrame": "+0d",
      "counterHitFrame": ""
    },
    {
      "input": "FC.db+1+2",
      "hitLevel": "t",
      "damage": 45,
      "startupFrame": "11",
      "blockFrame": -4,
      "hitFrame": -4,
      "counterHitFrame": ""
    },
    {
      "input": "Left throw",
      "hitLevel": "t",
      "damage": 40,
      "startupFrame": "",
      "blockFrame": -3,
      "hitFrame": "-5d",
      "counterHitFrame": ""
    },
    {
      "input": "Right throw",
      "hitLevel": "t",
      "damage": 40,
      "startupFrame": "",
      "blockFrame": -3,
      "hitFrame": "+0d",
      "counterHitFrame": ""
    },
    {
      "input": "uf+1+2",
      "hitLevel": "t",
      "damage": 40,
      "startupFrame": "12~13",
      "blockFrame": -4,
      "hitFrame": 3,
      "counterHitFrame": ""
    }
  ]
  ;

const alisaFrameData = rawAlisaFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default alisaFrameData;