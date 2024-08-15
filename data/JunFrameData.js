const rawJunFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": "12 (12)",
    "startupFrame": "i16",
    "blockFrame": 1,
    "hitFrame": "+2c",
    "counterHitFrame": ""
  },
  {
    "input": "H.1+2,F",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i13",
    "blockFrame": 5,
    "hitFrame": "+43a (+35)",
    "counterHitFrame": ""
  },
  {
    "input": "H.GEN.2+3",
    "hitLevel": "l,m",
    "damage": "14,28",
    "startupFrame": "i20 i26",
    "blockFrame": -12,
    "hitFrame": "+33 (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "H.IZU.3,F",
    "hitLevel": "m,h",
    "damage": "10,16",
    "startupFrame": "i16~15 i14~15",
    "blockFrame": "+5~+6",
    "hitFrame": "+36a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "H.MIA.2,F",
    "hitLevel": "sm",
    "damage": 30,
    "startupFrame": "i16",
    "blockFrame": 5,
    "hitFrame": "+36a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "H.SS.4,F",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18~20",
    "blockFrame": "+5~+7",
    "hitFrame": "+67a (+50)",
    "counterHitFrame": ""
  },
  {
    "input": "H.f+1+2,P",
    "hitLevel": "h",
    "damage": 0,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "+40g",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,m",
    "damage": "20,30",
    "startupFrame": "i13 i32~75",
    "blockFrame": "-6~+37g",
    "hitFrame": "+21a~+64a (-5~+38)",
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
    "hitLevel": "h,m",
    "damage": "5,15",
    "startupFrame": ",i25",
    "blockFrame": -1,
    "hitFrame": 8,
    "counterHitFrame": 13
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,8",
    "startupFrame": ",i16",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,2",
    "hitLevel": "h,h,h",
    "damage": "5,8,17",
    "startupFrame": ",i16~17",
    "blockFrame": "+6~+7",
    "hitFrame": "+11~+12",
    "counterHitFrame": "+20c~+21c"
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,m",
    "damage": "5,8,16",
    "startupFrame": ",i27~28",
    "blockFrame": "-12~-11",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+15a (+6)"
  },
  {
    "input": "1,2,u",
    "hitLevel": "h,h",
    "damage": "5,8",
    "startupFrame": "",
    "blockFrame": 1,
    "hitFrame": "+10g",
    "counterHitFrame": ""
  },
  {
    "input": "1,3",
    "hitLevel": "h,L",
    "damage": "5,12",
    "startupFrame": ",i23",
    "blockFrame": -12,
    "hitFrame": 2,
    "counterHitFrame": "+6c"
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 7,
    "startupFrame": "i12",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "7,9",
    "startupFrame": ",i21",
    "blockFrame": -6,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4",
    "hitLevel": "h,m,m",
    "damage": "7,9,12",
    "startupFrame": ",i10",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4,1",
    "hitLevel": "h,m,m,m",
    "damage": "7,9,12,30",
    "startupFrame": ",i30",
    "blockFrame": -9,
    "hitFrame": "+10a (+1)",
    "counterHitFrame": "+42a (-5)"
  },
  {
    "input": "2,1,4,3",
    "hitLevel": "h,m,m,h",
    "damage": "7,9,12,21",
    "startupFrame": ",i25",
    "blockFrame": -9,
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,1+2",
    "hitLevel": "h,m,h",
    "damage": "7,9,21",
    "startupFrame": ",i22",
    "blockFrame": 2,
    "hitFrame": "+48a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": ",i14~15",
    "blockFrame": "-13~-12",
    "hitFrame": "+18a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": "+32a"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i13",
    "blockFrame": -12,
    "hitFrame": "+28a",
    "counterHitFrame": ""
  },
  {
    "input": "1+4",
    "hitLevel": "SL,h",
    "damage": "5,8",
    "startupFrame": "i14 i17",
    "blockFrame": -3,
    "hitFrame": -3,
    "counterHitFrame": 4
  },
  {
    "input": "1+4,2",
    "hitLevel": "SL,h,h",
    "damage": "5,8,10",
    "startupFrame": ",i19",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "1+4,2,4",
    "hitLevel": "SL,h,h,m",
    "damage": "5,8,10,23",
    "startupFrame": ",i24",
    "blockFrame": -15,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "1+4,2,d+4",
    "hitLevel": "SL,h,h,L",
    "damage": "5,8,10,15",
    "startupFrame": ",i24~25",
    "blockFrame": "-23~-22",
    "hitFrame": "+27a",
    "counterHitFrame": ""
  },
  {
    "input": "1+4,3",
    "hitLevel": "SL,h,m",
    "damage": "5,8,15",
    "startupFrame": ",i24~25",
    "blockFrame": "-11~-10",
    "hitFrame": "+1~+2",
    "counterHitFrame": ""
  },
  {
    "input": "1+4,3,1",
    "hitLevel": "SL,h,m,m",
    "damage": "5,8,15,20",
    "startupFrame": ",i33~34",
    "blockFrame": "-13~-12",
    "hitFrame": "+17a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "1+4,3,4",
    "hitLevel": "SL,h,m,L",
    "damage": "5,8,15,17",
    "startupFrame": ",i25~26",
    "blockFrame": "-13~-12",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+26a"
  },
  {
    "input": "3+4",
    "hitLevel": "m,M,M",
    "damage": "6,18,20",
    "startupFrame": "i23~24 i30~31 i16",
    "blockFrame": "-6~-5",
    "hitFrame": "+26a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i20",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": 5
  },
  {
    "input": "f+2",
    "hitLevel": "M",
    "damage": 20,
    "startupFrame": "i17~18",
    "blockFrame": "-18~-17",
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1+2",
    "hitLevel": "M,M",
    "damage": "20,20",
    "startupFrame": "i29~32",
    "blockFrame": "-9~-8",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,2",
    "hitLevel": "m,h",
    "damage": "13,17",
    "startupFrame": ",i20~21",
    "blockFrame": "+6~+7",
    "hitFrame": "+11~+12",
    "counterHitFrame": "+20c~+21C"
  },
  {
    "input": "f+3,4",
    "hitLevel": "m,M",
    "damage": "13,22",
    "startupFrame": ",i20~22",
    "blockFrame": "-13~-11",
    "hitFrame": "+28a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3~u",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "",
    "blockFrame": -2,
    "hitFrame": "+14g",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i19~21",
    "blockFrame": "+3~+5",
    "hitFrame": "+13~+15",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "h",
    "damage": 0,
    "startupFrame": "i12",
    "blockFrame": 2,
    "hitFrame": "+26g",
    "counterHitFrame": 23
  },
  {
    "input": "f+2+3",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i28~29",
    "blockFrame": "+0~+1",
    "hitFrame": "+25a",
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
    "startupFrame": "i13~14",
    "blockFrame": "-3~-2",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,1",
    "hitLevel": "m,m",
    "damage": "10,17",
    "startupFrame": ",i24~25",
    "blockFrame": "-11~-10",
    "hitFrame": "+2~+3",
    "counterHitFrame": "+13g~+14g"
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,h",
    "damage": "10,12",
    "startupFrame": ",i22~23",
    "blockFrame": "-4~-3",
    "hitFrame": "+6~+7",
    "counterHitFrame": "+11~+12"
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i16~17",
    "blockFrame": "-12~-11",
    "hitFrame": "+29a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2,1+2",
    "hitLevel": "m,M",
    "damage": "14,12",
    "startupFrame": "i25~26",
    "blockFrame": "-9~-8",
    "hitFrame": "+38a (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i17",
    "blockFrame": -8,
    "hitFrame": "+19a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": "+48a (+17)",
    "counterHitFrame": "+52a"
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
    "damage": 17,
    "startupFrame": "i24~25",
    "blockFrame": "-11~-10",
    "hitFrame": "+1~+2",
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4,1",
    "hitLevel": "m,m",
    "damage": "17,20",
    "startupFrame": ",i33~34",
    "blockFrame": "-13~-12",
    "hitFrame": "+17a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4,4",
    "hitLevel": "m,L",
    "damage": "17,17",
    "startupFrame": ",i25~26",
    "blockFrame": "-13~-12",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+26a"
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i20~21",
    "blockFrame": "-4c~-3c",
    "hitFrame": "+9c~+10c",
    "counterHitFrame": "+18a"
  },
  {
    "input": "d+4",
    "hitLevel": "L",
    "damage": 10,
    "startupFrame": "i15",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "d+4,4",
    "hitLevel": "L,h",
    "damage": "10,20",
    "startupFrame": ",i25~26",
    "blockFrame": "-9~-8",
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "M",
    "damage": 28,
    "startupFrame": "i26",
    "blockFrame": -9,
    "hitFrame": "+72a (+56)",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "l,h",
    "damage": "5,20",
    "startupFrame": "i14 i24~27",
    "blockFrame": -25,
    "hitFrame": "-6 (high blocked)",
    "counterHitFrame": "+30a (+20)"
  },
  {
    "input": "db+1",
    "hitLevel": "m",
    "damage": 7,
    "startupFrame": "i15~16",
    "blockFrame": "-8~-7",
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,1",
    "hitLevel": "m,m",
    "damage": "7,8",
    "startupFrame": ",i21",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,1,1+2",
    "hitLevel": "m,m,m,m,m",
    "damage": "7,8,5,5,20",
    "startupFrame": ",i17 i26 i49",
    "blockFrame": -15,
    "hitFrame": "+21a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "L",
    "damage": 15,
    "startupFrame": "i23~24",
    "blockFrame": "-12~-11",
    "hitFrame": "+2~+3",
    "counterHitFrame": "+14g~+15g"
  },
  {
    "input": "db+3",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i18",
    "blockFrame": -12,
    "hitFrame": 2,
    "counterHitFrame": "+6c"
  },
  {
    "input": "db+4",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i22~24",
    "blockFrame": "-11~-9",
    "hitFrame": "+0~+2",
    "counterHitFrame": "+3~+5"
  },
  {
    "input": "db+4,4",
    "hitLevel": "L,L",
    "damage": "14,15",
    "startupFrame": ",i31~33",
    "blockFrame": "-7~-5",
    "hitFrame": "+4~+6",
    "counterHitFrame": "+35a"
  },
  {
    "input": "db+4,4,4",
    "hitLevel": "L,L,L",
    "damage": "14,15,16",
    "startupFrame": ",i31~33",
    "blockFrame": "-7~-5",
    "hitFrame": "+4~+6",
    "counterHitFrame": "+35a"
  },
  {
    "input": "db+4,1+4",
    "hitLevel": "L,sl,h",
    "damage": "14,5,8",
    "startupFrame": ",i22 i17",
    "blockFrame": -3,
    "hitFrame": -3,
    "counterHitFrame": 4
  },
  {
    "input": "b+1",
    "hitLevel": "L",
    "damage": 19,
    "startupFrame": "i29~30",
    "blockFrame": "-10~-9",
    "hitFrame": "+6~+7",
    "counterHitFrame": "+0d"
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
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i14~15",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "m,h",
    "damage": "10,7",
    "startupFrame": ",i15~16",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1,1",
    "hitLevel": "m,h,m",
    "damage": "10,7,20",
    "startupFrame": ",i25",
    "blockFrame": -13,
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1,2",
    "hitLevel": "m,h,M",
    "damage": "10,7,20",
    "startupFrame": ",i23",
    "blockFrame": -9,
    "hitFrame": "+30a (+15)",
    "counterHitFrame": "+69a (+53)"
  },
  {
    "input": "b+2,1,4",
    "hitLevel": "m,h,h",
    "damage": "10,7,24",
    "startupFrame": ",i23~25",
    "blockFrame": "-8~-7",
    "hitFrame": "+42a (-16)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1~B",
    "hitLevel": "m,h",
    "damage": "10,7",
    "startupFrame": "",
    "blockFrame": "+0~+1",
    "hitFrame": "+11g~+12g",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1~F",
    "hitLevel": "m,h",
    "damage": "10,7",
    "startupFrame": "",
    "blockFrame": "+0~+1",
    "hitFrame": "+11g~+12g",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2",
    "hitLevel": "m,m",
    "damage": "10,10",
    "startupFrame": ",i16~17",
    "blockFrame": "-9~-8",
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~17",
    "blockFrame": "-19~-18",
    "hitFrame": "+22a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,2",
    "hitLevel": "m,M",
    "damage": "20,22",
    "startupFrame": ",i20",
    "blockFrame": -9,
    "hitFrame": "+30a (+15)",
    "counterHitFrame": "+69a (+53)"
  },
  {
    "input": "b+3,4",
    "hitLevel": "m,L",
    "damage": "20,14",
    "startupFrame": ",i20~22",
    "blockFrame": -11,
    "hitFrame": "+0~+2",
    "counterHitFrame": 3
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i13~14",
    "blockFrame": "-7~-8",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,2",
    "hitLevel": "m,M",
    "damage": "14,17",
    "startupFrame": ",i22~23",
    "blockFrame": "-13~-12",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+28a (+18)"
  },
  {
    "input": "b+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+2+3",
    "hitLevel": "m!",
    "damage": 50,
    "startupFrame": "i57~58",
    "blockFrame": "",
    "hitFrame": "+6~+7",
    "counterHitFrame": ""
  },
  {
    "input": "b+3+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i28~29",
    "blockFrame": "-12~-11",
    "hitFrame": "+9a (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "u+2",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i23~24",
    "blockFrame": "+6~+7",
    "hitFrame": "+11~+12",
    "counterHitFrame": "+20c~+21c"
  },
  {
    "input": "u+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22~23",
    "blockFrame": "-3~-2",
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "h,h",
    "damage": "6,30",
    "startupFrame": "i10 i26",
    "blockFrame": -14,
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "M",
    "damage": 24,
    "startupFrame": "i19",
    "blockFrame": -9,
    "hitFrame": "+30a (+15)",
    "counterHitFrame": "+69a (+53)"
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i20~21",
    "blockFrame": "-6~-5",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+30a"
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i16~18",
    "blockFrame": "-20~-18",
    "hitFrame": "-9~-7",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,3",
    "hitLevel": "m,m,M",
    "damage": "10,8,20",
    "startupFrame": ",i29 i18",
    "blockFrame": -12,
    "hitFrame": "+84a (+68)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m,M",
    "damage": "5,21",
    "startupFrame": "i20~23 i26~30",
    "blockFrame": "-8~-4",
    "hitFrame": "+18a",
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
    "input": "UB,b",
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
    "damage": 16,
    "startupFrame": "i16~17",
    "blockFrame": "-12~-11",
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,2",
    "hitLevel": "m,m",
    "damage": "16,22",
    "startupFrame": ",i21",
    "blockFrame": -13,
    "hitFrame": "+8a",
    "counterHitFrame": "+7 +53a"
  },
  {
    "input": "f,F+2,3",
    "hitLevel": "m,h",
    "damage": "16,22",
    "startupFrame": ",i20~21",
    "blockFrame": "-8~-7",
    "hitFrame": "+29a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2~B",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "",
    "blockFrame": "+1~+2",
    "hitFrame": "+16g~+17g",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2~F",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "",
    "blockFrame": "+1~+2",
    "hitFrame": "+16g~+17g",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i18~19",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3,3+4",
    "hitLevel": "m,m,m",
    "damage": "23,12,15",
    "startupFrame": ",i35~36 i41~42",
    "blockFrame": "+3~+4",
    "hitFrame": "+19a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "m",
    "damage": 32,
    "startupFrame": "i22",
    "blockFrame": 6,
    "hitFrame": "+23a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i24~28",
    "blockFrame": "+3~+7",
    "hitFrame": "+14a (+5)",
    "counterHitFrame": "+46a (-1)"
  },
  {
    "input": "ws1",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i12~13",
    "blockFrame": "-6~-5",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,1",
    "hitLevel": "h,h",
    "damage": "14,7",
    "startupFrame": ",i15~16",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,1,1",
    "hitLevel": "h,h,m",
    "damage": "14,7,20",
    "startupFrame": ",i25",
    "blockFrame": -13,
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,1,2",
    "hitLevel": "h,h,M",
    "damage": "14,7,22",
    "startupFrame": ",i23",
    "blockFrame": -9,
    "hitFrame": "+30a (+15)",
    "counterHitFrame": "+69a (+53)"
  },
  {
    "input": "ws1,1,4",
    "hitLevel": "h,h,h",
    "damage": "14,7,24",
    "startupFrame": ",i23~25",
    "blockFrame": "-8~-7",
    "hitFrame": "+42a (-16)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,1~B",
    "hitLevel": "h,h",
    "damage": "14,7",
    "startupFrame": "",
    "blockFrame": "+0~+1",
    "hitFrame": "+11g~+12g",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,1~F",
    "hitLevel": "h,h",
    "damage": "14,7",
    "startupFrame": "",
    "blockFrame": "+0~+1",
    "hitFrame": "+11g~+12g",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,4",
    "hitLevel": "h,m",
    "damage": "14,16",
    "startupFrame": ",i22~23",
    "blockFrame": "-11~-10",
    "hitFrame": "+0c~+1c",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,4,2",
    "hitLevel": "h,m,L",
    "damage": "14,16,17",
    "startupFrame": ",i23~24",
    "blockFrame": "-16~-14",
    "hitFrame": "+0c~+1c",
    "counterHitFrame": "+13a"
  },
  {
    "input": "ws1,4,1+2",
    "hitLevel": "h,m,m",
    "damage": "14,16,28",
    "startupFrame": ",i25~26",
    "blockFrame": "-20~-19",
    "hitFrame": "+16a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13~14",
    "blockFrame": "-8~-7",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+32a"
  },
  {
    "input": "ws2,1",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": ",i22~23",
    "blockFrame": "-12~-11",
    "hitFrame": "+19a (10)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "M",
    "damage": 16,
    "startupFrame": "i14~15",
    "blockFrame": "-13~-12",
    "hitFrame": "+25a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i11~12",
    "blockFrame": "-12~-11",
    "hitFrame": "+18a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i21",
    "blockFrame": -2,
    "hitFrame": 5,
    "counterHitFrame": "+17 +63a"
  },
  {
    "input": "ws3+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i18~19",
    "blockFrame": "-21~-20",
    "hitFrame": "+38a (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "SS.2",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": "+14a (+5)",
    "counterHitFrame": "+34d (+26)"
  },
  {
    "input": "SS.4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18~20",
    "blockFrame": "+6~+8",
    "hitFrame": "+8c~+10c",
    "counterHitFrame": ""
  },
  {
    "input": "SS.1+2",
    "hitLevel": "h,h,m",
    "damage": "7,9,18",
    "startupFrame": "i16 i17 i15~16",
    "blockFrame": -4,
    "hitFrame": "+7c~+8c",
    "counterHitFrame": ""
  },
  {
    "input": "FC.3+4",
    "hitLevel": "m,m",
    "damage": "10,10",
    "startupFrame": "i21~22 i23~24",
    "blockFrame": "-6~-5",
    "hitFrame": "+5c~+6c",
    "counterHitFrame": ""
  },
  {
    "input": "FC.3+4,3",
    "hitLevel": "m,m,m,m",
    "damage": "10,10,10,10",
    "startupFrame": ",i31~32 i40~41",
    "blockFrame": "+0~+1",
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+1",
    "hitLevel": "sl,m",
    "damage": "6,30",
    "startupFrame": "i10 i25~26",
    "blockFrame": "-19~-18",
    "hitFrame": "+26a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2",
    "hitLevel": "L",
    "damage": 12,
    "startupFrame": "i16~17",
    "blockFrame": "-11~-10",
    "hitFrame": "+0~+1",
    "counterHitFrame": "+18~+19"
  },
  {
    "input": "FC.df+3",
    "hitLevel": "L",
    "damage": 12,
    "startupFrame": "i21",
    "blockFrame": -19,
    "hitFrame": "+0c",
    "counterHitFrame": ""
  },
  {
    "input": "(Back to wall).b,b,UB",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i39~41",
    "blockFrame": "+4c~+6c",
    "hitFrame": 22,
    "counterHitFrame": ""
  },
  {
    "input": "GEN.1",
    "hitLevel": "L",
    "damage": 22,
    "startupFrame": "i20~21",
    "blockFrame": "-13~-12",
    "hitFrame": "+3c~+4c",
    "counterHitFrame": "+26a"
  },
  {
    "input": "GEN.2",
    "hitLevel": "m,t",
    "damage": "16,32",
    "startupFrame": "i16~17",
    "blockFrame": "-13~-12",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "GEN.3",
    "hitLevel": "M",
    "damage": 14,
    "startupFrame": "i17~20",
    "blockFrame": "-4c~-1c",
    "hitFrame": "+4c~+7c",
    "counterHitFrame": ""
  },
  {
    "input": "GEN.3,2",
    "hitLevel": "M,M",
    "damage": "14,20",
    "startupFrame": ",i24",
    "blockFrame": -9,
    "hitFrame": "+33a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "GEN.4",
    "hitLevel": "h",
    "damage": 24,
    "startupFrame": "i26~28",
    "blockFrame": "+4~+6",
    "hitFrame": "+26a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "IZU.1",
    "hitLevel": "h",
    "damage": 7,
    "startupFrame": "i13~14",
    "blockFrame": "-7~-6",
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "IZU.1,1",
    "hitLevel": "h,h",
    "damage": "7,26",
    "startupFrame": ",i23~24",
    "blockFrame": "-4~-3",
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "IZU.1,2",
    "hitLevel": "h,m",
    "damage": "7,20",
    "startupFrame": ",i24",
    "blockFrame": -13,
    "hitFrame": "+6a",
    "counterHitFrame": "+15a"
  },
  {
    "input": "IZU.2",
    "hitLevel": "M",
    "damage": 24,
    "startupFrame": "i23~25",
    "blockFrame": "-13~-11",
    "hitFrame": "+34a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "IZU.3",
    "hitLevel": "m,h",
    "damage": "10,16",
    "startupFrame": "i16~15 i14~15",
    "blockFrame": "-6~-5",
    "hitFrame": "+12a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "IZU.4",
    "hitLevel": "L",
    "damage": 15,
    "startupFrame": "i21~22",
    "blockFrame": "-37~-36",
    "hitFrame": "-1c~+0c",
    "counterHitFrame": "+23a"
  },
  {
    "input": "IZU.4,1",
    "hitLevel": "L,M",
    "damage": "15,15",
    "startupFrame": ",i19~20",
    "blockFrame": "-14~-13",
    "hitFrame": "+14a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "IZU.1+2",
    "hitLevel": "M",
    "damage": 24,
    "startupFrame": "i21~22",
    "blockFrame": "-12~-11",
    "hitFrame": "+19a",
    "counterHitFrame": ""
  },
  {
    "input": "IZU.f+1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i16~17",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": 23
  },
  {
    "input": "MIA.1",
    "hitLevel": "M",
    "damage": 30,
    "startupFrame": "i24~25",
    "blockFrame": "-9~-8",
    "hitFrame": "+72a (+56)",
    "counterHitFrame": ""
  },
  {
    "input": "MIA.2",
    "hitLevel": "sm",
    "damage": 30,
    "startupFrame": "i16",
    "blockFrame": -20,
    "hitFrame": "+26a (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "MIA.1+2",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i23~24",
    "blockFrame": "+6~+7",
    "hitFrame": "+11~+12",
    "counterHitFrame": "+20c~+21c"
  },
  {
    "input": "MIA.F",
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
    "blockFrame": 0,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+7d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.db+1+2",
    "hitLevel": "t",
    "damage": "15,15,15",
    "startupFrame": "i11~12",
    "blockFrame": -6,
    "hitFrame": "+56a (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "IZU.1+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i14",
    "blockFrame": -6,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+0d",
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
    "input": "b+1+3,P",
    "hitLevel": "t",
    "damage": "7,8,10",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+3",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "-6d",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4,P (Low)",
    "hitLevel": "t",
    "damage": "4,2,2,2,2,2,2,2,2",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4,P (Throw)",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": "",
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

const junFrameData = rawJunFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default junFrameData;