const rawPaulFrameData = [
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
    "damage": 35,
    "startupFrame": "i28",
    "blockFrame": -9,
    "hitFrame": "+30d (-6) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "H.1+2*",
    "hitLevel": "m",
    "damage": 40,
    "startupFrame": "i46",
    "blockFrame": 10,
    "hitFrame": "+30d (-6) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "H.1+2**",
    "hitLevel": "m!",
    "damage": 50,
    "startupFrame": "i71",
    "blockFrame": "",
    "hitFrame": "+30d (-6) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "H.qcf+2",
    "hitLevel": "m",
    "damage": 51,
    "startupFrame": "i13~14",
    "blockFrame": -13,
    "hitFrame": "+26a (-10) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "H.f+1+2*",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i29~30",
    "blockFrame": "+5c",
    "hitFrame": "+55a",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "L,m,t",
    "damage": "9,23,25",
    "startupFrame": "i18,i21,i38",
    "blockFrame": -12,
    "hitFrame": "+3d",
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
    "damage": "5,12",
    "startupFrame": ",i10",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,h,m",
    "damage": "5,12,7",
    "startupFrame": ",i16~17",
    "blockFrame": -25,
    "hitFrame": -14,
    "counterHitFrame": ""
  },
  {
    "input": "1,4",
    "hitLevel": "h,L",
    "damage": "5,8",
    "startupFrame": ",i23",
    "blockFrame": "-11c",
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "2,3",
    "hitLevel": "h,h",
    "damage": "10,21",
    "startupFrame": ",i22~23",
    "blockFrame": -9,
    "hitFrame": "+22d (+13)",
    "counterHitFrame": "+51a"
  },
  {
    "input": "2,d+3",
    "hitLevel": "h,L",
    "damage": "10,11",
    "startupFrame": ",i22",
    "blockFrame": "-12c",
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15~16",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "3,2",
    "hitLevel": "m,h",
    "damage": "14,17",
    "startupFrame": ",i23",
    "blockFrame": -3,
    "hitFrame": 7,
    "counterHitFrame": "+50a"
  },
  {
    "input": "3,2~b",
    "hitLevel": "m,h",
    "damage": "14,17",
    "startupFrame": "",
    "blockFrame": 4,
    "hitFrame": "+14g",
    "counterHitFrame": "+57a"
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i12",
    "blockFrame": -7,
    "hitFrame": 7,
    "counterHitFrame": "+32d"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i28",
    "blockFrame": -13,
    "hitFrame": "+20d (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "1+2*",
    "hitLevel": "m",
    "damage": 35,
    "startupFrame": "i46",
    "blockFrame": 0,
    "hitFrame": "+20d (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "1+2**",
    "hitLevel": "m!",
    "damage": 40,
    "startupFrame": "i71",
    "blockFrame": "",
    "hitFrame": "+20d (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h,t",
    "damage": "12,26",
    "startupFrame": "i13",
    "blockFrame": -5,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "h",
    "damage": 11,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,1",
    "hitLevel": "h,m",
    "damage": "11,21",
    "startupFrame": ",i17",
    "blockFrame": -10,
    "hitFrame": "+12d (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i22",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i20~21",
    "blockFrame": "+3c",
    "hitFrame": "+8c",
    "counterHitFrame": "+35d (+27)"
  },
  {
    "input": "f+1+2*",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i29~30",
    "blockFrame": "+5c",
    "hitFrame": "+20d FDFA",
    "counterHitFrame": "+55a"
  },
  {
    "input": "f+1+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i21~23",
    "blockFrame": -14,
    "hitFrame": "+41d (-17)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i14",
    "blockFrame": -2,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,1",
    "hitLevel": "m,h",
    "damage": "11,9",
    "startupFrame": ",i20~21",
    "blockFrame": -5,
    "hitFrame": 5,
    "counterHitFrame": 8
  },
  {
    "input": "df+1,1,2",
    "hitLevel": "m,h,m",
    "damage": "11,9,22",
    "startupFrame": ",i22~23",
    "blockFrame": -9,
    "hitFrame": "+32a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1~b",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "",
    "blockFrame": 3,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15~16",
    "blockFrame": -8,
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,4",
    "hitLevel": "m,m",
    "damage": "14,17",
    "startupFrame": ",i21~22",
    "blockFrame": -10,
    "hitFrame": 6,
    "counterHitFrame": "+59a"
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i17~18",
    "blockFrame": -2,
    "hitFrame": 8,
    "counterHitFrame": 14
  },
  {
    "input": "d+1",
    "hitLevel": "M",
    "damage": 16,
    "startupFrame": "i14~15",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": "+3c"
  },
  {
    "input": "d+1,2",
    "hitLevel": "M,m",
    "damage": "16,26",
    "startupFrame": ",i29",
    "blockFrame": -17,
    "hitFrame": "+20d (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "d+1,2*",
    "hitLevel": "M",
    "damage": "16,39",
    "startupFrame": ",i43",
    "blockFrame": 9,
    "hitFrame": "+20d (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "d+1,4",
    "hitLevel": "M,L",
    "damage": "16,15",
    "startupFrame": ",i19",
    "blockFrame": "-31c",
    "hitFrame": -17,
    "counterHitFrame": "+14a FUFA"
  },
  {
    "input": "d+1,4,2",
    "hitLevel": "M,L,m",
    "damage": "16,15,21",
    "startupFrame": ",i21",
    "blockFrame": -14,
    "hitFrame": "+3d (-6)",
    "counterHitFrame": "+35a (-12)"
  },
  {
    "input": "d+1,H.2",
    "hitLevel": "M,m",
    "damage": "16,32",
    "startupFrame": ",i29",
    "blockFrame": -13,
    "hitFrame": "+29d (-7) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "d+1,H.2*",
    "hitLevel": "M,m",
    "damage": "16,45",
    "startupFrame": ",i43",
    "blockFrame": "[[Paul combos#Mini-combos|+12]]",
    "hitFrame": "+30d (-6) FDFA",
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
    "input": "d+4",
    "hitLevel": "L",
    "damage": 9,
    "startupFrame": "i15",
    "blockFrame": "-31c",
    "hitFrame": "+14a FUFA",
    "counterHitFrame": "+14a"
  },
  {
    "input": "d+4,2",
    "hitLevel": "L,m",
    "damage": "9,23",
    "startupFrame": ",i21",
    "blockFrame": -18,
    "hitFrame": -9,
    "counterHitFrame": ""
  },
  {
    "input": "d+4,2,1+2",
    "hitLevel": "L,m,m",
    "damage": "9,23,26",
    "startupFrame": ",i26~27",
    "blockFrame": -17,
    "hitFrame": "+3d (-6)",
    "counterHitFrame": "+35a (-12)"
  },
  {
    "input": "d+4,2:1+2",
    "hitLevel": "L,m,m",
    "damage": "9,23,30",
    "startupFrame": ",i26~27",
    "blockFrame": -17,
    "hitFrame": "+3d (-6)",
    "counterHitFrame": "+35a (-12)"
  },
  {
    "input": "d+1+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i12~13",
    "blockFrame": -16,
    "hitFrame": "+16d (+11)",
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
    "hitLevel": "M",
    "damage": 21,
    "startupFrame": "i19~20",
    "blockFrame": -11,
    "hitFrame": "+14d (-3) FDFA",
    "counterHitFrame": "+28a (+18)"
  },
  {
    "input": "db+3",
    "hitLevel": "L",
    "damage": 12,
    "startupFrame": "i15~i17",
    "blockFrame": "-18c",
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "L",
    "damage": 6,
    "startupFrame": "i12",
    "blockFrame": "-15c",
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "M",
    "damage": 21,
    "startupFrame": "i20~21",
    "blockFrame": -14,
    "hitFrame": "+30a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i12~13",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,2",
    "hitLevel": "h,M",
    "damage": "12,21",
    "startupFrame": ",i20~21",
    "blockFrame": -14,
    "hitFrame": "+16d (-1) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3",
    "hitLevel": "",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d FUFA",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i18",
    "blockFrame": "-5c",
    "hitFrame": "+4c",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "m,m",
    "damage": "22,22",
    "startupFrame": ",i36",
    "blockFrame": -12,
    "hitFrame": "0c",
    "counterHitFrame": "+48a"
  },
  {
    "input": "b+2,1*",
    "hitLevel": "m,m",
    "damage": "22,35",
    "startupFrame": ",i60~61",
    "blockFrame": 8,
    "hitFrame": "+20d",
    "counterHitFrame": "+56a"
  },
  {
    "input": "b+2,H.1*",
    "hitLevel": "m,m",
    "damage": "22,35",
    "startupFrame": ",i60~61",
    "blockFrame": "[[Paul combos#Mini-combos|+12]]",
    "hitFrame": "+56a",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i14~15",
    "blockFrame": -6,
    "hitFrame": "+31a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i20~21",
    "blockFrame": "-12c",
    "hitFrame": 4,
    "counterHitFrame": "+17g"
  },
  {
    "input": "b+1+2",
    "hitLevel": "h",
    "damage": 28,
    "startupFrame": "i24",
    "blockFrame": -9,
    "hitFrame": "+21d (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i18",
    "blockFrame": -5,
    "hitFrame": "+14d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "h",
    "damage": 26,
    "startupFrame": "i22~23",
    "blockFrame": 5,
    "hitFrame": "+17d FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": -16,
    "hitFrame": "+25a (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3,4",
    "hitLevel": "m,m",
    "damage": "15,10",
    "startupFrame": ",i13~14",
    "blockFrame": -13,
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15~17",
    "blockFrame": -13,
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
    "input": "b,n,f+1",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i28~31",
    "blockFrame": -6,
    "hitFrame": "+34a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "d,db,b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "d,df",
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
    "damage": 14,
    "startupFrame": "i15~17",
    "blockFrame": -17,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,1",
    "hitLevel": "m,m",
    "damage": "14,20",
    "startupFrame": ",i26",
    "blockFrame": -12,
    "hitFrame": "+14d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,2",
    "hitLevel": "m,L",
    "damage": "14,21",
    "startupFrame": ",i36~38",
    "blockFrame": "-19c",
    "hitFrame": "+27a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2:1",
    "hitLevel": "m,h",
    "damage": "14,24",
    "startupFrame": ",i15",
    "blockFrame": -4,
    "hitFrame": "+37d (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15~16",
    "blockFrame": -17,
    "hitFrame": "+24a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3,4",
    "hitLevel": "m,m",
    "damage": "17,10",
    "startupFrame": ",i13~14",
    "blockFrame": -16,
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3,4,4",
    "hitLevel": "m,m,h",
    "damage": "17,10,25",
    "startupFrame": ",i23~25",
    "blockFrame": -5,
    "hitFrame": "+62a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3,4,d+4",
    "hitLevel": "m,m,L",
    "damage": "17,10,15",
    "startupFrame": ",i27~28",
    "blockFrame": "-17c",
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3,4,f+4",
    "hitLevel": "m,m,m",
    "damage": "17,10,18",
    "startupFrame": ",i27~29",
    "blockFrame": -14,
    "hitFrame": "+12d (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i27~34",
    "blockFrame": 2,
    "hitFrame": "+18a",
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
    "input": "f,f,F+2",
    "hitLevel": "m,t",
    "damage": "21,34",
    "startupFrame": "i18~19",
    "blockFrame": -9,
    "hitFrame": "+0d FDFA",
    "counterHitFrame": "+35a"
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i15~16",
    "blockFrame": -10,
    "hitFrame": -7,
    "counterHitFrame": 1
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,m",
    "damage": "16,17",
    "startupFrame": ",i20",
    "blockFrame": -11,
    "hitFrame": 2,
    "counterHitFrame": 3
  },
  {
    "input": "ws1,2~b",
    "hitLevel": "m,m",
    "damage": "16,17",
    "startupFrame": "",
    "blockFrame": 1,
    "hitFrame": "+14g",
    "counterHitFrame": 15
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -14,
    "hitFrame": "+27a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "M",
    "damage": 16,
    "startupFrame": "i13~14",
    "blockFrame": -8,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,2",
    "hitLevel": "M,h",
    "damage": "16,21",
    "startupFrame": ",i21~22",
    "blockFrame": -9,
    "hitFrame": "+17d (+8)",
    "counterHitFrame": "+46a"
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i11~12",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "SS.1",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i20",
    "blockFrame": 8,
    "hitFrame": "+35a (+27)",
    "counterHitFrame": ""
  },
  {
    "input": "SS.3",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i19",
    "blockFrame": "-12c",
    "hitFrame": 4,
    "counterHitFrame": "+12c"
  },
  {
    "input": "FC.D",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FC.D,U+4",
    "hitLevel": "m",
    "damage": 40,
    "startupFrame": "i13~18",
    "blockFrame": "-49d",
    "hitFrame": "-9d (-24)",
    "counterHitFrame": ""
  },
  {
    "input": "CD.df",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+1",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i16~17",
    "blockFrame": -4,
    "hitFrame": "+33a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+2",
    "hitLevel": "m",
    "damage": 45,
    "startupFrame": "i13~14",
    "blockFrame": -17,
    "hitFrame": "+26a (-10) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+3",
    "hitLevel": "L",
    "damage": 18,
    "startupFrame": "i18~19",
    "blockFrame": "-14c",
    "hitFrame": 0,
    "counterHitFrame": "+20a"
  },
  {
    "input": "qcf+1+2",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i32~33",
    "blockFrame": "-12c",
    "hitFrame": "+71a (+55)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+3+4",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i19~20",
    "blockFrame": -9,
    "hitFrame": "+35a (+27)",
    "counterHitFrame": "+74a (+58)"
  },
  {
    "input": "DPD.df+2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i14",
    "blockFrame": -10,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "DPD.df+2,1",
    "hitLevel": "m,h",
    "damage": "10,20",
    "startupFrame": ",i18~19",
    "blockFrame": -5,
    "hitFrame": "+23d",
    "counterHitFrame": ""
  },
  {
    "input": "DPD.df+2,3",
    "hitLevel": "m,M",
    "damage": "10,22",
    "startupFrame": ",i25~26",
    "blockFrame": "-13c",
    "hitFrame": "+10d FDFA",
    "counterHitFrame": "+46a"
  },
  {
    "input": "DPD.df+4",
    "hitLevel": "L",
    "damage": 18,
    "startupFrame": "i17",
    "blockFrame": "-12c",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "DPD.df+3+4",
    "hitLevel": "m,M",
    "damage": "32,10",
    "startupFrame": "i18~23,i51~61",
    "blockFrame": "-49d",
    "hitFrame": "-9d (-24)",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+2",
    "hitLevel": "L",
    "damage": 16,
    "startupFrame": "i18",
    "blockFrame": "-12c",
    "hitFrame": "-1d (-9)",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+1",
    "hitLevel": "M",
    "damage": 24,
    "startupFrame": "i21~22",
    "blockFrame": "+0c",
    "hitFrame": "+21d FDFA",
    "counterHitFrame": "+53a"
  },
  {
    "input": "qcb+2",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": "+39d (-19)",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+3",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i18~19",
    "blockFrame": "-21c",
    "hitFrame": "-10g",
    "counterHitFrame": "+21a"
  },
  {
    "input": "qcb+3,2",
    "hitLevel": "L,m",
    "damage": "14,20",
    "startupFrame": ",i27~28",
    "blockFrame": -10,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "qcb+3,2,1",
    "hitLevel": "L,m,h",
    "damage": "14,20,25",
    "startupFrame": ",i18~19",
    "blockFrame": -5,
    "hitFrame": "+21d (-5)",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+3,2,3",
    "hitLevel": "L,m,M",
    "damage": "14,20,22",
    "startupFrame": ",i25~26",
    "blockFrame": "-13c",
    "hitFrame": "+10d FDFA",
    "counterHitFrame": "+46a"
  },
  {
    "input": "qcb+4",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": 1,
    "hitFrame": "+23d (+14)",
    "counterHitFrame": "+59a"
  },
  {
    "input": "qcb+1+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i16~17",
    "blockFrame": -14,
    "hitFrame": "+37a (+27)",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "+1d FUFA",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "+1d FUFA",
    "counterHitFrame": ""
  },
  {
    "input": "2+4~b",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw.1+3",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "-14d FUFA",
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw.2+4",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "+1d FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2",
    "hitLevel": "t",
    "damage": 0,
    "startupFrame": "i26",
    "blockFrame": "",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2,2,1,2,1",
    "hitLevel": "t",
    "damage": 30,
    "startupFrame": ",i26",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2,2,d+1,1,1+2",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": ",i26",
    "blockFrame": "",
    "hitFrame": "+0d FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2,1+2,1+2",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": ",i26",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "+1d FUFA",
    "counterHitFrame": ""
  },
  {
    "input": "Right Throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "-2d FUFA",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i11",
    "blockFrame": "",
    "hitFrame": "+6d FUFA",
    "counterHitFrame": ""
  },
  {
    "input": "df+1+3",
    "hitLevel": "t",
    "damage": 22,
    "startupFrame": "i12~13",
    "blockFrame": "",
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "df+1+3,H.qcf+2",
    "hitLevel": "t,m",
    "damage": "22,21",
    "startupFrame": ",i13~14",
    "blockFrame": "",
    "hitFrame": "+16d (-20) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "df+1+3,qcf+2",
    "hitLevel": "t,m",
    "damage": "22,15",
    "startupFrame": ",i13~14",
    "blockFrame": "",
    "hitFrame": "+16d (-20) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "df+1+3:H.qcf+2",
    "hitLevel": "t,m",
    "damage": "22,26",
    "startupFrame": ",i13~14",
    "blockFrame": "",
    "hitFrame": "+16d (-20) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "df+1+3:qcf+2",
    "hitLevel": "t,m",
    "damage": "22,20",
    "startupFrame": ",i13~14",
    "blockFrame": "",
    "hitFrame": "+16d (-20) FDFA",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "t",
    "damage": 38,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+20d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  }
]

const paulFrameData = rawPaulFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default paulFrameData;