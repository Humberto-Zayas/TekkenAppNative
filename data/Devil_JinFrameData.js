const rawDevilJinFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": "[12;12]",
    "startupFrame": "i16",
    "blockFrame": 1,
    "hitFrame": "+2c",
    "counterHitFrame": ""
  },
  {
    "input": "H.MCR.2+3",
    "hitLevel": "ub(m)",
    "damage": "23,16",
    "startupFrame": "i20",
    "blockFrame": "Th",
    "hitFrame": "Th",
    "counterHitFrame": "Th"
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,h,th",
    "damage": "20,22,10",
    "startupFrame": "i18",
    "blockFrame": "+11 MCR",
    "hitFrame": "Th",
    "counterHitFrame": "Th"
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
    "damage": "5,6",
    "startupFrame": ",i15",
    "blockFrame": -1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,2",
    "hitLevel": "h,h,m",
    "damage": "5,6,14",
    "startupFrame": ",i13",
    "blockFrame": -17,
    "hitFrame": "+18a(+13)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,8",
    "startupFrame": ",i10",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,2",
    "hitLevel": "h,h,h",
    "damage": "5,8,12",
    "startupFrame": ",i17",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,h,m",
    "damage": "5,8,25",
    "startupFrame": ",i29~31",
    "blockFrame": 4,
    "hitFrame": "+24a",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3,4",
    "hitLevel": "h,h,m,m",
    "damage": "5,8,25,30",
    "startupFrame": ",i36~38",
    "blockFrame": 0,
    "hitFrame": "+12c",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,m",
    "damage": "5,8,10",
    "startupFrame": ",i11",
    "blockFrame": -10,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "2,2",
    "hitLevel": "h,h",
    "damage": "9,20",
    "startupFrame": ",i17",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i17~19",
    "blockFrame": -12,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "3,1",
    "hitLevel": "m,h",
    "damage": "16,11",
    "startupFrame": ",i29~30",
    "blockFrame": 2,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "3,1,2",
    "hitLevel": "m,h,m",
    "damage": "16,11,20",
    "startupFrame": ",i25~28",
    "blockFrame": -11,
    "hitFrame": "+72(+56)",
    "counterHitFrame": ""
  },
  {
    "input": "3,1,4",
    "hitLevel": "m,h,m",
    "damage": "16,11,20",
    "startupFrame": ",i23~24",
    "blockFrame": -9,
    "hitFrame": "+15(+6)",
    "counterHitFrame": "+59a"
  },
  {
    "input": "3,1,f,F",
    "hitLevel": "m,h",
    "damage": "16,11",
    "startupFrame": "",
    "blockFrame": -2,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 24,
    "startupFrame": "i17~18",
    "blockFrame": -5,
    "hitFrame": 10,
    "counterHitFrame": ""
  },
  {
    "input": "4~3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i29",
    "blockFrame": -7,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "4~3,H.1+2",
    "hitLevel": "m,sm",
    "damage": "21,15",
    "startupFrame": "i24~35",
    "blockFrame": 2,
    "hitFrame": "+58a(+42)",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m,m",
    "damage": "12,25",
    "startupFrame": "i17",
    "blockFrame": -12,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "1+4",
    "hitLevel": "sl,h",
    "damage": "5,5",
    "startupFrame": ",i16",
    "blockFrame": -3,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "1+4,2",
    "hitLevel": "sl,h,m",
    "damage": "5,5,20",
    "startupFrame": ",i24~25",
    "blockFrame": -12,
    "hitFrame": "+72(+56)",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i17~18",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,4",
    "hitLevel": "m,m",
    "damage": "14,17",
    "startupFrame": ",i15",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "i20",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "f+4,3",
    "hitLevel": "m,m",
    "damage": "10,14",
    "startupFrame": ",i26~27",
    "blockFrame": -22,
    "hitFrame": "+18(+8)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i13",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": 9
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,h",
    "damage": "11,20",
    "startupFrame": ",i17",
    "blockFrame": -9,
    "hitFrame": "+44d(-14)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 6,
    "counterHitFrame": 9
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2",
    "hitLevel": "m,m",
    "damage": "12,10",
    "startupFrame": ",i19",
    "blockFrame": -13,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2,4",
    "hitLevel": "m,m,m",
    "damage": "12,10,20",
    "startupFrame": ",i29",
    "blockFrame": -22,
    "hitFrame": "+18(+8)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13~14",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,4",
    "hitLevel": "m,m",
    "damage": "10,16",
    "startupFrame": ",i13~14",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i18~19",
    "blockFrame": -14,
    "hitFrame": "+20(+10)",
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "L",
    "damage": 12,
    "startupFrame": "i18~19",
    "blockFrame": "-12c",
    "hitFrame": -1,
    "counterHitFrame": "+7c"
  },
  {
    "input": "d+3+4",
    "hitLevel": "m,m",
    "damage": "5, 20",
    "startupFrame": "i15~16",
    "blockFrame": -15,
    "hitFrame": "+30(+20)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "L",
    "damage": 15,
    "startupFrame": "i21~22",
    "blockFrame": "-13c",
    "hitFrame": "+3c",
    "counterHitFrame": "+26d"
  },
  {
    "input": "db+1+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i23~25",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2*",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i26~60",
    "blockFrame": "+17g +24w",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2**",
    "hitLevel": "m",
    "damage": 42,
    "startupFrame": "i61~63 (Full Charge)",
    "blockFrame": "[[Devil Jin combos#Mini-combos|+10]]",
    "hitFrame": 37,
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,2",
    "hitLevel": "h,m",
    "damage": "10,10",
    "startupFrame": ",i23",
    "blockFrame": -14,
    "hitFrame": "+23a(+13)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 11,
    "startupFrame": "i14~16",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "h,m",
    "damage": "11,21",
    "startupFrame": ",i30",
    "blockFrame": -16,
    "hitFrame": "+29(+19)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,3",
    "hitLevel": "h,m",
    "damage": "11,23",
    "startupFrame": ",i25~127",
    "blockFrame": -14,
    "hitFrame": "+8(-1)/HE",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i29~32",
    "blockFrame": -18,
    "hitFrame": "+10/HE",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17~18",
    "blockFrame": -8,
    "hitFrame": 6,
    "counterHitFrame": "+30(+24)"
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i20~21",
    "blockFrame": "-1c",
    "hitFrame": "+7c",
    "counterHitFrame": "+24d"
  },
  {
    "input": "b+1+4",
    "hitLevel": "ub(m)",
    "damage": 60,
    "startupFrame": "i63",
    "blockFrame": "+20a (+10)",
    "hitFrame": "+20a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "i47",
    "blockFrame": "+4d (-54)",
    "hitFrame": "+4d (-54)",
    "counterHitFrame": ""
  },
  {
    "input": "u+4",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i20",
    "blockFrame": -25,
    "hitFrame": "+15(+5)",
    "counterHitFrame": ""
  },
  {
    "input": "u+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i21~23",
    "blockFrame": 11,
    "hitFrame": 16,
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i20~23",
    "blockFrame": -4,
    "hitFrame": "+25a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i28~29",
    "blockFrame": "+3c",
    "hitFrame": "+7c",
    "counterHitFrame": "+19a"
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": "+11/HE",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m,m",
    "damage": "8,20",
    "startupFrame": "i16",
    "blockFrame": -16,
    "hitFrame": "+33a(-25)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,H.1+2",
    "hitLevel": "m,m,sm",
    "damage": "8,20,20",
    "startupFrame": "i25~50",
    "blockFrame": -15,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "b,f+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15~17",
    "blockFrame": -9,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "b,f+2,1",
    "hitLevel": "m,m",
    "damage": "12,12",
    "startupFrame": ",i14~15",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "b,f+2,1,2",
    "hitLevel": "m,m,m",
    "damage": "12,12,24",
    "startupFrame": ",i22~23",
    "blockFrame": -8,
    "hitFrame": "+15a(+6)",
    "counterHitFrame": "+45a(+0)"
  },
  {
    "input": "b,f+2,1,4",
    "hitLevel": "m,m,m",
    "damage": "12,12,21",
    "startupFrame": ",i26~29",
    "blockFrame": "-7c",
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "b,f+2,1,df+2",
    "hitLevel": "m,m,m",
    "damage": "12,12,20",
    "startupFrame": ",i18~19",
    "blockFrame": -13,
    "hitFrame": "+25a(+8)",
    "counterHitFrame": ""
  },
  {
    "input": "b,f+2,3",
    "hitLevel": "m,h",
    "damage": "12,24",
    "startupFrame": ",i19~20",
    "blockFrame": -9,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "b,f+1+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i25",
    "blockFrame": -17,
    "hitFrame": "+31a(-2)",
    "counterHitFrame": ""
  },
  {
    "input": "b,f+1+2,2",
    "hitLevel": "m,m",
    "damage": "17,30",
    "startupFrame": ",i28~31",
    "blockFrame": -31,
    "hitFrame": "-5(-12)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i15~16",
    "blockFrame": -8,
    "hitFrame": "+15a(+6)/HE",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i20~21",
    "blockFrame": -6,
    "hitFrame": "+16c",
    "counterHitFrame": "+55a"
  },
  {
    "input": "f,n,d,DF+3",
    "hitLevel": "l",
    "damage": 24,
    "startupFrame": "i33~34",
    "blockFrame": "-23c",
    "hitFrame": "-2d",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,DF+4",
    "hitLevel": "L",
    "damage": 7,
    "startupFrame": "i16",
    "blockFrame": "-23c",
    "hitFrame": "-5c",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,DF+4,4",
    "hitLevel": "L,m",
    "damage": "7,28",
    "startupFrame": ",i25",
    "blockFrame": -16,
    "hitFrame": "+4c",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,DF+4,1+2",
    "hitLevel": "L,sm",
    "damage": "7,9",
    "startupFrame": ",i29~40",
    "blockFrame": "",
    "hitFrame": "+58(+42)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df:2",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i14",
    "blockFrame": 5,
    "hitFrame": "+39a(+29)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+1",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i22~24",
    "blockFrame": -16,
    "hitFrame": "+29a(+19)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+1,UF",
    "hitLevel": "m,th",
    "damage": "30,10",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i15",
    "blockFrame": -10,
    "hitFrame": "+39a(+29)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i26~28",
    "blockFrame": "-8c",
    "hitFrame": "+16a",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i26~27",
    "blockFrame": -9,
    "hitFrame": "+12a(+3)",
    "counterHitFrame": "+33a"
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i22~25",
    "blockFrame": 6,
    "hitFrame": "+13a(+3)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13~14",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": 9
  },
  {
    "input": "ws1,1",
    "hitLevel": "m,h",
    "damage": "12,10",
    "startupFrame": ",i30~32",
    "blockFrame": 11,
    "hitFrame": 16,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,m",
    "damage": "12,15",
    "startupFrame": ",i22",
    "blockFrame": -11,
    "hitFrame": 6,
    "counterHitFrame": 9
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": "+72a(+56)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": -11,
    "hitFrame": 9,
    "counterHitFrame": 14
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i11~12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws4,4",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": ",i27~28",
    "blockFrame": -16,
    "hitFrame": "+4c",
    "counterHitFrame": ""
  },
  {
    "input": "SS.2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i17~18",
    "blockFrame": -22,
    "hitFrame": "+72a",
    "counterHitFrame": ""
  },
  {
    "input": "FLY.1",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i18~19",
    "blockFrame": -3,
    "hitFrame": "+67a(+47)",
    "counterHitFrame": ""
  },
  {
    "input": "FLY.2",
    "hitLevel": "ub,th",
    "damage": "20,20",
    "startupFrame": "i36",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "FLY.3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i16~22",
    "blockFrame": -14,
    "hitFrame": "+35d(-24)",
    "counterHitFrame": ""
  },
  {
    "input": "FLY.4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i20",
    "blockFrame": -29,
    "hitFrame": -20,
    "counterHitFrame": ""
  },
  {
    "input": "FLY.4,2",
    "hitLevel": "m,m",
    "damage": "10,14",
    "startupFrame": ",i22",
    "blockFrame": "",
    "hitFrame": "+52(+7)",
    "counterHitFrame": ""
  },
  {
    "input": "FLY.4,2,1+2",
    "hitLevel": "m,m,th",
    "damage": "10,14,15",
    "startupFrame": ",i28",
    "blockFrame": "",
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "FLY.1+2",
    "hitLevel": "UB",
    "damage": 30,
    "startupFrame": "i50~100",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FLY.f+1+2",
    "hitLevel": "UB",
    "damage": 30,
    "startupFrame": "i32~75",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FUFT.U+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "MCR.1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i22~23",
    "blockFrame": 8,
    "hitFrame": "+20d",
    "counterHitFrame": ""
  },
  {
    "input": "MCR.2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "MCR.2,2",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": ",i15",
    "blockFrame": "-14c",
    "hitFrame": "+2/HE",
    "counterHitFrame": ""
  },
  {
    "input": "MCR.3",
    "hitLevel": "sm",
    "damage": 26,
    "startupFrame": "i23",
    "blockFrame": -7,
    "hitFrame": "+16a(-1)",
    "counterHitFrame": "+70a(+54)"
  },
  {
    "input": "MCR.4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i20",
    "blockFrame": -29,
    "hitFrame": -20,
    "counterHitFrame": ""
  },
  {
    "input": "MCR.4,2",
    "hitLevel": "m,m",
    "damage": "10,14",
    "startupFrame": ",i22",
    "blockFrame": "",
    "hitFrame": "+52(+7)",
    "counterHitFrame": ""
  },
  {
    "input": "MCR.4,2,1+2",
    "hitLevel": "m,m,th",
    "damage": "10,14,15",
    "startupFrame": ",i28",
    "blockFrame": "",
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+1+2",
    "hitLevel": "l",
    "damage": 25,
    "startupFrame": "i23~31",
    "blockFrame": "-14c",
    "hitFrame": "+13d(+1)",
    "counterHitFrame": ""
  },
  {
    "input": "b,f+2,1,4,H.1+2",
    "hitLevel": "m,m,m,sm",
    "damage": "12,12,21,15",
    "startupFrame": "i24~35",
    "blockFrame": 2,
    "hitFrame": "+59a(+43)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+1+2,H.1+2",
    "hitLevel": "m,sm",
    "damage": "25,20",
    "startupFrame": "i25~36",
    "blockFrame": 2,
    "hitFrame": "+60a(+44)",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "+2d",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "+0d",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw",
    "hitLevel": "th(h)",
    "damage": 50,
    "startupFrame": "i12~14",
    "blockFrame": "+1d",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "th(h)",
    "damage": 43,
    "startupFrame": "i12~14",
    "blockFrame": "+1d",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": "+0d",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "SS.2,U",
    "hitLevel": "th (ub)",
    "damage": "37,27",
    "startupFrame": "i37~38,i22~60",
    "blockFrame": "",
    "hitFrame": "-5a",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+3",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -6,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,hcf+1+2",
    "hitLevel": "th(h)",
    "damage": 45,
    "startupFrame": "i12~14",
    "blockFrame": "+0d",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+1+3",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": "+0d",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "+25d(+7)",
    "hitFrame": "",
    "counterHitFrame": ""
  }
]

const devilJinFrameData = rawDevilJinFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default devilJinFrameData;