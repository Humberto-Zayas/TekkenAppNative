const rawKingFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": 1,
    "hitFrame": "+2c",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,t",
    "damage": "20,40",
    "startupFrame": "i17",
    "blockFrame": 12,
    "hitFrame": "+0d",
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
    "damage": "5,15",
    "startupFrame": "i10~12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1",
    "hitLevel": "h,h,m",
    "damage": "5,15,10",
    "startupFrame": "i24~25",
    "blockFrame": -4,
    "hitFrame": "+5s",
    "counterHitFrame": "+10s"
  },
  {
    "input": "1,2,1,2+4",
    "hitLevel": "h,h,m,t",
    "damage": "5,15,10,40",
    "startupFrame": "i26~28",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1,d+2+4",
    "hitLevel": "h,h,m,t(c)",
    "damage": "5,15,10,35",
    "startupFrame": "i28~30",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,2+4",
    "hitLevel": "h,h,t",
    "damage": "5,15,30",
    "startupFrame": "i30",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,d+2+4",
    "hitLevel": "h,h,t(c)",
    "damage": "5,15,35",
    "startupFrame": "i27",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i10",
    "blockFrame": 1,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "10,15",
    "startupFrame": "i23~24",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i17",
    "blockFrame": -14,
    "hitFrame": "+17a",
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i13",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": "+31d"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i18",
    "blockFrame": -11,
    "hitFrame": "-2s",
    "counterHitFrame": "+0s"
  },
  {
    "input": "1+2,1",
    "hitLevel": "m,m",
    "damage": "17,21",
    "startupFrame": "i22",
    "blockFrame": "-13/-18",
    "hitFrame": "+12a(+3)/-9",
    "counterHitFrame": ""
  },
  {
    "input": "1+2,3",
    "hitLevel": "m,h",
    "damage": "17,25",
    "startupFrame": "i24~25",
    "blockFrame": -3,
    "hitFrame": "+12a(+3)",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15~16",
    "blockFrame": -11,
    "hitFrame": "+2s",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "m,h",
    "damage": "12,25",
    "startupFrame": "i15~16",
    "blockFrame": -9,
    "hitFrame": "+17g/+16d",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,d+1",
    "hitLevel": "m,m",
    "damage": "12,16",
    "startupFrame": "i22",
    "blockFrame": "-13c",
    "hitFrame": "+2c",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,d+1,2",
    "hitLevel": "m,m,m",
    "damage": "12,16,16",
    "startupFrame": "i22~23",
    "blockFrame": -15,
    "hitFrame": "+27a(+17)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i15~16",
    "blockFrame": -8,
    "hitFrame": 1,
    "counterHitFrame": "+9s"
  },
  {
    "input": "f+3:1+2",
    "hitLevel": "m,t",
    "damage": "18,20",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i18~20",
    "blockFrame": -9,
    "hitFrame": "+12a(+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i16~17",
    "blockFrame": 0,
    "hitFrame": "+10d",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i17~19",
    "blockFrame": 3,
    "hitFrame": "+7s",
    "counterHitFrame": ""
  },
  {
    "input": "f+2+3",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i20~24",
    "blockFrame": -9,
    "hitFrame": "+17g/+9d",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14~15",
    "blockFrame": -1,
    "hitFrame": "+3s",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,m",
    "damage": "15,15",
    "startupFrame": "i20~21",
    "blockFrame": -10,
    "hitFrame": "+5s",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13",
    "blockFrame": -6,
    "hitFrame": "+4s",
    "counterHitFrame": ""
  },
  {
    "input": "df+2,1",
    "hitLevel": "m,h",
    "damage": "12,15",
    "startupFrame": "i20~21",
    "blockFrame": -4,
    "hitFrame": "+24d",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": "+6s",
    "counterHitFrame": ""
  },
  {
    "input": "df+3,4",
    "hitLevel": "m,h",
    "damage": "17,23",
    "startupFrame": "i30",
    "blockFrame": 0,
    "hitFrame": "+28d",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i14~15",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,3",
    "hitLevel": "l,h",
    "damage": "10,11",
    "startupFrame": "i22",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,3,4",
    "hitLevel": "l,h,m",
    "damage": "10,11,27",
    "startupFrame": "i28~29",
    "blockFrame": "-15/-8",
    "hitFrame": "+6a/+13a",
    "counterHitFrame": "+47a(+16)"
  },
  {
    "input": "df+4,3,d+4",
    "hitLevel": "l,h,l",
    "damage": "10,11,20",
    "startupFrame": "i33~35",
    "blockFrame": -10,
    "hitFrame": "-8d",
    "counterHitFrame": "+22d"
  },
  {
    "input": "d+1",
    "hitLevel": "s.l",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "d+1,2",
    "hitLevel": "s.l,m",
    "damage": "5,13",
    "startupFrame": "i10,i15~17",
    "blockFrame": -11,
    "hitFrame": "+5s",
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "s.l",
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
    "startupFrame": "i17",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i14",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i23",
    "blockFrame": -24,
    "hitFrame": "+45a(+35)",
    "counterHitFrame": ""
  },
  {
    "input": "d+2+3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i30~35",
    "blockFrame": -8,
    "hitFrame": "+0c",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i16",
    "blockFrame": -25,
    "hitFrame": -9,
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4,4",
    "hitLevel": "l,l",
    "damage": "14,7",
    "startupFrame": "i29",
    "blockFrame": -25,
    "hitFrame": -9,
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4,4,4",
    "hitLevel": "l,l,l",
    "damage": "14,7,7",
    "startupFrame": "i29",
    "blockFrame": -29,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4,4,4,2",
    "hitLevel": "l,l,l,m",
    "damage": "14,7,7,10",
    "startupFrame": "i28",
    "blockFrame": -15,
    "hitFrame": "+16d(+6)",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4,4,4,4",
    "hitLevel": "l,l,l,l,l",
    "damage": "14,7,7,4,3",
    "startupFrame": "i29,i29",
    "blockFrame": -26,
    "hitFrame": 15,
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i25~26",
    "blockFrame": "-5c",
    "hitFrame": "+19a",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i23",
    "blockFrame": -14,
    "hitFrame": "+4c",
    "counterHitFrame": "+25d"
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i29~31",
    "blockFrame": -17,
    "hitFrame": "-3d",
    "counterHitFrame": "+27d"
  },
  {
    "input": "db+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "i6~??",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2,2",
    "hitLevel": "m,t",
    "damage": "15,25",
    "startupFrame": "i15",
    "blockFrame": "-9/-5",
    "hitFrame": "+35g/+8g",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2,3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 13,
    "startupFrame": "i12",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": "+3a"
  },
  {
    "input": "b+1,2",
    "hitLevel": "h,h",
    "damage": 1320,
    "startupFrame": "i19~20",
    "blockFrame": -13,
    "hitFrame": 5,
    "counterHitFrame": "+70a(+54)*"
  },
  {
    "input": "b+1,4",
    "hitLevel": "h,m",
    "damage": 1323,
    "startupFrame": "i26~28",
    "blockFrame": -11,
    "hitFrame": "+1d",
    "counterHitFrame": "+18(-17)*"
  },
  {
    "input": "b+1+3",
    "hitLevel": "r(m)",
    "damage": 25,
    "startupFrame": "i10",
    "blockFrame": "",
    "hitFrame": "+2d",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i14",
    "blockFrame": -5,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "h,h",
    "damage": "16,21",
    "startupFrame": "i20~21",
    "blockFrame": -9,
    "hitFrame": "+19a(+10)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,4",
    "hitLevel": "h,m,t",
    "damage": "16,18,20",
    "startupFrame": "i21",
    "blockFrame": -8,
    "hitFrame": "+10s/+0",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1+2",
    "hitLevel": "h,h",
    "damage": "16,22",
    "startupFrame": "i24~25",
    "blockFrame": "+2c",
    "hitFrame": "+22d",
    "counterHitFrame": ""
  },
  {
    "input": "b+2+4",
    "hitLevel": "r(m)",
    "damage": 25,
    "startupFrame": "i10",
    "blockFrame": "",
    "hitFrame": "+24d",
    "counterHitFrame": ""
  },
  {
    "input": "b+2+4:3+4",
    "hitLevel": "r(m)",
    "damage": "25(,28)",
    "startupFrame": "i10",
    "blockFrame": "",
    "hitFrame": "+27d(+1d)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i16~18",
    "blockFrame": "-10/-5",
    "hitFrame": "+39d",
    "counterHitFrame": ""
  },
  {
    "input": "b+3:1+2",
    "hitLevel": "h,t",
    "damage": 2320,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i17~21",
    "blockFrame": 2,
    "hitFrame": "+14g",
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
    "input": "ub+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+19a(+9)",
    "counterHitFrame": "+33a(+23)"
  },
  {
    "input": "u+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i35~36",
    "blockFrame": "+2c",
    "hitFrame": "+22d",
    "counterHitFrame": ""
  },
  {
    "input": "u+1+2*",
    "hitLevel": "m!",
    "damage": 40,
    "startupFrame": "i67",
    "blockFrame": "",
    "hitFrame": "+11d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i20~23",
    "blockFrame": -3,
    "hitFrame": "+36a(+27)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 35,
    "startupFrame": "i47~53",
    "blockFrame": "-17c",
    "hitFrame": "-7d/-4c",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i22~29",
    "blockFrame": -10,
    "hitFrame": "-1d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+33a(+23)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i22~23",
    "blockFrame": "-12/-7",
    "hitFrame": "+25g",
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
    "input": "DF",
    "hitLevel": "r(l)",
    "damage": 0,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+51a(+35)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F,1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i20~21",
    "blockFrame": -5,
    "hitFrame": "+14g",
    "counterHitFrame": "+38d"
  },
  {
    "input": "f,F,2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i31~32",
    "blockFrame": 7,
    "hitFrame": "+12c",
    "counterHitFrame": ""
  },
  {
    "input": "f,F,4",
    "hitLevel": "m",
    "damage": "25(30,14)",
    "startupFrame": "i15",
    "blockFrame": -15,
    "hitFrame": "+14a(+4)",
    "counterHitFrame": "+1d"
  },
  {
    "input": "f,F,2+3",
    "hitLevel": "m,t",
    "damage": "20,15",
    "startupFrame": "i21~43",
    "blockFrame": "-16c~+2c",
    "hitFrame": "-19c~+3c/-5d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F,3+4",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i28~30",
    "blockFrame": "0/+2c",
    "hitFrame": "+24d(-34)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,n,2",
    "hitLevel": "l/(l,t)",
    "damage": "17/(20,35)",
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": "+5s/(0d)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,n,1+2",
    "hitLevel": "m",
    "damage": 0,
    "startupFrame": "i9",
    "blockFrame": 0,
    "hitFrame": "+7s",
    "counterHitFrame": "+18s"
  },
  {
    "input": "f,n,d,df",
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
    "blockFrame": -13,
    "hitFrame": "+32a(+22)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F,3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i20~25",
    "blockFrame": 3,
    "hitFrame": "+30(+22)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F,3+4",
    "hitLevel": "m",
    "damage": 40,
    "startupFrame": "i28~34",
    "blockFrame": 17,
    "hitFrame": "+32d(-26)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i10~11",
    "blockFrame": -3,
    "hitFrame": "+4s",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": "+1s",
    "counterHitFrame": ""
  },
  {
    "input": "ws2,2",
    "hitLevel": "m,m",
    "damage": "11,25",
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": "+12g",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i16",
    "blockFrame": 0,
    "hitFrame": "+22a(+12)",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i11~12",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18~19",
    "blockFrame": -10,
    "hitFrame": "+35a(+25)",
    "counterHitFrame": ""
  },
  {
    "input": "ss2",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i19~20",
    "blockFrame": -5,
    "hitFrame": "+18a(+9)",
    "counterHitFrame": ""
  },
  {
    "input": "ss2+4,b/db",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "ss3+4",
    "hitLevel": "h",
    "damage": 50,
    "startupFrame": "i21~25/i27~31",
    "blockFrame": 0,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+1",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i32~34",
    "blockFrame": -12,
    "hitFrame": "+73a(+57)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": "+56a",
    "counterHitFrame": ""
  },
  {
    "input": "FC.d+3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i18",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "BT.3",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i13~14",
    "blockFrame": -13,
    "hitFrame": "+9s",
    "counterHitFrame": "+50d"
  },
  {
    "input": "BT.3:1+2",
    "hitLevel": "m,t",
    "damage": "18,20",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+2",
    "hitLevel": "h!",
    "damage": 45,
    "startupFrame": "i26~30",
    "blockFrame": "",
    "hitFrame": "+2d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+4",
    "hitLevel": "m!",
    "damage": 30,
    "startupFrame": "i41~47",
    "blockFrame": "",
    "hitFrame": "+6d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i22~24",
    "blockFrame": -14,
    "hitFrame": "-2d",
    "counterHitFrame": "+28d"
  },
  {
    "input": "FUFT.b+3+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i16~28",
    "blockFrame": -25,
    "hitFrame": "+4a(-6)",
    "counterHitFrame": ""
  },
  {
    "input": "JGR.1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i16~17",
    "blockFrame": -8,
    "hitFrame": "+39d/+75a(+59)",
    "counterHitFrame": ""
  },
  {
    "input": "JGR.2",
    "hitLevel": "h",
    "damage": 26,
    "startupFrame": "i18~19",
    "blockFrame": "+3/+6/+18c",
    "hitFrame": "+4d",
    "counterHitFrame": ""
  },
  {
    "input": "JGR.3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i22~23",
    "blockFrame": -9,
    "hitFrame": "+11d (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "JGR.4",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i20~24",
    "blockFrame": -21,
    "hitFrame": "+0c",
    "counterHitFrame": ""
  },
  {
    "input": "JGR.2+3",
    "hitLevel": "M,t",
    "damage": "20,15",
    "startupFrame": "i21~43",
    "blockFrame": "-16c~+2c",
    "hitFrame": "-19c~+3c/-5d",
    "counterHitFrame": ""
  },
  {
    "input": "JGS.1",
    "hitLevel": "h",
    "damage": "21/25/31",
    "startupFrame": "i17~18/i19~20",
    "blockFrame": "-7/-1",
    "hitFrame": "+47d/+53d",
    "counterHitFrame": ""
  },
  {
    "input": "JGS.2",
    "hitLevel": "m",
    "damage": "15/18/22",
    "startupFrame": "i11~12",
    "blockFrame": "-9/-2/0c",
    "hitFrame": "+12c",
    "counterHitFrame": ""
  },
  {
    "input": "JGS.3",
    "hitLevel": "m",
    "damage": "23/27/34",
    "startupFrame": "i22~23",
    "blockFrame": "-5/-1",
    "hitFrame": "+21a(+12)/+25a(+16)",
    "counterHitFrame": ""
  },
  {
    "input": "JGS.3,2+3",
    "hitLevel": "m,m,t",
    "damage": "23/27/34,20,15",
    "startupFrame": "i21~43",
    "blockFrame": "-16c~+2c",
    "hitFrame": "-19c~+3c/-5d",
    "counterHitFrame": ""
  },
  {
    "input": "JGS.4",
    "hitLevel": "h",
    "damage": "40/42/52",
    "startupFrame": "i17~18",
    "blockFrame": "+8/+15",
    "hitFrame": "+5a(-4)/+10a(+1)",
    "counterHitFrame": ""
  },
  {
    "input": "JGS.df+4",
    "hitLevel": "m",
    "damage": "30/36/45",
    "startupFrame": "i17~19",
    "blockFrame": "-16/+8",
    "hitFrame": "+5a(-4)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,DF+4/CD.4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i15~16",
    "blockFrame": -9,
    "hitFrame": "+49a(+18)",
    "counterHitFrame": "+53d"
  },
  {
    "input": "f,n,d,DF+1+2 / CD.1+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i20~23",
    "blockFrame": -5,
    "hitFrame": "+16d",
    "counterHitFrame": "+52d"
  },
  {
    "input": "(Behind 1 throw)",
    "hitLevel": "t",
    "damage": 60,
    "startupFrame": "(depends)",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "(Behind 2 throw)",
    "hitLevel": "t",
    "damage": 60,
    "startupFrame": "(depends)",
    "blockFrame": "",
    "hitFrame": "-1d",
    "counterHitFrame": ""
  },
  {
    "input": "(Left side throw)",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "(depends)",
    "blockFrame": "",
    "hitFrame": "+36d",
    "counterHitFrame": ""
  },
  {
    "input": "(Right side throw)",
    "hitLevel": "t",
    "damage": 42,
    "startupFrame": "(depends)",
    "blockFrame": "",
    "hitFrame": "+21d",
    "counterHitFrame": ""
  },
  {
    "input": "1+3 / f+1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~15 / i15~17",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "2+4 / f+2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~15 / i15~17",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "AB1.1,1+2",
    "hitLevel": "t",
    "damage": "12,18",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+2d",
    "counterHitFrame": ""
  },
  {
    "input": "AB1.2,1,1+3",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "AB1.2,4,2+4",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "AB2b.3,4,3+4,1+2",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "AB2c.1,3,4,2,1+2",
    "hitLevel": "t",
    "damage": 60,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "AB2c.2,1,3,1+2",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "AIR.1+3 / AIR.f+1+3",
    "hitLevel": "t(a)",
    "damage": 30,
    "startupFrame": "i12~14 / i15~17",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "AIR.2+4 / AIR.f+2+4",
    "hitLevel": "t(a)",
    "damage": 20,
    "startupFrame": "i12~14 / i15~17",
    "blockFrame": "",
    "hitFrame": "+40d(+35)",
    "counterHitFrame": ""
  },
  {
    "input": "AIR.d+1+3",
    "hitLevel": "t(a)",
    "damage": 15,
    "startupFrame": "i12~13",
    "blockFrame": "",
    "hitFrame": "-5d",
    "counterHitFrame": ""
  },
  {
    "input": "AIR.f,f,F+2+4",
    "hitLevel": "t(a)",
    "damage": "65(70)",
    "startupFrame": "i10",
    "blockFrame": "",
    "hitFrame": "+4d",
    "counterHitFrame": ""
  },
  {
    "input": "AIR.f,hcf+1",
    "hitLevel": "t(a)",
    "damage": "55(60)",
    "startupFrame": "i10 / i12~14",
    "blockFrame": "",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "Behind.b,f+1+2",
    "hitLevel": "t",
    "damage": 75,
    "startupFrame": "i10",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "CD.1+4",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "CD.2+3",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "DHH.2,1,3,4",
    "hitLevel": "t",
    "damage": "12,13 / 32",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "-7d(-40)",
    "counterHitFrame": ""
  },
  {
    "input": "DHH.1+2,1+2",
    "hitLevel": "t",
    "damage": 15,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2",
    "hitLevel": "t(s)",
    "damage": 0,
    "startupFrame": "i26",
    "blockFrame": "",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.db,d,db+1+2",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "FDFA.db+1+3",
    "hitLevel": "t(g)",
    "damage": 32,
    "startupFrame": "i18~20",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "FDFL.db+1+3",
    "hitLevel": "t(g)",
    "damage": 37,
    "startupFrame": "i18~20",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "FDFR.db+1+3",
    "hitLevel": "t(g)",
    "damage": 35,
    "startupFrame": "i18~20",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "FDFT.db+1+3",
    "hitLevel": "t(g)",
    "damage": 30,
    "startupFrame": "i18~20",
    "blockFrame": "",
    "hitFrame": "+22d",
    "counterHitFrame": ""
  },
  {
    "input": "FUFA.db+1+3",
    "hitLevel": "t(g)",
    "damage": 28,
    "startupFrame": "i18~20",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "FUFL.db+1+3b+1+3",
    "hitLevel": "t(g)",
    "damage": 0,
    "startupFrame": "i18~20",
    "blockFrame": "",
    "hitFrame": "+25d",
    "counterHitFrame": ""
  },
  {
    "input": "FUFT.DB+1+3",
    "hitLevel": "t(g)",
    "damage": 25,
    "startupFrame": "i18~20",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "FUFT.DB+2+4",
    "hitLevel": "t(g)",
    "damage": 28,
    "startupFrame": "i18~20",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "FUFT.db+1+3",
    "hitLevel": "t(g)",
    "damage": "20,10 / 35",
    "startupFrame": "i18~20",
    "blockFrame": "",
    "hitFrame": "+1d(-40)",
    "counterHitFrame": ""
  },
  {
    "input": "JGR.1+3",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "i23",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "JGS.1+4",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "MMD1.1,4,2,3",
    "hitLevel": "t",
    "damage": 12,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "MMD2.1,1+3/ MMD2.2,2+4",
    "hitLevel": "t",
    "damage": 13,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "MMD3.2,3,1,1+2",
    "hitLevel": "t",
    "damage": 24,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "MMD3.1+2,1,1+3/ MMD3.1+2,2,2+4",
    "hitLevel": "t",
    "damage": 12,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "MMD4.3+4,1+2",
    "hitLevel": "t",
    "damage": 10,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "MMD5.1+2,3,1+3/ MMD5.1+2,4,2+4",
    "hitLevel": "t",
    "damage": 18,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "MMD5.1+2,4,2,1+2",
    "hitLevel": "t",
    "damage": "11,15",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "MMD6.2,4,1,1+3/ MMD6.2,4,1,2+4",
    "hitLevel": "t",
    "damage": 31,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "-10d",
    "counterHitFrame": ""
  },
  {
    "input": "PD.1+2,3,4,1+2",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "i11",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "PD.1+2,1+2",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i11",
    "blockFrame": "",
    "hitFrame": "-14d",
    "counterHitFrame": ""
  },
  {
    "input": "RAS1.1",
    "hitLevel": "t",
    "damage": "7/15",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "RAS2.1",
    "hitLevel": "t",
    "damage": "7/15",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "RAS3.1",
    "hitLevel": "t",
    "damage": "12/17",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "RAS4.1",
    "hitLevel": "t",
    "damage": "15/20/31",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "RAS4.2",
    "hitLevel": "t",
    "damage": "20/25",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "RSSB1.1",
    "hitLevel": "t",
    "damage": "7/15",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "RSSB2.1",
    "hitLevel": "t",
    "damage": "7/15",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "RSSB3.1",
    "hitLevel": "t",
    "damage": "9/13",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "RSSB4.1",
    "hitLevel": "t",
    "damage": "15/20/31",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "RSSB4.2",
    "hitLevel": "t",
    "damage": "20/25",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "SHH1.1,2,1+2",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "SHH1.2,1,1+3",
    "hitLevel": "t",
    "damage": 30,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "SHH1.1+2,1,3",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "SHH2c.3,4,1+2,3+4",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "UT,2,1,2,1",
    "hitLevel": "t",
    "damage": "5,5,5,15",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "UT,1+2",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "UT,1+2,1+2",
    "hitLevel": "t,t",
    "damage": "25,10",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "UT,3+4",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "UT,3+4:1+2",
    "hitLevel": "t,t",
    "damage": "20,30",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "WALL.f,hcf+1 / WALL.f,f,F+2+4",
    "hitLevel": "t(w)",
    "damage": "65(70)",
    "startupFrame": "i10",
    "blockFrame": "",
    "hitFrame": "-5d",
    "counterHitFrame": ""
  },
  {
    "input": "WallBack.b,b,ub",
    "hitLevel": "t / m",
    "damage": "45 / 21",
    "startupFrame": "i43~48 / i44~63",
    "blockFrame": -8,
    "hitFrame": "+2 / +15",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2(,f,F)",
    "hitLevel": "t",
    "damage": 0,
    "startupFrame": "i12~17",
    "blockFrame": "",
    "hitFrame": "+14g / -2",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2,1+2(,f,F)",
    "hitLevel": "t",
    "damage": 0,
    "startupFrame": "i12~17",
    "blockFrame": "",
    "hitFrame": "+11g / -6",
    "counterHitFrame": ""
  },
  {
    "input": "db,n,f+2+4",
    "hitLevel": "t",
    "damage": 53,
    "startupFrame": "i11",
    "blockFrame": "",
    "hitFrame": "-1d",
    "counterHitFrame": ""
  },
  {
    "input": "db+2+3",
    "hitLevel": "t",
    "damage": "40 (8+20+12)",
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+1d / 0d",
    "counterHitFrame": ""
  },
  {
    "input": "df+1+3",
    "hitLevel": "t",
    "damage": 19,
    "startupFrame": "i32",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+4",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "i32",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+3",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "t/s",
    "damage": "30/15",
    "startupFrame": "i28~35",
    "blockFrame": "-12~-18",
    "hitFrame": "+18d/-7~0",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+3",
    "hitLevel": "t(c)",
    "damage": 35,
    "startupFrame": "i12~13",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "d+2+4",
    "hitLevel": "t(c)",
    "damage": 35,
    "startupFrame": "i12~13",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+4",
    "hitLevel": "t(c)",
    "damage": 35,
    "startupFrame": "i12~13",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+2+4",
    "hitLevel": "t",
    "damage": "40(45)",
    "startupFrame": "i10",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "f,hcf+1",
    "hitLevel": "t",
    "damage": "45(50),20 / 70",
    "startupFrame": "i10",
    "blockFrame": "",
    "hitFrame": "-22d(-50)",
    "counterHitFrame": ""
  },
  {
    "input": "f,hcf+2",
    "hitLevel": "t",
    "damage": "50(55)",
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+1+2",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "i11",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+1",
    "hitLevel": "t",
    "damage": 30,
    "startupFrame": "i11",
    "blockFrame": "",
    "hitFrame": "+8d",
    "counterHitFrame": ""
  },
  {
    "input": "ss2+4",
    "hitLevel": "t",
    "damage": "15 / 20",
    "startupFrame": "i13",
    "blockFrame": "",
    "hitFrame": "+0d / +1d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2 / uf+1+2,B",
    "hitLevel": "t",
    "damage": 30,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+19d(-7) / +17d(-13)",
    "counterHitFrame": ""
  }
]

const kingFrameData = rawKingFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default kingFrameData;