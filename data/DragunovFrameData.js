const rawDragunovFrameData = [
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
    "hitLevel": "m,m,m",
    "damage": "25,14,23",
    "startupFrame": "i15~16,i30~32,i31~35",
    "blockFrame": 6,
    "hitFrame": "+2c",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3,db+1+2",
    "hitLevel": "m,m,m,t",
    "damage": "25,14,23,0",
    "startupFrame": ",i26",
    "blockFrame": "",
    "hitFrame": "-2d",
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
    "damage": "5,8",
    "startupFrame": ",i20",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,3",
    "hitLevel": "h,h,m",
    "damage": "5,8,22",
    "startupFrame": ",i25~26",
    "blockFrame": -9,
    "hitFrame": "+15a (+6)",
    "counterHitFrame": "+36a (+0)"
  },
  {
    "input": "1,2",
    "hitLevel": "h,m",
    "damage": "5,8",
    "startupFrame": ",i18",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1",
    "hitLevel": "h,m,m",
    "damage": "5,8,20",
    "startupFrame": ",i19~20",
    "blockFrame": -14,
    "hitFrame": "+15gc",
    "counterHitFrame": ""
  },
  {
    "input": "1,3",
    "hitLevel": "h,h",
    "damage": "5,14",
    "startupFrame": ",i16~17",
    "blockFrame": -7,
    "hitFrame": 1,
    "counterHitFrame": 9
  },
  {
    "input": "1,3,2",
    "hitLevel": "h,h,m",
    "damage": "5,14,20",
    "startupFrame": ",i22~23",
    "blockFrame": -13,
    "hitFrame": "+41a",
    "counterHitFrame": ""
  },
  {
    "input": "1,3,2~1+2",
    "hitLevel": "h,h,t",
    "damage": "5,14,40",
    "startupFrame": ",i29~32",
    "blockFrame": 5,
    "hitFrame": "-2d",
    "counterHitFrame": ""
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,h",
    "damage": "10,10",
    "startupFrame": ",i12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,3",
    "hitLevel": "h,h,h",
    "damage": "10,10,24",
    "startupFrame": ",i18~19",
    "blockFrame": -9,
    "hitFrame": "+40d (-18)",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4",
    "hitLevel": "h,h,L",
    "damage": "10,10,14",
    "startupFrame": ",i23",
    "blockFrame": -12,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i15~16",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "3,1",
    "hitLevel": "m,h",
    "damage": "10,8",
    "startupFrame": ",i21~22",
    "blockFrame": -2,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "3,1,2",
    "hitLevel": "m,h,m",
    "damage": "10,8,24",
    "startupFrame": ",i19~21",
    "blockFrame": -12,
    "hitFrame": "+12a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "3,1,4",
    "hitLevel": "m,h,h",
    "damage": "10,8,24",
    "startupFrame": ",i22~23",
    "blockFrame": -9,
    "hitFrame": "+42d (-16)",
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": -1,
    "counterHitFrame": 2
  },
  {
    "input": "4,1",
    "hitLevel": "h,h",
    "damage": "10,17",
    "startupFrame": ",i17~18",
    "blockFrame": -4,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "4,3",
    "hitLevel": "h,m",
    "damage": "10,18",
    "startupFrame": ",i23~24",
    "blockFrame": -12,
    "hitFrame": "+13c",
    "counterHitFrame": ""
  },
  {
    "input": "4,4",
    "hitLevel": "h,m",
    "damage": "10,23",
    "startupFrame": ",i25~36",
    "blockFrame": 5,
    "hitFrame": "+29a (+20)",
    "counterHitFrame": "+46a"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i21~22",
    "blockFrame": -14,
    "hitFrame": "+19a",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i25~26",
    "blockFrame": -13,
    "hitFrame": "+41a",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i19~20",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,4",
    "hitLevel": "h,m",
    "damage": "16,24",
    "startupFrame": "i19~20",
    "blockFrame": -7,
    "hitFrame": "+28a (+23)",
    "counterHitFrame": "+31a (+25)"
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i20",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,3",
    "hitLevel": "m,m",
    "damage": "11,14",
    "startupFrame": ",i17~20",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,1+2",
    "hitLevel": "m,m",
    "damage": "11,27",
    "startupFrame": ",i30~31",
    "blockFrame": -3,
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i14~15",
    "blockFrame": -7,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "f+4,3",
    "hitLevel": "h,h",
    "damage": "16,22",
    "startupFrame": "i30~32",
    "blockFrame": -9,
    "hitFrame": "+20a",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,4",
    "hitLevel": "h,h",
    "damage": "16,11",
    "startupFrame": "i20~21",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": "+22a (+15)"
  },
  {
    "input": "f+4,4,3",
    "hitLevel": "h,h,h",
    "damage": "16,11,17",
    "startupFrame": "i22~23",
    "blockFrame": -5,
    "hitFrame": "+21a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,d+4",
    "hitLevel": "h,L",
    "damage": "16,12",
    "startupFrame": "i25",
    "blockFrame": -12,
    "hitFrame": "+3c",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "h",
    "damage": 27,
    "startupFrame": "i17~18",
    "blockFrame": -9,
    "hitFrame": "+35a",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i13",
    "blockFrame": -2,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,4",
    "hitLevel": "m,h",
    "damage": "13,23",
    "startupFrame": ",i22~23",
    "blockFrame": -6,
    "hitFrame": "+22a (+13)",
    "counterHitFrame": "+58a"
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i17~20",
    "blockFrame": -6,
    "hitFrame": "+5c",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+1+2",
    "hitLevel": "m",
    "damage": 55,
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "m",
    "damage": 19,
    "startupFrame": "i22~24",
    "blockFrame": -7,
    "hitFrame": "+12g",
    "counterHitFrame": "+24a"
  },
  {
    "input": "d+1",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i18~19",
    "blockFrame": "+1c",
    "hitFrame": "+8c",
    "counterHitFrame": "+13d"
  },
  {
    "input": "d+2",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i18~19",
    "blockFrame": -13,
    "hitFrame": "-1c",
    "counterHitFrame": "+13g"
  },
  {
    "input": "d+3",
    "hitLevel": "L",
    "damage": 13,
    "startupFrame": "i17~18",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": "+1c"
  },
  {
    "input": "d+3,2",
    "hitLevel": "L,h",
    "damage": "13,18",
    "startupFrame": ",i24~25",
    "blockFrame": -6,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,2,1+2",
    "hitLevel": "L,h,m",
    "damage": "13,18,24",
    "startupFrame": ",i35~36",
    "blockFrame": "-2c",
    "hitFrame": "+20a",
    "counterHitFrame": ""
  },
  {
    "input": "d+3,4",
    "hitLevel": "L,m",
    "damage": "13,18",
    "startupFrame": ",i28",
    "blockFrame": -11,
    "hitFrame": 5,
    "counterHitFrame": "+23g"
  },
  {
    "input": "d+4",
    "hitLevel": "L",
    "damage": 12,
    "startupFrame": "i15~16",
    "blockFrame": -15,
    "hitFrame": -9,
    "counterHitFrame": -4
  },
  {
    "input": "d+4,1",
    "hitLevel": "L,h",
    "damage": "12,8",
    "startupFrame": ",i14~15",
    "blockFrame": -11,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "d+4,1,3",
    "hitLevel": "L,h,h",
    "damage": "12,8,21",
    "startupFrame": ",i15~16",
    "blockFrame": -16,
    "hitFrame": "+9a (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "d+4,4",
    "hitLevel": "L,h",
    "damage": "12,23",
    "startupFrame": ",i22~23",
    "blockFrame": -14,
    "hitFrame": "+16a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+5d",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14~15",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "db+2,1",
    "hitLevel": "m,m",
    "damage": "12,10",
    "startupFrame": ",i20~21",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": 3
  },
  {
    "input": "db+2,1,2",
    "hitLevel": "m,m,m",
    "damage": "12,10,20",
    "startupFrame": ",i25",
    "blockFrame": -14,
    "hitFrame": "+29a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i27~29",
    "blockFrame": -26,
    "hitFrame": "-2c",
    "counterHitFrame": "+67a (+51)"
  },
  {
    "input": "db+3+4",
    "hitLevel": "L",
    "damage": 23,
    "startupFrame": "i20~21",
    "blockFrame": -31,
    "hitFrame": 3,
    "counterHitFrame": "+24a"
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i17",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,2",
    "hitLevel": "m,m",
    "damage": "14,18",
    "startupFrame": ",i25~26",
    "blockFrame": -12,
    "hitFrame": "+18gc",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3",
    "hitLevel": "",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "-5d",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "m,h",
    "damage": "14,11",
    "startupFrame": ",i17~19",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1,3",
    "hitLevel": "m,h,l",
    "damage": "14,11,17",
    "startupFrame": ",i29~31",
    "blockFrame": -26,
    "hitFrame": "-2c",
    "counterHitFrame": "+1d"
  },
  {
    "input": "b+3",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i14~15",
    "blockFrame": -9,
    "hitFrame": "+11g",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "b+4,2",
    "hitLevel": "m,m",
    "damage": "15,15",
    "startupFrame": ",i21",
    "blockFrame": -7,
    "hitFrame": "+4c",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,2,1",
    "hitLevel": "m,m,h",
    "damage": "15,15,17",
    "startupFrame": ",i23~24",
    "blockFrame": 1,
    "hitFrame": 5,
    "counterHitFrame": 14
  },
  {
    "input": "b+4,2,1+2",
    "hitLevel": "m,m,t",
    "damage": "15,15,17",
    "startupFrame": ",i40",
    "blockFrame": -5,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,3",
    "hitLevel": "m,h",
    "damage": "15,20",
    "startupFrame": ",i17~18",
    "blockFrame": -9,
    "hitFrame": "+21a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i22~23",
    "blockFrame": 6,
    "hitFrame": "+26d",
    "counterHitFrame": ""
  },
  {
    "input": "b+3+4",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i28~29",
    "blockFrame": -2,
    "hitFrame": "+26a",
    "counterHitFrame": ""
  },
  {
    "input": "ub+2",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i20",
    "blockFrame": -5,
    "hitFrame": 9,
    "counterHitFrame": "+53a"
  },
  {
    "input": "ub+3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i17~21",
    "blockFrame": -13,
    "hitFrame": "+14a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22~23",
    "blockFrame": -9,
    "hitFrame": "+17a",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "m!",
    "damage": 60,
    "startupFrame": "i63~64",
    "blockFrame": "",
    "hitFrame": "+26d (-32)",
    "counterHitFrame": ""
  },
  {
    "input": "u+3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i17~21",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "u+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22~23",
    "blockFrame": -9,
    "hitFrame": "+21a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": "+37d (+29)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "M",
    "damage": 20,
    "startupFrame": "i30-31",
    "blockFrame": -5,
    "hitFrame": "+42a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i17~21",
    "blockFrame": -7,
    "hitFrame": "+20a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22~23",
    "blockFrame": -9,
    "hitFrame": "+25a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": "+15a",
    "counterHitFrame": "+30d (+22)"
  },
  {
    "input": "f,F+3",
    "hitLevel": "h",
    "damage": 35,
    "startupFrame": "i21~23",
    "blockFrame": 5,
    "hitFrame": "+30a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "M",
    "damage": 21,
    "startupFrame": "i26~28",
    "blockFrame": -1,
    "hitFrame": 13,
    "counterHitFrame": ""
  },
  {
    "input": "qcb+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i26~27",
    "blockFrame": -15,
    "hitFrame": "+68a (+52)",
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
    "blockFrame": -13,
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i15~17",
    "blockFrame": 4,
    "hitFrame": "+32d (-26)",
    "counterHitFrame": "+44a"
  },
  {
    "input": "f,f,F+2,H.1+2",
    "hitLevel": "m,t",
    "damage": "22,0",
    "startupFrame": ",i40",
    "blockFrame": "",
    "hitFrame": "-2d",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+4",
    "hitLevel": "m,t",
    "damage": "20,25",
    "startupFrame": "i20~21",
    "blockFrame": -7,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i12~13",
    "blockFrame": -3,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,h",
    "damage": "11,14",
    "startupFrame": ",i22~23",
    "blockFrame": -7,
    "hitFrame": "+10g",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,3",
    "hitLevel": "m,m",
    "damage": "11,17",
    "startupFrame": ",i17~18",
    "blockFrame": -13,
    "hitFrame": "+15a (+6)",
    "counterHitFrame": "+36a (+0)"
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": "+15a (+6)",
    "counterHitFrame": "+36a (+0)"
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i11~12",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i12~13",
    "blockFrame": -14,
    "hitFrame": "+19a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "SS.2",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i20~21",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "SS.2,3",
    "hitLevel": "m,h,t",
    "damage": "16,20,20",
    "startupFrame": "i18",
    "blockFrame": -9,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "SS.2,1+2",
    "hitLevel": "m,m,m",
    "damage": "16,8,12",
    "startupFrame": ",i27~29,i8~9",
    "blockFrame": -4,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "SS.2,1+2,4",
    "hitLevel": "m,m,m,h",
    "damage": "16,8,12,28",
    "startupFrame": ",i26~27",
    "blockFrame": -10,
    "hitFrame": "+45a",
    "counterHitFrame": ""
  },
  {
    "input": "SS.3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+1",
    "hitLevel": "L",
    "damage": 8,
    "startupFrame": "i16~17",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+1,4",
    "hitLevel": "L,m",
    "damage": "8,10",
    "startupFrame": ",i16~17",
    "blockFrame": "",
    "hitFrame": 7,
    "counterHitFrame": 7
  },
  {
    "input": "FC.df+1,H.1+2",
    "hitLevel": "L,t",
    "damage": "8,0",
    "startupFrame": ",i40",
    "blockFrame": "",
    "hitFrame": "-2d",
    "counterHitFrame": ""
  },
  {
    "input": "(During enemy wall stun).f,f,F+4",
    "hitLevel": "m,t",
    "damage": "20,20,25,35",
    "startupFrame": "i20~21",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "(Face down).1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+3",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": "+10d",
    "counterHitFrame": ""
  },
  {
    "input": "FDFT.3",
    "hitLevel": "l,t",
    "damage": "8,30",
    "startupFrame": "i19",
    "blockFrame": -9,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+3+4",
    "hitLevel": "L",
    "damage": 24,
    "startupFrame": "i24",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "SNK.1",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -3,
    "hitFrame": "+51a",
    "counterHitFrame": ""
  },
  {
    "input": "SNK.2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i18~19",
    "blockFrame": -14,
    "hitFrame": "+36a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "SNK.3",
    "hitLevel": "L,t",
    "damage": "17,20",
    "startupFrame": "i17~18",
    "blockFrame": -16,
    "hitFrame": 0,
    "counterHitFrame": "+1d"
  },
  {
    "input": "SNK.4",
    "hitLevel": "M",
    "damage": 27,
    "startupFrame": "i19~21",
    "blockFrame": 7,
    "hitFrame": "+18a",
    "counterHitFrame": ""
  },
  {
    "input": "SNK.1+2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i12~13",
    "blockFrame": -14,
    "hitFrame": 19,
    "counterHitFrame": ""
  },
  {
    "input": "SNK.3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17~18",
    "blockFrame": -13,
    "hitFrame": "+27g",
    "counterHitFrame": ""
  },
  {
    "input": "WR.F+3",
    "hitLevel": "L,t",
    "damage": "20,20",
    "startupFrame": "i17~18",
    "blockFrame": -15,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -2,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -2,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "",
    "blockFrame": "",
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
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "Tackle.1",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Tackle.2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "Tackle.1+2",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "db+3~1+2",
    "hitLevel": "t",
    "damage": 30,
    "startupFrame": "i19~20",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+3",
    "hitLevel": "t",
    "damage": 30,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+4",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i11",
    "blockFrame": -2,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "f+2+3",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i11",
    "blockFrame": -2,
    "hitFrame": "-1d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "-5d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i38~42",
    "blockFrame": "",
    "hitFrame": "-12d",
    "counterHitFrame": ""
  }
]

const dragunovFrameData = rawDragunovFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default dragunovFrameData;