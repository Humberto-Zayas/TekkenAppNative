const rawBryanFrameData = [
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
    "hitLevel": "m,m,t",
    "damage": "20,20,35",
    "startupFrame": "i16",
    "blockFrame": "+9 / +17wc",
    "hitFrame": "-1d",
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
    "damage": "5,8",
    "startupFrame": ",i12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": 9
  },
  {
    "input": "1,2,1",
    "hitLevel": "h,h,m",
    "damage": "5,8,18",
    "startupFrame": ",i19",
    "blockFrame": -6,
    "hitFrame": 6,
    "counterHitFrame": "+64a"
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,h,L",
    "damage": "5,8,15",
    "startupFrame": ",i24",
    "blockFrame": -12,
    "hitFrame": 2,
    "counterHitFrame": "+14d"
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,h",
    "damage": "5,8,24",
    "startupFrame": ",i20",
    "blockFrame": -5,
    "hitFrame": "+20a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "1,4",
    "hitLevel": "h,h",
    "damage": "5,14",
    "startupFrame": ",i15",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "1,4,2",
    "hitLevel": "h,h,h",
    "damage": "5,14,18",
    "startupFrame": ",i24",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": "+53a"
  },
  {
    "input": "1,4,2,1",
    "hitLevel": "h,h,h,h",
    "damage": "5,14,18,16",
    "startupFrame": ",i19",
    "blockFrame": 0,
    "hitFrame": "+55a",
    "counterHitFrame": ""
  },
  {
    "input": "1,4,2,1,2",
    "hitLevel": "h,h,h,h,h",
    "damage": "5,14,18,16,22",
    "startupFrame": ",i24",
    "blockFrame": -8,
    "hitFrame": "+41d (-17)",
    "counterHitFrame": ""
  },
  {
    "input": "1,4,2,1,4",
    "hitLevel": "h,h,h,h,m",
    "damage": "5,14,18,16,21",
    "startupFrame": ",i30-31",
    "blockFrame": -5,
    "hitFrame": "+40a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "1,4,2,4",
    "hitLevel": "h,h,h,m",
    "damage": "5,14,18,21",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "1,4,3",
    "hitLevel": "h,h,m",
    "damage": "5,14,15",
    "startupFrame": ",i21",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "1,4,3,3",
    "hitLevel": "h,h,m,h",
    "damage": "5,14,15,18",
    "startupFrame": ",i23",
    "blockFrame": -7,
    "hitFrame": 7,
    "counterHitFrame": "+14d"
  },
  {
    "input": "1+3+4",
    "hitLevel": "m!",
    "damage": 0,
    "startupFrame": "i28~31",
    "blockFrame": "",
    "hitFrame": 16,
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
    "input": "2,3",
    "hitLevel": "h,m",
    "damage": "10,14",
    "startupFrame": ",i16",
    "blockFrame": -10,
    "hitFrame": 6,
    "counterHitFrame": "+16a (+7)"
  },
  {
    "input": 3,
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i16",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "3,2",
    "hitLevel": "m,m",
    "damage": "14,11",
    "startupFrame": ",i22",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "3,2,1",
    "hitLevel": "m,m,m",
    "damage": "14,11,10",
    "startupFrame": ",i20",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "3,2,1,2",
    "hitLevel": "m,m,m,m",
    "damage": "14,11,10,14",
    "startupFrame": ",i20",
    "blockFrame": -10,
    "hitFrame": "+14a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "3,2,1,4",
    "hitLevel": "m,m,m,L",
    "damage": "14,11,10,12",
    "startupFrame": ",i22",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "3,3",
    "hitLevel": "m,h",
    "damage": "14,13",
    "startupFrame": ",i23",
    "blockFrame": -6,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "3,3,2",
    "hitLevel": "m,h,h",
    "damage": "14,13,20",
    "startupFrame": ",i22~23",
    "blockFrame": -7,
    "hitFrame": "+43 (+33)",
    "counterHitFrame": ""
  },
  {
    "input": "3,3,4",
    "hitLevel": "m,h,m",
    "damage": "14,13,25",
    "startupFrame": ",i28",
    "blockFrame": -12,
    "hitFrame": "+37d (-21)",
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i12",
    "blockFrame": -7,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "4,3",
    "hitLevel": "h,m",
    "damage": "15,12",
    "startupFrame": ",i24~25",
    "blockFrame": -10,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "4,3,4",
    "hitLevel": "h,m,m",
    "damage": "15,12,16",
    "startupFrame": ",i24~25",
    "blockFrame": -12,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "4,3,f+4",
    "hitLevel": "h,m,h",
    "damage": "15,12,18",
    "startupFrame": ",i24~25",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": "+31a (+21)"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i17~18",
    "blockFrame": -7,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "1+2,1",
    "hitLevel": "m,h",
    "damage": "15,15",
    "startupFrame": ",i23~24",
    "blockFrame": -1,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "1+2,2",
    "hitLevel": "m,m",
    "damage": "15,20",
    "startupFrame": ",i26~27",
    "blockFrame": -14,
    "hitFrame": "+51d (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": 8,
    "counterHitFrame": "+59a"
  },
  {
    "input": "3+4,SNE.2",
    "hitLevel": "m,m",
    "damage": "20,20",
    "startupFrame": "i14~15",
    "blockFrame": -1,
    "hitFrame": "+35a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "3+4,SNE.2*",
    "hitLevel": "m,m",
    "damage": "20,30",
    "startupFrame": "i55~56",
    "blockFrame": 9,
    "hitFrame": "+66a (+50)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i15",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "m,m",
    "damage": "10,12",
    "startupFrame": "i10",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1,4",
    "hitLevel": "m,m,m",
    "damage": "10,12,20",
    "startupFrame": "i18~19",
    "blockFrame": -13,
    "hitFrame": "+3a",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1,SNE.2",
    "hitLevel": "m,m,m",
    "damage": "10,12,5",
    "startupFrame": "i14~15",
    "blockFrame": -2,
    "hitFrame": "+9c",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1,SNE.2,3",
    "hitLevel": "m,m,m,m",
    "damage": "10,12,5,7",
    "startupFrame": ",i22",
    "blockFrame": -3,
    "hitFrame": "+18a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1,SNE.2,3,2",
    "hitLevel": "m,m,m,m,m",
    "damage": "10,12,5,7,20",
    "startupFrame": "i35~36",
    "blockFrame": -10,
    "hitFrame": "+0a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i16~18",
    "blockFrame": 0,
    "hitFrame": 4,
    "counterHitFrame": "+50a"
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i18",
    "blockFrame": -9,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "f+4,1",
    "hitLevel": "m,m",
    "damage": "10,10",
    "startupFrame": "i25~26",
    "blockFrame": "-13c",
    "hitFrame": "+40a (+32)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i20~21",
    "blockFrame": -6,
    "hitFrame": "+44d (-14)",
    "counterHitFrame": ""
  },
  {
    "input": "DF+1",
    "hitLevel": "m",
    "damage": 8,
    "startupFrame": "i15",
    "blockFrame": -5,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "DF+1,1",
    "hitLevel": "m,m",
    "damage": "8,2",
    "startupFrame": "i10",
    "blockFrame": -10,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "DF+1,1,1",
    "hitLevel": "m,m,m",
    "damage": "8,2,2",
    "startupFrame": "i10",
    "blockFrame": -10,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "DF+1,1,1,1",
    "hitLevel": "m,m,m,m",
    "damage": "8,2,2,2",
    "startupFrame": "i10",
    "blockFrame": -10,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "DF+1,2",
    "hitLevel": "m,m",
    "damage": "8,20",
    "startupFrame": "i23",
    "blockFrame": -15,
    "hitFrame": 1,
    "counterHitFrame": "+14a (+5)"
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+2,1",
    "hitLevel": "m,h",
    "damage": "12,11",
    "startupFrame": "i6",
    "blockFrame": -4,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+2,3",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i23",
    "blockFrame": -13,
    "hitFrame": 8,
    "counterHitFrame": "+59a"
  },
  {
    "input": "df+3",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i29~30",
    "blockFrame": -26,
    "hitFrame": "+70a (+54)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i22~24",
    "blockFrame": -6,
    "hitFrame": "+19d",
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i14~15",
    "blockFrame": -2,
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "d+2,3",
    "hitLevel": "m,m",
    "damage": "17,21",
    "startupFrame": "i22",
    "blockFrame": -10,
    "hitFrame": "+16a (-1)",
    "counterHitFrame": "+32a (+18)"
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,2",
    "hitLevel": "l,h",
    "damage": "10,22",
    "startupFrame": "i21",
    "blockFrame": -7,
    "hitFrame": "+35a(+9)",
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "L",
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "m,m",
    "damage": "10,15",
    "startupFrame": "i17",
    "blockFrame": -10,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2,3",
    "hitLevel": "m,m,l",
    "damage": "10,15,20",
    "startupFrame": "i27~28",
    "blockFrame": -13,
    "hitFrame": 5,
    "counterHitFrame": "+25a"
  },
  {
    "input": "d+1+2~2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i30",
    "blockFrame": 7,
    "hitFrame": "+53a",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "l",
    "damage": 16,
    "startupFrame": "i19",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": 4
  },
  {
    "input": "d+3+4,2",
    "hitLevel": "l,m",
    "damage": "16,25",
    "startupFrame": "i19",
    "blockFrame": -12,
    "hitFrame": "+14a(-3)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15~17",
    "blockFrame": -6,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 11,
    "startupFrame": "i16~17",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": 4
  },
  {
    "input": "db+1+2",
    "hitLevel": "m,h",
    "damage": "8,16",
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i20~21",
    "blockFrame": 4,
    "hitFrame": "+7c",
    "counterHitFrame": "+78a(+58)"
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
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i13",
    "blockFrame": -10,
    "hitFrame": "+20a (-38)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i17",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": "+53a"
  },
  {
    "input": "b+2,1",
    "hitLevel": "h,h",
    "damage": "18,16",
    "startupFrame": "i19",
    "blockFrame": 0,
    "hitFrame": 55,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1,2",
    "hitLevel": "h,h,h",
    "damage": "18,16,22",
    "startupFrame": "i24",
    "blockFrame": -9,
    "hitFrame": "+41d(-17)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1,4",
    "hitLevel": "h,h,m",
    "damage": "18,16,20",
    "startupFrame": "i25-26",
    "blockFrame": -10,
    "hitFrame": "+37a",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,4",
    "hitLevel": "h,m",
    "damage": "18,21",
    "startupFrame": "i30-31",
    "blockFrame": -5,
    "hitFrame": "+40a(+14)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i19",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,2",
    "hitLevel": "m,h",
    "damage": "12,12",
    "startupFrame": "i16",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,2,1",
    "hitLevel": "m,h,m",
    "damage": "12,12,10",
    "startupFrame": "i20",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,2,1,2",
    "hitLevel": "m,h,m,m",
    "damage": "12,12,10,14",
    "startupFrame": "i19",
    "blockFrame": -10,
    "hitFrame": "+19a(+10)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,2,1,4",
    "hitLevel": "m,h,m,l",
    "damage": "12,12,10,12",
    "startupFrame": "i22",
    "blockFrame": "-11c",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,1+2",
    "hitLevel": "m,m",
    "damage": "12,25",
    "startupFrame": "i22",
    "blockFrame": -6,
    "hitFrame": "+4c",
    "counterHitFrame": "+20d"
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i16",
    "blockFrame": -10,
    "hitFrame": 15,
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i28",
    "blockFrame": -9,
    "hitFrame": "+7c",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4*",
    "hitLevel": "m!",
    "damage": 45,
    "startupFrame": "i53",
    "blockFrame": "",
    "hitFrame": "+7a",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "m,m",
    "damage": "5,2",
    "startupFrame": "i15,i12",
    "blockFrame": -16,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,1",
    "hitLevel": "m,m,m",
    "damage": "5,2,2",
    "startupFrame": "i12",
    "blockFrame": -13,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,1,2",
    "hitLevel": "m,m,m,m",
    "damage": "5,2,2,2",
    "startupFrame": "i11",
    "blockFrame": -16,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,1,2,1",
    "hitLevel": "m,m,m,m,m",
    "damage": "5,2,2,2,2",
    "startupFrame": "i10",
    "blockFrame": -13,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,1,2,1,2",
    "hitLevel": "m,m,m,m,m,m",
    "damage": "5,2,2,2,2,2",
    "startupFrame": "i9",
    "blockFrame": -16,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,1,2,1,2,1",
    "hitLevel": "m,m,m,m,m,m,m",
    "damage": "5,2,2,2,2,2,2",
    "startupFrame": "i8",
    "blockFrame": -13,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,1,2,1,2,1,2",
    "hitLevel": "m,m,m,m,m,m,m,m",
    "damage": "5,2,2,2,2,2,2,2",
    "startupFrame": "i7",
    "blockFrame": -16,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,1,2,1,2,1,2,1",
    "hitLevel": "m,m,m,m,m,m,m,m,m",
    "damage": "5,2,2,2,2,2,2,2,2",
    "startupFrame": "i6",
    "blockFrame": -13,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,1,2,1,2,1,2,1,2",
    "hitLevel": "m,m,m,m,m,m,m,m,m,m",
    "damage": "5,2,2,2,2,2,2,2,2,2",
    "startupFrame": "i5",
    "blockFrame": -16,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,1,2,1,2,1,2,1,2,1",
    "hitLevel": "m,m,m,m,m,m,m,m,m,m,m",
    "damage": "5,2,2,2,2,2,2,2,2,2,2",
    "startupFrame": "i5",
    "blockFrame": -26,
    "hitFrame": -15,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,1,2,1,2,1,2,1,2,1,4",
    "hitLevel": "m,m,m,m,m,m,m,m,m,m,m,m",
    "damage": "5,2,2,2,2,2,2,2,2,2,2,14",
    "startupFrame": "i10",
    "blockFrame": -35,
    "hitFrame": "-15a (-24)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 6,
    "startupFrame": "i13",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+2,2",
    "hitLevel": "m,m",
    "damage": "6,4",
    "startupFrame": "i10",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+2,2,2",
    "hitLevel": "m,m,m",
    "damage": "6,4,4",
    "startupFrame": "i10",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+2,2,2,3",
    "hitLevel": "m,m,m,m",
    "damage": "6,4,4,20",
    "startupFrame": "i22~23",
    "blockFrame": -15,
    "hitFrame": "+30a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2,2,2,SNE.2",
    "hitLevel": "m,m,m,m",
    "damage": "6,4,4,?",
    "startupFrame": "i10",
    "blockFrame": -12,
    "hitFrame": "+21a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2,2,2,SNE.2,2",
    "hitLevel": "m,m,m,m,m",
    "damage": "6,4,4,?,?",
    "startupFrame": "i10",
    "blockFrame": -12,
    "hitFrame": "+23a (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2,2,2,SNE.2,2,3",
    "hitLevel": "m,m,m,m,m,m",
    "damage": "6,4,4,?,?,?",
    "startupFrame": "i22~23",
    "blockFrame": -15,
    "hitFrame": "+35a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i27~28",
    "blockFrame": -2,
    "hitFrame": 15,
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i24",
    "blockFrame": -5,
    "hitFrame": "+26a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i16~17",
    "blockFrame": -7,
    "hitFrame": "+8a",
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
    "input": "b,B+4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i21~33",
    "blockFrame": -19,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "b,df+4",
    "hitLevel": "l",
    "damage": 25,
    "startupFrame": "i29",
    "blockFrame": -13,
    "hitFrame": "+14g",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "h",
    "damage": 29,
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": "+41d(-17)/HE",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i24~25",
    "blockFrame": -13,
    "hitFrame": "+28a(-8)",
    "counterHitFrame": "+39a(-8)"
  },
  {
    "input": "f,F+3*",
    "hitLevel": "m",
    "damage": 33,
    "startupFrame": "i34~35",
    "blockFrame": "+8 +14wc",
    "hitFrame": "+71a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "h",
    "damage": 32,
    "startupFrame": "i16~19",
    "blockFrame": -9,
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,b+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i14~15",
    "blockFrame": -7,
    "hitFrame": "+43a (+33)",
    "counterHitFrame": ""
  },
  {
    "input": "qcb",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "qcf",
    "hitLevel": "SLS",
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
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i22~25",
    "blockFrame": 6,
    "hitFrame": "+13a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -14,
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m,t",
    "damage": "10,20",
    "startupFrame": "i19",
    "blockFrame": -10,
    "hitFrame": "+50a",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i12",
    "blockFrame": -10,
    "hitFrame": 4,
    "counterHitFrame": "+33a (+27)"
  },
  {
    "input": "ws3,4",
    "hitLevel": "m,m",
    "damage": "17,21",
    "startupFrame": "i28",
    "blockFrame": -10,
    "hitFrame": 4,
    "counterHitFrame": "+29g"
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i11~12",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ss1",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i17~18",
    "blockFrame": -5,
    "hitFrame": 8,
    "counterHitFrame": 15
  },
  {
    "input": "ss2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i17~18",
    "blockFrame": -9,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "ss2,1",
    "hitLevel": "m,h",
    "damage": "15,20",
    "startupFrame": "i21~22",
    "blockFrame": -5,
    "hitFrame": "+43d (-15)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2,1",
    "hitLevel": "m,h",
    "damage": "12,25",
    "startupFrame": "i22~23",
    "blockFrame": -8,
    "hitFrame": "+34a(+8)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i15~16",
    "blockFrame": -10,
    "hitFrame": "+13g",
    "counterHitFrame": ""
  },
  {
    "input": "SLS.2",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i15~16",
    "blockFrame": -6,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "SLS.2,1",
    "hitLevel": "h,m",
    "damage": "16,23",
    "startupFrame": "i15~16",
    "blockFrame": -11,
    "hitFrame": "+33a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "SLS.2,2",
    "hitLevel": "h,m",
    "damage": "16,25",
    "startupFrame": "i25",
    "blockFrame": -7,
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "SLS.2,4",
    "hitLevel": "h,m",
    "damage": "16,22",
    "startupFrame": "i16~17",
    "blockFrame": -10,
    "hitFrame": "+5a",
    "counterHitFrame": ""
  },
  {
    "input": "SLS.4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i18",
    "blockFrame": -5,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "SLS.4,1",
    "hitLevel": "m,h",
    "damage": "13,13",
    "startupFrame": "i27",
    "blockFrame": 0,
    "hitFrame": "+55a",
    "counterHitFrame": "+55a"
  },
  {
    "input": "SLS.4,1,2",
    "hitLevel": "m,h,h",
    "damage": "13,13,22",
    "startupFrame": "i24",
    "blockFrame": -9,
    "hitFrame": "+41d (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "SLS.4,1,4",
    "hitLevel": "m,h,m",
    "damage": "13,13,20",
    "startupFrame": "i25",
    "blockFrame": -10,
    "hitFrame": "+37a",
    "counterHitFrame": ""
  },
  {
    "input": "SLS.1+2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i15~16",
    "blockFrame": -9,
    "hitFrame": "+23a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "SNE.f,F+1+2",
    "hitLevel": "h",
    "damage": 36,
    "startupFrame": "i13",
    "blockFrame": 5,
    "hitFrame": "+33a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "SNE.f,F+1+2 (on absorb)",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i13",
    "blockFrame": "+15 / +21wc",
    "hitFrame": "+43d",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+1",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i13~14",
    "blockFrame": 5,
    "hitFrame": "+36d (+28)",
    "counterHitFrame": "+72a (+56)"
  },
  {
    "input": "qcb+2",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i15~16",
    "blockFrame": -9,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "qcb+2,4",
    "hitLevel": "m,h",
    "damage": "16,25",
    "startupFrame": ",i22~25",
    "blockFrame": -9,
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+3",
    "hitLevel": "l",
    "damage": 23,
    "startupFrame": "i19~20",
    "blockFrame": -13,
    "hitFrame": 5,
    "counterHitFrame": "+25d"
  },
  {
    "input": "qcb+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i17~18",
    "blockFrame": -12,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "-2d",
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
    "damage": 60,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "-1d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.db+1+2",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "i11",
    "blockFrame": -6,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "Right throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+6d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "-5d",
    "counterHitFrame": ""
  }
]

const bryanFrameData = rawBryanFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default bryanFrameData;