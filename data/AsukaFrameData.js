const rawAsukaFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": 37,
    "startupFrame": "i16",
    "blockFrame": 1,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,th",
    "damage": "12,3",
    "startupFrame": "i16",
    "blockFrame": 10,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m,th",
    "damage": "10,49",
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": 1,
    "hitLevel": "h",
    "damage": 6,
    "startupFrame": "i10",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "1,1",
    "hitLevel": "h,m",
    "damage": "6,15",
    "startupFrame": "i24",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,3",
    "hitLevel": "h,m,m",
    "damage": "6,15,17",
    "startupFrame": "i21~22",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": "+14c"
  },
  {
    "input": "1,2",
    "hitLevel": "h,m",
    "damage": "6,9",
    "startupFrame": "i22~23",
    "blockFrame": -8,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,m,m",
    "damage": "6,9,24",
    "startupFrame": "i31~33",
    "blockFrame": -2,
    "hitFrame": "+29a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,m,m",
    "damage": "6,9,20",
    "startupFrame": "i18~19",
    "blockFrame": -12,
    "hitFrame": "+12a",
    "counterHitFrame": ""
  },
  {
    "input": "1,3",
    "hitLevel": "h,l",
    "damage": "6,10",
    "startupFrame": "i21",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i12",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,h",
    "damage": "9,10",
    "startupFrame": "i18~19",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,2",
    "hitLevel": "h,h,m",
    "damage": "9,10,16",
    "startupFrame": "i26~27",
    "blockFrame": -10,
    "hitFrame": "+16a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,d+1+2",
    "hitLevel": "h,h,m",
    "damage": "9,10,23",
    "startupFrame": "i28~30",
    "blockFrame": -9,
    "hitFrame": "+3c",
    "counterHitFrame": "+38a"
  },
  {
    "input": "2,3",
    "hitLevel": "h,m",
    "damage": "9,16",
    "startupFrame": "i22~23",
    "blockFrame": -19,
    "hitFrame": "+14gc",
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "3,1",
    "hitLevel": "m,m",
    "damage": "17,17",
    "startupFrame": "i18~19",
    "blockFrame": -11,
    "hitFrame": 8,
    "counterHitFrame": "+35a (+27)"
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i11",
    "blockFrame": -7,
    "hitFrame": 7,
    "counterHitFrame": "+32a"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": "+27a",
    "counterHitFrame": ""
  },
  {
    "input": "1+4",
    "hitLevel": "sl,h",
    "damage": "5,8",
    "startupFrame": "i14,i17",
    "blockFrame": -19,
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "1+4,2",
    "hitLevel": "sl,h,h",
    "damage": "5,8,10",
    "startupFrame": "i19",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "1+4,2,4",
    "hitLevel": "sl,h,h,m",
    "damage": "5,8,10,26",
    "startupFrame": "i24",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": "+17a (+8)"
  },
  {
    "input": "1+4,2,d+4",
    "hitLevel": "sl,h,h,l",
    "damage": "5,8,10,15",
    "startupFrame": "i24~25",
    "blockFrame": -23,
    "hitFrame": "+27d",
    "counterHitFrame": ""
  },
  {
    "input": "1+4,3",
    "hitLevel": "sl,h,m",
    "damage": "5,8,25",
    "startupFrame": "i31~33",
    "blockFrame": -2,
    "hitFrame": "+29a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "mm",
    "damage": "10,21",
    "startupFrame": "i23",
    "blockFrame": -6,
    "hitFrame": "+25d",
    "counterHitFrame": ""
  },
  {
    "input": "f+1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i20",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "f+1,3",
    "hitLevel": "m,m",
    "damage": "17,17",
    "startupFrame": ",i21~22",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "f+1,4",
    "hitLevel": "m,l",
    "damage": "17,26",
    "startupFrame": "i25~27",
    "blockFrame": -26,
    "hitFrame": 24,
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17",
    "blockFrame": -18,
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i31~i33",
    "blockFrame": "-2~+0",
    "hitFrame": "+29a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3*",
    "hitLevel": "ub(m)",
    "damage": 28,
    "startupFrame": "i70",
    "blockFrame": "+28a (+19)",
    "hitFrame": "+28a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3*n",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i52~i53",
    "blockFrame": "+6~+7",
    "hitFrame": "+28a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i19",
    "blockFrame": 3,
    "hitFrame": 28,
    "counterHitFrame": "+28d"
  },
  {
    "input": "f+1+2",
    "hitLevel": "h",
    "damage": 26,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": "+19a (+9)/HE",
    "counterHitFrame": ""
  },
  {
    "input": "f+2+3",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i23",
    "blockFrame": 0,
    "hitFrame": "+25d",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i29~30",
    "blockFrame": -1,
    "hitFrame": "-2(-11)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,h(,th)",
    "damage": "10,13(,25)",
    "startupFrame": "",
    "blockFrame": -1,
    "hitFrame": "Th",
    "counterHitFrame": "Th"
  },
  {
    "input": "df+1,4",
    "hitLevel": "m,m",
    "damage": "10,22",
    "startupFrame": "",
    "blockFrame": -12,
    "hitFrame": "+22a (+17)",
    "counterHitFrame": "+59a"
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15",
    "blockFrame": -6,
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": -8,
    "hitFrame": "+12d",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "l",
    "damage": 22,
    "startupFrame": "i28",
    "blockFrame": -26,
    "hitFrame": "+70a (+54)",
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i18",
    "blockFrame": "-4c",
    "hitFrame": "+9c",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i20",
    "blockFrame": -18,
    "hitFrame": "+11d",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "l,h",
    "damage": "5,20",
    "startupFrame": "i14",
    "blockFrame": -25,
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14",
    "blockFrame": -10,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,2",
    "hitLevel": "m,h",
    "damage": "13,20",
    "startupFrame": "i26~27",
    "blockFrame": -9,
    "hitFrame": "+22a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1,4",
    "hitLevel": "m,m",
    "damage": "13,25",
    "startupFrame": "i28~29",
    "blockFrame": -15,
    "hitFrame": "+16a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i20",
    "blockFrame": -11,
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": "+4c",
    "counterHitFrame": "+14g"
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i21",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": 3
  },
  {
    "input": "db+4,4",
    "hitLevel": "l,l",
    "damage": "14,15",
    "startupFrame": "i31~33",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": "+35d"
  },
  {
    "input": "db+4,4,4",
    "hitLevel": "l,l,l",
    "damage": "14,15,16",
    "startupFrame": "i31~33",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": "+35d"
  },
  {
    "input": "db+1+2",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "i42,i3",
    "blockFrame": 10,
    "hitFrame": "+18a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "l(,th)",
    "damage": "17(,22)",
    "startupFrame": "i29",
    "blockFrame": -10,
    "hitFrame": 6,
    "counterHitFrame": "Th"
  },
  {
    "input": "b+1+3",
    "hitLevel": "",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3*",
    "hitLevel": "",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": "-4c",
    "hitFrame": "+1c",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "m,m",
    "damage": "12,14",
    "startupFrame": "",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,4",
    "hitLevel": "m,l",
    "damage": "12,14",
    "startupFrame": "",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": 3
  },
  {
    "input": "b+2,1+2",
    "hitLevel": "m,h",
    "damage": "12,7",
    "startupFrame": "i36",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1+2,4",
    "hitLevel": "m,h,m",
    "damage": "12,7,20",
    "startupFrame": "",
    "blockFrame": -13,
    "hitFrame": "+18a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": -19,
    "hitFrame": "+22a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,2",
    "hitLevel": "m,m",
    "damage": "15,20",
    "startupFrame": "",
    "blockFrame": -20,
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,4",
    "hitLevel": "m,l",
    "damage": "15,14",
    "startupFrame": "",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": 3
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": -7,
    "hitFrame": 8,
    "counterHitFrame": "+56a"
  },
  {
    "input": "b+4,2",
    "hitLevel": "m,m",
    "damage": "17,12",
    "startupFrame": "",
    "blockFrame": -12,
    "hitFrame": "+4c",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,2,3",
    "hitLevel": "m,m,m",
    "damage": "17,12,21",
    "startupFrame": "",
    "blockFrame": -16,
    "hitFrame": "+15a (-2)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4",
    "hitLevel": "h,l",
    "damage": "15,8",
    "startupFrame": "i12",
    "blockFrame": -8,
    "hitFrame": 5,
    "counterHitFrame": 7
  },
  {
    "input": "b+1+4,3",
    "hitLevel": "h,l,l",
    "damage": "15,8,18",
    "startupFrame": "",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": "+16d"
  },
  {
    "input": "b+1+4,4",
    "hitLevel": "h,l,m",
    "damage": "15,8,23",
    "startupFrame": "",
    "blockFrame": -14,
    "hitFrame": "+5b",
    "counterHitFrame": "+5b"
  },
  {
    "input": "b+2+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i24",
    "blockFrame": -9,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "u+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i31~i32",
    "blockFrame": "-13~-12",
    "hitFrame": "+19d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "h(,th)",
    "damage": "20(,25)",
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": "Th",
    "counterHitFrame": "Th"
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i20~21",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": "+33a"
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+31a (+21)",
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
    "input": "1+2+3+4,1+2",
    "hitLevel": ",t(m)",
    "damage": ",5,5",
    "startupFrame": "i61",
    "blockFrame": -6,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "1+2+3+4,1+2,1,2,1,2",
    "hitLevel": ",t(m)",
    "damage": ",5,5,5,5,5,10",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "(During Leg Cutter),3",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i17",
    "blockFrame": -3,
    "hitFrame": "+39a (+29)",
    "counterHitFrame": ""
  },
  {
    "input": "(During Leg Cutter),1+4",
    "hitLevel": "sl,h",
    "damage": "5,8",
    "startupFrame": "i22,i17",
    "blockFrame": -19,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i23",
    "blockFrame": 5,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,1",
    "hitLevel": "m,h",
    "damage": "16,21",
    "startupFrame": "",
    "blockFrame": -5,
    "hitFrame": "+45a (-13)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,3",
    "hitLevel": "m,m",
    "damage": "16,22",
    "startupFrame": "",
    "blockFrame": -8,
    "hitFrame": "+15d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,1+2",
    "hitLevel": "m,m,sp",
    "damage": "16,25",
    "startupFrame": "",
    "blockFrame": -13,
    "hitFrame": "+23a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": -9,
    "hitFrame": "+11g",
    "counterHitFrame": "+35a"
  },
  {
    "input": "f,F+4",
    "hitLevel": "h",
    "damage": 28,
    "startupFrame": "i20",
    "blockFrame": -3,
    "hitFrame": "+66a (+46)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i19",
    "blockFrame": -6,
    "hitFrame": "+29a (+14)",
    "counterHitFrame": "+68a (+52)"
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 32,
    "startupFrame": "i24~28",
    "blockFrame": "+3~+7",
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+1+2",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i17",
    "blockFrame": 4,
    "hitFrame": "+32a (+6)",
    "counterHitFrame": "+67a (+51)"
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,4",
    "hitLevel": "m,h",
    "damage": "12,20",
    "startupFrame": "",
    "blockFrame": -8,
    "hitFrame": "+37a (+29)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i13",
    "blockFrame": -8,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws2,1",
    "hitLevel": "mh",
    "damage": "18,10",
    "startupFrame": "",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "ws2,1+2",
    "hitLevel": "mh,th",
    "damage": "18,4",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "Th",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18",
    "blockFrame": -16,
    "hitFrame": "[[Asuka_combos#Staples+35a (+25)]]",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i11",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i21",
    "blockFrame": -2,
    "hitFrame": "+13g",
    "counterHitFrame": "+63a"
  },
  {
    "input": "SS.2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i13",
    "blockFrame": -13,
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "SS.4",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i17",
    "blockFrame": -6,
    "hitFrame": 7,
    "counterHitFrame": "+30a"
  },
  {
    "input": "FC.3+4",
    "hitLevel": "mm",
    "damage": "10,10",
    "startupFrame": "i21",
    "blockFrame": -6,
    "hitFrame": "+5c",
    "counterHitFrame": "+5c"
  },
  {
    "input": "FC.df+2",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": "+25g"
  },
  {
    "input": "FC.df+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17",
    "blockFrame": -9,
    "hitFrame": "+34a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "(Back to wall).b,b,UB",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i39",
    "blockFrame": "+4c",
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "NWG.f,F+1+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i19",
    "blockFrame": 2,
    "hitFrame": "+67a (+51)",
    "counterHitFrame": ""
  },
  {
    "input": "NWG.f,f,F+1+2",
    "hitLevel": "h",
    "damage": 36,
    "startupFrame": "i17",
    "blockFrame": "+11g",
    "hitFrame": "+66a (+50)",
    "counterHitFrame": ""
  },
  {
    "input": "NWG.u+1+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i31~i32",
    "blockFrame": "+8~+9",
    "hitFrame": "KDN",
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
    "blockFrame": -2,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
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
    "input": "FC.db+1+2",
    "hitLevel": "t(h)",
    "damage": "15,15,15",
    "startupFrame": "i11",
    "blockFrame": -6,
    "hitFrame": "+56a (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "-3d",
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
    "input": "df+2+3",
    "hitLevel": "t(h)",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+3",
    "hitLevel": "t(h)",
    "damage": 0,
    "startupFrame": "i19",
    "blockFrame": "",
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+3,2",
    "hitLevel": "t(h),m",
    "damage": "0,20",
    "startupFrame": "i19",
    "blockFrame": -3,
    "hitFrame": "+8a/HE",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+3,4",
    "hitLevel": "t(h),l",
    "damage": "0,19",
    "startupFrame": "i19",
    "blockFrame": -14,
    "hitFrame": "+11d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t(h)",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": "",
    "counterHitFrame": ""
  }
];

const asukaFrameData = rawAsukaFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default asukaFrameData;