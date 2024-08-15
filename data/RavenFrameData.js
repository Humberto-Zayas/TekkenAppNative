const rawRavenFrameData = [
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
    "input": "H.1+2,F",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14",
    "blockFrame": 5,
    "hitFrame": "+45a (+35)",
    "counterHitFrame": ""
  },
  {
    "input": "H.BT.2,2,1",
    "hitLevel": "h,m,sm,sm",
    "damage": "9,12,21,30",
    "startupFrame": "i10, i21~22, i18~19, i39~47",
    "blockFrame": -3,
    "hitFrame": "+2a (-7)",
    "counterHitFrame": ""
  },
  {
    "input": "H.BT.4,F",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i19~20",
    "blockFrame": "-5~-4",
    "hitFrame": "+36a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "H.BT.f+2,4,2",
    "hitLevel": "m,h,sm,sm",
    "damage": "13,17,21,30",
    "startupFrame": "i17~18, i20~21, i19~20 i39~41",
    "blockFrame": "-3~-1",
    "hitFrame": "+24a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "H.FC.df+3+4",
    "hitLevel": "L,sm",
    "damage": "17,25",
    "startupFrame": "i18~20 i34~36",
    "blockFrame": "-23~-21",
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "H.SZN.1,4",
    "hitLevel": "H,sm,sm",
    "damage": "12,25,30",
    "startupFrame": "i14~15, i18~27, i44~45",
    "blockFrame": "-3~-2",
    "hitFrame": "+32a (-26)",
    "counterHitFrame": ""
  },
  {
    "input": "H.SZN.2,F",
    "hitLevel": "m,sm",
    "damage": "20,10",
    "startupFrame": "i18 23~24",
    "blockFrame": 5,
    "hitFrame": "+36a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "H.SZN.3,2",
    "hitLevel": "m,sm,sm",
    "damage": "16,21,30",
    "startupFrame": "i16~17, i19~20 i39~-41",
    "blockFrame": "-3~-1",
    "hitFrame": "+24a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "H.b+2,4,2",
    "hitLevel": "h,h,sm,sm",
    "damage": "12,17,21,30",
    "startupFrame": "i15~17, i24~25, i19~20 i39~-41",
    "blockFrame": "-3~-1",
    "hitFrame": "+24a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "H.db+2,1,1",
    "hitLevel": "m,h,sm,sm",
    "damage": "13,15,21,30",
    "startupFrame": "i13~14, i22~23, i18~19 i39~47",
    "blockFrame": "-3~+5",
    "hitFrame": "+2a (-7)",
    "counterHitFrame": ""
  },
  {
    "input": "H.df+1,4",
    "hitLevel": "m,sm,sm",
    "damage": "13,25,30",
    "startupFrame": "i14~15, i18~27, i44~45",
    "blockFrame": "-3~-2",
    "hitFrame": "+32a (-26)",
    "counterHitFrame": ""
  },
  {
    "input": "H.f,f,F+3,4",
    "hitLevel": "m,sm",
    "damage": "20,20",
    "startupFrame": "i26~28, i43~44",
    "blockFrame": "+7~+8",
    "hitFrame": "+72a (+56)",
    "counterHitFrame": ""
  },
  {
    "input": "H.f+1+2,F",
    "hitLevel": "h,m",
    "damage": "10,20",
    "startupFrame": "i18~19, i26",
    "blockFrame": 5,
    "hitFrame": "+34a",
    "counterHitFrame": ""
  },
  {
    "input": "H.qcf+1,2",
    "hitLevel": "m,sm,sm",
    "damage": "15,21,30",
    "startupFrame": "i16, 19~20, 39~41",
    "blockFrame": "-3~-1",
    "hitFrame": "+24a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "H.qcf+3",
    "hitLevel": "h,t",
    "damage": "16,14",
    "startupFrame": "i16~17",
    "blockFrame": "-7~-6",
    "hitFrame": "-4d",
    "counterHitFrame": ""
  },
  {
    "input": "H.ws3,2",
    "hitLevel": "m,sm,sm",
    "damage": "18,18,20",
    "startupFrame": "i16~17, i19~20 i39~41",
    "blockFrame": "-3~-1",
    "hitFrame": "+65a (+49)",
    "counterHitFrame": ""
  },
  {
    "input": "H.ws3+4,F",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~18",
    "blockFrame": 5,
    "hitFrame": "+62a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,t",
    "damage": "20,35",
    "startupFrame": "i18~20",
    "blockFrame": "+14g",
    "hitFrame": "+3a",
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
    "damage": "5,12",
    "startupFrame": ",i12",
    "blockFrame": -3,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,m",
    "damage": "5,12,20",
    "startupFrame": ",i23~25",
    "blockFrame": "-14~-12",
    "hitFrame": "+15a (-2)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3+4",
    "hitLevel": "h,h",
    "damage": "5,12",
    "startupFrame": "",
    "blockFrame": -4,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i10",
    "blockFrame": -1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "2,3",
    "hitLevel": "h,l",
    "damage": "9,10",
    "startupFrame": ",i22",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "2,4",
    "hitLevel": "h,h",
    "damage": "9,16",
    "startupFrame": ",i18~19",
    "blockFrame": "-8~-7",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": ",i14~15",
    "blockFrame": "-8~-7",
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": "3,3",
    "hitLevel": "m,h",
    "damage": "10,16",
    "startupFrame": ",i17~18",
    "blockFrame": "-8~-7",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "3,3,4",
    "hitLevel": "m,h,h",
    "damage": "10,16,20",
    "startupFrame": ",i26~27",
    "blockFrame": -9,
    "hitFrame": "+39a (-19)",
    "counterHitFrame": "+66a (+50)"
  },
  {
    "input": "3,3,4~B",
    "hitLevel": "m,h,h",
    "damage": "10,16,20",
    "startupFrame": "",
    "blockFrame": "-16~-15",
    "hitFrame": "-3~-2",
    "counterHitFrame": ""
  },
  {
    "input": "3~4",
    "hitLevel": "m,M",
    "damage": "10,16",
    "startupFrame": "i25~26 i31~36",
    "blockFrame": "-9~-4",
    "hitFrame": "+19a",
    "counterHitFrame": ""
  },
  {
    "input": "3~4,F",
    "hitLevel": "m,M",
    "damage": "10,16",
    "startupFrame": "",
    "blockFrame": "-39~-36",
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i12~13",
    "blockFrame": "-7~-6",
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": "4,1",
    "hitLevel": "h,h",
    "damage": "16,13",
    "startupFrame": ",i19~20",
    "blockFrame": "-3~-2",
    "hitFrame": "+7~+8",
    "counterHitFrame": ""
  },
  {
    "input": "4~3",
    "hitLevel": "m,m",
    "damage": "8,10",
    "startupFrame": "i16 i29~30",
    "blockFrame": "-16~-15",
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "4~3,1",
    "hitLevel": "m,m,l",
    "damage": "8,10,15",
    "startupFrame": ",i34~35",
    "blockFrame": "-13~-2",
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "4~3,3",
    "hitLevel": "m,m,h",
    "damage": "8,10,18",
    "startupFrame": ",i24~27",
    "blockFrame": "-3~+0",
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "4~3,4",
    "hitLevel": "m,m,m",
    "damage": "8,10,20",
    "startupFrame": ",i33~34",
    "blockFrame": "-14~-13",
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": "+15a",
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
    "damage": 10,
    "startupFrame": "i15~16",
    "blockFrame": "-12~-11",
    "hitFrame": "-1~+0",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,3",
    "hitLevel": "m,M",
    "damage": "10,13",
    "startupFrame": ",i21~22",
    "blockFrame": "-9~-8",
    "hitFrame": "+6c~+7c",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,3,3+4",
    "hitLevel": "m,M",
    "damage": "10,13",
    "startupFrame": "",
    "blockFrame": "-9~-8",
    "hitFrame": "+6c~+7c",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i17",
    "blockFrame": -9,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,2",
    "hitLevel": "m,m",
    "damage": "18,21",
    "startupFrame": ",i30",
    "blockFrame": -14,
    "hitFrame": "+10a (+1)",
    "counterHitFrame": "+30a (+22)"
  },
  {
    "input": "f+3~B",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i15~16",
    "blockFrame": "-9~-8",
    "hitFrame": "+31a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "h,m",
    "damage": "10,20",
    "startupFrame": "i18~19, i26",
    "blockFrame": -14,
    "hitFrame": "+30a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14~15",
    "blockFrame": "-2~-1",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,4",
    "hitLevel": "m,sm",
    "damage": "13,25",
    "startupFrame": ",i18~27",
    "blockFrame": "-14~-5",
    "hitFrame": "+32a (-26)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16~18",
    "blockFrame": "-13~-11",
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2,3",
    "hitLevel": "m,h",
    "damage": "15,17",
    "startupFrame": ",i12~13",
    "blockFrame": "-8~-7",
    "hitFrame": "+28a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2,4",
    "hitLevel": "m,m",
    "damage": "15,24",
    "startupFrame": ",i12~13",
    "blockFrame": "-15~-14",
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i16~17",
    "blockFrame": "-9~-8",
    "hitFrame": "+12a",
    "counterHitFrame": "+46a (+36)"
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "df+4,4",
    "hitLevel": "m,M",
    "damage": "15,16",
    "startupFrame": ",i22~25",
    "blockFrame": "-14~-13",
    "hitFrame": "+6a",
    "counterHitFrame": ""
  },
  {
    "input": "df+4,4,3",
    "hitLevel": "m,M,M",
    "damage": "15,16,22",
    "startupFrame": ",i27~30",
    "blockFrame": "-6~-3",
    "hitFrame": "+18a",
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
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
    "input": "d+3",
    "hitLevel": "L",
    "damage": 10,
    "startupFrame": "i15",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "L",
    "damage": 18,
    "startupFrame": "i21",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": "+13g"
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i13~14",
    "blockFrame": "-4~-3",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "db+2,1",
    "hitLevel": "m,h",
    "damage": "13,15",
    "startupFrame": ",i22~23",
    "blockFrame": "-1~+0",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "db+2,1,1",
    "hitLevel": "m,h,sm",
    "damage": "13,15,21",
    "startupFrame": ",i18~19",
    "blockFrame": "-14~-13",
    "hitFrame": "+2a (-7)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2,1,3+4",
    "hitLevel": "m,h",
    "damage": "13,15",
    "startupFrame": "",
    "blockFrame": -4,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "L",
    "damage": 19,
    "startupFrame": "i28~29",
    "blockFrame": "-12~-11",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+39d"
  },
  {
    "input": "db+4",
    "hitLevel": "L",
    "damage": 21,
    "startupFrame": "i24~25",
    "blockFrame": "-14~-13",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+37a"
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i16~17",
    "blockFrame": "+7c~+8c",
    "hitFrame": "+10c~+11c",
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
    "input": "b+1+3,P",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": -31,
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i15~17",
    "blockFrame": "-14~-12",
    "hitFrame": "-3~-1",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2",
    "hitLevel": "h,m",
    "damage": "12,17",
    "startupFrame": ",i22",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": 8
  },
  {
    "input": "b+2,2,3",
    "hitLevel": "h,m,M",
    "damage": "12,17,20",
    "startupFrame": "i21~22",
    "blockFrame": "-19~-18",
    "hitFrame": "+12a (-5)",
    "counterHitFrame": "+26a (+16)"
  },
  {
    "input": "b+2,2,1+2",
    "hitLevel": "h,m,L",
    "damage": "12,17,20",
    "startupFrame": ",i20~21",
    "blockFrame": "-30~-29",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,4",
    "hitLevel": "h,h",
    "damage": "12,17",
    "startupFrame": ",i24~25",
    "blockFrame": "-7~-6",
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,4,2",
    "hitLevel": "h,h,sm",
    "damage": "12,17,21",
    "startupFrame": ",i19~20",
    "blockFrame": "-14~-13",
    "hitFrame": "+24a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "M",
    "damage": 23,
    "startupFrame": "i27~29",
    "blockFrame": "+4~+6",
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14~15",
    "blockFrame": "-9~-8",
    "hitFrame": "-1~+0",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,4",
    "hitLevel": "m,m",
    "damage": "13,20",
    "startupFrame": ",i17~19",
    "blockFrame": "-8~-6",
    "hitFrame": "+6c~+8c",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,B+4",
    "hitLevel": "m,M",
    "damage": "13,24",
    "startupFrame": ",i37~42",
    "blockFrame": "+1c~+6c",
    "hitFrame": "+2c~+7c",
    "counterHitFrame": "+12a"
  },
  {
    "input": "b+4,B+4~3",
    "hitLevel": "m,M,L",
    "damage": "13,24,11",
    "startupFrame": ",i20",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "b+4,B+4~3,3+4",
    "hitLevel": "m,M,L,m",
    "damage": "13,24,11,15",
    "startupFrame": ",i26~30",
    "blockFrame": "-25~-21",
    "hitFrame": "+6a",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i28~30",
    "blockFrame": "-15~-13",
    "hitFrame": "+20a (+10)",
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
    "input": "ub+1",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i16",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1,2",
    "hitLevel": "m,m",
    "damage": "11,13",
    "startupFrame": ",i18~19",
    "blockFrame": "-13~-12",
    "hitFrame": "-2c~-1c",
    "counterHitFrame": ""
  },
  {
    "input": "u+3",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i27~28",
    "blockFrame": 2,
    "hitFrame": "+6~+7",
    "counterHitFrame": ""
  },
  {
    "input": "u+3,3",
    "hitLevel": "h,L",
    "damage": "23,18",
    "startupFrame": "i31~32",
    "blockFrame": "-16~-15",
    "hitFrame": "+16a",
    "counterHitFrame": ""
  },
  {
    "input": "u+3,3,3",
    "hitLevel": "h,L,M",
    "damage": "23,18,22",
    "startupFrame": ",i27~30",
    "blockFrame": "-6~-4",
    "hitFrame": "+18a",
    "counterHitFrame": ""
  },
  {
    "input": "u+4",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i20~21",
    "blockFrame": "-9~-8",
    "hitFrame": "+22a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "M",
    "damage": 20,
    "startupFrame": "i29~30",
    "blockFrame": -9,
    "hitFrame": "+20a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i20~21",
    "blockFrame": "-9~-8",
    "hitFrame": "+22a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,4",
    "hitLevel": "m,m",
    "damage": "14,20",
    "startupFrame": ",i16~19",
    "blockFrame": -15,
    "hitFrame": "+9g~12g",
    "counterHitFrame": "+21a"
  },
  {
    "input": "uf+4,4~B",
    "hitLevel": "m,m",
    "damage": "14,20",
    "startupFrame": "",
    "blockFrame": "-16~-15",
    "hitFrame": "+15a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i23~25",
    "blockFrame": "-16~-14",
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,4",
    "hitLevel": "m,L",
    "damage": "17,9",
    "startupFrame": ",i21~22",
    "blockFrame": "-11~-10",
    "hitFrame": "+0~+1",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,4,2",
    "hitLevel": "m,L,m",
    "damage": "17,9,21",
    "startupFrame": ",i21",
    "blockFrame": -13,
    "hitFrame": "+10a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,3+4",
    "hitLevel": "m,m",
    "damage": "17,15",
    "startupFrame": ",i20~24",
    "blockFrame": "-25~-21",
    "hitFrame": "+6a",
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
    "input": "1+2+3+4,b,f,1+2",
    "hitLevel": ",m!",
    "damage": ",60",
    "startupFrame": ",i59~61",
    "blockFrame": "",
    "hitFrame": "+21a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "UB,b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "UB,b,3+4",
    "hitLevel": ",M!,M!,M!",
    "damage": ",20,20,20",
    "startupFrame": ",i38~40 i46~49 i51~54",
    "blockFrame": "",
    "hitFrame": "-19a",
    "counterHitFrame": ""
  },
  {
    "input": "b,B+2",
    "hitLevel": "m,h",
    "damage": "15,21",
    "startupFrame": "i17~18 i30~31",
    "blockFrame": "-10~-9",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "b,B+2,P",
    "hitLevel": "m,h,t",
    "damage": "15,21,35",
    "startupFrame": ",i15~25",
    "blockFrame": "-8~+2",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i16~17",
    "blockFrame": "-12~-11",
    "hitFrame": "+15a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~18",
    "blockFrame": "-14~-11",
    "hitFrame": "+43a (+29)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i15~17",
    "blockFrame": "-10~-8",
    "hitFrame": "+21a (+4)",
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
    "input": "qcf,d,DF",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": "+15a"
  },
  {
    "input": "qcf+1,2",
    "hitLevel": "m,sm",
    "damage": "15,21",
    "startupFrame": ",i19~20",
    "blockFrame": "-14~-13",
    "hitFrame": "+24a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+1,3+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "",
    "blockFrame": 0,
    "hitFrame": 13,
    "counterHitFrame": "+24a"
  },
  {
    "input": "qcf+2",
    "hitLevel": "L",
    "damage": 18,
    "startupFrame": "i25~26",
    "blockFrame": "-12~-11",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+14~+15"
  },
  {
    "input": "qcf+2~1",
    "hitLevel": "L,m",
    "damage": "18,25",
    "startupFrame": ",i20~21",
    "blockFrame": "-9~-8",
    "hitFrame": "+24a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+3",
    "hitLevel": "h,t",
    "damage": "16,14",
    "startupFrame": "i16~17",
    "blockFrame": "-7~-6",
    "hitFrame": "-4d",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+4",
    "hitLevel": "M",
    "damage": 15,
    "startupFrame": "i18~20",
    "blockFrame": "-14~-12",
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+1+2",
    "hitLevel": "m,m",
    "damage": "12,21",
    "startupFrame": "i24 i35",
    "blockFrame": -9,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+1+2,P",
    "hitLevel": "m,m,t",
    "damage": "12,21,35",
    "startupFrame": ",i15~25",
    "blockFrame": "-8~+2",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "uf,n,4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23~25",
    "blockFrame": "-13~-11",
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i26~28",
    "blockFrame": "+4~+6",
    "hitFrame": "+6a",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i14~15",
    "blockFrame": "-14~-13",
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i13~14",
    "blockFrame": "-8~-7",
    "hitFrame": "+8~+9",
    "counterHitFrame": "+37a (+27)"
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i16~17",
    "blockFrame": "-8~-7",
    "hitFrame": "+0s",
    "counterHitFrame": ""
  },
  {
    "input": "ws3,2",
    "hitLevel": "m,sm",
    "damage": "18,20",
    "startupFrame": ",i19~20",
    "blockFrame": "-14~-13",
    "hitFrame": "+65a (+49)",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i11~12",
    "blockFrame": "-6~-5",
    "hitFrame": "+7~+8",
    "counterHitFrame": 4
  },
  {
    "input": "ws3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~18",
    "blockFrame": "-12~-10",
    "hitFrame": "+7~+9",
    "counterHitFrame": ""
  },
  {
    "input": "ws3+4~B",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "FC.2",
    "hitLevel": "sl",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "FC.3",
    "hitLevel": "L",
    "damage": 10,
    "startupFrame": "i16",
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
    "input": "FC.df,d,DF",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df,d,DF,f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+3",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i20~22",
    "blockFrame": "-9~-7",
    "hitFrame": "+2~+4",
    "counterHitFrame": "+30d"
  },
  {
    "input": "FC.df+3+4",
    "hitLevel": "L,sm",
    "damage": "17,25",
    "startupFrame": "i18~20 i34~36",
    "blockFrame": "-23~-21",
    "hitFrame": "-5a",
    "counterHitFrame": ""
  },
  {
    "input": "(Back to wall).b,b,UB",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i40~43",
    "blockFrame": "+6~+9",
    "hitFrame": "+28a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1",
    "hitLevel": "h",
    "damage": 7,
    "startupFrame": "i8",
    "blockFrame": "-1~+0",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1,4",
    "hitLevel": "h,h",
    "damage": "7,23",
    "startupFrame": ",i16~17",
    "blockFrame": "-8~-7",
    "hitFrame": "+40a (-18)",
    "counterHitFrame": "+67a (+51)"
  },
  {
    "input": "BT.2",
    "hitLevel": "h",
    "damage": 13,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "BT.2,1",
    "hitLevel": "h,h",
    "damage": "13,10",
    "startupFrame": ",i14",
    "blockFrame": -3,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "BT.2,1~F",
    "hitLevel": "h,h",
    "damage": "13,10",
    "startupFrame": "",
    "blockFrame": 1,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "BT.2,2",
    "hitLevel": "h,m",
    "damage": "13,15",
    "startupFrame": ",i21~22",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "BT.2,2,1",
    "hitLevel": "h,m,sm",
    "damage": "13,15,21",
    "startupFrame": ",i18~19",
    "blockFrame": "-14~-13",
    "hitFrame": "+2a (-7)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.2,2,3+4",
    "hitLevel": "h,m",
    "damage": "13,15",
    "startupFrame": "",
    "blockFrame": "-7~-6",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "BT.3",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i10",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "BT.3,4",
    "hitLevel": "h,m",
    "damage": "10,17",
    "startupFrame": ",i28~30",
    "blockFrame": "+0~+2",
    "hitFrame": "+1~+3",
    "counterHitFrame": "+11g~+13g"
  },
  {
    "input": "BT.3,4,3",
    "hitLevel": "h,m,M",
    "damage": "10,17,22",
    "startupFrame": ",i27~30",
    "blockFrame": "-6~-3",
    "hitFrame": "+18a",
    "counterHitFrame": ""
  },
  {
    "input": "BT.3,4,4",
    "hitLevel": "h,m,M",
    "damage": "10,17,21",
    "startupFrame": ",i32~34",
    "blockFrame": "-9~-8",
    "hitFrame": "+5a",
    "counterHitFrame": ""
  },
  {
    "input": "BT.3,4,4,F",
    "hitLevel": "h,m,M",
    "damage": "10,17,21",
    "startupFrame": "",
    "blockFrame": -36,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i19~20",
    "blockFrame": "-5~-4",
    "hitFrame": "+44a (-14)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i15~16",
    "blockFrame": -13,
    "hitFrame": "+30a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.3+4",
    "hitLevel": "m,m",
    "damage": "5,20",
    "startupFrame": "i15 i34~35",
    "blockFrame": "-20~-19",
    "hitFrame": "+43a (+39)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.b+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i16~17",
    "blockFrame": "-2~-1",
    "hitFrame": "+6~+7",
    "counterHitFrame": ""
  },
  {
    "input": "BT.b+2,3",
    "hitLevel": "m,m,m",
    "damage": "17,5,20",
    "startupFrame": ",i20 i39~40",
    "blockFrame": "-20~-19",
    "hitFrame": "+42a (+38)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.b+2,4",
    "hitLevel": "m,h",
    "damage": "17,13",
    "startupFrame": ",i17~18",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "BT.b+3",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i18~19",
    "blockFrame": "+4~+5",
    "hitFrame": "+41a",
    "counterHitFrame": ""
  },
  {
    "input": "BT.b+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+3",
    "hitLevel": "l",
    "damage": 21,
    "startupFrame": "25f(2)",
    "blockFrame": -26,
    "hitFrame": "KDN",
    "counterHitFrame": "KDN"
  },
  {
    "input": "BT.d+3",
    "hitLevel": "L",
    "damage": 16,
    "startupFrame": "i25~27",
    "blockFrame": "-26~-24",
    "hitFrame": "+0~+2",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+4",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i12",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "BT.f,F+3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i21~22",
    "blockFrame": "-9~-8",
    "hitFrame": "+8a",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f,F+3+4",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i23~30",
    "blockFrame": "-18~-11",
    "hitFrame": "+24a",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f,f,f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+1",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "I16",
    "blockFrame": -8,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i17~18",
    "blockFrame": "-5~-4",
    "hitFrame": "+6~+7",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+2,3",
    "hitLevel": "m,M",
    "damage": "13,15",
    "startupFrame": ",i24~25",
    "blockFrame": "-7~-6",
    "hitFrame": "+14~+15",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+2,4",
    "hitLevel": "m,h",
    "damage": "13,17",
    "startupFrame": ",i20~21",
    "blockFrame": "-7~-6",
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+2,4,2",
    "hitLevel": "m,h,sm",
    "damage": "13,17,21",
    "startupFrame": ",i19~20",
    "blockFrame": "-14~-13",
    "hitFrame": "+24a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i13~14",
    "blockFrame": "-5~-4",
    "hitFrame": 6,
    "counterHitFrame": "+38a (+30)"
  },
  {
    "input": "BT.f+3~B",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": "+35a (+27)"
  },
  {
    "input": "BT.f+4",
    "hitLevel": "L",
    "damage": 9,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+4,1",
    "hitLevel": "L,h",
    "damage": "9,15",
    "startupFrame": ",i22~23",
    "blockFrame": "-9~-8",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+4,1,3+4",
    "hitLevel": "L,h",
    "damage": "9,15",
    "startupFrame": "",
    "blockFrame": "-6~-5",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+3+4",
    "hitLevel": "M",
    "damage": 24,
    "startupFrame": "i25~27",
    "blockFrame": "-9~-7",
    "hitFrame": "+5a",
    "counterHitFrame": ""
  },
  {
    "input": "BT.f+3+4,F",
    "hitLevel": "M",
    "damage": 24,
    "startupFrame": "",
    "blockFrame": -36,
    "hitFrame": -22,
    "counterHitFrame": ""
  },
  {
    "input": "SZN.1",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i14~15",
    "blockFrame": "-3~-2",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "SZN.1,4",
    "hitLevel": "h,sm",
    "damage": "12,25",
    "startupFrame": ",i18~27",
    "blockFrame": "-14~-5",
    "hitFrame": "+32a (-26)",
    "counterHitFrame": ""
  },
  {
    "input": "SZN.1~F",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "",
    "blockFrame": "+1~+2",
    "hitFrame": "+12~+13",
    "counterHitFrame": ""
  },
  {
    "input": "SZN.2",
    "hitLevel": "m,sm",
    "damage": "20,10",
    "startupFrame": "i18 23~24",
    "blockFrame": -9,
    "hitFrame": "+7a (-2)",
    "counterHitFrame": ""
  },
  {
    "input": "SZN.3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i16~17",
    "blockFrame": "-4~-3",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "SZN.3,2",
    "hitLevel": "m,sm",
    "damage": "16,21",
    "startupFrame": ",i19~20",
    "blockFrame": "-14~-13",
    "hitFrame": "+24a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "SZN.4",
    "hitLevel": "L",
    "damage": 21,
    "startupFrame": "i17~24",
    "blockFrame": "-16~-9",
    "hitFrame": "+2~+9",
    "counterHitFrame": "+26a"
  },
  {
    "input": "SZN.1+2",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i15~16",
    "blockFrame": "+0~+1",
    "hitFrame": "+23a",
    "counterHitFrame": ""
  },
  {
    "input": "SZN.B",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "SZN.D",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "SZN.U",
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
    "blockFrame": -6,
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
    "input": "BT.f+1+2,P",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+5d",
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "-4d",
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
    "hitFrame": "-4d",
    "counterHitFrame": ""
  },
  {
    "input": "df+1+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i11",
    "blockFrame": -2,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -2,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  }
]

const ravenFrameData = rawRavenFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default ravenFrameData;