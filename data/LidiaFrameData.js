const rawLidiaFrameData = [
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
    "input": "H.1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i31",
    "blockFrame": "",
    "hitFrame": "+37a (+29) HAE",
    "counterHitFrame": ""
  },
  {
    "input": "H.CAT.U",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.HRS.U",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.WLF.1",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i22",
    "blockFrame": "",
    "hitFrame": "+38a (+30) HAE",
    "counterHitFrame": ""
  },
  {
    "input": "H.WLF.U",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.f,F+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i13",
    "blockFrame": "",
    "hitFrame": "+17 HRS",
    "counterHitFrame": ""
  },
  {
    "input": "H.f,f,F+1",
    "hitLevel": "h",
    "damage": 37,
    "startupFrame": "i13~15",
    "blockFrame": "+5 HAE",
    "hitFrame": "+31a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,m,m,h",
    "damage": 55,
    "startupFrame": "i18, i24, i15, i34",
    "blockFrame": 10,
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
    "damage": "5,8",
    "startupFrame": ",i10",
    "blockFrame": -3,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,2",
    "hitLevel": "h,h,m",
    "damage": "5,8,10",
    "startupFrame": ",i22",
    "blockFrame": -8,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,h,h",
    "damage": "5,8,27",
    "startupFrame": ",i26~27",
    "blockFrame": -6,
    "hitFrame": "+20a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,l",
    "damage": "5,8,15",
    "startupFrame": ",i26",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": "+26a"
  },
  {
    "input": "1,4",
    "hitLevel": "h,h",
    "damage": "5,17",
    "startupFrame": ",i19",
    "blockFrame": -8,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "1+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": 0,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,h",
    "damage": "8,10",
    "startupFrame": ",i20~21",
    "blockFrame": "",
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4",
    "hitLevel": "h,h,h",
    "damage": "8,10,15",
    "startupFrame": ",i22",
    "blockFrame": "",
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4,4",
    "hitLevel": "h,h,h,l",
    "damage": "8,10,15,5",
    "startupFrame": ",i24~25",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4,4,1",
    "hitLevel": "h,h,h,l,m",
    "damage": "8,10,15,5,5",
    "startupFrame": ",i23~24",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4,4,1,2",
    "hitLevel": "h,h,h,l,m,h",
    "damage": "8,10,15,5,5,8",
    "startupFrame": ",i22",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4,4,1,2,1",
    "hitLevel": "h,h,h,l,m,h,h",
    "damage": "8,10,15,5,5,8,8",
    "startupFrame": ",i18~19",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4,4,1,2,1,3",
    "hitLevel": "h,h,h,l,m,h,h,m",
    "damage": "8,10,15,5,5,8,8,5",
    "startupFrame": ",i22",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4,4,1,2,1,3,2",
    "hitLevel": "h,h,h,l,m,h,h,m,m",
    "damage": "8,10,15,5,5,8,8,5,4",
    "startupFrame": ",i14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4,4,1,2,1,3,2,1",
    "hitLevel": "h,h,h,l,m,h,h,m,m,m",
    "damage": "8,10,15,5,5,8,8,5,4,27",
    "startupFrame": ",22",
    "blockFrame": "",
    "hitFrame": "+11a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "2,2",
    "hitLevel": "h,h",
    "damage": "8,20",
    "startupFrame": ",i20",
    "blockFrame": -4,
    "hitFrame": "+11g",
    "counterHitFrame": ""
  },
  {
    "input": "2,4",
    "hitLevel": "h,m",
    "damage": "8,13",
    "startupFrame": ",i21",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "3",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "3,2",
    "hitLevel": "h,h",
    "damage": "9,10",
    "startupFrame": ",i22",
    "blockFrame": -4,
    "hitFrame": "+58a",
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i13",
    "blockFrame": -8,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "4,3",
    "hitLevel": "h,m",
    "damage": "14,20",
    "startupFrame": ",i29~30",
    "blockFrame": -14,
    "hitFrame": "+27a",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i31",
    "blockFrame": -9,
    "hitFrame": "+17g",
    "counterHitFrame": ""
  },
  {
    "input": "1+2*",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i42~64",
    "blockFrame": -5,
    "hitFrame": "+32a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "1+2**",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i65",
    "blockFrame": 7,
    "hitFrame": "+55a",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "m,m",
    "damage": "6,20",
    "startupFrame": "i20~21, i18",
    "blockFrame": 0,
    "hitFrame": "+23g",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,4",
    "hitLevel": "h,h",
    "damage": "10,23",
    "startupFrame": ",i18",
    "blockFrame": -13,
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i17~18",
    "blockFrame": -11,
    "hitFrame": -4,
    "counterHitFrame": 6
  },
  {
    "input": "f+3,4",
    "hitLevel": "m,h",
    "damage": "12,21",
    "startupFrame": ",i21~23",
    "blockFrame": 1,
    "hitFrame": 10,
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 8,
    "startupFrame": "i17",
    "blockFrame": -4,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "f+4,3",
    "hitLevel": "m,m",
    "damage": "8,10",
    "startupFrame": ",i13~14",
    "blockFrame": -10,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "f+4,3,1",
    "hitLevel": "m,m,m",
    "damage": "8,10,24",
    "startupFrame": ",i21~22",
    "blockFrame": -12,
    "hitFrame": "+17a",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,3,4",
    "hitLevel": "m,m,m",
    "damage": "8,10,23",
    "startupFrame": ",i27~28",
    "blockFrame": -10,
    "hitFrame": "+19a (+12)",
    "counterHitFrame": "+28a (+22)"
  },
  {
    "input": "f+1+2",
    "hitLevel": "h,m",
    "damage": "5,4",
    "startupFrame": "i14, i9~10",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2,3",
    "hitLevel": "h,m,m",
    "damage": "5,4,5",
    "startupFrame": ",i16",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2,3,1+2",
    "hitLevel": "h,m,m,m,m",
    "damage": "5,4,5,4,20",
    "startupFrame": ",i14,i22",
    "blockFrame": -15,
    "hitFrame": "+20d (+15)",
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
    "damage": 13,
    "startupFrame": "i13",
    "blockFrame": -5,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,h",
    "damage": "13,10",
    "startupFrame": ",i16~17",
    "blockFrame": -4,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,3",
    "hitLevel": "m,m",
    "damage": "13,17",
    "startupFrame": ",i23",
    "blockFrame": -13,
    "hitFrame": "+10a (+1)",
    "counterHitFrame": "+55a"
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": 0,
    "hitFrame": 11,
    "counterHitFrame": "+14 (+24g)"
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14~15",
    "blockFrame": -8,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,4",
    "hitLevel": "m,m",
    "damage": "15,20",
    "startupFrame": ",i22",
    "blockFrame": -12,
    "hitFrame": "+31a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -4,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,2",
    "hitLevel": "m,h",
    "damage": "12,20",
    "startupFrame": ",i26",
    "blockFrame": -8,
    "hitFrame": "+11d",
    "counterHitFrame": ""
  },
  {
    "input": "df+4~3",
    "hitLevel": "h",
    "damage": 24,
    "startupFrame": "i20~21",
    "blockFrame": 8,
    "hitFrame": "+57a",
    "counterHitFrame": ""
  },
  {
    "input": "df+4~4",
    "hitLevel": "h",
    "damage": 27,
    "startupFrame": "i12~13",
    "blockFrame": "+6c~+7c",
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i22~23",
    "blockFrame": -9,
    "hitFrame": "+12g",
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i19~20",
    "blockFrame": "-7c",
    "hitFrame": "+6c",
    "counterHitFrame": "+21d"
  },
  {
    "input": "d+2",
    "hitLevel": "L",
    "damage": 12,
    "startupFrame": "i18",
    "blockFrame": -14,
    "hitFrame": -4,
    "counterHitFrame": 12
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 9,
    "startupFrame": "i15",
    "blockFrame": -16,
    "hitFrame": -5,
    "counterHitFrame": 5
  },
  {
    "input": "d+3,1",
    "hitLevel": "l,h",
    "damage": "9,8",
    "startupFrame": ",i18",
    "blockFrame": -3,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,1,2",
    "hitLevel": "l,h,h",
    "damage": "9,8,20",
    "startupFrame": ",i17",
    "blockFrame": -6,
    "hitFrame": "+43d (-15)",
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
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i16~17",
    "blockFrame": -7,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i16~17",
    "blockFrame": -11,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 15,
    "startupFrame": "i22",
    "blockFrame": -13,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22",
    "blockFrame": -3,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4,P.1",
    "hitLevel": "m,h",
    "damage": "21,21",
    "startupFrame": ",i16",
    "blockFrame": "",
    "hitFrame": "+33a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i18",
    "blockFrame": 2,
    "hitFrame": "+48d (-10)",
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
    "input": "b+2",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,3",
    "hitLevel": "h,m",
    "damage": "14,14",
    "startupFrame": ",i22",
    "blockFrame": -10,
    "hitFrame": 6,
    "counterHitFrame": "+63a"
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i17~18",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,1",
    "hitLevel": "m,m",
    "damage": "16,10",
    "startupFrame": ",i23~24",
    "blockFrame": "-11~-10",
    "hitFrame": 5,
    "counterHitFrame": 14
  },
  {
    "input": "b+3,4",
    "hitLevel": "m,h",
    "damage": "16,16",
    "startupFrame": ",i20",
    "blockFrame": -11,
    "hitFrame": "+0s",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,4,1+2",
    "hitLevel": "m,h,m",
    "damage": "16,16,19",
    "startupFrame": ",i20",
    "blockFrame": -15,
    "hitFrame": "+21a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i16",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": "+31a"
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4",
    "hitLevel": "m!",
    "damage": 35,
    "startupFrame": "i60~61",
    "blockFrame": "",
    "hitFrame": "+9a",
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
    "input": "uf+1",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i23",
    "blockFrame": -6,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1,P",
    "hitLevel": "m,h",
    "damage": "18,20",
    "startupFrame": ",i16",
    "blockFrame": "",
    "hitFrame": "+11g",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "M",
    "damage": 28,
    "startupFrame": "i25~27",
    "blockFrame": -9,
    "hitFrame": "+41a (-17)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m,h",
    "damage": "10,16",
    "startupFrame": "i15~16,i13",
    "blockFrame": -5,
    "hitFrame": "+69a (+53)",
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
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i13",
    "blockFrame": 5,
    "hitFrame": "+15g",
    "counterHitFrame": 17
  },
  {
    "input": "f,F+3",
    "hitLevel": "M",
    "damage": 21,
    "startupFrame": "i19~20",
    "blockFrame": -14,
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4,3",
    "hitLevel": "m,m",
    "damage": "12,16",
    "startupFrame": ",i24~25",
    "blockFrame": -27,
    "hitFrame": "+17a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i15~16",
    "blockFrame": -13,
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i16",
    "blockFrame": -8,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "qcf+2,2",
    "hitLevel": "m,m",
    "damage": "14,17",
    "startupFrame": ",i20",
    "blockFrame": -14,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "qcf+2,2,1+2",
    "hitLevel": "m,m,m",
    "damage": "14,17,25",
    "startupFrame": ",i20~21",
    "blockFrame": -17,
    "hitFrame": "+18a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+4",
    "hitLevel": "h",
    "damage": 27,
    "startupFrame": "i17~19",
    "blockFrame": 1,
    "hitFrame": 10,
    "counterHitFrame": ""
  },
  {
    "input": "qcf+1+2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i16~17",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": 6
  },
  {
    "input": "qcf+1+2,2",
    "hitLevel": "m,m",
    "damage": "18,22",
    "startupFrame": ",i24~25",
    "blockFrame": -6,
    "hitFrame": "+24g",
    "counterHitFrame": "+59a"
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
    "input": "f,f,F+1",
    "hitLevel": "h",
    "damage": 24,
    "startupFrame": "i13~15",
    "blockFrame": 6,
    "hitFrame": "+24a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i23~25",
    "blockFrame": 6,
    "hitFrame": "+37d (-21)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13~14",
    "blockFrame": -3,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,h",
    "damage": "12,18",
    "startupFrame": ",i21~22",
    "blockFrame": 0,
    "hitFrame": 11,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,4",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": ",i21~22",
    "blockFrame": -13,
    "hitFrame": "+21a (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": "+29a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14~15",
    "blockFrame": -12,
    "hitFrame": "+32a (+24)",
    "counterHitFrame": "+71a (+55)"
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i11~12",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "ws4,2",
    "hitLevel": "m,h",
    "damage": "13,12",
    "startupFrame": ",i18",
    "blockFrame": 0,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "SS.2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i18",
    "blockFrame": "+0c",
    "hitFrame": "+5c",
    "counterHitFrame": "+21d"
  },
  {
    "input": "SS.4",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i16~17",
    "blockFrame": -6,
    "hitFrame": "+16g",
    "counterHitFrame": 14
  },
  {
    "input": "FC.df+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i12",
    "blockFrame": -14,
    "hitFrame": "+9a",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+3",
    "hitLevel": "L",
    "damage": 16,
    "startupFrame": "i20",
    "blockFrame": -26,
    "hitFrame": "+2c",
    "counterHitFrame": ""
  },
  {
    "input": "FC.d+1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "FC.d+2",
    "hitLevel": "sl",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "FC.d+3",
    "hitLevel": "L",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "FC.d+4",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i12",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "(airborne).f,F+4,3",
    "hitLevel": "m,m,th",
    "damage": "8,8,8",
    "startupFrame": "i18,i24~25",
    "blockFrame": "",
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "CAT.1",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i17",
    "blockFrame": -8,
    "hitFrame": "+18a (+9)",
    "counterHitFrame": "+38a (+30)"
  },
  {
    "input": "CAT.2",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i14~15",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "CAT.2,2",
    "hitLevel": "h,m",
    "damage": "12,18",
    "startupFrame": ",i26~27",
    "blockFrame": -10,
    "hitFrame": "+19a (+12)",
    "counterHitFrame": "+73a (+57)"
  },
  {
    "input": "CAT.2,3",
    "hitLevel": "h,m",
    "damage": "12,13",
    "startupFrame": ",i18~19",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "CAT.2,3,1",
    "hitLevel": "h,m,m",
    "damage": "12,13,22",
    "startupFrame": ",i18",
    "blockFrame": -10,
    "hitFrame": "+12a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "CAT.3",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i13~14",
    "blockFrame": -4,
    "hitFrame": "+11g",
    "counterHitFrame": ""
  },
  {
    "input": "CAT.4",
    "hitLevel": "L",
    "damage": 10,
    "startupFrame": "i19~20",
    "blockFrame": -6,
    "hitFrame": "+8c",
    "counterHitFrame": "+33a"
  },
  {
    "input": "CAT.4,3+4",
    "hitLevel": "L,M",
    "damage": "10,25",
    "startupFrame": ",i38~39",
    "blockFrame": -14,
    "hitFrame": "+5a",
    "counterHitFrame": ""
  },
  {
    "input": "CAT.1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i16",
    "blockFrame": -3,
    "hitFrame": "+27g",
    "counterHitFrame": "+37 (+29)"
  },
  {
    "input": "CAT.F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "CAT.b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "CAT.b,B",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "HAE.1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18~19",
    "blockFrame": -11,
    "hitFrame": "+80a (+60)",
    "counterHitFrame": ""
  },
  {
    "input": "HAE.2",
    "hitLevel": "m,m",
    "damage": "10,26",
    "startupFrame": "i13, i20~21",
    "blockFrame": 6,
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "HAE.1+2",
    "hitLevel": "h!",
    "damage": 35,
    "startupFrame": "i16",
    "blockFrame": "",
    "hitFrame": "+0a",
    "counterHitFrame": ""
  },
  {
    "input": "HRS.1",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i17",
    "blockFrame": 1,
    "hitFrame": "+16g",
    "counterHitFrame": ""
  },
  {
    "input": "HRS.2",
    "hitLevel": "m,t",
    "damage": "18,10",
    "startupFrame": "i16",
    "blockFrame": -10,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "HRS.3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22~24",
    "blockFrame": -4,
    "hitFrame": "+34a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "HRS.4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i28",
    "blockFrame": 8,
    "hitFrame": "+22d",
    "counterHitFrame": "+44a"
  },
  {
    "input": "HRS.1+2",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i20~21",
    "blockFrame": -18,
    "hitFrame": "-1c",
    "counterHitFrame": "+67a (+51)"
  },
  {
    "input": "HRS.F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "HRS.b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "HRS.b,B",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+1+2",
    "hitLevel": "L",
    "damage": 24,
    "startupFrame": "i18~19",
    "blockFrame": -13,
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "P.HAE",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "P.b+1+3",
    "hitLevel": "h,h,h",
    "damage": "5,5,20",
    "startupFrame": "i16, i16, i16",
    "blockFrame": "",
    "hitFrame": "+23a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "WLF.1",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i22~36",
    "blockFrame": 2,
    "hitFrame": "+30a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "WLF.1*",
    "hitLevel": "m",
    "damage": 36,
    "startupFrame": "i36",
    "blockFrame": 7,
    "hitFrame": "+57a",
    "counterHitFrame": ""
  },
  {
    "input": "WLF.2",
    "hitLevel": "M",
    "damage": 21,
    "startupFrame": "i15~16",
    "blockFrame": -7,
    "hitFrame": "+22a (+5)",
    "counterHitFrame": "+22a (+5)"
  },
  {
    "input": "WLF.3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i17",
    "blockFrame": -6,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "WLF.3,1",
    "hitLevel": "m,m",
    "damage": "10,21",
    "startupFrame": ",i26",
    "blockFrame": -6,
    "hitFrame": "+37a (+29)",
    "counterHitFrame": ""
  },
  {
    "input": "WLF.4",
    "hitLevel": "L,M",
    "damage": "10,20",
    "startupFrame": "i20,i23~25",
    "blockFrame": -16,
    "hitFrame": "-7a",
    "counterHitFrame": ""
  },
  {
    "input": "WLF.b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "WLF.b,B",
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
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": 4,
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
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "CH.db+3",
    "hitLevel": "t",
    "damage": 41,
    "startupFrame": "i16~17",
    "blockFrame": "",
    "hitFrame": "-10d",
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": 4,
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
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  }
]

const lidiaFrameData = rawLidiaFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default lidiaFrameData;