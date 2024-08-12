const rawNinaFrameData = [
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
    "input": "H.qcf+4,3,1+2",
    "hitLevel": "m,h,h,h,h,h",
    "damage": "15,23,6,6,6,10",
    "startupFrame": "i14, i25, i28 i35 i42",
    "blockFrame": -2,
    "hitFrame": "+13a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "H.b+1+2",
    "hitLevel": "m,m,h,h,h,h",
    "damage": "5,20,5,5,5,5",
    "startupFrame": "i16 i8~10, i28 i35 i42 i49",
    "blockFrame": 2,
    "hitFrame": "+33a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "H.b+3+4,1+2",
    "hitLevel": "h,h,h,h,h",
    "damage": "16,6,6,6,10",
    "startupFrame": "i14~15, i28 i35 i42",
    "blockFrame": -2,
    "hitFrame": "+29a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "H.ws1,1+2",
    "hitLevel": "m,h,h,h,h",
    "damage": "17,6,6,6,10",
    "startupFrame": "i13~14,i25 i35 i39 i42",
    "blockFrame": -2,
    "hitFrame": "+29a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "H.ws4,3,1+2",
    "hitLevel": "m,h,h,h,h,h",
    "damage": "15,23,6,6,6,10",
    "startupFrame": "i11~12, i25, i28 i35 i42 i13",
    "blockFrame": -2,
    "hitFrame": "+29a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,h,h,h,h,m",
    "damage": "20,30",
    "startupFrame": "i16 i28 i35 i42 i49 i90~91",
    "blockFrame": "+5~+6",
    "hitFrame": "-2d",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,h,h,h,h",
    "damage": "20,9,12,9,12",
    "startupFrame": "i16 i28 i35 i42 i49",
    "blockFrame": 14,
    "hitFrame": "+43a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m,t",
    "damage": 55,
    "startupFrame": "i20~21",
    "blockFrame": "-15~-14",
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
    "damage": "5,10",
    "startupFrame": ",i10",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1",
    "hitLevel": "h,h,h",
    "damage": "5,10,17",
    "startupFrame": ",i26~27",
    "blockFrame": "-3~-2",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1,1+2",
    "hitLevel": "h,h,h,h,h,h",
    "damage": "5,10,17,6,6,6",
    "startupFrame": ",i25 i32 i39",
    "blockFrame": -9,
    "hitFrame": "+34a (-24)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,h",
    "damage": "5,10,22",
    "startupFrame": ",i22",
    "blockFrame": -6,
    "hitFrame": "+20a (+11)",
    "counterHitFrame": "+49a"
  },
  {
    "input": "1,2,1+2",
    "hitLevel": "h,h,m",
    "damage": "5,10,22",
    "startupFrame": ",i23",
    "blockFrame": -14,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": "+10 +56a"
  },
  {
    "input": "1,4",
    "hitLevel": "h,h",
    "damage": "5,17",
    "startupFrame": ",i17~18",
    "blockFrame": "-4~-3",
    "hitFrame": "+1~+2",
    "counterHitFrame": "+50a"
  },
  {
    "input": "1,4,1",
    "hitLevel": "h,h,m",
    "damage": "5,17,21",
    "startupFrame": ",i25~26",
    "blockFrame": "-11~-10",
    "hitFrame": "+15g~+16g",
    "counterHitFrame": "+67a (+47a)"
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i10",
    "blockFrame": 1,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "2,3",
    "hitLevel": "h,m",
    "damage": "10,15",
    "startupFrame": ",i18",
    "blockFrame": -13,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i14",
    "blockFrame": -16,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "3,2",
    "hitLevel": "h,m",
    "damage": "14,22",
    "startupFrame": ",i19",
    "blockFrame": -9,
    "hitFrame": "+36a",
    "counterHitFrame": ""
  },
  {
    "input": "3,3",
    "hitLevel": "h,h",
    "damage": "14,4",
    "startupFrame": ",i17",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "3,3,3",
    "hitLevel": "h,h,h",
    "damage": "14,4,6",
    "startupFrame": ",i17",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "3,3,3,4",
    "hitLevel": "h,h,h,h",
    "damage": "14,4,6,20",
    "startupFrame": ",i24",
    "blockFrame": -6,
    "hitFrame": "+20a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "3,4",
    "hitLevel": "h,h",
    "damage": "14,20",
    "startupFrame": ",i22",
    "blockFrame": -6,
    "hitFrame": "+20a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i11",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": "+7s"
  },
  {
    "input": "4,2",
    "hitLevel": "h,m",
    "damage": "15,22",
    "startupFrame": ",i19",
    "blockFrame": -9,
    "hitFrame": "+36a",
    "counterHitFrame": ""
  },
  {
    "input": "4,3",
    "hitLevel": "h,m",
    "damage": "15,20",
    "startupFrame": ",i29~30",
    "blockFrame": "-2~-1",
    "hitFrame": "+5c~+6c",
    "counterHitFrame": ""
  },
  {
    "input": "4,4",
    "hitLevel": "h,h",
    "damage": "15,21",
    "startupFrame": ",i28~39",
    "blockFrame": -8,
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": "4,4,4",
    "hitLevel": "h,h,L",
    "damage": "15,21,20",
    "startupFrame": ",i30~31",
    "blockFrame": "-12~-11",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+46a"
  },
  {
    "input": "4,4,3+4",
    "hitLevel": "h,h,M,M",
    "damage": "15,21,8,21",
    "startupFrame": ",i35~39 i43~49",
    "blockFrame": "-6~+0",
    "hitFrame": "+20a",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 19,
    "startupFrame": "i16~17",
    "blockFrame": "-3~-2",
    "hitFrame": "+9~+10",
    "counterHitFrame": ""
  },
  {
    "input": "1+4",
    "hitLevel": "m,m",
    "damage": "4,20",
    "startupFrame": "i15~16 i28~29",
    "blockFrame": "-5~-4",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+6c~+7c"
  },
  {
    "input": "3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18~19",
    "blockFrame": "-10~-9",
    "hitFrame": "+11g~+12g",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i13",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "h,m",
    "damage": "12,12",
    "startupFrame": ",i19~20",
    "blockFrame": "-13~-12",
    "hitFrame": "-6s~-5s",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1,3",
    "hitLevel": "h,m,M",
    "damage": "12,12,20",
    "startupFrame": ",i27~29",
    "blockFrame": "-15~-13",
    "hitFrame": "+27a",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1,4",
    "hitLevel": "h,m,h",
    "damage": "12,12,22",
    "startupFrame": ",i25~27",
    "blockFrame": "-3~-1",
    "hitFrame": "+23a (+14)",
    "counterHitFrame": "+40a"
  },
  {
    "input": "f+3",
    "hitLevel": "h,h",
    "damage": "10,20",
    "startupFrame": "i14~15 i25~26",
    "blockFrame": "+3~+4",
    "hitFrame": "+24a (+15)",
    "counterHitFrame": "+54a"
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i21~22",
    "blockFrame": "-5~-4",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,2",
    "hitLevel": "m,h",
    "damage": "15,22",
    "startupFrame": ",i18",
    "blockFrame": -9,
    "hitFrame": "+39a (-19)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i17",
    "blockFrame": -14,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i13~14",
    "blockFrame": "-1~+0",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,h",
    "damage": "13,10",
    "startupFrame": ",i16",
    "blockFrame": -3,
    "hitFrame": 2,
    "counterHitFrame": 9
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15~16",
    "blockFrame": "-7~-6",
    "hitFrame": "+34a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": 1
  },
  {
    "input": "df+3,1",
    "hitLevel": "m,h",
    "damage": "13,10",
    "startupFrame": ",i30",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,1,2",
    "hitLevel": "m,h,m",
    "damage": "13,10,20",
    "startupFrame": ",i26~27",
    "blockFrame": "-12~-11",
    "hitFrame": "+16a",
    "counterHitFrame": "+16a"
  },
  {
    "input": "df+3,2",
    "hitLevel": "m,h",
    "damage": "13,12",
    "startupFrame": ",i19",
    "blockFrame": 1,
    "hitFrame": 5,
    "counterHitFrame": 12
  },
  {
    "input": "df+3,2,1",
    "hitLevel": "m,h,h",
    "damage": "13,12,6",
    "startupFrame": ",i16",
    "blockFrame": -3,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2,1,4",
    "hitLevel": "m,h,h,L",
    "damage": "13,12,612",
    "startupFrame": ",i23",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2,3",
    "hitLevel": "m,h,m",
    "damage": "13,12,21",
    "startupFrame": ",i19~20",
    "blockFrame": "-17~-16",
    "hitFrame": "+36a(+26)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2,4",
    "hitLevel": "m,h,h",
    "damage": "13,12,22",
    "startupFrame": ",i22",
    "blockFrame": -6,
    "hitFrame": "+20a",
    "counterHitFrame": "+49a"
  },
  {
    "input": "df+3,3",
    "hitLevel": "m,m",
    "damage": "13,14",
    "startupFrame": "i28",
    "blockFrame": -10,
    "hitFrame": "+2c",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i12",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i31~35",
    "blockFrame": -37,
    "hitFrame": "+14a",
    "counterHitFrame": "+27a"
  },
  {
    "input": "d+1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "d+1,4",
    "hitLevel": "sl,m",
    "damage": "5,10",
    "startupFrame": ",i16~17",
    "blockFrame": "-11~-10",
    "hitFrame": "+0~+1",
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "L",
    "damage": 13,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": 0,
    "counterHitFrame": 5
  },
  {
    "input": "d+2,2",
    "hitLevel": "L,m",
    "damage": "13,20",
    "startupFrame": ",i28~29",
    "blockFrame": "-12~-11",
    "hitFrame": "+17a (+0)",
    "counterHitFrame": "+71a (+55)"
  },
  {
    "input": "d+3",
    "hitLevel": "L",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,2",
    "hitLevel": "L,m",
    "damage": "10,18",
    "startupFrame": ",i25~27",
    "blockFrame": "-11~-9",
    "hitFrame": "+12~+14",
    "counterHitFrame": ""
  },
  {
    "input": "d+3,4",
    "hitLevel": "L,h",
    "damage": "10,14",
    "startupFrame": ",i20",
    "blockFrame": -8,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,4,3",
    "hitLevel": "L,h,m",
    "damage": "10,14,20",
    "startupFrame": ",i29~30",
    "blockFrame": "-7~-6",
    "hitFrame": "+22a",
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
    "input": "d+4,1",
    "hitLevel": "l,h",
    "damage": "6,10",
    "startupFrame": ",i24",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": 11
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i24~25",
    "blockFrame": "-5~-4",
    "hitFrame": "+8~+9",
    "counterHitFrame": "+11~+12"
  },
  {
    "input": "db+3",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+4c",
    "counterHitFrame": "+13a"
  },
  {
    "input": "db+4",
    "hitLevel": "L",
    "damage": 5,
    "startupFrame": "i16~17",
    "blockFrame": "-9a",
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "db+4,3",
    "hitLevel": "L,m",
    "damage": "5,21",
    "startupFrame": ",i27~28",
    "blockFrame": "-13~-12",
    "hitFrame": "+71a (+55)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "h,m",
    "damage": "5,22",
    "startupFrame": "i11 i30",
    "blockFrame": -14,
    "hitFrame": "+10a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18~19",
    "blockFrame": "-17~-16",
    "hitFrame": "+36 (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12~13",
    "blockFrame": "-7~-6",
    "hitFrame": "+4~-5",
    "counterHitFrame": ""
  },
  {
    "input": "b+1,4",
    "hitLevel": "h,M",
    "damage": "10,22",
    "startupFrame": ",i28~29",
    "blockFrame": "-12~-11",
    "hitFrame": "+7~+8",
    "counterHitFrame": "+71a (+55)"
  },
  {
    "input": "b+1+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i12",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2",
    "hitLevel": "h,h",
    "damage": "12,16",
    "startupFrame": ",i14~15",
    "blockFrame": "-6~-5",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2,2",
    "hitLevel": "h,h,h",
    "damage": "12,16,20",
    "startupFrame": ",i25~26",
    "blockFrame": "-9~-8",
    "hitFrame": "+9g~+10g",
    "counterHitFrame": "+45a"
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i18",
    "blockFrame": -6,
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,4",
    "hitLevel": "m,h",
    "damage": "10,17",
    "startupFrame": "i20~21",
    "blockFrame": "-8~-7",
    "hitFrame": "+19a",
    "counterHitFrame": "+45a"
  },
  {
    "input": "b+4",
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": 9,
    "counterHitFrame": 12
  },
  {
    "input": "b+1+2",
    "hitLevel": "m,m",
    "damage": "5,20",
    "startupFrame": "i16 i8~10",
    "blockFrame": -7,
    "hitFrame": "+5a",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4",
    "hitLevel": "m,m",
    "damage": "4,14",
    "startupFrame": "i15 i30~31",
    "blockFrame": "-15~-14",
    "hitFrame": "+34a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2+3",
    "hitLevel": "m!",
    "damage": 50,
    "startupFrame": "i65",
    "blockFrame": "",
    "hitFrame": "+25a",
    "counterHitFrame": ""
  },
  {
    "input": "b+3+4",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i14~15",
    "blockFrame": "-9~-8",
    "hitFrame": "+6~+7",
    "counterHitFrame": ""
  },
  {
    "input": "b+3+4,3",
    "hitLevel": "h,M",
    "damage": "16,20",
    "startupFrame": ",i28~29",
    "blockFrame": "-15~-14",
    "hitFrame": "+27a",
    "counterHitFrame": ""
  },
  {
    "input": "b+3+4,1+2",
    "hitLevel": "h,h,h,h",
    "damage": "16,6,6,6",
    "startupFrame": ",i28 i35 i42",
    "blockFrame": -9,
    "hitFrame": "+34a (-24)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i20~21",
    "blockFrame": "-16~-15",
    "hitFrame": "+20a",
    "counterHitFrame": ""
  },
  {
    "input": "ub+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "u+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14",
    "blockFrame": -15,
    "hitFrame": "+16a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "u+4",
    "hitLevel": "M",
    "damage": 21,
    "startupFrame": "i23~28",
    "blockFrame": "+0c~+5c",
    "hitFrame": "+5c~+10c",
    "counterHitFrame": "+22a"
  },
  {
    "input": "uf+1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i26",
    "blockFrame": -5,
    "hitFrame": "+26a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i18",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+2,1",
    "hitLevel": "m,m",
    "damage": "10,10",
    "startupFrame": ",i21",
    "blockFrame": -13,
    "hitFrame": "+49a (+40)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14",
    "blockFrame": -10,
    "hitFrame": "+21 (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i18",
    "blockFrame": -9,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,3",
    "hitLevel": "h,L",
    "damage": "23,10",
    "startupFrame": ",i18",
    "blockFrame": -19,
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,3,4",
    "hitLevel": "h,L,h",
    "damage": "23,10,14",
    "startupFrame": ",i20",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m,t",
    "damage": "20,13",
    "startupFrame": "i23~30",
    "blockFrame": "-23a~-16a",
    "hitFrame": "+9a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": ",t",
    "damage": ",18",
    "startupFrame": "i23",
    "blockFrame": "-23a~-16a",
    "hitFrame": "+9a (-1)",
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
    "input": "BT+1",
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i8",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "d,DF+4",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i20~24",
    "blockFrame": -37,
    "hitFrame": "+14a",
    "counterHitFrame": "+27a"
  },
  {
    "input": "db,qcf,n,DB+2+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i14",
    "blockFrame": -4,
    "hitFrame": "+32a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "M",
    "damage": 24,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": 8,
    "counterHitFrame": "+52a"
  },
  {
    "input": "f,F+4",
    "hitLevel": "M",
    "damage": 20,
    "startupFrame": "i28~32",
    "blockFrame": "-10~-6",
    "hitFrame": "+9c~+13c",
    "counterHitFrame": "+21a"
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "M",
    "damage": 26,
    "startupFrame": "i23~24",
    "blockFrame": "-5~-4",
    "hitFrame": "+12a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2*",
    "hitLevel": "M",
    "damage": 32,
    "startupFrame": "i33~34",
    "blockFrame": "+11g~+12g",
    "hitFrame": "+19a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "qcb",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
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
    "input": "uf,n,D+3",
    "hitLevel": "L",
    "damage": 15,
    "startupFrame": "i43",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "uf,n,D+3,2",
    "hitLevel": "L,m",
    "damage": "15,10",
    "startupFrame": "i25~27",
    "blockFrame": "-11~-9",
    "hitFrame": "+12~+14",
    "counterHitFrame": ""
  },
  {
    "input": "uf,n,D+3,4",
    "hitLevel": "L,h",
    "damage": "15,14",
    "startupFrame": ",i20",
    "blockFrame": -8,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "uf,n,D+3,4,3",
    "hitLevel": "L,h,m",
    "damage": "15,14,20",
    "startupFrame": ",i29~30",
    "blockFrame": "-7~-6",
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i20~21",
    "blockFrame": "-13~-12",
    "hitFrame": "-2~-1",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3,3",
    "hitLevel": "m,M",
    "damage": "12,20",
    "startupFrame": ",i32~35",
    "blockFrame": "-4~-1",
    "hitFrame": "+17a",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3,4",
    "hitLevel": "m,m",
    "damage": "12,21",
    "startupFrame": ",i24~25",
    "blockFrame": "-13~-12",
    "hitFrame": "+34a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+1+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i20~21",
    "blockFrame": "+4~+5",
    "hitFrame": "+12a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i13~14",
    "blockFrame": "-6~-5",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,4",
    "hitLevel": "m,m",
    "damage": "17,20",
    "startupFrame": ",i34~35",
    "blockFrame": "-3c~-2c",
    "hitFrame": "+17a",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,1+2",
    "hitLevel": "m,h,h,h",
    "damage": "17,6,6,6",
    "startupFrame": ",i25 i35 i39",
    "blockFrame": -9,
    "hitFrame": "+34a (-24)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": "-13~-12",
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i13",
    "blockFrame": -13,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i11~12",
    "blockFrame": "-4~-3",
    "hitFrame": "+7~+8",
    "counterHitFrame": ""
  },
  {
    "input": "ws4,2",
    "hitLevel": "m,m",
    "damage": "15,22",
    "startupFrame": ",i19",
    "blockFrame": -9,
    "hitFrame": "+36a",
    "counterHitFrame": ""
  },
  {
    "input": "ws4,3",
    "hitLevel": "m,h",
    "damage": "15,24",
    "startupFrame": ",i25",
    "blockFrame": -10,
    "hitFrame": "+14a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "ws4,3,1+2",
    "hitLevel": "m,h,h,h,h",
    "damage": "15,24,6,6,6",
    "startupFrame": ",i28,i35,i42",
    "blockFrame": -9,
    "hitFrame": "+34a (-24)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i17",
    "blockFrame": -14,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18~19",
    "blockFrame": "-17~-16",
    "hitFrame": "+36 (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "SS.1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14~15",
    "blockFrame": "-10~-9",
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": "SS.1,2",
    "hitLevel": "m,m",
    "damage": "15,15",
    "startupFrame": ",i16~18",
    "blockFrame": "-3~-1",
    "hitFrame": "+3~+5",
    "counterHitFrame": ""
  },
  {
    "input": "SS.2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i13~14",
    "blockFrame": "-14~-13",
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "SS.4",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i20",
    "blockFrame": -14,
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "SS.4,2",
    "hitLevel": "L,h",
    "damage": "14,22",
    "startupFrame": "i22",
    "blockFrame": -7,
    "hitFrame": "+37a (-21)",
    "counterHitFrame": ""
  },
  {
    "input": "SS.1+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i19",
    "blockFrame": -9,
    "hitFrame": "+36a",
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
    "input": "FC.1,4",
    "hitLevel": "sl,m",
    "damage": "5,10",
    "startupFrame": ",i16~17",
    "blockFrame": "-11~-10",
    "hitFrame": "+0~+1",
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
    "input": "FC.df+4",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i31~35",
    "blockFrame": -37,
    "hitFrame": "+14a",
    "counterHitFrame": "+27a"
  },
  {
    "input": "qcf+1",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i14~16",
    "blockFrame": "+1~+3",
    "hitFrame": "+3~+5",
    "counterHitFrame": "+47a (+37)"
  },
  {
    "input": "qcf+2",
    "hitLevel": "M",
    "damage": 25,
    "startupFrame": "i17~18",
    "blockFrame": "-8~-7",
    "hitFrame": "+32a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+3",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i19~28",
    "blockFrame": "-20~-11",
    "hitFrame": "+0~+9",
    "counterHitFrame": "+21a"
  },
  {
    "input": "qcf+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": -8,
    "hitFrame": "+6s",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+4,3",
    "hitLevel": "m,h",
    "damage": "15,23",
    "startupFrame": ",i25",
    "blockFrame": -10,
    "hitFrame": "+14a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+4,3,1+2",
    "hitLevel": "m,h,h,h,h",
    "damage": "15,23,6,6,6",
    "startupFrame": ",i28 i35 i42",
    "blockFrame": -9,
    "hitFrame": "+24a (-9)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+2+3",
    "hitLevel": "h!",
    "damage": 10,
    "startupFrame": "i24~38",
    "blockFrame": "",
    "hitFrame": "+36g~+50g",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+3+4",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i17~18",
    "blockFrame": "-17~-16",
    "hitFrame": "-7d",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+4",
    "hitLevel": "M",
    "damage": 20,
    "startupFrame": "i19~20",
    "blockFrame": "-12~-11",
    "hitFrame": "+68a (+52)",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -6,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": 0,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "2+4,2",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": 0,
    "hitFrame": "-5d",
    "counterHitFrame": ""
  },
  {
    "input": "ABK.1",
    "hitLevel": "t",
    "damage": 15,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "ABK.2",
    "hitLevel": "t",
    "damage": 15,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "BHS.1",
    "hitLevel": "t",
    "damage": 8,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "BHS.2",
    "hitLevel": "t",
    "damage": "9,6",
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "BHS.1+2",
    "hitLevel": "t",
    "damage": "10,10",
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "BTR.2",
    "hitLevel": "t",
    "damage": 10,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "t",
    "damage": 60,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "CHD.1",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "+0d",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "CHD.2",
    "hitLevel": "t",
    "damage": 8,
    "startupFrame": "",
    "blockFrame": "+0d",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "HHD.1",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "",
    "blockFrame": -9,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "HHD.2",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": -9,
    "hitFrame": "+0d",
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
    "input": "NTM.1",
    "hitLevel": "t",
    "damage": 15,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "NTM.2",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "Right throw",
    "hitLevel": "t",
    "damage": 38,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "STB.2",
    "hitLevel": "t",
    "damage": 30,
    "startupFrame": "",
    "blockFrame": 0,
    "hitFrame": "-6d",
    "counterHitFrame": ""
  },
  {
    "input": "TSS.1",
    "hitLevel": "t",
    "damage": 15,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "TSS.2",
    "hitLevel": "t",
    "damage": 20,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "df,df+1",
    "hitLevel": "t",
    "damage": 43,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "-2d",
    "counterHitFrame": ""
  },
  {
    "input": "df+1+3",
    "hitLevel": "t",
    "damage": 37,
    "startupFrame": "i11",
    "blockFrame": -2,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+4",
    "hitLevel": "t",
    "damage": 37,
    "startupFrame": "i11",
    "blockFrame": -2,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+3",
    "hitLevel": "t",
    "damage": 15,
    "startupFrame": "i13",
    "blockFrame": -2,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "f+2+4",
    "hitLevel": "t",
    "damage": 15,
    "startupFrame": "i13",
    "blockFrame": -2,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "qcb,B+1+3",
    "hitLevel": "t",
    "damage": 15,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": "30,10",
    "startupFrame": "i12",
    "blockFrame": 0,
    "hitFrame": "+29a (-32)",
    "counterHitFrame": ""
  }
]

const ninaFrameData = rawNinaFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default ninaFrameData;