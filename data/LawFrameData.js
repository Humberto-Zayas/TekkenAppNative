const rawLawFrameData = [
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
    "input": "H.d+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,t",
    "damage": "24,4,5,5,5,7 (50)",
    "startupFrame": "i14",
    "blockFrame": "+11g",
    "hitFrame": 5,
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
    "input": "1",
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
    "damage": "5,5",
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": -6,
    "counterHitFrame": 6
  },
  {
    "input": "1,1,1",
    "hitLevel": "h,h,m",
    "damage": "5,5,20",
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": "+41d (-17)",
    "counterHitFrame": ""
  },
  {
    "input": "1,1,2",
    "hitLevel": "h,h,h",
    "damage": "5,5,12",
    "startupFrame": "i17",
    "blockFrame": -6,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,8",
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": 6
  },
  {
    "input": "1,2,2",
    "hitLevel": "h,h,m",
    "damage": "5,8,10",
    "startupFrame": "i20",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": 4
  },
  {
    "input": "1,2,2,2",
    "hitLevel": "h,h,m,h",
    "damage": "5,8,10,15",
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": "+9d"
  },
  {
    "input": "1,2,2,1+2",
    "hitLevel": "h,h,m,m",
    "damage": "5,8,10,23",
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": "+5a (-4)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,h,m",
    "damage": "5,8,10",
    "startupFrame": "i15",
    "blockFrame": -5,
    "hitFrame": 13,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,uf+3,4",
    "hitLevel": "h,h,Special,m",
    "damage": 20,
    "startupFrame": "i15",
    "blockFrame": -12,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 8,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "2,2",
    "hitLevel": "h,m",
    "damage": "8,10",
    "startupFrame": "i20",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "2,2,2",
    "hitLevel": "h,m,h",
    "damage": "8,10,10",
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": "+9d"
  },
  {
    "input": "2,2,1+2",
    "hitLevel": "h,m,m",
    "damage": "8,10,20",
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": "+5a (-4)",
    "counterHitFrame": ""
  },
  {
    "input": "2,b+2",
    "hitLevel": "h,h",
    "damage": "8,8",
    "startupFrame": "i17",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "2,b+2,1",
    "hitLevel": "h,h,h",
    "damage": "8,8,8",
    "startupFrame": "i23",
    "blockFrame": -3,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "2,b+2,1,2",
    "hitLevel": "h,h,h,m",
    "damage": "8,8,8,21",
    "startupFrame": "i20",
    "blockFrame": -3,
    "hitFrame": "+20a",
    "counterHitFrame": "+55a"
  },
  {
    "input": "3",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "3,3",
    "hitLevel": "h,m",
    "damage": "12,17",
    "startupFrame": "i27",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": "+53a (+22)"
  },
  {
    "input": "3,4",
    "hitLevel": "h,h",
    "damage": "12,20",
    "startupFrame": "i22",
    "blockFrame": -10,
    "hitFrame": "+19a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "4,3",
    "hitLevel": "h,h",
    "damage": "15,12",
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": 1,
    "counterHitFrame": "+23a"
  },
  {
    "input": "4,3,4",
    "hitLevel": "h,h,h",
    "damage": "15,12,14",
    "startupFrame": "i20",
    "blockFrame": -6,
    "hitFrame": -1,
    "counterHitFrame": "+31a (+24)"
  },
  {
    "input": "4,u+3",
    "hitLevel": "h,m",
    "damage": "15,23",
    "startupFrame": "i33",
    "blockFrame": -1,
    "hitFrame": "+30a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16",
    "blockFrame": -13,
    "hitFrame": "+12a (+5)",
    "counterHitFrame": "+66a (+50)"
  },
  {
    "input": "2+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "m,m",
    "damage": "5,10",
    "startupFrame": "i14",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "3+4,4",
    "hitLevel": "m,m,h",
    "damage": "5,10,25",
    "startupFrame": "i30",
    "blockFrame": "+7 (+10g w)",
    "hitFrame": "+31d (-27)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "f+2~1",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i19",
    "blockFrame": 2,
    "hitFrame": "+30a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i18",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,1",
    "hitLevel": "m,m",
    "damage": "10,12",
    "startupFrame": "i20",
    "blockFrame": -2,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i20",
    "blockFrame": "+3c",
    "hitFrame": "+8c",
    "counterHitFrame": "+55a"
  },
  {
    "input": "f+3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i25",
    "blockFrame": -2,
    "hitFrame": "+7c",
    "counterHitFrame": "+49a"
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -1,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,3",
    "hitLevel": "m,l",
    "damage": "10,6",
    "startupFrame": "i20",
    "blockFrame": -16,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,3,2",
    "hitLevel": "m,l,m",
    "damage": "10,6,6",
    "startupFrame": "i28",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,3,2,2,3,3,3,4,4,4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -7,
    "hitFrame": "+34a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i21",
    "blockFrame": -13,
    "hitFrame": "+52a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i13",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,3",
    "hitLevel": "m,m",
    "damage": "15,23",
    "startupFrame": "i29",
    "blockFrame": -14,
    "hitFrame": "+68a (+52)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i18",
    "blockFrame": -15,
    "hitFrame": "+4c",
    "counterHitFrame": "+6a"
  },
  {
    "input": "d+1",
    "hitLevel": "l",
    "damage": 15,
    "startupFrame": "i21",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "d+1,3",
    "hitLevel": "l,h",
    "damage": "15,21",
    "startupFrame": "i24",
    "blockFrame": -9,
    "hitFrame": "+20a (+11)",
    "counterHitFrame": "+65a (+45)"
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
    "input": "d+2,3",
    "hitLevel": "s,m",
    "damage": "8,21",
    "startupFrame": "i23",
    "blockFrame": -15,
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 8,
    "startupFrame": "i16",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,3",
    "hitLevel": "l,h",
    "damage": "8,17",
    "startupFrame": "i16",
    "blockFrame": -7,
    "hitFrame": "+20a",
    "counterHitFrame": "+46CS"
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i15",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+4,3",
    "hitLevel": "l,h",
    "damage": "7,12",
    "startupFrame": "i12",
    "blockFrame": -12,
    "hitFrame": 0,
    "counterHitFrame": 5
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
    "blockFrame": -14,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4,3",
    "hitLevel": "l,m",
    "damage": "7,23",
    "startupFrame": "i29",
    "blockFrame": -14,
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "s",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "db+2,4",
    "hitLevel": "m,m",
    "damage": "15,25",
    "startupFrame": "i33",
    "blockFrame": -4,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 15,
    "startupFrame": "i17",
    "blockFrame": -13,
    "hitFrame": "+3c",
    "counterHitFrame": "+13g"
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i26",
    "blockFrame": -37,
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "db+4,4",
    "hitLevel": "l,m",
    "damage": "20,27",
    "startupFrame": "i37",
    "blockFrame": -8,
    "hitFrame": "+30a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,2",
    "hitLevel": "m,m",
    "damage": "12,12",
    "startupFrame": "i19",
    "blockFrame": -12,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,2,2",
    "hitLevel": "m,m,m",
    "damage": "12,12,22",
    "startupFrame": "i18",
    "blockFrame": -14,
    "hitFrame": "+12a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "ps2~11",
    "blockFrame": "",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "m,m",
    "damage": "12,16",
    "startupFrame": "i26",
    "blockFrame": -15,
    "hitFrame": "+11a",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2",
    "hitLevel": "m,h",
    "damage": "12,15",
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": "+9d"
  },
  {
    "input": "b+2,3",
    "hitLevel": "m,l",
    "damage": "12,10",
    "startupFrame": "i23",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,3,4",
    "hitLevel": "m,l,m",
    "damage": "12,10,23",
    "startupFrame": "i23",
    "blockFrame": -7,
    "hitFrame": "+36a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,3,d+4",
    "hitLevel": "m,l,l",
    "damage": "12,10,23",
    "startupFrame": "i34",
    "blockFrame": -37,
    "hitFrame": "+11a",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i23",
    "blockFrame": -12,
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "b+4,3",
    "hitLevel": "m,h",
    "damage": "13,21",
    "startupFrame": "i32",
    "blockFrame": -5,
    "hitFrame": "+24a (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i20",
    "blockFrame": -14,
    "hitFrame": "+31a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i23",
    "blockFrame": -18,
    "hitFrame": "+16a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1,2,1,2",
    "hitLevel": "h,h,h,h",
    "damage": "8,8,8,28",
    "startupFrame": "i12,i6,i6,i13",
    "blockFrame": -7,
    "hitFrame": "+13a (-4)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+2",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": -12,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "ub+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "ub+3,4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15",
    "blockFrame": -12,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "u+4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+19a (+9)",
    "counterHitFrame": "+33a (+23)"
  },
  {
    "input": "UF+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i18",
    "blockFrame": -17,
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "UF+4,3",
    "hitLevel": "m,m",
    "damage": 2316,
    "startupFrame": "i19",
    "blockFrame": -14,
    "hitFrame": "+78a (+62)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1,3",
    "hitLevel": "h,l",
    "damage": 1010,
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": "+42d (-16)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "l",
    "damage": 27,
    "startupFrame": "i29",
    "blockFrame": -24,
    "hitFrame": 5,
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
    "input": "1+2+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "1+2+3+4,2",
    "hitLevel": "h",
    "damage": 24,
    "startupFrame": "i14",
    "blockFrame": 1,
    "hitFrame": "+50a",
    "counterHitFrame": ""
  },
  {
    "input": "1+2+3+4~1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "1+2+3+4~1,3",
    "hitLevel": "h,l",
    "damage": "10,10",
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "(While down, facing up) 1+2+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b,B+2+3",
    "hitLevel": "m!",
    "damage": 60,
    "startupFrame": "i78",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -6,
    "hitFrame": 2,
    "counterHitFrame": 7
  },
  {
    "input": "f,F+2,1",
    "hitLevel": "m,h",
    "damage": "12,12",
    "startupFrame": "i22",
    "blockFrame": -4,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,1,3",
    "hitLevel": "m,h,m",
    "damage": "12,12,23",
    "startupFrame": "i28",
    "blockFrame": -13,
    "hitFrame": "+11a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,3",
    "hitLevel": "m,h",
    "damage": "12,20",
    "startupFrame": "i16",
    "blockFrame": -14,
    "hitFrame": "+37a (-21)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,f+1+2",
    "hitLevel": "m,m",
    "damage": "12,24",
    "startupFrame": "i31",
    "blockFrame": 2,
    "hitFrame": "+30a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+18d (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i20",
    "blockFrame": -11,
    "hitFrame": "+18a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "uf,n,4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i19",
    "blockFrame": -15,
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i20~28",
    "blockFrame": 6,
    "hitFrame": "+35d (-23)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -7,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,h",
    "damage": "10,25",
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": "+40d (-18)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15",
    "blockFrame": -18,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i16",
    "blockFrame": "+17g",
    "hitFrame": 19,
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "ws4,3",
    "hitLevel": "m,m",
    "damage": "14,23",
    "startupFrame": "i27",
    "blockFrame": -14,
    "hitFrame": "+68a (+52)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3+4",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i14",
    "blockFrame": -21,
    "hitFrame": "+0a (-17)",
    "counterHitFrame": ""
  },
  {
    "input": "ss2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i18",
    "blockFrame": 0,
    "hitFrame": "+16d (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "ss3",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": 7,
    "counterHitFrame": "+16c"
  },
  {
    "input": "ss1+2",
    "hitLevel": "m,h,m",
    "damage": "8,8,8",
    "startupFrame": "i17",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "ss1+2,1",
    "hitLevel": "m,h,m,m",
    "damage": "8,8,8,25",
    "startupFrame": "i22",
    "blockFrame": -16,
    "hitFrame": "+16d (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "ss3+4",
    "hitLevel": "m,h",
    "damage": "9,10",
    "startupFrame": "i15",
    "blockFrame": -12,
    "hitFrame": "+63a (+43)",
    "counterHitFrame": ""
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
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "FC.3,4",
    "hitLevel": "l,m",
    "damage": "10,27",
    "startupFrame": "i29",
    "blockFrame": -14,
    "hitFrame": "+14a (-3)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.4",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i12",
    "blockFrame": -14,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "FC.4,3",
    "hitLevel": "l,m",
    "damage": "7,23",
    "startupFrame": "i29",
    "blockFrame": -14,
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "FC.UF+3+4",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i46~49",
    "blockFrame": -4,
    "hitFrame": "+17a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df,d,df+3",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i16~20",
    "blockFrame": -23,
    "hitFrame": 13,
    "counterHitFrame": ""
  },
  {
    "input": "(Back to wall).b,b,ub",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i29-33",
    "blockFrame": -1,
    "hitFrame": "+45d (-13)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1",
    "hitLevel": "h",
    "damage": 7,
    "startupFrame": "i10",
    "blockFrame": 1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "BT.2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": -1,
    "counterHitFrame": "+52a"
  },
  {
    "input": "BT.2,2",
    "hitLevel": "m,m",
    "damage": "17,20",
    "startupFrame": "i14",
    "blockFrame": -14,
    "hitFrame": "+31d (-27)",
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
    "input": "BT.4",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i11",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "BT.4,3",
    "hitLevel": "h,m",
    "damage": "14,24",
    "startupFrame": "i24",
    "blockFrame": -12,
    "hitFrame": "+12a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i15",
    "blockFrame": 1,
    "hitFrame": "+16g",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+3",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i12",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i23",
    "blockFrame": -13,
    "hitFrame": "+6c",
    "counterHitFrame": "+26d"
  },
  {
    "input": "BT.d+3+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i26",
    "blockFrame": -15,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "DSS.1",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i12",
    "blockFrame": 0,
    "hitFrame": 8,
    "counterHitFrame": "+18c"
  },
  {
    "input": "DSS.2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i14",
    "blockFrame": 1,
    "hitFrame": "+15d",
    "counterHitFrame": "+50a"
  },
  {
    "input": "DSS.3",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i19",
    "blockFrame": 3,
    "hitFrame": "+40a",
    "counterHitFrame": ""
  },
  {
    "input": "DSS.4",
    "hitLevel": "l",
    "damage": 21,
    "startupFrame": "i21",
    "blockFrame": -13,
    "hitFrame": "+6c",
    "counterHitFrame": "+38d"
  },
  {
    "input": "DSS.1+2",
    "hitLevel": "m",
    "damage": "",
    "startupFrame": "i16",
    "blockFrame": -13,
    "hitFrame": "+12a (+5)",
    "counterHitFrame": "+66a (+50)"
  },
  {
    "input": "DSS.f+1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": "+39d (-19)",
    "counterHitFrame": ""
  },
  {
    "input": "DSS.f+2~1",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i19",
    "blockFrame": 2,
    "hitFrame": "+30a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "DSS.f+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+18d (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "DSS.f+4",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "i19",
    "blockFrame": "+7 (+10g w)",
    "hitFrame": "+31d (-27)",
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
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "DSS.uf+1+2",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12",
    "blockFrame": -2,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Right Throw",
    "hitLevel": "t",
    "damage": 42,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "b+2+4",
    "hitLevel": "t",
    "damage": "34 (38 Heat)",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3+4",
    "hitLevel": "t",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "+55a (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12",
    "blockFrame": -2,
    "hitFrame": "+6d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2,2,1,1+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "-6d",
    "counterHitFrame": ""
  }
]

const lawFrameData = rawLawFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default lawFrameData;