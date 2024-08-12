const rawLiliFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": "12 (12)",
    "startupFrame": "i16",
    "blockFrame": 1,
    "hitFrame": "+2c",
    "counterHitFrame": ""
  },
  {
    "input": "H.BT.2+3",
    "hitLevel": "l,M,M,M",
    "damage": "15,5,5,20",
    "startupFrame": "i16 i27~28 i6~8 i20~22",
    "blockFrame": -8,
    "hitFrame": "+23a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "H.RAB.3",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i20~21",
    "blockFrame": -13,
    "hitFrame": "+24a",
    "counterHitFrame": "+70a (+54)"
  },
  {
    "input": "H.b+3*",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.f,F+3+4 (etc.)",
    "hitLevel": "m",
    "damage": 36,
    "startupFrame": "i19",
    "blockFrame": "+4 (+9w)",
    "hitFrame": "+20a (-6)",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "h,t",
    "damage": 55,
    "startupFrame": "i23",
    "blockFrame": 9,
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "h,h,m,M",
    "damage": "15,15,15,30",
    "startupFrame": "i23~24 i14~15 i36~38 i9~11",
    "blockFrame": 9,
    "hitFrame": "+20d(-15)",
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m,t",
    "damage": 55,
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": 0,
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
    "damage": "5,16",
    "startupFrame": "i20~21",
    "blockFrame": "-4~-3",
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "1,1,3",
    "hitLevel": "h,h,m",
    "damage": "5,16,17",
    "startupFrame": "i20~21",
    "blockFrame": "-15~-14",
    "hitFrame": "+6~+7d",
    "counterHitFrame": "+25a"
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,12",
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,h,L",
    "damage": "5,12,13",
    "startupFrame": "i26",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": "+6c"
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,m",
    "damage": "5,12,20",
    "startupFrame": "i29",
    "blockFrame": "-9 / +2 H +7wc",
    "hitFrame": "+2a (-7)",
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 8,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "2,3",
    "hitLevel": "h,L",
    "damage": "8,13",
    "startupFrame": "i26",
    "blockFrame": -12,
    "hitFrame": -2,
    "counterHitFrame": "+6c"
  },
  {
    "input": "2,4",
    "hitLevel": "h,h",
    "damage": "8,20",
    "startupFrame": "i22~26",
    "blockFrame": -2,
    "hitFrame": "+24a (+15)",
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -11,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "3,1",
    "hitLevel": "m,m",
    "damage": "12,24",
    "startupFrame": "i27",
    "blockFrame": -13,
    "hitFrame": "+40d (-18)",
    "counterHitFrame": ""
  },
  {
    "input": "3,2",
    "hitLevel": "m,h",
    "damage": "12,8",
    "startupFrame": "i27",
    "blockFrame": -5,
    "hitFrame": 2,
    "counterHitFrame": 10
  },
  {
    "input": "3,2,3",
    "hitLevel": "m,h,h",
    "damage": "12,8,22",
    "startupFrame": "i24",
    "blockFrame": -9,
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i12",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i12",
    "blockFrame": -12,
    "hitFrame": "+20d (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "h,h",
    "damage": 30,
    "startupFrame": "i23~24 i14~15",
    "blockFrame": -2,
    "hitFrame": "+20a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,3",
    "hitLevel": "h,m",
    "damage": "10,20",
    "startupFrame": "i22",
    "blockFrame": -15,
    "hitFrame": "+24a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i20",
    "blockFrame": -3,
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i17",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": "+57a"
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": "+4c",
    "counterHitFrame": "+12c"
  },
  {
    "input": "f+3+4",
    "hitLevel": "m,M",
    "damage": "6,20",
    "startupFrame": "i18~20 i11~13",
    "blockFrame": -4,
    "hitFrame": "+6d",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4,3",
    "hitLevel": "m,M",
    "damage": "6,20",
    "startupFrame": "i18~20 i30~33",
    "blockFrame": -8,
    "hitFrame": "+23a",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4,3,4",
    "hitLevel": "m,M,M",
    "damage": "6,20,20",
    "startupFrame": "i19",
    "blockFrame": -20,
    "hitFrame": "+10 (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": "+3c",
    "hitFrame": "+8c",
    "counterHitFrame": "+19a"
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13",
    "blockFrame": -8,
    "hitFrame": -2,
    "counterHitFrame": 5
  },
  {
    "input": "df+4,4",
    "hitLevel": "m,L",
    "damage": "12,23",
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": 8
  },
  {
    "input": "df+3+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i24~29",
    "blockFrame": -4,
    "hitFrame": "+27a",
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4,3+4",
    "hitLevel": "m,m",
    "damage": "14,19",
    "startupFrame": "i26",
    "blockFrame": -7,
    "hitFrame": "+2d",
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "L",
    "damage": 10,
    "startupFrame": "i18",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+1,2",
    "hitLevel": "L,h",
    "damage": "10,8",
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": 5
  },
  {
    "input": "d+1,2,4",
    "hitLevel": "L,h,m",
    "damage": "10,8,24",
    "startupFrame": "i30",
    "blockFrame": -12,
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i16",
    "blockFrame": -7,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "d+2,2",
    "hitLevel": "m,h",
    "damage": "16,10",
    "startupFrame": "i17",
    "blockFrame": -10,
    "hitFrame": -4,
    "counterHitFrame": -2
  },
  {
    "input": "d+2,2,3",
    "hitLevel": "m,h,h",
    "damage": "16,10,24",
    "startupFrame": "i25",
    "blockFrame": -3,
    "hitFrame": "+23a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "d+2,2,4",
    "hitLevel": "m,h,m",
    "damage": "16,10,24",
    "startupFrame": "i22",
    "blockFrame": -17,
    "hitFrame": "+35d (-23)",
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i19",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": "+5c"
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i12",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+13d",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i17",
    "blockFrame": -21,
    "hitFrame": "+45a (+35)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "sl",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i19~22",
    "blockFrame": "-9~-6",
    "hitFrame": "+34a",
    "counterHitFrame": "+46a"
  },
  {
    "input": "db+4",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i30",
    "blockFrame": -24,
    "hitFrame": "+76a (+60)",
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i24",
    "blockFrame": -18,
    "hitFrame": "+3d",
    "counterHitFrame": "+33a"
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i17",
    "blockFrame": -6,
    "hitFrame": 2,
    "counterHitFrame": 8
  },
  {
    "input": "b+1,4",
    "hitLevel": "m,m",
    "damage": "16,22",
    "startupFrame": "i25",
    "blockFrame": -11,
    "hitFrame": "+32a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i13",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "h,m",
    "damage": "15,13",
    "startupFrame": "i20",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": 9
  },
  {
    "input": "b+2,1,1+2",
    "hitLevel": "h,m,m",
    "damage": "15,13,27",
    "startupFrame": "i23",
    "blockFrame": -12,
    "hitFrame": "+20a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i23",
    "blockFrame": -12,
    "hitFrame": "+29a (-7)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4",
    "hitLevel": "m!",
    "damage": 50,
    "startupFrame": "i63",
    "blockFrame": "!",
    "hitFrame": "+9a (-17)",
    "counterHitFrame": ""
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
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": "+9d",
    "counterHitFrame": ""
  },
  {
    "input": "u+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i22",
    "blockFrame": -16,
    "hitFrame": "+25a (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "u+3,3",
    "hitLevel": "m,m",
    "damage": "20,15",
    "startupFrame": "i28",
    "blockFrame": -12,
    "hitFrame": "+5c",
    "counterHitFrame": ""
  },
  {
    "input": "u+3,3,3+4",
    "hitLevel": "m,m,m",
    "damage": "20,15,25",
    "startupFrame": "i27",
    "blockFrame": -8,
    "hitFrame": "+13d",
    "counterHitFrame": ""
  },
  {
    "input": "u+3+4",
    "hitLevel": "m (t)",
    "damage": "18 (28 )",
    "startupFrame": "i36",
    "blockFrame": -8,
    "hitFrame": "+13d (+39a)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i20",
    "blockFrame": -10,
    "hitFrame": "+15a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15~17",
    "blockFrame": "-13~-11",
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i25",
    "blockFrame": -12,
    "hitFrame": "+1c",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,3",
    "hitLevel": "m,m",
    "damage": "18,30",
    "startupFrame": "i24",
    "blockFrame": -9,
    "hitFrame": "+41d (-17)",
    "counterHitFrame": "+32d (+24)"
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~18",
    "blockFrame": "-9~-6",
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,3",
    "hitLevel": "m,h",
    "damage": "15,18",
    "startupFrame": "i13",
    "blockFrame": -4,
    "hitFrame": "+14g (+18g w)",
    "counterHitFrame": "+20a (+10)"
  },
  {
    "input": "uf+3+4,3+4",
    "hitLevel": "m,m",
    "damage": "15,23",
    "startupFrame": "i19",
    "blockFrame": -21,
    "hitFrame": "+45a (+35)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16",
    "blockFrame": -13,
    "hitFrame": "+20a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i22",
    "blockFrame": -12,
    "hitFrame": "+5c",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3,3+4",
    "hitLevel": "m,m",
    "damage": "15,25",
    "startupFrame": "i27",
    "blockFrame": -8,
    "hitFrame": "+13d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "L",
    "damage": 23,
    "startupFrame": "i22",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": 4
  },
  {
    "input": "f,F+4,B",
    "hitLevel": "L",
    "damage": 23,
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": "+10g",
    "counterHitFrame": 10
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i18",
    "blockFrame": -9,
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3+4",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i19",
    "blockFrame": "-2 / +4 H +7wc",
    "hitFrame": "+4a (-5)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
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
    "startupFrame": "i23",
    "blockFrame": 3,
    "hitFrame": "+20a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,h",
    "damage": "10,16",
    "startupFrame": "i22",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2,4",
    "hitLevel": "m,h,L",
    "damage": "10,16,20",
    "startupFrame": "i22",
    "blockFrame": -14,
    "hitFrame": "+12a",
    "counterHitFrame": "+43a"
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i16",
    "blockFrame": -12,
    "hitFrame": "+39a (+29)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i15",
    "blockFrame": -21,
    "hitFrame": "+62a (+46)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3,4",
    "hitLevel": "m,M",
    "damage": "25,25",
    "startupFrame": "i44",
    "blockFrame": "+4c",
    "hitFrame": "+26d",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i11",
    "blockFrame": -9,
    "hitFrame": "+20a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "ss3",
    "hitLevel": "M",
    "damage": 20,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": "+35d (+27)",
    "counterHitFrame": ""
  },
  {
    "input": "ss4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i20",
    "blockFrame": -2,
    "hitFrame": 4,
    "counterHitFrame": "+11g"
  },
  {
    "input": "ss1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i19",
    "blockFrame": 0,
    "hitFrame": "+25a (+16)",
    "counterHitFrame": "+64a"
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
    "hitLevel": "sl",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "FC.3",
    "hitLevel": "L",
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
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+1",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i14",
    "blockFrame": -6,
    "hitFrame": "+19a (+2)",
    "counterHitFrame": "+34d (+26)"
  },
  {
    "input": "FC.df+3",
    "hitLevel": "L",
    "damage": 19,
    "startupFrame": "i23",
    "blockFrame": -18,
    "hitFrame": -2,
    "counterHitFrame": "+26a"
  },
  {
    "input": "BT.1",
    "hitLevel": "h",
    "damage": 8,
    "startupFrame": "i8",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "BT.1,2",
    "hitLevel": "h,m",
    "damage": "8,20",
    "startupFrame": "i24",
    "blockFrame": -13,
    "hitFrame": "+16a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1,4",
    "hitLevel": "h,h",
    "damage": "8,21",
    "startupFrame": "i22",
    "blockFrame": -5,
    "hitFrame": "+10g",
    "counterHitFrame": ""
  },
  {
    "input": "BT.2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i14",
    "blockFrame": -13,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "BT.3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -10,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "BT.3,4",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i30",
    "blockFrame": -12,
    "hitFrame": "+39d (+31)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.4",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "i26~28 i21~22",
    "blockFrame": -11,
    "hitFrame": "+11d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.4,3+4",
    "hitLevel": "m,m,m",
    "damage": "10,20,12",
    "startupFrame": "i28",
    "blockFrame": -10,
    "hitFrame": "+4d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+2",
    "hitLevel": "m,m",
    "damage": "5,20",
    "startupFrame": "i13~14 i3~4",
    "blockFrame": "-11c",
    "hitFrame": "+16a",
    "counterHitFrame": ""
  },
  {
    "input": "BT.3+4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i29",
    "blockFrame": 2,
    "hitFrame": "+7c",
    "counterHitFrame": ""
  },
  {
    "input": "BT.b+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+2",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i16",
    "blockFrame": -12,
    "hitFrame": "+5c",
    "counterHitFrame": "+14d"
  },
  {
    "input": "BT.d+3",
    "hitLevel": "L",
    "damage": 8,
    "startupFrame": "i17",
    "blockFrame": -17,
    "hitFrame": -1,
    "counterHitFrame": 2
  },
  {
    "input": "BT.d+3,4",
    "hitLevel": "L,m",
    "damage": "8,20",
    "startupFrame": "i22",
    "blockFrame": -13,
    "hitFrame": "+27a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+4",
    "hitLevel": "L",
    "damage": 9,
    "startupFrame": "i14",
    "blockFrame": -11,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+3+4",
    "hitLevel": "L",
    "damage": 25,
    "startupFrame": "i20",
    "blockFrame": -26,
    "hitFrame": "+19d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+3+4,F",
    "hitLevel": "L",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": -26,
    "hitFrame": "+18d",
    "counterHitFrame": ""
  },
  {
    "input": "DEW.1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": -4,
    "counterHitFrame": 2
  },
  {
    "input": "DEW.1,2",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i23",
    "blockFrame": -14,
    "hitFrame": "+20a (+10)",
    "counterHitFrame": "+54a"
  },
  {
    "input": "DEW.1,2~B",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "",
    "blockFrame": "-14~-15",
    "hitFrame": "-9~-8",
    "counterHitFrame": "-3~-2"
  },
  {
    "input": "DEW.1,4",
    "hitLevel": "m,m",
    "damage": "12,30",
    "startupFrame": "i25~31",
    "blockFrame": -9,
    "hitFrame": "+2a (-7)",
    "counterHitFrame": ""
  },
  {
    "input": "DEW.2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "DEW.2,1",
    "hitLevel": "m,m",
    "damage": "13,20",
    "startupFrame": "i22",
    "blockFrame": -13,
    "hitFrame": "+17d",
    "counterHitFrame": ""
  },
  {
    "input": "DEW.3",
    "hitLevel": "M",
    "damage": 28,
    "startupFrame": "i17",
    "blockFrame": -11,
    "hitFrame": "+20a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "DEW.1+2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": "+17cg",
    "counterHitFrame": ""
  },
  {
    "input": "DEW.3+4",
    "hitLevel": "h",
    "damage": 26,
    "startupFrame": "i12",
    "blockFrame": 6,
    "hitFrame": "+17g",
    "counterHitFrame": ""
  },
  {
    "input": "RAB.2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i20",
    "blockFrame": -9,
    "hitFrame": "+39d (-19)",
    "counterHitFrame": ""
  },
  {
    "input": "RAB.3",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+3c / +24a H",
    "counterHitFrame": "+70a (+54)"
  },
  {
    "input": "RAB.4",
    "hitLevel": "m",
    "damage": "24 (36)",
    "startupFrame": "i23",
    "blockFrame": "-2 / +4 H +9wc",
    "hitFrame": "+4a (-5)",
    "counterHitFrame": ""
  },
  {
    "input": "(During Enemy wall stun) 1+3",
    "hitLevel": "t",
    "damage": 39,
    "startupFrame": "i12",
    "blockFrame": "!",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw",
    "hitLevel": "t",
    "damage": 60,
    "startupFrame": "i12",
    "blockFrame": "!",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "t",
    "damage": 42,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Right Throw",
    "hitLevel": "t",
    "damage": 43,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": 1,
    "counterHitFrame": ""
  }
]

const liliFrameData = rawLiliFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default liliFrameData;