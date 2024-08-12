const rawKazuyaFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "l,m,th",
    "damage": "12,20,34",
    "startupFrame": "i18",
    "blockFrame": -14,
    "hitFrame": "Th",
    "counterHitFrame": "Th"
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m,th",
    "damage": "10,45",
    "startupFrame": "",
    "blockFrame": -15,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": 1,
    "hitLevel": "h",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": 1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,1",
    "hitLevel": "h,h",
    "damage": "5,6",
    "startupFrame": ",i15",
    "blockFrame": -1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,2",
    "hitLevel": "h,h,m",
    "damage": "5,6,12",
    "startupFrame": ",i13",
    "blockFrame": -17,
    "hitFrame": "+20a(+15)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,8",
    "startupFrame": ",i10",
    "blockFrame": -1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,2",
    "hitLevel": "h,h,h",
    "damage": "5,8,12",
    "startupFrame": ",i17",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,2~3",
    "hitLevel": "h,h,m",
    "damage": "5,8,23",
    "startupFrame": "i23",
    "blockFrame": -9,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,l",
    "damage": "5,8,18",
    "startupFrame": ",i23~24",
    "blockFrame": "-14c",
    "hitFrame": -3,
    "counterHitFrame": "+0c"
  },
  {
    "input": "1,2,4,3",
    "hitLevel": "h,h,l,m",
    "damage": "5,8,18,25",
    "startupFrame": ",i32",
    "blockFrame": -2,
    "hitFrame": "+24a(+15)",
    "counterHitFrame": "+69a)"
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "2,2",
    "hitLevel": "h,m",
    "damage": "12,24",
    "startupFrame": "i24~25",
    "blockFrame": -8,
    "hitFrame": 7,
    "counterHitFrame": "+50a"
  },
  {
    "input": 3,
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "3,1",
    "hitLevel": "h,h",
    "damage": "12,10",
    "startupFrame": ",i19",
    "blockFrame": -1,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "3,1,4",
    "hitLevel": "h,h,m",
    "damage": "12,10,17",
    "startupFrame": ",i21~22",
    "blockFrame": -6,
    "hitFrame": 8,
    "counterHitFrame": "+40a(+32)"
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": "+27a"
  },
  {
    "input": "4~3",
    "hitLevel": "m,m",
    "damage": "18,17",
    "startupFrame": "i31",
    "blockFrame": -10,
    "hitFrame": "-1g",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m,m",
    "damage": "5,20",
    "startupFrame": "i12",
    "blockFrame": -13,
    "hitFrame": "+13a",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": "+13a(+4)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i17",
    "blockFrame": -13,
    "hitFrame": 5,
    "counterHitFrame": "+54a(+23)"
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i19~20",
    "blockFrame": "+4c",
    "hitFrame": "+7c",
    "counterHitFrame": "+31d"
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i25",
    "blockFrame": -9,
    "hitFrame": "+11a(+2)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i15~16",
    "blockFrame": -7,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,h",
    "damage": "11,20",
    "startupFrame": "i15",
    "blockFrame": "+0c",
    "hitFrame": "+9g",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,4",
    "hitLevel": "m,h",
    "damage": "11,20",
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": "KND",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,df+2",
    "hitLevel": "m,m",
    "damage": "11,22",
    "startupFrame": "i22",
    "blockFrame": -8,
    "hitFrame": "+18c",
    "counterHitFrame": "+32a(+22)"
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i14",
    "blockFrame": -12,
    "hitFrame": 5,
    "counterHitFrame": "+59a"
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i18",
    "blockFrame": -7,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2",
    "hitLevel": "m,m",
    "damage": "13,15",
    "startupFrame": "",
    "blockFrame": -11,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2,1",
    "hitLevel": "m,m,m",
    "damage": "13,15,21",
    "startupFrame": "",
    "blockFrame": -18,
    "hitFrame": "+8(-1)",
    "counterHitFrame": 25
  },
  {
    "input": "df+3,2,1*",
    "hitLevel": "m,m,m",
    "damage": "13,15,25",
    "startupFrame": "i46",
    "blockFrame": "+11(+18w)",
    "hitFrame": "+10(+1)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13~14",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,4",
    "hitLevel": "m,m",
    "damage": "10,16",
    "startupFrame": "",
    "blockFrame": -15,
    "hitFrame": "-4c",
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "m,h",
    "damage": "7,9",
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4,1",
    "hitLevel": "m,h,m",
    "damage": "7,9,15",
    "startupFrame": "i11",
    "blockFrame": -11,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4,1,2",
    "hitLevel": "m,h,m,sm,sm",
    "damage": "7,9,15,14,25",
    "startupFrame": "i20",
    "blockFrame": -19,
    "hitFrame": "+7 (-10)",
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "sl",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i12",
    "blockFrame": -17,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i23",
    "blockFrame": "-14c",
    "hitFrame": "+3c",
    "counterHitFrame": "+27a"
  },
  {
    "input": "d+1+2,B",
    "hitLevel": "l,sp",
    "damage": "20,0",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "m",
    "damage": 7,
    "startupFrame": "i13",
    "blockFrame": -10,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,2",
    "hitLevel": "m,m,m",
    "damage": "7,8,15",
    "startupFrame": "i20",
    "blockFrame": -19,
    "hitFrame": "+9a (-8)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": "-9c",
    "hitFrame": "+7c",
    "counterHitFrame": "+21d"
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i19~20",
    "blockFrame": "-12c",
    "hitFrame": -1,
    "counterHitFrame": "+7c"
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 18,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": "+17g"
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i11",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,2",
    "hitLevel": "h,m",
    "damage": "10,20",
    "startupFrame": "i20",
    "blockFrame": -14,
    "hitFrame": "+9 (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2",
    "hitLevel": "m,m",
    "damage": "12,14",
    "startupFrame": "i25",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2,1+2",
    "hitLevel": "m,m,h",
    "damage": "12,14,20",
    "startupFrame": "i28~32",
    "blockFrame": -8,
    "hitFrame": "+38d (-20)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,4",
    "hitLevel": "m,h",
    "damage": "12,12",
    "startupFrame": ",i22",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,4,1",
    "hitLevel": "m,h,m",
    "damage": "12,12,22",
    "startupFrame": ",i19",
    "blockFrame": -14,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,1",
    "hitLevel": "h,h",
    "damage": "15,10",
    "startupFrame": ",i12",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,1,4",
    "hitLevel": "h,h,l",
    "damage": "15,10,10",
    "startupFrame": ",i16",
    "blockFrame": "-10c",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,1,4,1",
    "hitLevel": "h,h,l,m",
    "damage": "15,10,10,15",
    "startupFrame": ",i15",
    "blockFrame": -14,
    "hitFrame": "+15a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,1,4,3",
    "hitLevel": "h,h,l,l",
    "damage": "15,10,10,12",
    "startupFrame": ",i20",
    "blockFrame": "-13c",
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i17",
    "blockFrame": -5,
    "hitFrame": "+16g",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22",
    "blockFrame": -8,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4",
    "hitLevel": "ub(m)",
    "damage": 60,
    "startupFrame": "i63",
    "blockFrame": "+20a(+10)",
    "hitFrame": "+20a(+10)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "h",
    "damage": 32,
    "startupFrame": "i41",
    "blockFrame": "+19d (-39)",
    "hitFrame": "+19d (-39)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i18",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": -12,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i19",
    "blockFrame": -9,
    "hitFrame": "+17(+9)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i25",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,4",
    "hitLevel": "m,l",
    "damage": "16,12",
    "startupFrame": "",
    "blockFrame": -23,
    "hitFrame": "+29a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,4,4",
    "hitLevel": "m,l,l",
    "damage": "16,12,10",
    "startupFrame": "",
    "blockFrame": -23,
    "hitFrame": "+17a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,4,4,4",
    "hitLevel": "m,l,l,m",
    "damage": "16,12,10,20",
    "startupFrame": "",
    "blockFrame": -17,
    "hitFrame": "+19a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "1+2+3+4",
    "hitLevel": "sp",
    "damage": "–",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": "+39d(-19)/HE",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i20",
    "blockFrame": "-3c",
    "hitFrame": "+46a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i17~18",
    "blockFrame": -9,
    "hitFrame": 5,
    "counterHitFrame": "+29a(+23)"
  },
  {
    "input": "f,n,DF",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,DF",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df:2",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i11",
    "blockFrame": 5,
    "hitFrame": "+39a(+29)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+1",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": -16,
    "hitFrame": "+29a(+19)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i11",
    "blockFrame": -10,
    "hitFrame": "+39a(+29)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+3",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i18~27",
    "blockFrame": -9,
    "hitFrame": "+12a(+2)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+4",
    "hitLevel": "l",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": -23,
    "hitFrame": "-3c",
    "counterHitFrame": "+20a"
  },
  {
    "input": "f,n,d,df+4,1",
    "hitLevel": "l,m",
    "damage": "15,23",
    "startupFrame": "i26",
    "blockFrame": -16,
    "hitFrame": "+17a(+10",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+4,4",
    "hitLevel": "l,h",
    "damage": "15,25",
    "startupFrame": "i30",
    "blockFrame": -9,
    "hitFrame": "+5a(+4)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i24",
    "blockFrame": 5,
    "hitFrame": "+25a(+15)",
    "counterHitFrame": "+59a"
  },
  {
    "input": "uf,n,4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23",
    "blockFrame": -13,
    "hitFrame": "+32a(+22)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i22~25",
    "blockFrame": 9,
    "hitFrame": "+13a(+3)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -5,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,m",
    "damage": "10,12",
    "startupFrame": ",i22",
    "blockFrame": -12,
    "hitFrame": "+73a(+57)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i16",
    "blockFrame": -18,
    "hitFrame": "+57a",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i21",
    "blockFrame": -5,
    "hitFrame": "+20a(+11)",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i11~12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws4,4",
    "hitLevel": "m,m",
    "damage": "13,16",
    "startupFrame": "",
    "blockFrame": -15,
    "hitFrame": "-4c",
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": 8,
    "counterHitFrame": "+24a"
  },
  {
    "input": "SS.3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i23",
    "blockFrame": -7,
    "hitFrame": "+16a(+7)",
    "counterHitFrame": "+50d"
  },
  {
    "input": "SS.1+2",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i19",
    "blockFrame": -9,
    "hitFrame": "+11a",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "FC.2",
    "hitLevel": "sm",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "FC.3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "FC.4",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i12",
    "blockFrame": -17,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+3+4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i23",
    "blockFrame": "-11c",
    "hitFrame": "+11a",
    "counterHitFrame": ""
  },
  {
    "input": "(back to wall).b,b,ub",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i29",
    "blockFrame": -1,
    "hitFrame": "+45d (-13)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1",
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i8",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "BT.3",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i10",
    "blockFrame": -8,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+1",
    "hitLevel": "sm",
    "damage": 10,
    "startupFrame": "i10",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i10",
    "blockFrame": -11,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "BT.uf+3",
    "hitLevel": "m",
    "damage": "–",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+19a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "DVK.1,1,2,F",
    "hitLevel": "h,h,m,th",
    "damage": "5,6,12,8",
    "startupFrame": "i10",
    "blockFrame": -17,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "DVK.1+4",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i21~31",
    "blockFrame": -9,
    "hitFrame": "+3a",
    "counterHitFrame": ""
  },
  {
    "input": "DVK.3+4",
    "hitLevel": "ub(m)",
    "damage": 30,
    "startupFrame": "i64",
    "blockFrame": "",
    "hitFrame": "-16(-77)",
    "counterHitFrame": ""
  },
  {
    "input": "DVK.OTG.db+1+2",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i24~29",
    "blockFrame": -13,
    "hitFrame": "+13a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "DVK.SS.2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i17",
    "blockFrame": -15,
    "hitFrame": "+76a",
    "counterHitFrame": ""
  },
  {
    "input": "DVK.db+3+4",
    "hitLevel": "l",
    "damage": 0,
    "startupFrame": "i24",
    "blockFrame": -19,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "DVK.db+3+4,DF",
    "hitLevel": "l,sp",
    "damage": "0,0",
    "startupFrame": "",
    "blockFrame": -19,
    "hitFrame": 11,
    "counterHitFrame": ""
  },
  {
    "input": "DVK.f,F+2",
    "hitLevel": "m,th",
    "damage": "20,20",
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "DVK.f,n,d,df+1",
    "hitLevel": "m,th",
    "damage": "23,15",
    "startupFrame": "i20",
    "blockFrame": -16,
    "hitFrame": "Th",
    "counterHitFrame": ""
  },
  {
    "input": "DVK.f,n,d,df+3",
    "hitLevel": "h,th",
    "damage": "30,15",
    "startupFrame": "i18",
    "blockFrame": 4,
    "hitFrame": "Th",
    "counterHitFrame": ""
  },
  {
    "input": "DVK.f,n,d,df+4,1,1",
    "hitLevel": "l,m,m,th",
    "damage": "15,23,16,15",
    "startupFrame": "i16",
    "blockFrame": -19,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "DVK.f,n,d,df+4,1,1,B",
    "hitLevel": "l,m,m,th,sp",
    "damage": "15,23,16,15,0",
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": "+17a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "DVK.ub+1+2",
    "hitLevel": "ub(h)",
    "damage": 40,
    "startupFrame": "i41",
    "blockFrame": "",
    "hitFrame": "+14 (-44)",
    "counterHitFrame": ""
  },
  {
    "input": "DVK.uf+1+2",
    "hitLevel": "ub(h)",
    "damage": 26,
    "startupFrame": "i22",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+3+4",
    "hitLevel": "l",
    "damage": 25,
    "startupFrame": "i23",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  }
]

const kazuyaFrameData = rawKazuyaFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default kazuyaFrameData;