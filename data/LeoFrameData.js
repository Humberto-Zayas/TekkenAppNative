const rawLeoFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": "12 (12)",
    "startupFrame": "i16~17",
    "blockFrame": "+1~+2",
    "hitFrame": "+2c",
    "counterHitFrame": ""
  },
  {
    "input": "H.KNK.2+3",
    "hitLevel": "l,m,m",
    "damage": "8,13,14 (35)",
    "startupFrame": "i20~21",
    "blockFrame": "-13~-12",
    "hitFrame": "+31a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,m,h",
    "damage": "14,13,23 (50)",
    "startupFrame": "i16~17",
    "blockFrame": "+8~+9",
    "hitFrame": "+5a",
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m",
    "damage": 55,
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": "+0d",
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
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,10",
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1",
    "hitLevel": "h,h,h",
    "damage": "5,10,16",
    "startupFrame": "i20~21",
    "blockFrame": "-5~-4",
    "hitFrame": 6,
    "counterHitFrame": 9
  },
  {
    "input": "1,2,1,1",
    "hitLevel": "h,h,h,m",
    "damage": "5,10,16,21",
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": "+12a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1,4",
    "hitLevel": "h,h,h,h",
    "damage": "5,10,16,30",
    "startupFrame": "i21~23",
    "blockFrame": "-6~-4",
    "hitFrame": "+32a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,L",
    "damage": "5,10,15",
    "startupFrame": "i24",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": "+8d"
  },
  {
    "input": "1,4",
    "hitLevel": "h,h",
    "damage": "5,17",
    "startupFrame": "i16",
    "blockFrame": -5,
    "hitFrame": 11,
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i11",
    "blockFrame": -1,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,h",
    "damage": "9,12",
    "startupFrame": "i16~17",
    "blockFrame": "-7~-6",
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "2,2",
    "hitLevel": "h,m",
    "damage": "9,20",
    "startupFrame": "i22",
    "blockFrame": -12,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "3,2",
    "hitLevel": "h,h",
    "damage": "15,10",
    "startupFrame": "i19",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "3,2,3",
    "hitLevel": "h,h,m",
    "damage": "15,10,26",
    "startupFrame": "i23~24",
    "blockFrame": "-7~-6",
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "3,2,4",
    "hitLevel": "h,h,m",
    "damage": "15,10,14",
    "startupFrame": "i22~23",
    "blockFrame": "+9~+10",
    "hitFrame": "+15g",
    "counterHitFrame": 19
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i12",
    "blockFrame": -7,
    "hitFrame": 6,
    "counterHitFrame": "+31a"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i25",
    "blockFrame": -12,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i14~16",
    "blockFrame": "0~+2",
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,2",
    "hitLevel": "h,m",
    "damage": "14,21",
    "startupFrame": "i23~24",
    "blockFrame": "-12~-11",
    "hitFrame": 8,
    "counterHitFrame": "+25d"
  },
  {
    "input": "f+2,4",
    "hitLevel": "h,h",
    "damage": "14,16",
    "startupFrame": "i22~23",
    "blockFrame": "-1~0",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,4,LTG.3",
    "hitLevel": "h,h,M",
    "damage": "14,16,20",
    "startupFrame": ",i32~35",
    "blockFrame": "+1c~+4c",
    "hitFrame": "+16d",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i20~21",
    "blockFrame": "0~+1",
    "hitFrame": 4,
    "counterHitFrame": "+27a"
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i17~18",
    "blockFrame": "+9~+10",
    "hitFrame": "+15g",
    "counterHitFrame": 19
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i17~18",
    "blockFrame": "-14~-13",
    "hitFrame": "+10a (+1)",
    "counterHitFrame": "+56a"
  },
  {
    "input": "f+2+3",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i20~21",
    "blockFrame": "-9~-8",
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "h",
    "damage": 24,
    "startupFrame": "i17~18",
    "blockFrame": "0~-1",
    "hitFrame": 8,
    "counterHitFrame": "+71a (+55)"
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i13~14",
    "blockFrame": "-1~0",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,h",
    "damage": "13,20",
    "startupFrame": "i18",
    "blockFrame": -6,
    "hitFrame": "+9d",
    "counterHitFrame": "+34d (+26)"
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": "-13~-12",
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i17~19",
    "blockFrame": "-9~-7",
    "hitFrame": "+6a (-3)",
    "counterHitFrame": "+27a (-9)"
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i13",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+2+3",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i21~22",
    "blockFrame": "-12~-11",
    "hitFrame": 5,
    "counterHitFrame": "+21d"
  },
  {
    "input": "d+1",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i18~19",
    "blockFrame": "-2~-1",
    "hitFrame": 5,
    "counterHitFrame": 13
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i21",
    "blockFrame": "+4c",
    "hitFrame": "+9c",
    "counterHitFrame": "+56a"
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
    "hitLevel": "L",
    "damage": 13,
    "startupFrame": "i16~17",
    "blockFrame": "-11~-10",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+4,2",
    "hitLevel": "L,h",
    "damage": "13,23",
    "startupFrame": "i26~27",
    "blockFrame": "-5~-4",
    "hitFrame": "-7d",
    "counterHitFrame": "+3d"
  },
  {
    "input": "d+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i12",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "s",
    "damage": 6,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i16~17",
    "blockFrame": "-9~-8",
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "db+2,4",
    "hitLevel": "m,h",
    "damage": "16,24",
    "startupFrame": "i24~26",
    "blockFrame": "-9~-7",
    "hitFrame": "+12a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i31~32",
    "blockFrame": "-8~-9",
    "hitFrame": "+38a (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "L",
    "damage": 11,
    "startupFrame": "i20~22",
    "blockFrame": "-31~-29",
    "hitFrame": 2,
    "counterHitFrame": "+33a"
  },
  {
    "input": "db+4,1",
    "hitLevel": "L,m",
    "damage": "11,27",
    "startupFrame": "i25~26",
    "blockFrame": "-16~-15",
    "hitFrame": "+8a",
    "counterHitFrame": ""
  },
  {
    "input": "db+4,1,LTG.1+2",
    "hitLevel": "L,m,m",
    "damage": "11,27,20",
    "startupFrame": ",i15~16",
    "blockFrame": "-15~-14",
    "hitFrame": "+6a (-3)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i21~23",
    "blockFrame": "-9~-7",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2,1",
    "hitLevel": "m,m",
    "damage": "17,20",
    "startupFrame": "i17~18",
    "blockFrame": "-12~-11",
    "hitFrame": "+22a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i18~19",
    "blockFrame": "-12~-11",
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,4",
    "hitLevel": "m,m",
    "damage": "17,14",
    "startupFrame": "i23",
    "blockFrame": 9,
    "hitFrame": "+15g",
    "counterHitFrame": 19
  },
  {
    "input": "b+1,1+2",
    "hitLevel": "m,m",
    "damage": "17,18",
    "startupFrame": "i22~23",
    "blockFrame": "-12~-11",
    "hitFrame": 9,
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
    "input": "b+1+3,P.2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i14~15",
    "blockFrame": "-9~-8",
    "hitFrame": "-9a",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i14",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "m,h",
    "damage": "11,11",
    "startupFrame": "i22~23",
    "blockFrame": "-4~-3",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1+2",
    "hitLevel": "m,m",
    "damage": "11,21",
    "startupFrame": "i27~28",
    "blockFrame": "-11~-10",
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "b+2+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14~15",
    "blockFrame": "-7~-6",
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,1",
    "hitLevel": "m,m",
    "damage": "12,13",
    "startupFrame": "i20",
    "blockFrame": -10,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,1,LTG.2",
    "hitLevel": "m,m,m",
    "damage": "12,13,25",
    "startupFrame": ",i17",
    "blockFrame": -13,
    "hitFrame": "+10a",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "b+4,1",
    "hitLevel": "m,m",
    "damage": "13,20",
    "startupFrame": "i30~31",
    "blockFrame": "-12~-11",
    "hitFrame": "+15a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,1~4",
    "hitLevel": "m,m",
    "damage": "13,14",
    "startupFrame": "i17~18",
    "blockFrame": "+9~+10",
    "hitFrame": "+15g",
    "counterHitFrame": 19
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i17~18",
    "blockFrame": "-24~-23",
    "hitFrame": -11,
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2,1+2",
    "hitLevel": "m,m",
    "damage": "15,13",
    "startupFrame": "i21~22",
    "blockFrame": "-14~-13",
    "hitFrame": -3,
    "counterHitFrame": 7
  },
  {
    "input": "b+1+2,1+2,d,df,f+2",
    "hitLevel": "m,m,m",
    "damage": "15,13,30",
    "startupFrame": "i20~21",
    "blockFrame": "-13~-12",
    "hitFrame": "+17d (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4",
    "hitLevel": "h,l",
    "damage": "6,12",
    "startupFrame": "i19~21",
    "blockFrame": "-12~-10",
    "hitFrame": 3,
    "counterHitFrame": 14
  },
  {
    "input": "b+2+3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i30~31",
    "blockFrame": "-8~-7",
    "hitFrame": "+23g",
    "counterHitFrame": "+28a"
  },
  {
    "input": "b+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1,P.4",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i17~18",
    "blockFrame": "-16~-15",
    "hitFrame": "+14c",
    "counterHitFrame": ""
  },
  {
    "input": "ub+3",
    "hitLevel": "M",
    "damage": 26,
    "startupFrame": "i24~27",
    "blockFrame": "+0c~+3c",
    "hitFrame": "+6c",
    "counterHitFrame": "+53a"
  },
  {
    "input": "ub+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": "-13~-12",
    "hitFrame": "+19a (+9)",
    "counterHitFrame": "+33a (+23)"
  },
  {
    "input": "ub+1+2",
    "hitLevel": "m!",
    "damage": 60,
    "startupFrame": "i70~71",
    "blockFrame": "",
    "hitFrame": "+26a (-21)",
    "counterHitFrame": ""
  },
  {
    "input": "u+1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i19~20",
    "blockFrame": "-6~-5",
    "hitFrame": 2,
    "counterHitFrame": "+22a (+5)"
  },
  {
    "input": "uf+1",
    "hitLevel": "h",
    "damage": 8,
    "startupFrame": "i13",
    "blockFrame": -1,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1,1",
    "hitLevel": "h,m",
    "damage": "8,17",
    "startupFrame": "i19~20",
    "blockFrame": "-6~-5",
    "hitFrame": 2,
    "counterHitFrame": "+22a (+5)"
  },
  {
    "input": "uf+1,2",
    "hitLevel": "h,m",
    "damage": "8,25",
    "startupFrame": "i20~21",
    "blockFrame": "-14~-13",
    "hitFrame": "+37d (-21)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i18~21",
    "blockFrame": "-14~-11",
    "hitFrame": "+18a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2,1",
    "hitLevel": "m,m",
    "damage": "15,17",
    "startupFrame": "i25~26",
    "blockFrame": "-8~-7",
    "hitFrame": 4,
    "counterHitFrame": "+32d"
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i17~21",
    "blockFrame": "-9~-5",
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": "-13~-12",
    "hitFrame": "+33a (+23)",
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
    "input": "d,DF",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "d,df,f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i14~15",
    "blockFrame": "-9~-8",
    "hitFrame": "+8a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i26~29",
    "blockFrame": "-7c~-4c",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4,3",
    "hitLevel": "m,h",
    "damage": "12,23",
    "startupFrame": "i12",
    "blockFrame": -14,
    "hitFrame": "+20 (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4,3,4",
    "hitLevel": "m,h,L",
    "damage": "12,23,17",
    "startupFrame": "i29~31",
    "blockFrame": "-14~-12",
    "hitFrame": -1,
    "counterHitFrame": "+30a"
  },
  {
    "input": "uf,n,4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23~25",
    "blockFrame": "-13~-11",
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i23~26",
    "blockFrame": "+6~+9",
    "hitFrame": "+13a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14~15",
    "blockFrame": "-8~-7",
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,4",
    "hitLevel": "m,L",
    "damage": "13,12",
    "startupFrame": "i19~20",
    "blockFrame": "-12~-11",
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,4,1",
    "hitLevel": "m,L,m",
    "damage": "13,12,24",
    "startupFrame": "i22",
    "blockFrame": -14,
    "hitFrame": "+12a (+3)",
    "counterHitFrame": "+44a (-3)"
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15~16",
    "blockFrame": "-13~-12",
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "M",
    "damage": 9,
    "startupFrame": "i13~14",
    "blockFrame": "-6~-5",
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,1",
    "hitLevel": "M,m",
    "damage": "9,9",
    "startupFrame": "i21",
    "blockFrame": -10,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,1,2",
    "hitLevel": "M,m,h",
    "damage": "9,9,20",
    "startupFrame": "i24~25",
    "blockFrame": "-9~-8",
    "hitFrame": "+6d",
    "counterHitFrame": "+31d (+23)"
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 8,
    "startupFrame": "i11~12",
    "blockFrame": "-9~-8",
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "ws4,1+2",
    "hitLevel": "m,m",
    "damage": "8,18",
    "startupFrame": "i25~27",
    "blockFrame": "-12~-10",
    "hitFrame": "+4d",
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i13~15",
    "blockFrame": "-15~-13",
    "hitFrame": "+22g",
    "counterHitFrame": ""
  },
  {
    "input": "SS.1+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i19",
    "blockFrame": -9,
    "hitFrame": "+14a (+5)",
    "counterHitFrame": "+29d"
  },
  {
    "input": "FC.df+3",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i21~23",
    "blockFrame": "-26~-24",
    "hitFrame": "+37a",
    "counterHitFrame": ""
  },
  {
    "input": "BOK.1",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i13",
    "blockFrame": -4,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "BOK.1,2",
    "hitLevel": "m,m",
    "damage": "14,20",
    "startupFrame": "i17~18",
    "blockFrame": "-14~-13",
    "hitFrame": "+72 (+56)",
    "counterHitFrame": ""
  },
  {
    "input": "BOK.2",
    "hitLevel": "M",
    "damage": 23,
    "startupFrame": "i19~20",
    "blockFrame": "-9~-8",
    "hitFrame": "+41a (+31)",
    "counterHitFrame": ""
  },
  {
    "input": "BOK.3",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i21",
    "blockFrame": 5,
    "hitFrame": "+15d",
    "counterHitFrame": ""
  },
  {
    "input": "BOK.4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i20",
    "blockFrame": 9,
    "hitFrame": "+15g",
    "counterHitFrame": 19
  },
  {
    "input": "BOK.1+2",
    "hitLevel": "M",
    "damage": 22,
    "startupFrame": "i20~21",
    "blockFrame": "-12~-11",
    "hitFrame": "+15d",
    "counterHitFrame": ""
  },
  {
    "input": "BOK.n",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i11",
    "blockFrame": -20,
    "hitFrame": "+1a (-8)",
    "counterHitFrame": "+22a (-14)"
  },
  {
    "input": "qcf+1",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i18~19",
    "blockFrame": "-13~-12",
    "hitFrame": -1,
    "counterHitFrame": 11
  },
  {
    "input": "qcf+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i17",
    "blockFrame": -9,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "qcf+2,1",
    "hitLevel": "m,m",
    "damage": "14,17",
    "startupFrame": "i18~19",
    "blockFrame": "-6~-5",
    "hitFrame": 10,
    "counterHitFrame": "+30d"
  },
  {
    "input": "qcf+2,4",
    "hitLevel": "m,h",
    "damage": "14,26",
    "startupFrame": "i25~28",
    "blockFrame": "-4~-1",
    "hitFrame": "+10d (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+3+4",
    "hitLevel": "m,m",
    "damage": "6,20",
    "startupFrame": "i18~20 i22~24",
    "blockFrame": "-6~-4",
    "hitFrame": "+13g",
    "counterHitFrame": ""
  },
  {
    "input": "KNK.1",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i18",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "KNK.1,2",
    "hitLevel": "h,m",
    "damage": "12,17",
    "startupFrame": "i18",
    "blockFrame": -9,
    "hitFrame": 17,
    "counterHitFrame": ""
  },
  {
    "input": "KNK.2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i13",
    "blockFrame": -4,
    "hitFrame": "+22a (+13)",
    "counterHitFrame": "+58a"
  },
  {
    "input": "KNK.3",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "KNK.3,4",
    "hitLevel": "m,m",
    "damage": "13,18",
    "startupFrame": "i15",
    "blockFrame": -12,
    "hitFrame": "+80a",
    "counterHitFrame": ""
  },
  {
    "input": "KNK.4",
    "hitLevel": "L",
    "damage": 18,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": "+4c",
    "counterHitFrame": "+17d"
  },
  {
    "input": "KNK.1+2",
    "hitLevel": "M",
    "damage": 20,
    "startupFrame": "i25",
    "blockFrame": -6,
    "hitFrame": 21,
    "counterHitFrame": "+41a (+31)"
  },
  {
    "input": "KNK.3+4",
    "hitLevel": "L",
    "damage": 24,
    "startupFrame": "i24",
    "blockFrame": -26,
    "hitFrame": "+19d",
    "counterHitFrame": ""
  },
  {
    "input": "KNK.DF",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+3+4",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i21~22",
    "blockFrame": "-13~-12",
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "hFC.1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "hFC.2",
    "hitLevel": "sl",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "hFC.3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "hFC.4",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i12",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -6,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Right throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -6,
    "hitFrame": "+8d",
    "counterHitFrame": ""
  }
]

const leoFrameData = rawLeoFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default leoFrameData;