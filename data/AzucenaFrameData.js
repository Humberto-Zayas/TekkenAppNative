const rawAzucenaFrameData = [
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
    "input": "H.3,2~F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": -18,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "H.LIB,P (High)",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i17~18",
    "blockFrame": "",
    "hitFrame": "+32a",
    "counterHitFrame": ""
  },
  {
    "input": "H.LIB,P (Low)",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~18",
    "blockFrame": "",
    "hitFrame": "+58a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "H.LIB.1,2,F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": 7,
    "hitFrame": "+54a (+34)",
    "counterHitFrame": ""
  },
  {
    "input": "H.LIB.2,F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "+5~+6",
    "hitFrame": "+36a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "H.LIB.d+3+4",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i16~18",
    "blockFrame": "-9~-7",
    "hitFrame": "+58a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "H.b+1,1,2,F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": 7,
    "hitFrame": "+54a (+34)",
    "counterHitFrame": ""
  },
  {
    "input": "H.b+2,F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": 7,
    "hitFrame": "+54a (+34)",
    "counterHitFrame": ""
  },
  {
    "input": "H.b+3,F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": 5,
    "hitFrame": "+67a (+50)",
    "counterHitFrame": ""
  },
  {
    "input": "H.f+4,4,F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "+5~+6",
    "hitFrame": "+62a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "H.f+1+2,F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "+5~+6",
    "hitFrame": "+43a (+35)",
    "counterHitFrame": ""
  },
  {
    "input": "H.f+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,m,t",
    "damage": "15,9,29",
    "startupFrame": "i15~16",
    "blockFrame": "+6~-7",
    "hitFrame": "+0a",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,h,m",
    "damage": "15,15,30",
    "startupFrame": "i15~16 i24~25 i53~54",
    "blockFrame": "+6~-7",
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3+4",
    "hitLevel": "h!",
    "damage": 0,
    "startupFrame": "i45",
    "blockFrame": "",
    "hitFrame": "+35a",
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
    "damage": "5,15",
    "startupFrame": ",i24~25",
    "blockFrame": -10,
    "hitFrame": 8,
    "counterHitFrame": "+18a"
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,23",
    "startupFrame": ",i20~21",
    "blockFrame": "-14~-13",
    "hitFrame": "+8~+9",
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
    "input": "1+3+4*",
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
    "damage": 9,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "9,11",
    "startupFrame": ",i17~18",
    "blockFrame": -7,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,2",
    "hitLevel": "h,m,h",
    "damage": "9,11,21",
    "startupFrame": ",i24~25",
    "blockFrame": "-5~-4",
    "hitFrame": "+20a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "3,2",
    "hitLevel": "m,m",
    "damage": "11,18",
    "startupFrame": ",i23~24",
    "blockFrame": "-12~-11",
    "hitFrame": "+6~+7",
    "counterHitFrame": "+33d (+25)"
  },
  {
    "input": "3,2~F",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "",
    "blockFrame": -18,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "3,3",
    "hitLevel": "m,h",
    "damage": "11,23",
    "startupFrame": ",i24~25",
    "blockFrame": "-1~+0",
    "hitFrame": "+43a (-15)",
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i12~13",
    "blockFrame": "-8~-7",
    "hitFrame": "+3~+4",
    "counterHitFrame": 8
  },
  {
    "input": "4,1",
    "hitLevel": "h,h",
    "damage": "15,14",
    "startupFrame": ",i21~22",
    "blockFrame": "-2~-1",
    "hitFrame": "+4~+5",
    "counterHitFrame": "+6~+7"
  },
  {
    "input": "4,3",
    "hitLevel": "h,M",
    "damage": "15,17",
    "startupFrame": ",i26~27",
    "blockFrame": "-11~-10",
    "hitFrame": "+19c~+20c",
    "counterHitFrame": "+37a"
  },
  {
    "input": "1+2",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": -8,
    "hitFrame": "+13g",
    "counterHitFrame": "+56a"
  },
  {
    "input": "2+3+4",
    "hitLevel": "h!",
    "damage": 0,
    "startupFrame": "i45",
    "blockFrame": "",
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i17~18",
    "blockFrame": "-10~-9",
    "hitFrame": "+1~+2",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "h,m",
    "damage": "14,17",
    "startupFrame": ",i22~23",
    "blockFrame": "-10~-9",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1,4",
    "hitLevel": "h,m,m",
    "damage": "14,17,23",
    "startupFrame": ",i24~25",
    "blockFrame": "-14~-13",
    "hitFrame": "+19a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i18",
    "blockFrame": -4,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,2",
    "hitLevel": "m,h",
    "damage": "15,20",
    "startupFrame": ",i22~23",
    "blockFrame": "-4~-5",
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i17~18",
    "blockFrame": "-8~-7",
    "hitFrame": "+1~+2",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,4",
    "hitLevel": "m,h",
    "damage": "16,21",
    "startupFrame": ",i24~25",
    "blockFrame": "-7~-6",
    "hitFrame": "+19a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,4~2",
    "hitLevel": "m,h",
    "damage": "16,23",
    "startupFrame": ",i23~24",
    "blockFrame": "+1~+2",
    "hitFrame": "+52a",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,4~3",
    "hitLevel": "m,m",
    "damage": "16,24",
    "startupFrame": ",i21~22",
    "blockFrame": "-9~-8",
    "hitFrame": "+15a (+6)",
    "counterHitFrame": "+70a (+54)"
  },
  {
    "input": "f+4,4~B",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "",
    "blockFrame": -19,
    "hitFrame": -10,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i16~17",
    "blockFrame": "-8~-7",
    "hitFrame": "+41a (+17)",
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
    "input": "f+3+4*",
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
    "startupFrame": "i13~14",
    "blockFrame": "-3~-2",
    "hitFrame": "+8~+9",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,4",
    "hitLevel": "m,h",
    "damage": "11,13",
    "startupFrame": ",i17~18",
    "blockFrame": "-7~-6",
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,4,1",
    "hitLevel": "m,h,h",
    "damage": "11,13,20",
    "startupFrame": ",i22~23",
    "blockFrame": "-5~-4",
    "hitFrame": "+44d (-14)",
    "counterHitFrame": "+56a"
  },
  {
    "input": "df+1,4,1~2",
    "hitLevel": "m,h,M",
    "damage": "11,13,23",
    "startupFrame": ",i18~19",
    "blockFrame": "-10~-9",
    "hitFrame": "+23d",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,4,1~F",
    "hitLevel": "m,h",
    "damage": "11,13",
    "startupFrame": "",
    "blockFrame": "-17~-16",
    "hitFrame": "-6~-5",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,4~B",
    "hitLevel": "m,h",
    "damage": "11,13",
    "startupFrame": "",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15~16",
    "blockFrame": "-13~-12",
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i17~18",
    "blockFrame": "-5~-4",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+59a"
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16~17",
    "blockFrame": "-7~-6",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "df+4,1",
    "hitLevel": "m,h",
    "damage": "15,23",
    "startupFrame": "i23~24",
    "blockFrame": "-5~-4",
    "hitFrame": "+20a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i20~21",
    "blockFrame": "-2~-1",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+45a"
  },
  {
    "input": "d+1+3",
    "hitLevel": "mt",
    "damage": 30,
    "startupFrame": "i12~13",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i18~19",
    "blockFrame": "-9~-8",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "d+2,3",
    "hitLevel": "m,h",
    "damage": "15,20",
    "startupFrame": ",i24~25",
    "blockFrame": "+1~+2",
    "hitFrame": "+16g~+17g",
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "L",
    "damage": 10,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,3",
    "hitLevel": "L,m",
    "damage": "10,14",
    "startupFrame": ",i23",
    "blockFrame": -13,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,3,4",
    "hitLevel": "L,m,m",
    "damage": "10,14,21",
    "startupFrame": ",i25~26",
    "blockFrame": "-14~-13",
    "hitFrame": "+15a (-2)",
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "L",
    "damage": 13,
    "startupFrame": "i15~16",
    "blockFrame": "-13~-12",
    "hitFrame": "-2~-1",
    "counterHitFrame": ""
  },
  {
    "input": "d+4,1",
    "hitLevel": "L,h",
    "damage": "13,5",
    "startupFrame": ",i27~28",
    "blockFrame": "-1~+0",
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": "d+4,1~2",
    "hitLevel": "L,m",
    "damage": "13,20",
    "startupFrame": ",i17~18",
    "blockFrame": "-8~-7",
    "hitFrame": "+10g~+11g",
    "counterHitFrame": "+59a"
  },
  {
    "input": "d+4,1~F",
    "hitLevel": "L",
    "damage": 13,
    "startupFrame": "",
    "blockFrame": -20,
    "hitFrame": -9,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "l",
    "damage": 21,
    "startupFrame": "i25~26",
    "blockFrame": -4,
    "hitFrame": "+0d",
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
    "hitLevel": "sl",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i16~17",
    "blockFrame": "-7~-6",
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "db+3,4",
    "hitLevel": "L,h",
    "damage": "14,20",
    "startupFrame": "i24~25",
    "blockFrame": "-13~-12",
    "hitFrame": "+66a (+50)",
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "L",
    "damage": 13,
    "startupFrame": "i19",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": "+12g"
  },
  {
    "input": "db+1+2",
    "hitLevel": "M",
    "damage": 23,
    "startupFrame": "i20~21",
    "blockFrame": "-21~-20",
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i26~30",
    "blockFrame": "-16~-12",
    "hitFrame": "+15a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i14~15",
    "blockFrame": "-8~-7",
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": "b+1,1",
    "hitLevel": "h,h",
    "damage": "14,16",
    "startupFrame": ",i23",
    "blockFrame": 3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,1,2",
    "hitLevel": "h,h,h",
    "damage": "14,16,20",
    "startupFrame": ",i24~25",
    "blockFrame": "-5~-4",
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1,1,2~B",
    "hitLevel": "h,h",
    "damage": "14,16",
    "startupFrame": "",
    "blockFrame": -15,
    "hitFrame": -10,
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i18~19",
    "blockFrame": "+2~+3",
    "hitFrame": "+22a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22",
    "blockFrame": "+4c",
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i15~16",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,3",
    "hitLevel": "m,m",
    "damage": "10,10",
    "startupFrame": ",i23~24",
    "blockFrame": "-10~-9",
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,3,4",
    "hitLevel": "m,m,m",
    "damage": "10,10,16",
    "startupFrame": ",i23~24",
    "blockFrame": "-10~-9",
    "hitFrame": "-2~-1",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,3,4,3",
    "hitLevel": "m,m,m,h",
    "damage": "10,10,16,23",
    "startupFrame": ",i27~28",
    "blockFrame": "-7~-6",
    "hitFrame": "+39d (-19)",
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
    "input": "b+3+4*",
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
    "damage": 18,
    "startupFrame": "i18~19",
    "blockFrame": "-9~-8",
    "hitFrame": "+7~+8",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i17~18",
    "blockFrame": "-6~-7",
    "hitFrame": "+15 (+6)",
    "counterHitFrame": "+51a"
  },
  {
    "input": "uf+3",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i21~22",
    "blockFrame": "-16~-15",
    "hitFrame": "+36a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3,4",
    "hitLevel": "h,m",
    "damage": "20,17",
    "startupFrame": ",i20~21",
    "blockFrame": "-14~-13",
    "hitFrame": "+15a (+6)",
    "counterHitFrame": "+55a"
  },
  {
    "input": "uf+4",
    "hitLevel": "M",
    "damage": 22,
    "startupFrame": "i24~26",
    "blockFrame": "-8~-6",
    "hitFrame": "+21a~+23a",
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
    "input": "1+2+3+4,3+4",
    "hitLevel": "m!",
    "damage": 54,
    "startupFrame": "i75",
    "blockFrame": "",
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "LIB,P (High)",
    "hitLevel": "",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "LIB,P (Low)",
    "hitLevel": "m",
    "damage": 35,
    "startupFrame": "i7~8 i19~20",
    "blockFrame": "",
    "hitFrame": "+8~+9",
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
    "input": "f,F+3",
    "hitLevel": "M",
    "damage": 20,
    "startupFrame": "i15~17",
    "blockFrame": "-14~-12",
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "M",
    "damage": 21,
    "startupFrame": "i25~27",
    "blockFrame": "+0~+2",
    "hitFrame": "+13~+15",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3+4",
    "hitLevel": "m,M",
    "damage": "10,18",
    "startupFrame": "i21~22 i32~34",
    "blockFrame": "+4~+6",
    "hitFrame": "+5d",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i15~16",
    "blockFrame": "-14~-13",
    "hitFrame": "-9~-8",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3,2",
    "hitLevel": "m,h",
    "damage": "10,20",
    "startupFrame": ",i10~12",
    "blockFrame": 2,
    "hitFrame": "+28a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "WS.1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i13~14",
    "blockFrame": "-8~-7",
    "hitFrame": "+6~+7",
    "counterHitFrame": "+32a (+26)"
  },
  {
    "input": "WS.2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15~16",
    "blockFrame": "-13~-12",
    "hitFrame": "+32 (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "WS.3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20~21",
    "blockFrame": "+4~+5",
    "hitFrame": "+16c~+17c",
    "counterHitFrame": ""
  },
  {
    "input": "WS.4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i11~12",
    "blockFrame": "-6~-5",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "WS.4,1",
    "hitLevel": "m,h",
    "damage": "13,10",
    "startupFrame": ",i21~22",
    "blockFrame": "-2~-1",
    "hitFrame": "+6~+7",
    "counterHitFrame": ""
  },
  {
    "input": "WS.4,1,3",
    "hitLevel": "m,h,m",
    "damage": "13,10,23",
    "startupFrame": ",i22~23",
    "blockFrame": "-14~-13",
    "hitFrame": "+10a (+1)",
    "counterHitFrame": "+27a"
  },
  {
    "input": "WS.4,1,3~B",
    "hitLevel": "m,h",
    "damage": "13,10",
    "startupFrame": "",
    "blockFrame": "-16~-15",
    "hitFrame": "-8~-7",
    "counterHitFrame": ""
  },
  {
    "input": "WS.b+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "WS.f+3+4",
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
    "startupFrame": "i18~19",
    "blockFrame": "-13~-12",
    "hitFrame": "+3c~+4c",
    "counterHitFrame": "+13c~+14c"
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
    "input": "(Back to wall).b,b,UB",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i27~33",
    "blockFrame": "+1~+7",
    "hitFrame": "+7a (-3)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i10~11",
    "blockFrame": "+0~+1",
    "hitFrame": "+6~+7",
    "counterHitFrame": "+8~+9"
  },
  {
    "input": "BT.1,2",
    "hitLevel": "h,h",
    "damage": "9,23",
    "startupFrame": ",i22~23",
    "blockFrame": "-7~-6",
    "hitFrame": "+19a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1,2~F",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "",
    "blockFrame": "-19~-18",
    "hitFrame": "-13~-12",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1,4",
    "hitLevel": "h,m",
    "damage": "9,21",
    "startupFrame": ",i24~25",
    "blockFrame": "-11~-10",
    "hitFrame": "+8~+9",
    "counterHitFrame": "+52a"
  },
  {
    "input": "BT.2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i17~18",
    "blockFrame": "-8~-7",
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": "BT.2:2",
    "hitLevel": "m,t",
    "damage": "15,23",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "BT.3",
    "hitLevel": "L",
    "damage": 23,
    "startupFrame": "i19~20",
    "blockFrame": -13,
    "hitFrame": "+4~+5",
    "counterHitFrame": "+14c~+16c"
  },
  {
    "input": "BT.4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": "-5~-4",
    "hitFrame": "+6~+7",
    "counterHitFrame": ""
  },
  {
    "input": "BT.4,3",
    "hitLevel": "m,m",
    "damage": "15,21",
    "startupFrame": ",i23~24",
    "blockFrame": "-14~-13",
    "hitFrame": "+16a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i14~15",
    "blockFrame": "-11~-10",
    "hitFrame": "+3~+4",
    "counterHitFrame": "+58a"
  },
  {
    "input": "BT.3+4",
    "hitLevel": "M",
    "damage": 23,
    "startupFrame": "i27~29",
    "blockFrame": "-5c~-3c",
    "hitFrame": "+20a",
    "counterHitFrame": ""
  },
  {
    "input": "BT.b+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "BT.b+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
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
    "input": "BT.f+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.1",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i13",
    "blockFrame": 3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "LIB.1,2",
    "hitLevel": "h,h",
    "damage": "14,20",
    "startupFrame": ",i24~25",
    "blockFrame": "-5~-4",
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.1,2~B",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "",
    "blockFrame": -15,
    "hitFrame": -10,
    "counterHitFrame": ""
  },
  {
    "input": "LIB.2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i14~15",
    "blockFrame": "-8~-7",
    "hitFrame": "+22g~+23g",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.3",
    "hitLevel": "L",
    "damage": 15,
    "startupFrame": "i16~17",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.3,1",
    "hitLevel": "L,m",
    "damage": "15,20",
    "startupFrame": ",i22~23",
    "blockFrame": "-10~-9",
    "hitFrame": "+21d",
    "counterHitFrame": "+21d"
  },
  {
    "input": "LIB.4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15~16",
    "blockFrame": -3,
    "hitFrame": 10,
    "counterHitFrame": "+10a"
  },
  {
    "input": "LIB.4,1",
    "hitLevel": "m,h",
    "damage": "14,10",
    "startupFrame": ",i23~24",
    "blockFrame": -1,
    "hitFrame": 5,
    "counterHitFrame": 10
  },
  {
    "input": "LIB.4,1,2",
    "hitLevel": "m,h,m",
    "damage": "14,10,23",
    "startupFrame": ",i28~29",
    "blockFrame": "-10~-9",
    "hitFrame": "+67a (+51)",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.4,2",
    "hitLevel": "m,M",
    "damage": "14,21",
    "startupFrame": ",i25~26",
    "blockFrame": "-13~-12",
    "hitFrame": "+16a",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.1+2",
    "hitLevel": "M",
    "damage": 23,
    "startupFrame": "i18~19",
    "blockFrame": "-14~-13",
    "hitFrame": "+38a (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.3+4",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i16~17",
    "blockFrame": "-5~-4",
    "hitFrame": "+32a",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.B",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.F",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.U",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.b,b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.b+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.d+4",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i19~20",
    "blockFrame": -31,
    "hitFrame": "-2~-1",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.d+4,4",
    "hitLevel": "L,h",
    "damage": "14,27",
    "startupFrame": ",i30~31",
    "blockFrame": "-7~-6",
    "hitFrame": "+14 (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.f,f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.uf+1",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i18~19",
    "blockFrame": "-9~-8",
    "hitFrame": "+7~+8",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.uf+1,P",
    "hitLevel": "h,t",
    "damage": "18,25",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "-4d",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.uf+2",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i17~18",
    "blockFrame": "-6~-7",
    "hitFrame": "+15 (+6)",
    "counterHitFrame": "+51a"
  },
  {
    "input": "1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
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
    "input": "FC.1+2",
    "hitLevel": "t",
    "damage": 0,
    "startupFrame": "i26",
    "blockFrame": -5,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2,2,1,2,1",
    "hitLevel": "t,t",
    "damage": "0,5,5,5,15",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2,1+2",
    "hitLevel": "t,t",
    "damage": "0,25",
    "startupFrame": "",
    "blockFrame": -9,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.d+1+3",
    "hitLevel": "t",
    "damage": 30,
    "startupFrame": "i12~13",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "LIB.uf+1+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i11",
    "blockFrame": 0,
    "hitFrame": "-3d",
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
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1,P",
    "hitLevel": "t",
    "damage": 25,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "-4d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "i11",
    "blockFrame": 0,
    "hitFrame": "-3d",
    "counterHitFrame": ""
  }
]

const azucenaFrameData = rawAzucenaFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default azucenaFrameData;