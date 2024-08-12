const rawFengFrameData = [
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
    "input": "H.3+4",
    "hitLevel": "ub(m)",
    "damage": 30,
    "startupFrame": "i30~31",
    "blockFrame": "+12c g",
    "hitFrame": "+19d",
    "counterHitFrame": ""
  },
  {
    "input": "H.b+1",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i10~11",
    "blockFrame": -8,
    "hitFrame": "+36d (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "H.f,F+1+2*",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i39",
    "blockFrame": 11,
    "hitFrame": "+22a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,m",
    "damage": "22,26",
    "startupFrame": "i21,24",
    "blockFrame": "+12, +24 on STC at Wall, +19 at Wall",
    "hitFrame": "+30d (-6)",
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
    "input": "1,1",
    "hitLevel": "h,m",
    "damage": "5,21",
    "startupFrame": "i25~26",
    "blockFrame": -11,
    "hitFrame": 2,
    "counterHitFrame": "+61a"
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,9",
    "startupFrame": "i10",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,2",
    "hitLevel": "h,h,h",
    "damage": "5,9,12",
    "startupFrame": "i17",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "1,3",
    "hitLevel": "h,h",
    "damage": "5,19",
    "startupFrame": "i16~17",
    "blockFrame": -5,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "h",
    "damage": 35,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": -3,
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
    "input": 2,
    "hitLevel": "h",
    "damage": 8,
    "startupFrame": "i10",
    "blockFrame": -3,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "2,4",
    "hitLevel": "h,m",
    "damage": "8,15",
    "startupFrame": "i17",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "2,4,1",
    "hitLevel": "h,m,m",
    "damage": "8,15,25",
    "startupFrame": "i24",
    "blockFrame": -12,
    "hitFrame": "+24d (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "h",
    "damage": 35,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "3,3",
    "hitLevel": "m,h",
    "damage": "15,10",
    "startupFrame": "i17",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "3,3,4",
    "hitLevel": "m,h,l",
    "damage": "15,10,23",
    "startupFrame": "i25~26",
    "blockFrame": -12,
    "hitFrame": "+7c",
    "counterHitFrame": "+17d"
  },
  {
    "input": "3,1+2",
    "hitLevel": "m,m",
    "damage": "15,30",
    "startupFrame": "i28~29",
    "blockFrame": -12,
    "hitFrame": "+22d (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "3~4",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i34~36",
    "blockFrame": -5,
    "hitFrame": "+19d",
    "counterHitFrame": ""
  },
  {
    "input": "3~4,3",
    "hitLevel": "m,l",
    "damage": "27,11",
    "startupFrame": "i18~20",
    "blockFrame": -26,
    "hitFrame": "+19d (+12)",
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i11",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": "+27g"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i21~22",
    "blockFrame": "-13 / +20wc",
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i15",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "m,m",
    "damage": "10,10",
    "startupFrame": "i19",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1,2",
    "hitLevel": "m,m,m",
    "damage": "10,10,28",
    "startupFrame": "i13~14",
    "blockFrame": -19,
    "hitFrame": "+19d (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": ",10",
    "startupFrame": "i21",
    "blockFrame": -3,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,2",
    "hitLevel": "m,h",
    "damage": ",10,17",
    "startupFrame": "i21~22",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": "+43d (+35)"
  },
  {
    "input": "f+3,4",
    "hitLevel": "m,m",
    "damage": ",10,15",
    "startupFrame": "i23~24",
    "blockFrame": -16,
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "h",
    "damage": 19,
    "startupFrame": "i18~19",
    "blockFrame": -9,
    "hitFrame": "+52a",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,2",
    "hitLevel": "h,m",
    "damage": "19,16",
    "startupFrame": "i24~25",
    "blockFrame": -14,
    "hitFrame": "+70a (+54)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,3",
    "hitLevel": "h,m",
    "damage": "19,21",
    "startupFrame": "i22~24",
    "blockFrame": -10,
    "hitFrame": "+26d (-9)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,4",
    "hitLevel": "h,l",
    "damage": "19,11",
    "startupFrame": "i33~33",
    "blockFrame": -31,
    "hitFrame": "+27d",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i19~20",
    "blockFrame": -9,
    "hitFrame": "+19d",
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
    "damage": 11,
    "startupFrame": "i14",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": "+36g"
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i20~21",
    "blockFrame": -8,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "df+2,2",
    "hitLevel": "m,m",
    "damage": "15,21",
    "startupFrame": "i13~14",
    "blockFrame": -6,
    "hitFrame": "+14a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18~19",
    "blockFrame": -7,
    "hitFrame": "+78a (+62)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,2",
    "hitLevel": "m,m",
    "damage": "13,13",
    "startupFrame": "i20~21",
    "blockFrame": -11,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,2,1+2",
    "hitLevel": "m,m,m",
    "damage": "13,13,21",
    "startupFrame": "i34~35",
    "blockFrame": -19,
    "hitFrame": "+31a (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4,3",
    "hitLevel": "m,h",
    "damage": "13,23",
    "startupFrame": "i23~24",
    "blockFrame": -4,
    "hitFrame": "+15g",
    "counterHitFrame": "+27d"
  },
  {
    "input": "df+3+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i23~27",
    "blockFrame": -7,
    "hitFrame": "+22d",
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "l",
    "damage": 16,
    "startupFrame": "i20~21",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i14~15",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+4,1+2",
    "hitLevel": "l,m",
    "damage": "7,22",
    "startupFrame": "i26",
    "blockFrame": -10,
    "hitFrame": "+11d (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i20~21",
    "blockFrame": -9,
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2,1",
    "hitLevel": "m,m",
    "damage": "15,20",
    "startupFrame": "i22~23",
    "blockFrame": -12,
    "hitFrame": "+18a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,2",
    "hitLevel": "m,m",
    "damage": "15,18",
    "startupFrame": "i23~24",
    "blockFrame": -11,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,2,4",
    "hitLevel": "m,m,m",
    "damage": "15,18,30",
    "startupFrame": "i31",
    "blockFrame": -7,
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "db+1,2,4,3+4",
    "hitLevel": "m,m,mm",
    "damage": "15,18,3020",
    "startupFrame": "i39~42",
    "blockFrame": "-3~0",
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1,4",
    "hitLevel": "m,h",
    "damage": "15,23",
    "startupFrame": "i24~25",
    "blockFrame": -2,
    "hitFrame": "+24a (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i20~21",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "db+2,2",
    "hitLevel": "l,l",
    "damage": "10,10",
    "startupFrame": "i28~30",
    "blockFrame": -17,
    "hitFrame": "+20a",
    "counterHitFrame": ""
  },
  {
    "input": "db+2,2,2",
    "hitLevel": "l,l,m",
    "damage": "10,10,25",
    "startupFrame": "i28~29",
    "blockFrame": -8,
    "hitFrame": "+13d",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i17",
    "blockFrame": -15,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 23,
    "startupFrame": "i31 (30~32)",
    "blockFrame": -26,
    "hitFrame": "+76a (+60)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i21~22",
    "blockFrame": -4,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2,2",
    "hitLevel": "m,l",
    "damage": "13,10",
    "startupFrame": "i29~30",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i10~11",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": "+36d (+28)"
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i17",
    "blockFrame": -11,
    "hitFrame": "+0c",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,3",
    "hitLevel": "m,l",
    "damage": "13,6",
    "startupFrame": "i22~24",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,3,4",
    "hitLevel": "m,l,m",
    "damage": "13,6,13",
    "startupFrame": "i24~25",
    "blockFrame": -12,
    "hitFrame": "+19a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,3,4,2",
    "hitLevel": "m,l,m,m",
    "damage": "13,6,13,22",
    "startupFrame": "i24~25",
    "blockFrame": -6,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22~23",
    "blockFrame": 6,
    "hitFrame": "+10d",
    "counterHitFrame": "+38a"
  },
  {
    "input": "b+3~4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i12~13",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 31,
    "startupFrame": "i13~14",
    "blockFrame": -19,
    "hitFrame": "+18a (+13)",
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
    "input": "ub+2",
    "hitLevel": "m,h",
    "damage": "8,20",
    "startupFrame": "i16,15",
    "blockFrame": -10,
    "hitFrame": 10,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "!",
    "damage": 70,
    "startupFrame": "i79~82",
    "blockFrame": "",
    "hitFrame": "+50g (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "u+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i38~40",
    "blockFrame": 2,
    "hitFrame": 10,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i18~19",
    "blockFrame": -5,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i18",
    "blockFrame": -10,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i22~23",
    "blockFrame": -1,
    "hitFrame": "+22d",
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
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15~17",
    "blockFrame": -13,
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m,h,h",
    "damage": "10,10,7",
    "startupFrame": "i24,4,3",
    "blockFrame": -14,
    "hitFrame": "+25a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m,h,h",
    "damage": "10,10,7",
    "startupFrame": "i24,4,3",
    "blockFrame": -14,
    "hitFrame": "+25a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,3",
    "hitLevel": "m,h,h,h",
    "damage": "10,10,7,11",
    "startupFrame": ",i17~18",
    "blockFrame": -6,
    "hitFrame": "+70a (+54)",
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
    "input": "Back Throw",
    "hitLevel": "h",
    "damage": 50,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "Right Throw",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "b,f+1",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i25~26",
    "blockFrame": -15,
    "hitFrame": "+10d (+1)",
    "counterHitFrame": "+44a"
  },
  {
    "input": "b1+3",
    "hitLevel": "",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i18~19",
    "blockFrame": -9,
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 33,
    "startupFrame": "i32~33",
    "blockFrame": "+8c",
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i19~20",
    "blockFrame": -15,
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4,3",
    "hitLevel": "m,m",
    "damage": "15,21",
    "startupFrame": "i20~21",
    "blockFrame": -14,
    "hitFrame": "+32a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i24~25",
    "blockFrame": -9,
    "hitFrame": "+16a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2*",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i39",
    "blockFrame": 6,
    "hitFrame": "+22a (+12)",
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
    "input": "qcf+1",
    "hitLevel": "l",
    "damage": 23,
    "startupFrame": "i22~23",
    "blockFrame": -14,
    "hitFrame": 2,
    "counterHitFrame": "+31a"
  },
  {
    "input": "qcf+1",
    "hitLevel": "l",
    "damage": 23,
    "startupFrame": "i22~23",
    "blockFrame": -14,
    "hitFrame": 2,
    "counterHitFrame": "+31a"
  },
  {
    "input": "qcf+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i22~23",
    "blockFrame": -14,
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i16~17",
    "blockFrame": "0c",
    "hitFrame": "+7c",
    "counterHitFrame": 13
  },
  {
    "input": "qcf+3+4",
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
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i20~25",
    "blockFrame": 6,
    "hitFrame": "+13d (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i13",
    "blockFrame": -3,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,m",
    "damage": "13,16",
    "startupFrame": ",i9",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2,1",
    "hitLevel": "m,m,m",
    "damage": "13,16,20",
    "startupFrame": "i17~18",
    "blockFrame": -14,
    "hitFrame": "+12d (+3)",
    "counterHitFrame": "+32d (+24)"
  },
  {
    "input": "ws1,3",
    "hitLevel": "m,h",
    "damage": "13,20",
    "startupFrame": "i22~23",
    "blockFrame": -6,
    "hitFrame": "+4c",
    "counterHitFrame": "+20d"
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15~16",
    "blockFrame": -7,
    "hitFrame": "+24d",
    "counterHitFrame": "+78a (+62)"
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i11~12",
    "blockFrame": -7,
    "hitFrame": 7,
    "counterHitFrame": "+29g"
  },
  {
    "input": "ws1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23~24",
    "blockFrame": -9,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "SS.2",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i15",
    "blockFrame": 3,
    "hitFrame": "+9b",
    "counterHitFrame": "+31d"
  },
  {
    "input": "SS.4",
    "hitLevel": "l",
    "damage": 19,
    "startupFrame": "i21~22",
    "blockFrame": "-31c",
    "hitFrame": "+8 (-8)",
    "counterHitFrame": "+72a (+56)"
  },
  {
    "input": "SS.1+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i22~23",
    "blockFrame": 1,
    "hitFrame": "+21d (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+1",
    "hitLevel": "l",
    "damage": 19,
    "startupFrame": "i21~22",
    "blockFrame": "-13c",
    "hitFrame": -2,
    "counterHitFrame": 13
  },
  {
    "input": "FC.df+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18",
    "blockFrame": -14,
    "hitFrame": "+55a",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "i19~20",
    "blockFrame": "-8c",
    "hitFrame": "+3b",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4,1",
    "hitLevel": "l,h",
    "damage": "13,10",
    "startupFrame": "i20~21",
    "blockFrame": -2,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "BT.1",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "BT.2",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i19~21",
    "blockFrame": -13,
    "hitFrame": 17,
    "counterHitFrame": ""
  },
  {
    "input": "BT.3",
    "hitLevel": "m",
    "damage": 33,
    "startupFrame": "i32~33",
    "blockFrame": "+8c",
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~17",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": "+41d (+33)"
  },
  {
    "input": "BT.1+4",
    "hitLevel": "h",
    "damage": 45,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+1",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i20~21",
    "blockFrame": "-13c",
    "hitFrame": 4,
    "counterHitFrame": "+16d"
  },
  {
    "input": "BT.d+3",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i18~20",
    "blockFrame": "-26c",
    "hitFrame": -3,
    "counterHitFrame": "+70a (+54)"
  },
  {
    "input": "FUFT.b+3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i30~33",
    "blockFrame": "-3~0",
    "hitFrame": "+28d (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "KNP.1",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i20~21",
    "blockFrame": "-13c",
    "hitFrame": 4,
    "counterHitFrame": "+16d"
  },
  {
    "input": "KNP.2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": 17,
    "counterHitFrame": ""
  },
  {
    "input": "KNP.3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i22~23",
    "blockFrame": -14,
    "hitFrame": "+77a (+55)",
    "counterHitFrame": ""
  },
  {
    "input": "KNP.4",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i18",
    "blockFrame": "-31c",
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "KNP.4,1+2",
    "hitLevel": "l,h",
    "damage": "10,24",
    "startupFrame": "i28",
    "blockFrame": -6,
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "KNP.3+4",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i31~34",
    "blockFrame": -7,
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "KNP.3+4,3+4",
    "hitLevel": "m,m",
    "damage": "30,20",
    "startupFrame": "i39~42",
    "blockFrame": "-3~0",
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+3+4",
    "hitLevel": "l",
    "damage": 19,
    "startupFrame": "i24~25",
    "blockFrame": -13,
    "hitFrame": "-2 (-10)",
    "counterHitFrame": ""
  },
  {
    "input": "STC.1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i20~21",
    "blockFrame": -15,
    "hitFrame": "+30a",
    "counterHitFrame": ""
  },
  {
    "input": "STC.2",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i14~15",
    "blockFrame": -3,
    "hitFrame": "+25g",
    "counterHitFrame": ""
  },
  {
    "input": "STC.3",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i22~23",
    "blockFrame": "+3b",
    "hitFrame": "+23d",
    "counterHitFrame": ""
  },
  {
    "input": "STC.4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": 14
  },
  {
    "input": "STC.1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18",
    "blockFrame": "-9c",
    "hitFrame": "+17d",
    "counterHitFrame": ""
  },
  {
    "input": "STC.F+3+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18",
    "blockFrame": "",
    "hitFrame": "+53a",
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "t",
    "damage": 55,
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  }
]

const fengFrameData = rawFengFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default fengFrameData;