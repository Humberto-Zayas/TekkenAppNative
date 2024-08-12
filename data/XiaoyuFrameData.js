const rawXiaoyuFrameData = [
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
    "hitLevel": "m,t",
    "damage": 51,
    "startupFrame": "i15",
    "blockFrame": 19,
    "hitFrame": "+16d",
    "counterHitFrame": ""
  },
  {
    "input": "H.f,F+1,2",
    "hitLevel": "m,m",
    "damage": "13,23",
    "startupFrame": "i15, i20",
    "blockFrame": "+6c",
    "hitFrame": "+24d",
    "counterHitFrame": ""
  },
  {
    "input": "H.f+2,1,2",
    "hitLevel": "m,h,m",
    "damage": "12,14,23",
    "startupFrame": "i16, i20, i20",
    "blockFrame": "+6c",
    "hitFrame": "+23d",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,t",
    "damage": 50,
    "startupFrame": "i15",
    "blockFrame": 9,
    "hitFrame": "+0d",
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
    "damage": 6,
    "startupFrame": "i10",
    "blockFrame": 1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "6,9",
    "startupFrame": "i11",
    "blockFrame": -3,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1",
    "hitLevel": "h,h,m",
    "damage": "6,9,24",
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": "+14a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "1,d+2",
    "hitLevel": "h,m",
    "damage": "6,10",
    "startupFrame": "i20",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,d+2,1+2",
    "hitLevel": "h,m,m",
    "damage": "6,10,24",
    "startupFrame": "i29",
    "blockFrame": -12,
    "hitFrame": "+17a",
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 8,
    "startupFrame": "i10",
    "blockFrame": -2,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "8,10",
    "startupFrame": "i19",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i14",
    "blockFrame": -11,
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i11",
    "blockFrame": -9,
    "hitFrame": 8,
    "counterHitFrame": "+33a"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i20",
    "blockFrame": -7,
    "hitFrame": "+20a",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i23",
    "blockFrame": "-1c",
    "hitFrame": "+3c",
    "counterHitFrame": "+19a"
  },
  {
    "input": "f+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -5,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "m,h",
    "damage": "12,14",
    "startupFrame": "i20",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": 7
  },
  {
    "input": "f+2,1,4",
    "hitLevel": "m,h,m",
    "damage": "12,14,20",
    "startupFrame": "i26",
    "blockFrame": -13,
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,1",
    "hitLevel": "m,m",
    "damage": "14,8",
    "startupFrame": "i22",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,1,4",
    "hitLevel": "m,m,m",
    "damage": "14,8,20",
    "startupFrame": "i26",
    "blockFrame": -22,
    "hitFrame": "+62a (+46)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3,1,1+2",
    "hitLevel": "m,m,m",
    "damage": "14,8,27",
    "startupFrame": "i16",
    "blockFrame": -12,
    "hitFrame": "+7c",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i19",
    "blockFrame": 1,
    "hitFrame": 13,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i12",
    "blockFrame": -16,
    "hitFrame": "+15d (+10)",
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
    "input": "f+3+4,3+4",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i20",
    "blockFrame": 8,
    "hitFrame": "+2d",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": -6,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "df+2,3",
    "hitLevel": "m,h",
    "damage": "15,23",
    "startupFrame": "i23",
    "blockFrame": -1,
    "hitFrame": "+35a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "l",
    "damage": 23,
    "startupFrame": "i29",
    "blockFrame": -23,
    "hitFrame": "+71a (+55)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i12",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i17",
    "blockFrame": -6,
    "hitFrame": "+8c",
    "counterHitFrame": "+9c"
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
    "startupFrame": "i14",
    "blockFrame": -12,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,4",
    "hitLevel": "l,h",
    "damage": "12,21",
    "startupFrame": "i25",
    "blockFrame": 0,
    "hitFrame": "+26a (+17)",
    "counterHitFrame": ""
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
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "special",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i18",
    "blockFrame": -9,
    "hitFrame": "+14a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": "+5c",
    "counterHitFrame": "+18g"
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 0,
    "startupFrame": "i15",
    "blockFrame": "+2c",
    "hitFrame": "+2c",
    "counterHitFrame": 14
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i18",
    "blockFrame": -12,
    "hitFrame": "+4c",
    "counterHitFrame": 14
  },
  {
    "input": "db+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i8",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2",
    "hitLevel": "m,l",
    "damage": "13,15",
    "startupFrame": "i21",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i18",
    "blockFrame": 3,
    "hitFrame": "+8c",
    "counterHitFrame": "+32d"
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "b+4,1",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "i27",
    "blockFrame": -14,
    "hitFrame": "+40d (-18)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+29a (+19)",
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
    "input": "ub+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+36a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+4",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i22",
    "blockFrame": -13,
    "hitFrame": "+13d (-4)",
    "counterHitFrame": ""
  },
  {
    "input": "u+1+2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i17",
    "blockFrame": -11,
    "hitFrame": "+0c",
    "counterHitFrame": ""
  },
  {
    "input": "u+1+2,2",
    "hitLevel": "m,m",
    "damage": "10,12",
    "startupFrame": "i27",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "u+1+2,2,1",
    "hitLevel": "m,m,m",
    "damage": "10,12,20",
    "startupFrame": "i27",
    "blockFrame": -12,
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "l",
    "damage": 15,
    "startupFrame": "i33",
    "blockFrame": -7,
    "hitFrame": "+10g c",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i26",
    "blockFrame": "+6c",
    "hitFrame": "+7c",
    "counterHitFrame": "+49a"
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i16",
    "blockFrame": -13,
    "hitFrame": "+29a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": "+24a"
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i16",
    "blockFrame": -1,
    "hitFrame": "+4d",
    "counterHitFrame": ""
  },
  {
    "input": "While in the air 3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i14",
    "blockFrame": -2,
    "hitFrame": "+29d",
    "counterHitFrame": ""
  },
  {
    "input": "While landing 3",
    "hitLevel": "l",
    "damage": 19,
    "startupFrame": "i15",
    "blockFrame": -18,
    "hitFrame": "+27a",
    "counterHitFrame": ""
  },
  {
    "input": "While landing 4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i8",
    "blockFrame": -8,
    "hitFrame": "+23a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -11,
    "hitFrame": "+7c",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1,3",
    "hitLevel": "m,h",
    "damage": "13,20",
    "startupFrame": "i18",
    "blockFrame": -1,
    "hitFrame": "+20a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1,4",
    "hitLevel": "m,m",
    "damage": "13,20",
    "startupFrame": "i21",
    "blockFrame": -12,
    "hitFrame": "+22d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,1",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i27",
    "blockFrame": -12,
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": 12
  },
  {
    "input": "f,F+4",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i20",
    "blockFrame": 9,
    "hitFrame": "+13g c",
    "counterHitFrame": "+58a (+38)"
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": 5,
    "counterHitFrame": "+58a (+38)"
  },
  {
    "input": "f,F+1+2,1+2",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i19",
    "blockFrame": -8,
    "hitFrame": "+7c",
    "counterHitFrame": "+43a"
  },
  {
    "input": "f,F+3+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i37",
    "blockFrame": -3,
    "hitFrame": "+39d",
    "counterHitFrame": ""
  },
  {
    "input": "uf,n,4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23",
    "blockFrame": -18,
    "hitFrame": "+27a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23",
    "blockFrame": 7,
    "hitFrame": "+29a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 8,
    "startupFrame": "i12",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,4",
    "hitLevel": "m,m",
    "damage": "8,16",
    "startupFrame": "i22",
    "blockFrame": -10,
    "hitFrame": "+12g",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i14",
    "blockFrame": -3,
    "hitFrame": 7,
    "counterHitFrame": "+38a (+28)"
  },
  {
    "input": "ws2*",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i22",
    "blockFrame": -3,
    "hitFrame": "+38a (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i22",
    "blockFrame": "+3c",
    "hitFrame": "+6c",
    "counterHitFrame": "+51a"
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i11",
    "blockFrame": -10,
    "hitFrame": "+20a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14~16",
    "blockFrame": -9,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2,1+2",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i19~20",
    "blockFrame": -8,
    "hitFrame": "+7c",
    "counterHitFrame": "+43a"
  },
  {
    "input": "ss4",
    "hitLevel": "l",
    "damage": 19,
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": "+29a"
  },
  {
    "input": "FC.1",
    "hitLevel": "s",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
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
    "damage": 11,
    "startupFrame": "i15",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "FC.3,2",
    "hitLevel": "l,h",
    "damage": "11,6",
    "startupFrame": "i18",
    "blockFrame": 0,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "FC.3,2,1",
    "hitLevel": "l,h,h",
    "damage": "11,6,6",
    "startupFrame": "i14",
    "blockFrame": -1,
    "hitFrame": 6,
    "counterHitFrame": "+10g"
  },
  {
    "input": "FC.3,2,1,4",
    "hitLevel": "l,h,h,m",
    "damage": "11,6,6,12",
    "startupFrame": "i18",
    "blockFrame": -18,
    "hitFrame": "+33a (+23)",
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
    "input": "FC.df+2",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i19",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2,1",
    "hitLevel": "l,l",
    "damage": "10,14",
    "startupFrame": "i21",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "i18",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4,4",
    "hitLevel": "l,l",
    "damage": "13,13",
    "startupFrame": "i28",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "AOP.1",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i18",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "AOP.1,2",
    "hitLevel": "m,h",
    "damage": "11,15",
    "startupFrame": "i21",
    "blockFrame": -6,
    "hitFrame": "+30g",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.1,4",
    "hitLevel": "m,m",
    "damage": "11,20",
    "startupFrame": "i25",
    "blockFrame": -9,
    "hitFrame": "+15d (-2)",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "AOP.2,1",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "i21",
    "blockFrame": -12,
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.3",
    "hitLevel": "l",
    "damage": 19,
    "startupFrame": "i25",
    "blockFrame": -16,
    "hitFrame": 0,
    "counterHitFrame": "+27a"
  },
  {
    "input": "AOP.4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "AOP.1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i19",
    "blockFrame": -1,
    "hitFrame": "+19a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.3+4",
    "hitLevel": "l",
    "damage": 22,
    "startupFrame": "i23",
    "blockFrame": -33,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.d",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.d+1",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "i19",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": 0
  },
  {
    "input": "AOP.d+1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i26",
    "blockFrame": -8,
    "hitFrame": "+42a (+32)",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.f+4",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "i18",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "AOP.f+4,4",
    "hitLevel": "l,l",
    "damage": "13,13",
    "startupFrame": "i28",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "AOP.f+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.uf",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.uf+3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15",
    "blockFrame": -17,
    "hitFrame": "+27a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.uf+3,1",
    "hitLevel": "m,m",
    "damage": "14,22",
    "startupFrame": "i24",
    "blockFrame": -4,
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.uf+3,4",
    "hitLevel": "m,m",
    "damage": "14,17",
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": "+22g"
  },
  {
    "input": "AOP.uf+4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": "+24d"
  },
  {
    "input": "AOP.uf+4,4",
    "hitLevel": "m,m",
    "damage": "12,12",
    "startupFrame": "i23",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "BT.1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i16",
    "blockFrame": -5,
    "hitFrame": 4,
    "counterHitFrame": "+64cs"
  },
  {
    "input": "BT.1,2",
    "hitLevel": "m,m",
    "damage": "17,20",
    "startupFrame": "i24",
    "blockFrame": -13,
    "hitFrame": "+17a",
    "counterHitFrame": ""
  },
  {
    "input": "BT.2",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i12",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "BT.2,1",
    "hitLevel": "h,h",
    "damage": "9,8",
    "startupFrame": "i14",
    "blockFrame": -1,
    "hitFrame": 6,
    "counterHitFrame": 10
  },
  {
    "input": "BT.2,1,4",
    "hitLevel": "h,h,m",
    "damage": "9,8,15",
    "startupFrame": "i18",
    "blockFrame": -18,
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.2,2",
    "hitLevel": "h,m",
    "damage": "9,12",
    "startupFrame": "i22",
    "blockFrame": -7,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "BT.2,2,1",
    "hitLevel": "h,m,m",
    "damage": "9,12,21",
    "startupFrame": "i21",
    "blockFrame": -11,
    "hitFrame": "+5c",
    "counterHitFrame": ""
  },
  {
    "input": "BT.3",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i16",
    "blockFrame": -5,
    "hitFrame": 7,
    "counterHitFrame": "+41d (+33)"
  },
  {
    "input": "BT.4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i13",
    "blockFrame": -18,
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -6,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+2,4",
    "hitLevel": "m,h",
    "damage": "12,20",
    "startupFrame": "i23",
    "blockFrame": 3,
    "hitFrame": "+19a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+2,1+2",
    "hitLevel": "m,m",
    "damage": "12,12",
    "startupFrame": "i17",
    "blockFrame": -13,
    "hitFrame": "+8d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.3+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i18",
    "blockFrame": -16,
    "hitFrame": "+10a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.db+4",
    "hitLevel": "l",
    "damage": 0,
    "startupFrame": "i15",
    "blockFrame": 2,
    "hitFrame": 2,
    "counterHitFrame": 14
  },
  {
    "input": "BT.d+1+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+51a (+35)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -12,
    "hitFrame": "+7c",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+3,4",
    "hitLevel": "l,h",
    "damage": "12,20",
    "startupFrame": "i19",
    "blockFrame": -5,
    "hitFrame": "+20a (+11)",
    "counterHitFrame": "+37a"
  },
  {
    "input": "BT.d+4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i24",
    "blockFrame": -26,
    "hitFrame": "+73a (+57)",
    "counterHitFrame": "+73a (+57)"
  },
  {
    "input": "BT.d+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f,F+3+4",
    "hitLevel": "m (t)",
    "damage": "15 (43)",
    "startupFrame": "i39",
    "blockFrame": 4,
    "hitFrame": "+39d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i23",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": 5
  },
  {
    "input": "BT.f+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+3+4,3+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i12",
    "blockFrame": -11,
    "hitFrame": "+40a (+30)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.uf+1",
    "hitLevel": "l",
    "damage": 15,
    "startupFrame": "i33",
    "blockFrame": -7,
    "hitFrame": "+12g c",
    "counterHitFrame": ""
  },
  {
    "input": "CH AOP.d+1",
    "hitLevel": "l,t",
    "damage": 40,
    "startupFrame": "i19",
    "blockFrame": -12,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "HYP.2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i18",
    "blockFrame": -4,
    "hitFrame": "+22 (-13)",
    "counterHitFrame": ""
  },
  {
    "input": "HYP.3",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+7c",
    "counterHitFrame": ""
  },
  {
    "input": "HYP.4",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i14",
    "blockFrame": -2,
    "hitFrame": "+26d",
    "counterHitFrame": "+50cs"
  },
  {
    "input": "HYP.1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "HYP.2+3",
    "hitLevel": "!",
    "damage": 40,
    "startupFrame": "i61",
    "blockFrame": "",
    "hitFrame": "+10d",
    "counterHitFrame": ""
  },
  {
    "input": "HYP.3+4",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i25",
    "blockFrame": -2,
    "hitFrame": "+30a",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "AOP.1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i31",
    "blockFrame": -6,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+2+3",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "i31",
    "blockFrame": -2,
    "hitFrame": "+20cs",
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Right Throw",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+4",
    "hitLevel": "t",
    "damage": 38,
    "startupFrame": "i12",
    "blockFrame": -2,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "f+2+3",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "i12",
    "blockFrame": -2,
    "hitFrame": "+20cs",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": 0,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  }
]

const xiaoyuFrameData = rawXiaoyuFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default xiaoyuFrameData;