const rawLeeFrameData = [
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
    "hitLevel": "l,t",
    "damage": 37,
    "startupFrame": "i20",
    "blockFrame": -15,
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
    "input": "1",
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
    "damage": "5,9",
    "startupFrame": ",i12",
    "blockFrame": -3,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,2",
    "hitLevel": "h,h,m",
    "damage": "5,9,14",
    "startupFrame": ",i20~21",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,2,3",
    "hitLevel": "h,h,m,h",
    "damage": "5,9,14,23",
    "startupFrame": ",i21",
    "blockFrame": -3,
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,m",
    "damage": "5,9,10",
    "startupFrame": ",i18",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": "+58a"
  },
  {
    "input": "1,2:4",
    "hitLevel": "h,h,m",
    "damage": "5,9,12",
    "startupFrame": ",i18",
    "blockFrame": -12,
    "hitFrame": 5,
    "counterHitFrame": "+58a"
  },
  {
    "input": "1,3",
    "hitLevel": "h,h",
    "damage": "5,5",
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "1,3:3",
    "hitLevel": "h,h,m",
    "damage": "5,5,4",
    "startupFrame": ",i9",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "1,3:3:3",
    "hitLevel": "h,h,m,h",
    "damage": "5,5,4,14",
    "startupFrame": ",i21",
    "blockFrame": -17,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i10",
    "blockFrame": 1,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,h",
    "damage": "10,8",
    "startupFrame": "i15",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,1",
    "hitLevel": "h,h,m",
    "damage": "10,8,18",
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": 3,
    "counterHitFrame": "+26a"
  },
  {
    "input": "2,1,3",
    "hitLevel": "h,h,h",
    "damage": "10,8,20",
    "startupFrame": "i24",
    "blockFrame": -4,
    "hitFrame": "+20a (+11)",
    "counterHitFrame": "+65a (+45)"
  },
  {
    "input": "2,1,4",
    "hitLevel": "h,h,l",
    "damage": "10,8,18",
    "startupFrame": "i25",
    "blockFrame": -15,
    "hitFrame": 1,
    "counterHitFrame": "+11g"
  },
  {
    "input": "2,2",
    "hitLevel": "h,m",
    "damage": "10,14",
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "2,2,3",
    "hitLevel": "h,m,h",
    "damage": "10,14,23",
    "startupFrame": "i21",
    "blockFrame": -3,
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i14",
    "blockFrame": -8,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "3,3",
    "hitLevel": "m,h",
    "damage": "16,18",
    "startupFrame": "i17",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "3~3",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i34",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "3~3:4",
    "hitLevel": "h,t",
    "damage": "18,20",
    "startupFrame": "i34",
    "blockFrame": "!",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i11",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": "+2s"
  },
  {
    "input": "4,3",
    "hitLevel": "h,h",
    "damage": "14,14",
    "startupFrame": "i18",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": 2
  },
  {
    "input": "4,3,3",
    "hitLevel": "h,h,m",
    "damage": "14,14,",
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": "+8d",
    "counterHitFrame": ""
  },
  {
    "input": "4,3,4",
    "hitLevel": "h,h,m",
    "damage": "14,14,",
    "startupFrame": "i30",
    "blockFrame": -9,
    "hitFrame": "+42d",
    "counterHitFrame": ""
  },
  {
    "input": "4,4",
    "hitLevel": "h,h",
    "damage": "14,5",
    "startupFrame": ",i10",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "4,4,4",
    "hitLevel": "h,h,h",
    "damage": "14,5,5",
    "startupFrame": ",i10",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "4,4:4",
    "hitLevel": "h,h,h",
    "damage": "14,5,12",
    "startupFrame": ",i20~21",
    "blockFrame": -9,
    "hitFrame": "+15a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "4,u+3",
    "hitLevel": "h,m",
    "damage": "14,23",
    "startupFrame": "i33",
    "blockFrame": -1,
    "hitFrame": "+48d",
    "counterHitFrame": "js"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i21",
    "blockFrame": -1,
    "hitFrame": 3,
    "counterHitFrame": "+26a"
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
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "m,h",
    "damage": "12,22",
    "startupFrame": "i19",
    "blockFrame": -10,
    "hitFrame": "+42d (-16)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 6,
    "startupFrame": "i15",
    "blockFrame": -18,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,3",
    "hitLevel": "m,m",
    "damage": "6,3",
    "startupFrame": "i8",
    "blockFrame": -18,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,3,3",
    "hitLevel": "m,m,m",
    "damage": "6,3,3",
    "startupFrame": "i8",
    "blockFrame": -18,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,3,3,3",
    "hitLevel": "m,m,m,m",
    "damage": "6,3,3,3",
    "startupFrame": "i8",
    "blockFrame": -18,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,3,3,3,3",
    "hitLevel": "m,m,m,m,h",
    "damage": "6,3,3,3,3",
    "startupFrame": "i8",
    "blockFrame": -18,
    "hitFrame": "+13a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3,3,3,3,3,4",
    "hitLevel": "m,m,m,m,h,h",
    "damage": "6,3,3,3,3,25",
    "startupFrame": "i23",
    "blockFrame": -9,
    "hitFrame": "+69a (+53)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3,3,3,3,3:4",
    "hitLevel": "m,m,m,m,h,h",
    "damage": "6,3,3,3,3,26",
    "startupFrame": "i23",
    "blockFrame": -9,
    "hitFrame": "+69a (+53)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "h",
    "damage": 13,
    "startupFrame": "i11",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "f+4,1",
    "hitLevel": "h,h",
    "damage": "13,20",
    "startupFrame": "i24",
    "blockFrame": -5,
    "hitFrame": "+20a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,3",
    "hitLevel": "h,m",
    "damage": "13,18",
    "startupFrame": "i21",
    "blockFrame": -8,
    "hitFrame": "+6c",
    "counterHitFrame": "+63a"
  },
  {
    "input": "f+4:1",
    "hitLevel": "h,h",
    "damage": "13,25",
    "startupFrame": "i24",
    "blockFrame": 5,
    "hitFrame": "+20a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "h,h",
    "damage": "12,20",
    "startupFrame": "i13",
    "blockFrame": -13,
    "hitFrame": "+18a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "i30",
    "blockFrame": "+4c",
    "hitFrame": "+8c",
    "counterHitFrame": ""
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
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2",
    "hitLevel": "m,h",
    "damage": "13,13",
    "startupFrame": "i19",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2,3",
    "hitLevel": "m,h,m",
    "damage": "13,13,20",
    "startupFrame": "i22",
    "blockFrame": -16,
    "hitFrame": "+13c g",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i13-14",
    "blockFrame": -9,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,4",
    "hitLevel": "m,h",
    "damage": "14,22",
    "startupFrame": "i22-23",
    "blockFrame": -9,
    "hitFrame": "+10g",
    "counterHitFrame": ""
  },
  {
    "input": "D+4",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i12",
    "blockFrame": -13,
    "hitFrame": -14,
    "counterHitFrame": -2
  },
  {
    "input": "D+4,4",
    "hitLevel": "l,l",
    "damage": "7,8",
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": -16,
    "counterHitFrame": -4
  },
  {
    "input": "D+4,4,4",
    "hitLevel": "l,l,l",
    "damage": "7,8,5",
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": -16,
    "counterHitFrame": -4
  },
  {
    "input": "D+4,4,4,4",
    "hitLevel": "l,l,l,m",
    "damage": "7,8,5,21",
    "startupFrame": "i24",
    "blockFrame": -20,
    "hitFrame": "+11a (+2)",
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
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i18",
    "blockFrame": -6,
    "hitFrame": 8,
    "counterHitFrame": 13
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i16",
    "blockFrame": -15,
    "hitFrame": -1,
    "counterHitFrame": "+17a"
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i12",
    "blockFrame": -13,
    "hitFrame": -14,
    "counterHitFrame": -2
  },
  {
    "input": "d+4,n,4",
    "hitLevel": "l,h",
    "damage": "7,16",
    "startupFrame": "i23",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": "+27a (+17)"
  },
  {
    "input": "d+3+4",
    "hitLevel": "!",
    "damage": 60,
    "startupFrame": "i60",
    "blockFrame": "!",
    "hitFrame": "+9a",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "s",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i12",
    "blockFrame": -4,
    "hitFrame": -15,
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4",
    "hitLevel": "l",
    "damage": 21,
    "startupFrame": "i21",
    "blockFrame": -13,
    "hitFrame": 4,
    "counterHitFrame": "+38a"
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i14",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,1",
    "hitLevel": "h,m",
    "damage": "9,6",
    "startupFrame": "i20",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,1,2",
    "hitLevel": "h,m,h",
    "damage": "9,6,18",
    "startupFrame": "i20",
    "blockFrame": -11,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,1:2",
    "hitLevel": "h,m,h",
    "damage": "9,6,23",
    "startupFrame": "i20",
    "blockFrame": -6,
    "hitFrame": "+39d (-19)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1:1+2",
    "hitLevel": "h,h",
    "damage": "9,25",
    "startupFrame": "i21",
    "blockFrame": -6,
    "hitFrame": "+39d (-19)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+14BT",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3,4",
    "hitLevel": "m",
    "damage": 35,
    "startupFrame": "i20",
    "blockFrame": "",
    "hitFrame": "+22a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i14",
    "blockFrame": -5,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,4",
    "hitLevel": "h,h",
    "damage": "9,16",
    "startupFrame": "i27",
    "blockFrame": -9,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,4,3",
    "hitLevel": "h,h,h",
    "damage": "9,16,21",
    "startupFrame": "i27",
    "blockFrame": 0,
    "hitFrame": "+22a (+13)",
    "counterHitFrame": "+51a"
  },
  {
    "input": "b+3",
    "hitLevel": "l",
    "damage": 9,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,3",
    "hitLevel": "l,h",
    "damage": "9,12",
    "startupFrame": "i19",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i20",
    "blockFrame": -3,
    "hitFrame": "+7c",
    "counterHitFrame": "+64a"
  },
  {
    "input": "b+3+4",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": -7,
    "hitFrame": "+15a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": "+20a (+13)",
    "counterHitFrame": "+74a (+58)"
  },
  {
    "input": "u+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i25",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3,2",
    "hitLevel": "m,m",
    "damage": "12,18",
    "startupFrame": "i21",
    "blockFrame": -12,
    "hitFrame": 3,
    "counterHitFrame": "+26a"
  },
  {
    "input": "uf+3,4",
    "hitLevel": "m,h",
    "damage": "12,23",
    "startupFrame": "i25",
    "blockFrame": -3,
    "hitFrame": "+25a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i22",
    "blockFrame": 5,
    "hitFrame": "+28d (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "b,B+4",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i19",
    "blockFrame": 2,
    "hitFrame": "+25a",
    "counterHitFrame": ""
  },
  {
    "input": "b,n",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b,n,4",
    "hitLevel": "l",
    "damage": 18,
    "startupFrame": "i21",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": 12
  },
  {
    "input": "d,DB+4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i22",
    "blockFrame": -17,
    "hitFrame": "+50a (+40)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "h",
    "damage": 26,
    "startupFrame": "i18",
    "blockFrame": 2,
    "hitFrame": "+18gc",
    "counterHitFrame": "+69a (+53)"
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i14~15",
    "blockFrame": -9,
    "hitFrame": "+21d (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i16",
    "blockFrame": -5,
    "hitFrame": "+29a",
    "counterHitFrame": ""
  },
  {
    "input": "f,n",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f:F+2",
    "hitLevel": "h",
    "damage": 26,
    "startupFrame": "i18",
    "blockFrame": 2,
    "hitFrame": "+18gc",
    "counterHitFrame": "+69a (+53)"
  },
  {
    "input": "ub,b",
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
    "startupFrame": "i23",
    "blockFrame": -13,
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": "+16a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3,4",
    "hitLevel": "m,m",
    "damage": "14,26",
    "startupFrame": "i20",
    "blockFrame": 3,
    "hitFrame": "+19d",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13",
    "blockFrame": -2,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,h",
    "damage": "12,17",
    "startupFrame": "i20",
    "blockFrame": -7,
    "hitFrame": 2,
    "counterHitFrame": 7
  },
  {
    "input": "ws1,4",
    "hitLevel": "m,h",
    "damage": "12,20",
    "startupFrame": "i20",
    "blockFrame": -5,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "ws2,3",
    "hitLevel": "m,m",
    "damage": "12,24",
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2,4",
    "hitLevel": "m,h",
    "damage": "12,23",
    "startupFrame": "i27",
    "blockFrame": -2,
    "hitFrame": "+13g",
    "counterHitFrame": "+37a"
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i10",
    "blockFrame": -21,
    "hitFrame": -10,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,3",
    "hitLevel": "m,m",
    "damage": "16,11",
    "startupFrame": "i15",
    "blockFrame": -15,
    "hitFrame": "-4c",
    "counterHitFrame": ""
  },
  {
    "input": "ws3,3,DF+3",
    "hitLevel": "m,m,m",
    "damage": "16,11,10",
    "startupFrame": "i26",
    "blockFrame": -19,
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,3,DF+3,3 …",
    "hitLevel": "m,m,m,h",
    "damage": "16,11,10,10",
    "startupFrame": "i26",
    "blockFrame": -16,
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,3,D+3",
    "hitLevel": "m,m,l",
    "damage": "16,11,8",
    "startupFrame": "i26",
    "blockFrame": -19,
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,3,D+3,3 …",
    "hitLevel": "m,m,l,h",
    "damage": "16,11,8,10",
    "startupFrame": "i24",
    "blockFrame": -16,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i11",
    "blockFrame": -6,
    "hitFrame": 5,
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
    "damage": 5,
    "startupFrame": "i16",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "FC.3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i13",
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
    "input": "FC.UF+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i18~28",
    "blockFrame": -17,
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.UF+3+4",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i46~49",
    "blockFrame": -4,
    "hitFrame": "+18a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df,d,DF",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df,d,DF:3",
    "hitLevel": "l",
    "damage": 25,
    "startupFrame": "i18~24",
    "blockFrame": "-15*",
    "hitFrame": 3,
    "counterHitFrame": "+5d"
  },
  {
    "input": "FC.df,d,DF+3",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i18~24",
    "blockFrame": "-15*",
    "hitFrame": 3,
    "counterHitFrame": "+5d"
  },
  {
    "input": "FC.df+4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i16",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": "+25d"
  },
  {
    "input": "HMS.1",
    "hitLevel": "h",
    "damage": 7,
    "startupFrame": "i12",
    "blockFrame": 2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "HMS.1,1",
    "hitLevel": "h,h",
    "damage": "7,7",
    "startupFrame": "i14",
    "blockFrame": -2,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "HMS.1,1,1",
    "hitLevel": "h,h,h",
    "damage": "7,7,20",
    "startupFrame": "i20",
    "blockFrame": -7,
    "hitFrame": "+44d (-14)",
    "counterHitFrame": ""
  },
  {
    "input": "HMS.1,4",
    "hitLevel": "h,m",
    "damage": "7,17",
    "startupFrame": "i15",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": "+57a"
  },
  {
    "input": "HMS.2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": "+39a (+29)",
    "counterHitFrame": ""
  },
  {
    "input": "HMS.3",
    "hitLevel": "h,t",
    "damage": "21,20",
    "startupFrame": "i18",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "HMS.4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i22",
    "blockFrame": -13,
    "hitFrame": "+4c",
    "counterHitFrame": "+72a (+56)"
  },
  {
    "input": "HMS.1+2",
    "hitLevel": "m,m",
    "damage": "10,15",
    "startupFrame": "i15",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": "+19a (+10)"
  },
  {
    "input": "HMS.u+3",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i20~22",
    "blockFrame": -9,
    "hitFrame": "+23d (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "HMS.u+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i26~29",
    "blockFrame": "-5c",
    "hitFrame": "+13c",
    "counterHitFrame": ""
  },
  {
    "input": "MS.3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i15",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "MS.3,4",
    "hitLevel": "m,m",
    "damage": "10,10",
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "MS.3+4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i25~31",
    "blockFrame": "-15*",
    "hitFrame": 3,
    "counterHitFrame": "+5d"
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
    "hitFrame": "-2d",
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "i12~14",
    "blockFrame": "!",
    "hitFrame": "-5d",
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "Right Throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "+23d",
    "counterHitFrame": ""
  }
]

const leeFrameData = rawLeeFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default leeFrameData;