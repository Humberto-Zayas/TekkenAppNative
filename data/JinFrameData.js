const rawJinFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": 16,
    "blockFrame": 1,
    "hitFrame": "+2c",
    "counterHitFrame": "+2c"
  },
  {
    "input": "H.db+1+2",
    "hitLevel": "m",
    "damage": 0,
    "startupFrame": "i19~34",
    "blockFrame": 4,
    "hitFrame": "+23c",
    "counterHitFrame": "+23c"
  },
  {
    "input": "H.db+1+2,1",
    "hitLevel": "m,m",
    "damage": "0,25",
    "startupFrame": "i20~22",
    "blockFrame": -13,
    "hitFrame": "+72a (56)",
    "counterHitFrame": "+72a (56)"
  },
  {
    "input": "H.db+1+2,2",
    "hitLevel": "m,s",
    "damage": "0,23",
    "startupFrame": "i11~12",
    "blockFrame": 4,
    "hitFrame": "+38a (28)",
    "counterHitFrame": "+38a (28)"
  },
  {
    "input": "H.db+1+2,3",
    "hitLevel": "m,m",
    "damage": "0,25",
    "startupFrame": "i26~28",
    "blockFrame": 2,
    "hitFrame": "+22a",
    "counterHitFrame": "+22a"
  },
  {
    "input": "H.db+1+2,4",
    "hitLevel": "m,l",
    "damage": "0,10",
    "startupFrame": "i16",
    "blockFrame": -23,
    "hitFrame": "+22a",
    "counterHitFrame": "+22a"
  },
  {
    "input": "H.db+1+2,4,4",
    "hitLevel": "m,l,m",
    "damage": "0,10,19",
    "startupFrame": "i25~26",
    "blockFrame": -23,
    "hitFrame": "+20d (-15)",
    "counterHitFrame": "+20d (-15)"
  },
  {
    "input": "H.db+1+2,DF+3",
    "hitLevel": "m,l",
    "damage": "0,24",
    "startupFrame": "i33~34",
    "blockFrame": -23,
    "hitFrame": "-2d",
    "counterHitFrame": "-2d"
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,h,m,th",
    "damage": "15,12,15,15",
    "startupFrame": "i15~16",
    "blockFrame": 3,
    "hitFrame": 0,
    "counterHitFrame": 0
  },
  {
    "input": "H.2+3,4",
    "hitLevel": "m,h,m",
    "damage": "12,20,21",
    "startupFrame": "i15~16",
    "blockFrame": 9,
    "hitFrame": "+32a (-4)",
    "counterHitFrame": "+32a (-4)"
  },
  {
    "input": "H.2+3,B",
    "hitLevel": "m,h,m,th",
    "damage": "15,12,15,15",
    "startupFrame": "",
    "blockFrame": 3,
    "hitFrame": "N/A",
    "counterHitFrame": "N/A"
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m,th,th",
    "damage": "10,10,35",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
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
    "startupFrame": "i10",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1",
    "hitLevel": "h,h,m",
    "damage": "5,12,20",
    "startupFrame": "i20-22",
    "blockFrame": -16,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,h,m",
    "damage": "5,12,20",
    "startupFrame": "i24~26",
    "blockFrame": 0,
    "hitFrame": "+31d",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,h",
    "damage": "5,12,26",
    "startupFrame": "i20-22",
    "blockFrame": -4,
    "hitFrame": "+23a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "1,3",
    "hitLevel": "h,l",
    "damage": "5,9",
    "startupFrame": "i16~17",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "1,3,4",
    "hitLevel": "h,l,l",
    "damage": "5,9,17",
    "startupFrame": "i23",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": "+28a"
  },
  {
    "input": "1+3",
    "hitLevel": "",
    "damage": "11,24 (35)",
    "startupFrame": "i12~i14",
    "blockFrame": 0,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "9,9",
    "startupFrame": "i16~17",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4",
    "hitLevel": "h,m,m",
    "damage": "9,9,18",
    "startupFrame": "i18~20",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": "+27a"
  },
  {
    "input": "2,1,4~4",
    "hitLevel": "h,m,l",
    "damage": "9,9,20",
    "startupFrame": "i20~21",
    "blockFrame": -31,
    "hitFrame": "+16d",
    "counterHitFrame": ""
  },
  {
    "input": "2,4",
    "hitLevel": "h,h",
    "damage": "9,20",
    "startupFrame": "i24~27",
    "blockFrame": -9,
    "hitFrame": 11,
    "counterHitFrame": ""
  },
  {
    "input": "2,4,F",
    "hitLevel": "h,h",
    "damage": "9,20",
    "startupFrame": "i24~27",
    "blockFrame": -6,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "h",
    "damage": "5,9,21 (35)",
    "startupFrame": "i12~i14",
    "blockFrame": -3,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "h",
    "damage": 19,
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "3,1",
    "hitLevel": "h,h",
    "damage": "19,7",
    "startupFrame": "i20",
    "blockFrame": -1,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "3,1,4",
    "hitLevel": "h,h,l",
    "damage": "19,7,18",
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": "+28d"
  },
  {
    "input": "3,1,F",
    "hitLevel": "h,h",
    "damage": "19,7",
    "startupFrame": "",
    "blockFrame": 4,
    "hitFrame": 12,
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i13~14",
    "blockFrame": -9,
    "hitFrame": 10,
    "counterHitFrame": "+13c"
  },
  {
    "input": "4~3",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i24~34",
    "blockFrame": "-14~-4",
    "hitFrame": "+2a~+12a",
    "counterHitFrame": "+2a~+12a?"
  },
  {
    "input": "1+2",
    "hitLevel": "m,m,h",
    "damage": "4,4,16",
    "startupFrame": "i13 (,i8, i12)",
    "blockFrame": -14,
    "hitFrame": "+12a (+3)/HE",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -16,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,1",
    "hitLevel": "m,m",
    "damage": "12,17",
    "startupFrame": "i22",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,3",
    "hitLevel": "m,h",
    "damage": "12,14",
    "startupFrame": "i20",
    "blockFrame": -8,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,3,F",
    "hitLevel": "m,h",
    "damage": "12,14",
    "startupFrame": "",
    "blockFrame": -7,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i16-17",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": 42
  },
  {
    "input": "f+4,F",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "",
    "blockFrame": -1,
    "hitFrame": 11,
    "counterHitFrame": 49
  },
  {
    "input": "f+1+2",
    "hitLevel": "h,h",
    "damage": "14,24",
    "startupFrame": "i14",
    "blockFrame": -6,
    "hitFrame": "+21a (+11)",
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
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -3,
    "hitFrame": 4,
    "counterHitFrame": 6
  },
  {
    "input": "df+1,4",
    "hitLevel": "m,h",
    "damage": "10,18",
    "startupFrame": "i18",
    "blockFrame": -9,
    "hitFrame": 10,
    "counterHitFrame": "+17a (+8)"
  },
  {
    "input": "df+1,4~4",
    "hitLevel": "m,m",
    "damage": "10,24",
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": "+10a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+2~df",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "",
    "blockFrame": -2,
    "hitFrame": 13,
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i12",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "df+3~3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23~i24",
    "blockFrame": "+6c~+7c",
    "hitFrame": "+13c~+14c",
    "counterHitFrame": ""
  },
  {
    "input": "df+3~3~df",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "",
    "blockFrame": "+2c~+3c",
    "hitFrame": "+9c~+10c",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i20~i21",
    "blockFrame": "+0~+1",
    "hitFrame": "+8c~+9c/HE",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+3",
    "hitLevel": "h",
    "damage": "4,5,5,26 (40)",
    "startupFrame": "i12",
    "blockFrame": -2,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "m, th",
    "damage": "21,10",
    "startupFrame": "i21",
    "blockFrame": -13,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "l",
    "damage": 22,
    "startupFrame": "i22",
    "blockFrame": -14,
    "hitFrame": 4,
    "counterHitFrame": "+71a (+55)"
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,4",
    "hitLevel": "l,h",
    "damage": "7,10",
    "startupFrame": "i20",
    "blockFrame": -11,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,4,3",
    "hitLevel": "l,h,m",
    "damage": "7,10,21",
    "startupFrame": "i24",
    "blockFrame": -12,
    "hitFrame": "+31(+23)",
    "counterHitFrame": ""
  },
  {
    "input": "d+3,4~4",
    "hitLevel": "l,m",
    "damage": "7,24",
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": "+10a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 11,
    "startupFrame": "i16",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "m,m",
    "damage": "5,15",
    "startupFrame": "i15",
    "blockFrame": -19,
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -10,
    "hitFrame": 4,
    "counterHitFrame": 4
  },
  {
    "input": "db+2,2",
    "hitLevel": "m,h",
    "damage": "12,11",
    "startupFrame": "i8",
    "blockFrame": -12,
    "hitFrame": 7,
    "counterHitFrame": "+43a"
  },
  {
    "input": "db+2,2,3",
    "hitLevel": "m,h,m",
    "damage": "12,11,21",
    "startupFrame": "i35~i36",
    "blockFrame": "-9~-8",
    "hitFrame": "+20a~+21a",
    "counterHitFrame": ""
  },
  {
    "input": "db+2,3",
    "hitLevel": "m,m",
    "damage": "12,23",
    "startupFrame": "i27~i29",
    "blockFrame": "-8~-6",
    "hitFrame": "+7a~+9a",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "h",
    "damage": 28,
    "startupFrame": "i19~i21",
    "blockFrame": "-10~-8",
    "hitFrame": "+17a~+19a",
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 18,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": 13
  },
  {
    "input": "db+1+2",
    "hitLevel": "m",
    "damage": 0,
    "startupFrame": 19,
    "blockFrame": -11,
    "hitFrame": 17,
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 11,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,2",
    "hitLevel": "h,h",
    "damage": "11,20",
    "startupFrame": "i12",
    "blockFrame": -10,
    "hitFrame": "+32a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3-b+2+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "m,m",
    "damage": "12,10",
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i16",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,2",
    "hitLevel": "m,m",
    "damage": "17,20",
    "startupFrame": "i15~i16",
    "blockFrame": "-9~-8",
    "hitFrame": "+9~+10",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,F",
    "hitLevel": "m",
    "damage": "17,17",
    "startupFrame": "i15~i16",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i17",
    "blockFrame": -7,
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": "",
    "startupFrame": "i23",
    "blockFrame": -12,
    "hitFrame": 6,
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
    "input": "b+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "m!",
    "damage": 50,
    "startupFrame": "i75~i76",
    "blockFrame": "",
    "hitFrame": "+9a (0)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2,b,b",
    "hitLevel": "m!",
    "damage": 50,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i15~i16",
    "blockFrame": "-7~-6",
    "hitFrame": "+6~+7",
    "counterHitFrame": "+19a (+10)"
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i22",
    "blockFrame": -9,
    "hitFrame": 6,
    "counterHitFrame": "+59a"
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+33a (+23a)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "h",
    "damage": "2,2,4,4,28 (40)",
    "startupFrame": "i12",
    "blockFrame": 0,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw",
    "hitLevel": "h",
    "damage": 50,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "h",
    "damage": "7,8,28 (43)",
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "Right Throw",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "b,f+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~i16",
    "blockFrame": -7,
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "b,f+2,1",
    "hitLevel": "m,h",
    "damage": "15,14",
    "startupFrame": "i15~i16",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": "+5/+9"
  },
  {
    "input": "b,f+2,1,2",
    "hitLevel": "m,h,m",
    "damage": "15,14,20",
    "startupFrame": "i15",
    "blockFrame": -5,
    "hitFrame": "+18a (+9)",
    "counterHitFrame": "+50a roll (+3)"
  },
  {
    "input": "b,f+2,1,df+2",
    "hitLevel": "m,h,m",
    "damage": "15,14,22",
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": "+37a (+27)",
    "counterHitFrame": ""
  },
  {
    "input": "b,f+2,3",
    "hitLevel": "m,m",
    "damage": "15,17",
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 6,
    "counterHitFrame": "+59a"
  },
  {
    "input": "b,f+2,3~F",
    "hitLevel": "m,m",
    "damage": "15,17,17",
    "startupFrame": "",
    "blockFrame": 2,
    "hitFrame": 17,
    "counterHitFrame": "+71a"
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i14",
    "blockFrame": -8,
    "hitFrame": "+15a (+6)/HE",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23~i25",
    "blockFrame": "-4~-2",
    "hitFrame": "+24a~+26a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3,1",
    "hitLevel": "m,h",
    "damage": "20,5",
    "startupFrame": "i23~i25",
    "blockFrame": 1,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i17~i18",
    "blockFrame": "-7~-6",
    "hitFrame": "+22a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+1+3",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -2,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "uf,n+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23~i25",
    "blockFrame": "-13~-11",
    "hitFrame": "+32a~+34a (+22a~+24a)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i22~i23",
    "blockFrame": "+6~+7",
    "hitFrame": "+13a~+14a (+3~+4)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13~i14",
    "blockFrame": "-6~-5",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,m",
    "damage": "10,16",
    "startupFrame": "i19~20",
    "blockFrame": "-8~-7",
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,3",
    "hitLevel": "m,h",
    "damage": "10,8",
    "startupFrame": "i14",
    "blockFrame": -6,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,3,2",
    "hitLevel": "m,h,m",
    "damage": "10,8,4",
    "startupFrame": "i18",
    "blockFrame": -11,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,3,2,1",
    "hitLevel": "m,h,m,m",
    "damage": "10,8,4,3",
    "startupFrame": "i10",
    "blockFrame": -11,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,3,2,1,4",
    "hitLevel": "m,h,m,m,l",
    "damage": "10,8,4,3,5",
    "startupFrame": "i20",
    "blockFrame": -31,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,3,2,1,4,2",
    "hitLevel": "m,h,m,m,l,m",
    "damage": "10,8,4,3,5,15",
    "startupFrame": "i31",
    "blockFrame": -16,
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,3~3",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "i23~i24",
    "blockFrame": "+6~+7",
    "hitFrame": "+13c~+14c",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,3~3,~df",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "",
    "blockFrame": "+2~+3",
    "hitFrame": "+9c~+10",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i14~15",
    "blockFrame": "-12~-11",
    "hitFrame": "+39a~+40a (+29~+30a)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~18",
    "blockFrame": "-9~-11",
    "hitFrame": "+10-~+12",
    "counterHitFrame": "+22a"
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i11~12",
    "blockFrame": "-3~-2",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "ws4,4",
    "hitLevel": "m,h",
    "damage": "13,15",
    "startupFrame": "i19~20",
    "blockFrame": "-7~-6",
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i25~i26",
    "blockFrame": -26,
    "hitFrame": "+22a~+23a",
    "counterHitFrame": ""
  },
  {
    "input": "CD.DF+4",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i20~i21",
    "blockFrame": "-31~-30",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "CD.DF+4,2",
    "hitLevel": "l,m",
    "damage": 1228,
    "startupFrame": "i31~i32",
    "blockFrame": "-16~-15",
    "hitFrame": "+21a~+22a",
    "counterHitFrame": ""
  },
  {
    "input": "CD.df:1",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i16~i17",
    "blockFrame": "-13~-12",
    "hitFrame": "+36a~+37a (+26~+27)",
    "counterHitFrame": ""
  },
  {
    "input": "CD.df:2",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i11~i12",
    "blockFrame": "+5~+6",
    "hitFrame": "+76a~+77a (+60~+61)",
    "counterHitFrame": ""
  },
  {
    "input": "CD.df+1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~i17",
    "blockFrame": "-13~-12",
    "hitFrame": "+32a~+33a (+22~+23)",
    "counterHitFrame": ""
  },
  {
    "input": "CD.df+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i11~12",
    "blockFrame": "-10~-9",
    "hitFrame": "+74a~75a (+58~+59)",
    "counterHitFrame": ""
  },
  {
    "input": "ZEN.1",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i16~i17",
    "blockFrame": "-3~-2",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "ZEN.1,2",
    "hitLevel": "m,m",
    "damage": "14,21",
    "startupFrame": "i16",
    "blockFrame": "-14~-13",
    "hitFrame": "+32a~+33a (+6~+7)",
    "counterHitFrame": ""
  },
  {
    "input": "ZEN.1,3",
    "hitLevel": "m,h,th",
    "damage": "14,14,14",
    "startupFrame": "i16",
    "blockFrame": "-9~-8",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "ZEN.2",
    "hitLevel": "h",
    "damage": 27,
    "startupFrame": "i21~i22",
    "blockFrame": "-5~-4",
    "hitFrame": "+17a~+18a (+8~+9)/HE",
    "counterHitFrame": ""
  },
  {
    "input": "ZEN.3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17~i18",
    "blockFrame": "-9~-8",
    "hitFrame": "+10~+11",
    "counterHitFrame": ""
  },
  {
    "input": "ZEN.4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i27~i33",
    "blockFrame": "+2~+8",
    "hitFrame": "+17d~+23d",
    "counterHitFrame": ""
  },
  {
    "input": "ZEN.1+2",
    "hitLevel": "l th,m",
    "damage": "10, 20",
    "startupFrame": "i24",
    "blockFrame": -14,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ZEN.3+4",
    "hitLevel": "h",
    "damage": "",
    "startupFrame": "i21~i27",
    "blockFrame": "+9~+15",
    "hitFrame": "+19~ (+9~)",
    "counterHitFrame": ""
  },
  {
    "input": "ZEN.3+4~DF",
    "hitLevel": "h",
    "damage": "",
    "startupFrame": "i21~i27",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "ZEN.u+1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14~i16",
    "blockFrame": "-16~-14",
    "hitFrame": "+31a~+29a (+21~+19)",
    "counterHitFrame": ""
  }
]

const jinFrameData = rawJinFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default jinFrameData;