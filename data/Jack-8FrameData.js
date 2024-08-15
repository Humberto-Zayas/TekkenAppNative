const rawJack8FrameData = [
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
    "input": "H.2+3",
    "hitLevel": "h,m,t",
    "damage": 50,
    "startupFrame": "i10",
    "blockFrame": -9,
    "hitFrame": "-2d (-12)",
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m,t",
    "damage": 55,
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -2,
    "hitFrame": 6,
    "counterHitFrame": 9
  },
  {
    "input": "1,1",
    "hitLevel": "h,m",
    "damage": "10,22",
    "startupFrame": "i15",
    "blockFrame": "-14c",
    "hitFrame": "+4c",
    "counterHitFrame": "+12d"
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "10,24",
    "startupFrame": "i19",
    "blockFrame": -2,
    "hitFrame": "+30a",
    "counterHitFrame": ""
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i11",
    "blockFrame": 1,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "10,12",
    "startupFrame": "i16",
    "blockFrame": -3,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,2",
    "hitLevel": "h,m,m",
    "damage": "10,12,20",
    "startupFrame": "i33",
    "blockFrame": -12,
    "hitFrame": "+29a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,1+2",
    "hitLevel": "h,m,h,h,h,h,h",
    "damage": "10,12,10,6,6,6,20",
    "startupFrame": "i33",
    "blockFrame": -4,
    "hitFrame": "+13d",
    "counterHitFrame": ""
  },
  {
    "input": "2,3",
    "hitLevel": "h,m",
    "damage": "10,18",
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": 5,
    "counterHitFrame": "+30d (+22)"
  },
  {
    "input": "3",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i18",
    "blockFrame": -14,
    "hitFrame": "+18d (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i16",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": "+32d (+22)"
  },
  {
    "input": "1+2",
    "hitLevel": "m,m",
    "damage": "8,14",
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+67a (+51)",
    "counterHitFrame": ""
  },
  {
    "input": "1+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "i22~",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "1+4*,1",
    "hitLevel": "m",
    "damage": "35/45/55/199",
    "startupFrame": "i17(68/93/118~)",
    "blockFrame": "!",
    "hitFrame": "+70d",
    "counterHitFrame": ""
  },
  {
    "input": "1+4,1",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i17(43~)",
    "blockFrame": "+21g",
    "hitFrame": "+7a (-2)",
    "counterHitFrame": "+39d (-8)"
  },
  {
    "input": "1+4,df+1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i20~23",
    "blockFrame": -17,
    "hitFrame": "+52a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "1+4:df+1",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i20~23",
    "blockFrame": -17,
    "hitFrame": "+66a (+50)",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "pc7",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "f+1,1",
    "hitLevel": "m,h",
    "damage": "13,25",
    "startupFrame": "i25",
    "blockFrame": -7,
    "hitFrame": "+8d (-1)",
    "counterHitFrame": "+40d (-7)"
  },
  {
    "input": "f+1,2",
    "hitLevel": "m,h",
    "damage": "13,12",
    "startupFrame": "i22",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "f+1,2,1",
    "hitLevel": "m,h,m",
    "damage": "13,12,12",
    "startupFrame": "i26",
    "blockFrame": -12,
    "hitFrame": "+65a (+49)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1,2,2",
    "hitLevel": "m,h,m",
    "damage": "13,12,12",
    "startupFrame": "i33",
    "blockFrame": 6,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "f+1,2,2*",
    "hitLevel": "m,h,m",
    "damage": "13,12,12",
    "startupFrame": "i61",
    "blockFrame": "-12 (0 wall crush)",
    "hitFrame": "+11d (-15)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i10",
    "blockFrame": -12,
    "hitFrame": 5,
    "counterHitFrame": "+32a (+24)"
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,2",
    "hitLevel": "m,h",
    "damage": "18,20",
    "startupFrame": "i23",
    "blockFrame": -9,
    "hitFrame": "+44d (-14)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3,1+2",
    "hitLevel": "m,m",
    "damage": "18,20",
    "startupFrame": "i25",
    "blockFrame": "-11c",
    "hitFrame": "+2d",
    "counterHitFrame": "+48a"
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": "+32d (+22)"
  },
  {
    "input": "f+4~1",
    "hitLevel": "h",
    "damage": 80,
    "startupFrame": "i65",
    "blockFrame": "!",
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "f+4~1,2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i15 (66~)",
    "blockFrame": 8,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i27 pc7",
    "blockFrame": -12,
    "hitFrame": "+32d (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i22",
    "blockFrame": -11,
    "hitFrame": "+9c",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -4,
    "hitFrame": 3,
    "counterHitFrame": 5
  },
  {
    "input": "df+1,1",
    "hitLevel": "m,m",
    "damage": 12,
    "startupFrame": "i29",
    "blockFrame": -11,
    "hitFrame": "+21cg",
    "counterHitFrame": "+72a (+56)"
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,h",
    "damage": 1210,
    "startupFrame": "i29",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2,1",
    "hitLevel": "m,h,h",
    "damage": "1210,2",
    "startupFrame": "i15",
    "blockFrame": -10,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2,1,2",
    "hitLevel": "m,h,h,h",
    "damage": "1210,2,20",
    "startupFrame": "i9",
    "blockFrame": -18,
    "hitFrame": "+35d (-23)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1+3",
    "hitLevel": "sm",
    "damage": 20,
    "startupFrame": "i30~49",
    "blockFrame": -11,
    "hitFrame": "+0d~+19d",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2,1",
    "hitLevel": "m,h",
    "damage": "13,16",
    "startupFrame": "i21",
    "blockFrame": -32,
    "hitFrame": "+40a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2,1*",
    "hitLevel": "m,h",
    "damage": "13,16",
    "startupFrame": "i35",
    "blockFrame": -46,
    "hitFrame": "+69a (+53)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2",
    "hitLevel": "m,h",
    "damage": 1620,
    "startupFrame": "i20",
    "blockFrame": -9,
    "hitFrame": "+25d",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 5,
    "counterHitFrame": "+14c"
  },
  {
    "input": "df+1+4",
    "hitLevel": "l",
    "damage": 23,
    "startupFrame": "i34",
    "blockFrame": -37,
    "hitFrame": "+18d",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+3",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i22",
    "blockFrame": -9,
    "hitFrame": "+31d (-5)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i13",
    "blockFrame": -23,
    "hitFrame": "+10a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "s",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "s",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i20",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i27",
    "blockFrame": -18,
    "hitFrame": "+42a (+32)",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i28",
    "blockFrame": "+18g",
    "hitFrame": "+39d",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "i12",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,1",
    "hitLevel": "l,l",
    "damage": "13,5",
    "startupFrame": "i16",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,1,1",
    "hitLevel": "l,l,l",
    "damage": "13,5,5",
    "startupFrame": "i16",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,1,1,2",
    "hitLevel": "l,l,l,m",
    "damage": "13,5,5,21",
    "startupFrame": "i19",
    "blockFrame": -11,
    "hitFrame": "+43a (-4)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "l",
    "damage": 24,
    "startupFrame": "i22",
    "blockFrame": -18,
    "hitFrame": "+3c",
    "counterHitFrame": "+33d"
  },
  {
    "input": "db+2*",
    "hitLevel": "l",
    "damage": 30,
    "startupFrame": "i36",
    "blockFrame": -33,
    "hitFrame": "+17d",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 15,
    "startupFrame": "i21",
    "blockFrame": -20,
    "hitFrame": -9,
    "counterHitFrame": ""
  },
  {
    "input": "db+3, … 1+2",
    "hitLevel": "l,h",
    "damage": "15,21",
    "startupFrame": "i34",
    "blockFrame": "+14g",
    "hitFrame": "+43a (-15)",
    "counterHitFrame": ""
  },
  {
    "input": "db+3, … d+1+2",
    "hitLevel": "l,m (th)",
    "damage": "15,4,5,5,5,5,21",
    "startupFrame": "i34",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "db+3,4",
    "hitLevel": "l,l",
    "damage": "15,12",
    "startupFrame": "i27",
    "blockFrame": -16,
    "hitFrame": -9,
    "counterHitFrame": ""
  },
  {
    "input": "db+3,4,3",
    "hitLevel": "l,l,l",
    "damage": "15,12,12",
    "startupFrame": "i27",
    "blockFrame": -19,
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "db+3,4,3,4",
    "hitLevel": "l,l,l,l",
    "damage": "15,12,12,12",
    "startupFrame": "i27",
    "blockFrame": -16,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "db+3,4,3,4,3",
    "hitLevel": "l,l,l,l,l",
    "damage": "15,12,12,12,12",
    "startupFrame": "i27",
    "blockFrame": -19,
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "db+3,4,3,4,3,4",
    "hitLevel": "l,l,l,l,l,l",
    "damage": "15,12,12,12,12,12",
    "startupFrame": "i27",
    "blockFrame": -16,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i16",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "l,l",
    "damage": "8,21",
    "startupFrame": "i18",
    "blockFrame": -70,
    "hitFrame": "-5d",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i20",
    "blockFrame": -11,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,2",
    "hitLevel": "m,m",
    "damage": "17,17",
    "startupFrame": "i26",
    "blockFrame": -14,
    "hitFrame": "+15d",
    "counterHitFrame": "+47a"
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i19",
    "blockFrame": 5,
    "hitFrame": "+2d",
    "counterHitFrame": ""
  },
  {
    "input": "b+2*",
    "hitLevel": "m",
    "damage": 40,
    "startupFrame": "i35",
    "blockFrame": "-2 (+5 WC)",
    "hitFrame": "+17a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,2",
    "hitLevel": "m,h",
    "damage": 1413,
    "startupFrame": "i22",
    "blockFrame": -4,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,2,2",
    "hitLevel": "m,h,h",
    "damage": 141320,
    "startupFrame": "i25",
    "blockFrame": -9,
    "hitFrame": "+44d (-14)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,2,2*",
    "hitLevel": "m,h,m",
    "damage": 141340,
    "startupFrame": "i67",
    "blockFrame": -9,
    "hitFrame": "+13d (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i13",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": "-2a"
  },
  {
    "input": "b+4,4",
    "hitLevel": "m,m",
    "damage": 1621,
    "startupFrame": "i30",
    "blockFrame": -4,
    "hitFrame": "-8d",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i14",
    "blockFrame": -19,
    "hitFrame": "-1d (-10)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i20 pc7",
    "blockFrame": -9,
    "hitFrame": "+23d",
    "counterHitFrame": ""
  },
  {
    "input": "u+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i25",
    "blockFrame": -16,
    "hitFrame": "+15a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "u+1+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": "+49a (+39)",
    "counterHitFrame": ""
  },
  {
    "input": "u+3+4",
    "hitLevel": "m",
    "damage": 40,
    "startupFrame": "i94~100",
    "blockFrame": "!",
    "hitFrame": "+17d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i17",
    "blockFrame": "",
    "hitFrame": "+71a (+55)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1*",
    "hitLevel": "h",
    "damage": 35,
    "startupFrame": "i35",
    "blockFrame": "",
    "hitFrame": "+69a (+53)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i24 js9",
    "blockFrame": "+4c",
    "hitFrame": "+7c",
    "counterHitFrame": "+11d"
  },
  {
    "input": "uf+3",
    "hitLevel": "l",
    "damage": "(8)",
    "startupFrame": "i23 js9",
    "blockFrame": -12,
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i34 js8",
    "blockFrame": "+13cg",
    "hitFrame": "+20d",
    "counterHitFrame": ""
  },
  {
    "input": "HCF",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "i22~",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "HCF,1",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i17(43~)",
    "blockFrame": "+21g",
    "hitFrame": "+7a (-2)",
    "counterHitFrame": "+39d (-8)"
  },
  {
    "input": "HCF,df+1",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i20~23",
    "blockFrame": -17,
    "hitFrame": "+52a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "HCF:df+1",
    "hitLevel": "m",
    "damage": 36,
    "startupFrame": "i20~23",
    "blockFrame": -17,
    "hitFrame": "+66a (+50)",
    "counterHitFrame": ""
  },
  {
    "input": "b,db,d,df+1",
    "hitLevel": "l",
    "damage": 28,
    "startupFrame": "i29",
    "blockFrame": -37,
    "hitFrame": "+18d",
    "counterHitFrame": ""
  },
  {
    "input": "b,db,d,df+2",
    "hitLevel": "m",
    "damage": 31,
    "startupFrame": "i22",
    "blockFrame": -9,
    "hitFrame": "+31d (-5)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i15",
    "blockFrame": -6,
    "hitFrame": "+8c",
    "counterHitFrame": "+16d"
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i18",
    "blockFrame": -16,
    "hitFrame": "+53a (+43)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2*",
    "hitLevel": "m",
    "damage": 35,
    "startupFrame": 34,
    "blockFrame": -15,
    "hitFrame": "+61a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i26",
    "blockFrame": "+4c",
    "hitFrame": "+9c",
    "counterHitFrame": "+22a"
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 32,
    "startupFrame": "i16",
    "blockFrame": -10,
    "hitFrame": "+15d (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15",
    "blockFrame": -15,
    "hitFrame": "+22cs",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2,2",
    "hitLevel": "m,m",
    "damage": "20,24",
    "startupFrame": "i32",
    "blockFrame": -11,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2,1+2",
    "hitLevel": "m,l",
    "damage": "20,21",
    "startupFrame": "i28",
    "blockFrame": -19,
    "hitFrame": "+13d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+4",
    "hitLevel": "m (l)",
    "damage": 25,
    "startupFrame": "i21",
    "blockFrame": -82,
    "hitFrame": -88,
    "counterHitFrame": ""
  },
  {
    "input": "uf,n,2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i32",
    "blockFrame": "-1c",
    "hitFrame": "+10c",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i22",
    "blockFrame": 6,
    "hitFrame": 10,
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+1+2",
    "hitLevel": "m",
    "damage": 34,
    "startupFrame": "i20~23",
    "blockFrame": 4,
    "hitFrame": "+7a (-2)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+34a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ws2,1",
    "hitLevel": "m,m",
    "damage": "10,17",
    "startupFrame": "i15",
    "blockFrame": "-14c",
    "hitFrame": "+3d",
    "counterHitFrame": "+49a"
  },
  {
    "input": "ws2,4",
    "hitLevel": "m,h",
    "damage": "10,26",
    "startupFrame": "i16",
    "blockFrame": 4,
    "hitFrame": "+21a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,2",
    "hitLevel": "m,h",
    "damage": "18,20",
    "startupFrame": "i23",
    "blockFrame": -9,
    "hitFrame": "+44d (-14)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3,1+2",
    "hitLevel": "m,m",
    "damage": "18,20",
    "startupFrame": "i25",
    "blockFrame": "-11c",
    "hitFrame": "+2d",
    "counterHitFrame": "+48a"
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i11",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": "+26a (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2,1+2",
    "hitLevel": "m,m",
    "damage": "14,12",
    "startupFrame": "i17",
    "blockFrame": -15,
    "hitFrame": "+15d",
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2,1+2,1+2",
    "hitLevel": "m,m,l",
    "damage": "14,12,14",
    "startupFrame": "i27",
    "blockFrame": -23,
    "hitFrame": "+6d",
    "counterHitFrame": ""
  },
  {
    "input": "ss1",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i32",
    "blockFrame": "+6c",
    "hitFrame": "+59a",
    "counterHitFrame": ""
  },
  {
    "input": "ss2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i17",
    "blockFrame": 9,
    "hitFrame": "+35d (+27)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i19",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "FC.1,1",
    "hitLevel": "l,l",
    "damage": "10,14",
    "startupFrame": "i31",
    "blockFrame": -12,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "FC.1,2",
    "hitLevel": "l,m",
    "damage": "10,24",
    "startupFrame": "i32",
    "blockFrame": -11,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": "+43a (-4)"
  },
  {
    "input": "FC.2",
    "hitLevel": "s",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "FC.3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i20",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "FC.4",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2",
    "hitLevel": "l",
    "damage": 21,
    "startupFrame": "i24",
    "blockFrame": -15,
    "hitFrame": "+13d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2,1+2",
    "hitLevel": "l,m",
    "damage": 2123,
    "startupFrame": "i40",
    "blockFrame": -18,
    "hitFrame": "+42a (+32)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.db+1",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i14",
    "blockFrame": -11,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "FC.db+1,1",
    "hitLevel": "l,m",
    "damage": "14,10",
    "startupFrame": "i24",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "FC.db+1,1,1",
    "hitLevel": "l,m,m",
    "damage": "14,10,20",
    "startupFrame": "i20",
    "blockFrame": -14,
    "hitFrame": "+9a",
    "counterHitFrame": ""
  },
  {
    "input": "FC.db+1,1,1*",
    "hitLevel": "l,m,m",
    "damage": "14,10,30",
    "startupFrame": "i34",
    "blockFrame": -6,
    "hitFrame": "+15a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+1",
    "hitLevel": "m",
    "damage": 5,
    "startupFrame": "i23",
    "blockFrame": -21,
    "hitFrame": "-11c",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+1,2",
    "hitLevel": "m,m",
    "damage": "5,8",
    "startupFrame": "i16",
    "blockFrame": -21,
    "hitFrame": "-11c",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+1,2,1",
    "hitLevel": "m,m,m",
    "damage": "5,8,11",
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": "+16cs",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+1,2,1,1",
    "hitLevel": "m,m,m,h",
    "damage": "5,8,11,30",
    "startupFrame": "i21",
    "blockFrame": 15,
    "hitFrame": "+13BT",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i17",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2,1",
    "hitLevel": "m,m",
    "damage": "12,10",
    "startupFrame": "i26",
    "blockFrame": -13,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2,1,2",
    "hitLevel": "m,m,m",
    "damage": "12,10,10",
    "startupFrame": "i27",
    "blockFrame": -12,
    "hitFrame": "+29a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2,d+1",
    "hitLevel": "m,l",
    "damage": "12,8",
    "startupFrame": "i22",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2,f+1",
    "hitLevel": "m,h",
    "damage": "12,23",
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": "+32a",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4,2",
    "hitLevel": "m,m",
    "damage": "10,17",
    "startupFrame": "i20",
    "blockFrame": -14,
    "hitFrame": "+4c",
    "counterHitFrame": "+19d"
  },
  {
    "input": "FC.df+3+4",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i21",
    "blockFrame": -9,
    "hitFrame": "+1a (-8)",
    "counterHitFrame": "+33a (-14)"
  },
  {
    "input": "GMC.1",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i22",
    "blockFrame": -6,
    "hitFrame": "+73a (+57)",
    "counterHitFrame": ""
  },
  {
    "input": "GMC.2",
    "hitLevel": "h",
    "damage": 42,
    "startupFrame": "i20 pc1",
    "blockFrame": 11,
    "hitFrame": "+31a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i22",
    "blockFrame": -9,
    "hitFrame": "+25d",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.2",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "i20",
    "blockFrame": "+11g",
    "hitFrame": "+21d (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.3",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i24",
    "blockFrame": 4,
    "hitFrame": "+9c",
    "counterHitFrame": "+22a"
  },
  {
    "input": "GMH.4",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i14~18",
    "blockFrame": 4,
    "hitFrame": "+21d (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.3+4",
    "hitLevel": "sm",
    "damage": 20,
    "startupFrame": "i20 pc6",
    "blockFrame": -13,
    "hitFrame": "+40d (-18)",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.f+1",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i20",
    "blockFrame": -17,
    "hitFrame": "+66a (+50)",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.f+2",
    "hitLevel": "m",
    "damage": 34,
    "startupFrame": "i17",
    "blockFrame": -13,
    "hitFrame": "+30a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.ub",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "js12",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.uf",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "js12",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "SIT 0.1",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i19",
    "blockFrame": -48,
    "hitFrame": -37,
    "counterHitFrame": ""
  },
  {
    "input": "SIT.1,2",
    "hitLevel": "l,l",
    "damage": 1010,
    "startupFrame": "i15",
    "blockFrame": -47,
    "hitFrame": -36,
    "counterHitFrame": ""
  },
  {
    "input": "SIT.1,2,1",
    "hitLevel": "l,l,l",
    "damage": 101010,
    "startupFrame": "i15",
    "blockFrame": -47,
    "hitFrame": -36,
    "counterHitFrame": ""
  },
  {
    "input": "SIT.1,2,1,2",
    "hitLevel": "l,l,l,l",
    "damage": 10101010,
    "startupFrame": "i15",
    "blockFrame": -47,
    "hitFrame": -36,
    "counterHitFrame": ""
  },
  {
    "input": "SIT.1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i24",
    "blockFrame": -44,
    "hitFrame": "-12d",
    "counterHitFrame": ""
  },
  {
    "input": "SIT.3+4",
    "hitLevel": "m",
    "damage": 35,
    "startupFrame": "i54",
    "blockFrame": "+13cg",
    "hitFrame": "+20d",
    "counterHitFrame": ""
  },
  {
    "input": "SIT.b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "SIT.f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "(During Enemy wall stun) 1+3",
    "hitLevel": "t",
    "damage": 33,
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
    "blockFrame": 0,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw 1+3",
    "hitLevel": "t",
    "damage": 70,
    "startupFrame": "i12",
    "blockFrame": "!",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw 2+4",
    "hitLevel": "t",
    "damage": 70,
    "startupFrame": "i12",
    "blockFrame": "!",
    "hitFrame": "+17d",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.1+3",
    "hitLevel": "t",
    "damage": 30,
    "startupFrame": "i15",
    "blockFrame": "!",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.2+4",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "i15",
    "blockFrame": "!",
    "hitFrame": "+6d",
    "counterHitFrame": ""
  },
  {
    "input": "GMH.1+2",
    "hitLevel": "th",
    "damage": "45 (57)",
    "startupFrame": "i16",
    "blockFrame": -6,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "Right Throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "db,n,f+1+2",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "i11",
    "blockFrame": -6,
    "hitFrame": "-1d",
    "counterHitFrame": ""
  },
  {
    "input": "db+2+3",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "i11",
    "blockFrame": -2,
    "hitFrame": "+14c",
    "counterHitFrame": ""
  },
  {
    "input": "df,DF+2+4",
    "hitLevel": "t",
    "damage": 10,
    "startupFrame": "i14",
    "blockFrame": -2,
    "hitFrame": "+54a",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+4",
    "hitLevel": "t",
    "damage": 10,
    "startupFrame": "i11",
    "blockFrame": -2,
    "hitFrame": "+26a",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+3",
    "hitLevel": "t",
    "damage": 30,
    "startupFrame": "i12",
    "blockFrame": "!",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "d+2+4",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "i12",
    "blockFrame": "!",
    "hitFrame": "+6d",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+2",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "i11",
    "blockFrame": -2,
    "hitFrame": "+12d",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+1",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i11",
    "blockFrame": -2,
    "hitFrame": "-2d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i11",
    "blockFrame": -6,
    "hitFrame": "-10d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2,d,df+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i11",
    "blockFrame": -6,
    "hitFrame": "+19a (-7)",
    "counterHitFrame": ""
  }
]

const jack8FrameData = rawJack8FrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default jack8FrameData;