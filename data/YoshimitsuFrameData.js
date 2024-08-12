const rawYoshimitsuFrameData = [
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
    "input": "H.DGF.1",
    "hitLevel": "M",
    "damage": 26,
    "startupFrame": "i30~31",
    "blockFrame": "+2~+3",
    "hitFrame": "+46a",
    "counterHitFrame": ""
  },
  {
    "input": "H.DGF.f+1+2",
    "hitLevel": "h,h,h",
    "damage": "10,10,20",
    "startupFrame": "i16~17 i11~12 i11~12",
    "blockFrame": "+4~+5",
    "hitFrame": "+18a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "M,m,m,m",
    "damage": 51,
    "startupFrame": "i18~19",
    "blockFrame": "+4~+5",
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m",
    "damage": "10,45+",
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": 1,
    "hitLevel": "h",
    "damage": 7,
    "startupFrame": "i10",
    "blockFrame": 1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,1",
    "hitLevel": "h,m",
    "damage": "7,19",
    "startupFrame": ",i23",
    "blockFrame": -9,
    "hitFrame": "+4c",
    "counterHitFrame": "+6a"
  },
  {
    "input": "1,NSS.1",
    "hitLevel": "h,m",
    "damage": "7,22",
    "startupFrame": ",i23",
    "blockFrame": -9,
    "hitFrame": "+16a",
    "counterHitFrame": "+52a"
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i11",
    "blockFrame": -1,
    "hitFrame": 5,
    "counterHitFrame": 8
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "10,23",
    "startupFrame": ",i26~27",
    "blockFrame": "-9~-8",
    "hitFrame": "+12a",
    "counterHitFrame": ""
  },
  {
    "input": "2,2",
    "hitLevel": "h,h",
    "damage": "10,18",
    "startupFrame": ",i24",
    "blockFrame": -1,
    "hitFrame": "+15g",
    "counterHitFrame": ""
  },
  {
    "input": "2,3",
    "hitLevel": "h,h",
    "damage": "10,24",
    "startupFrame": ",i26~27",
    "blockFrame": "-10~-9",
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "2,NSS.1",
    "hitLevel": "h,h",
    "damage": "10,5,15",
    "startupFrame": ",i23~24 i18",
    "blockFrame": -5,
    "hitFrame": "+19a",
    "counterHitFrame": ""
  },
  {
    "input": "2,d+3",
    "hitLevel": "h,L",
    "damage": "10,11",
    "startupFrame": ",i22",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15~16",
    "blockFrame": "-9~-8",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "3,1",
    "hitLevel": "m,h",
    "damage": "12,22",
    "startupFrame": ",i22~24",
    "blockFrame": "+7~+9",
    "hitFrame": "+18g~+20g",
    "counterHitFrame": ""
  },
  {
    "input": "3,2",
    "hitLevel": "m,m",
    "damage": "12,12",
    "startupFrame": ",i22",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "3,2,1+2",
    "hitLevel": "m,m,M",
    "damage": "12,12,29",
    "startupFrame": ",i26~27",
    "blockFrame": "-14c~-13c",
    "hitFrame": "+20a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "3,2,NSS.1+2",
    "hitLevel": "m,m,M",
    "damage": "12,12,30",
    "startupFrame": ",i26~27",
    "blockFrame": "-14c~-13c",
    "hitFrame": "+20a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "3,NSS.1",
    "hitLevel": "m,h",
    "damage": "12,25",
    "startupFrame": ",i22~24",
    "blockFrame": "+7~+9",
    "hitFrame": "+18g~+20g",
    "counterHitFrame": ""
  },
  {
    "input": "3~4",
    "hitLevel": "m,m",
    "damage": "6,22",
    "startupFrame": "i17~18 i28~29",
    "blockFrame": "-6~-5",
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i12~13",
    "blockFrame": "-11~-10",
    "hitFrame": "+0~+1",
    "counterHitFrame": "+20a (+10)"
  },
  {
    "input": "4,4",
    "hitLevel": "h,h",
    "damage": "12,12",
    "startupFrame": ",i24~25",
    "blockFrame": -4,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "4,4,2",
    "hitLevel": "h,h,m",
    "damage": "12,12,5",
    "startupFrame": ",i30~31",
    "blockFrame": "-22~-21",
    "hitFrame": "-12~-11",
    "counterHitFrame": ""
  },
  {
    "input": "4,4,2,2",
    "hitLevel": "h,h,m,h",
    "damage": "12,12,5,6",
    "startupFrame": ",i22~23",
    "blockFrame": "-24~-23",
    "hitFrame": "-13~-12",
    "counterHitFrame": ""
  },
  {
    "input": "4,4,2,2,1",
    "hitLevel": "h,h,m,h,m!",
    "damage": "12,12,5,6,30",
    "startupFrame": ",i67",
    "blockFrame": "",
    "hitFrame": -18,
    "counterHitFrame": ""
  },
  {
    "input": "4,4,2,2,1~1",
    "hitLevel": "h,h,m,h,m!,m!",
    "damage": "12,12,5,6,30,22",
    "startupFrame": ",i28~113",
    "blockFrame": "",
    "hitFrame": -58,
    "counterHitFrame": ""
  },
  {
    "input": "4,4,2,2,NSS.1",
    "hitLevel": "h,h,m,h,m",
    "damage": "12,12,5,6,30",
    "startupFrame": ",i67",
    "blockFrame": -54,
    "hitFrame": "-17a",
    "counterHitFrame": ""
  },
  {
    "input": "4,4,2,2,NSS.1~1",
    "hitLevel": "h,h,m,h,m,h!",
    "damage": "12,12,5,6,30,40",
    "startupFrame": ",i20~105",
    "blockFrame": "",
    "hitFrame": "-49a (-75)",
    "counterHitFrame": ""
  },
  {
    "input": "4,4,4",
    "hitLevel": "h,h,h",
    "damage": "12,12,20",
    "startupFrame": ",i24~25",
    "blockFrame": "-4~-3",
    "hitFrame": "+18a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "4~3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i25~26",
    "blockFrame": "-13~-12",
    "hitFrame": "+52a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "1+2,P",
    "hitLevel": "M,M",
    "damage": "10,12",
    "startupFrame": "i15~18 i3~6",
    "blockFrame": "+1c~+4c",
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "1+2+3",
    "hitLevel": "m",
    "damage": 0,
    "startupFrame": "i22~40",
    "blockFrame": "-8~+10g",
    "hitFrame": "+0~+18",
    "counterHitFrame": "+16~+34"
  },
  {
    "input": "1+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i6~9",
    "blockFrame": "-15~-12",
    "hitFrame": "+14c~+17c",
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
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i17~18",
    "blockFrame": "-4~-3",
    "hitFrame": "+14g~+15g",
    "counterHitFrame": "+39a"
  },
  {
    "input": "f+2,1",
    "hitLevel": "h,M",
    "damage": "18,21",
    "startupFrame": ",i26~27",
    "blockFrame": "-12~-11",
    "hitFrame": "+17a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,NSS.1",
    "hitLevel": "h,m",
    "damage": "18,21",
    "startupFrame": ",i26~27",
    "blockFrame": "-12~-11",
    "hitFrame": "+17a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,db+2",
    "hitLevel": "h,m",
    "damage": "18,8",
    "startupFrame": ",i10~14",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "h",
    "damage": 24,
    "startupFrame": "i16~17",
    "blockFrame": "-9~-8",
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3,4",
    "hitLevel": "h,m",
    "damage": "24,20",
    "startupFrame": ",i23~24",
    "blockFrame": "-6~-5",
    "hitFrame": "+37a (+23a)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": "+21a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "M",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": "+8a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "m,M,M,M",
    "damage": "20,3,3,3",
    "startupFrame": "i21~25",
    "blockFrame": "-13~-9",
    "hitFrame": "-8a (-15)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i13",
    "blockFrame": -4,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,h",
    "damage": "14,16",
    "startupFrame": ",i25~26",
    "blockFrame": "-4~-3",
    "hitFrame": "+14g~+15g",
    "counterHitFrame": "+39a"
  },
  {
    "input": "df+1,2,1",
    "hitLevel": "m,h,M",
    "damage": "14,16,19",
    "startupFrame": ",i26~27",
    "blockFrame": "-12~-11",
    "hitFrame": "+17a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2,NSS.1",
    "hitLevel": "m,h,m",
    "damage": "14,16,19",
    "startupFrame": ",i26~27",
    "blockFrame": "-12~-11",
    "hitFrame": "+17a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2,db+2",
    "hitLevel": "m,h,m",
    "damage": "14,16,7",
    "startupFrame": ",i15",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,4",
    "hitLevel": "m,m",
    "damage": "14,17",
    "startupFrame": ",i17",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15~16",
    "blockFrame": "-7~-6",
    "hitFrame": "+34a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i17~18",
    "blockFrame": "-4~-3",
    "hitFrame": "+4~+5",
    "counterHitFrame": ""
  },
  {
    "input": "df+3,1",
    "hitLevel": "m,M",
    "damage": "10,20",
    "startupFrame": ",i23~24",
    "blockFrame": "-9~-8",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+6a"
  },
  {
    "input": "df+3,NSS.1",
    "hitLevel": "m,M",
    "damage": "10,24",
    "startupFrame": ",i23~24",
    "blockFrame": "-9~-8",
    "hitFrame": "+16a",
    "counterHitFrame": "+6a"
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i12",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "df+1+4",
    "hitLevel": "M",
    "damage": 20,
    "startupFrame": "i20~21",
    "blockFrame": "-17~-16",
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+3",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i17~18",
    "blockFrame": "-13~-12",
    "hitFrame": 6,
    "counterHitFrame": "+58a (+38)"
  },
  {
    "input": "d+1",
    "hitLevel": "M",
    "damage": 15,
    "startupFrame": "i24~25",
    "blockFrame": "-9~-8",
    "hitFrame": "+1c~+2c",
    "counterHitFrame": "+6a"
  },
  {
    "input": "d+1*(1),n",
    "hitLevel": "M!",
    "damage": 20,
    "startupFrame": "i55~56",
    "blockFrame": "",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+6a"
  },
  {
    "input": "d+1*(2),n",
    "hitLevel": "M!",
    "damage": 25,
    "startupFrame": "i99~100",
    "blockFrame": "",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+6a"
  },
  {
    "input": "d+1*(3),n",
    "hitLevel": "M!",
    "damage": 30,
    "startupFrame": "i130~131",
    "blockFrame": "",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+6a"
  },
  {
    "input": "d+1*(4),n",
    "hitLevel": "M!",
    "damage": 40,
    "startupFrame": "i179~180",
    "blockFrame": "",
    "hitFrame": "+16a",
    "counterHitFrame": "+52a"
  },
  {
    "input": "d+1*(5),n",
    "hitLevel": "M!",
    "damage": 60,
    "startupFrame": "i214~215",
    "blockFrame": "",
    "hitFrame": "+16a",
    "counterHitFrame": "+52a"
  },
  {
    "input": "d+1*(6),n",
    "hitLevel": "M!",
    "damage": 180,
    "startupFrame": "i249~250",
    "blockFrame": "",
    "hitFrame": "+16a",
    "counterHitFrame": "+52a"
  },
  {
    "input": "d+2",
    "hitLevel": "M",
    "damage": 12,
    "startupFrame": "i16~17",
    "blockFrame": "-9~-8",
    "hitFrame": "+0~+1",
    "counterHitFrame": ""
  },
  {
    "input": "d+2,1",
    "hitLevel": "M,h",
    "damage": "12,23",
    "startupFrame": ",i27~28",
    "blockFrame": "-9~-8",
    "hitFrame": "+17a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "d+2,2",
    "hitLevel": "M,m",
    "damage": "12,17",
    "startupFrame": ",i22~23",
    "blockFrame": "-12~-11",
    "hitFrame": "+7g~+8g",
    "counterHitFrame": "+28a (+22)"
  },
  {
    "input": "d+2,2,1",
    "hitLevel": "M,m,h",
    "damage": "12,17,20",
    "startupFrame": ",i19~20",
    "blockFrame": "-9~-8",
    "hitFrame": "+8a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "d+2,2,2",
    "hitLevel": "M,m,M",
    "damage": "12,17,19",
    "startupFrame": ",i25~27",
    "blockFrame": "-13~-11",
    "hitFrame": "+16a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "d+2,2,NSS.1",
    "hitLevel": "M,m,h",
    "damage": "12,17,20",
    "startupFrame": ",i19~20",
    "blockFrame": "-9~-8",
    "hitFrame": "+8a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "d+2,2,NSS.d+1",
    "hitLevel": "M,m,m",
    "damage": "12,17,17",
    "startupFrame": ",i29~30",
    "blockFrame": "-12~-11",
    "hitFrame": "+2c~+3c",
    "counterHitFrame": "+42a"
  },
  {
    "input": "d+2,2,d+1",
    "hitLevel": "M,m,m",
    "damage": "12,17,17",
    "startupFrame": ",i29~30",
    "blockFrame": "-12~-11",
    "hitFrame": "+2c~+3c",
    "counterHitFrame": "+42a"
  },
  {
    "input": "d+2,NSS.1",
    "hitLevel": "M,h",
    "damage": "12,18",
    "startupFrame": ",i27~28",
    "blockFrame": "-9~-8",
    "hitFrame": "+10g~+11g",
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "L",
    "damage": 12,
    "startupFrame": "i15~17",
    "blockFrame": "-18~-16",
    "hitFrame": "-4~-2",
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
    "input": "d+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+4",
    "hitLevel": "m!",
    "damage": 60,
    "startupFrame": "i29~30",
    "blockFrame": "",
    "hitFrame": "-32a",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+4,B+1",
    "hitLevel": "m!,m!",
    "damage": "60,18",
    "startupFrame": ",i1~39",
    "blockFrame": "",
    "hitFrame": "-29a",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+4,B+1,1",
    "hitLevel": "m!,m!,m!",
    "damage": "60,18,20",
    "startupFrame": ",i1~18",
    "blockFrame": "",
    "hitFrame": "-29a",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+4,B+1,1,1",
    "hitLevel": "m!,m!,m!,m!",
    "damage": "60,18,20,21",
    "startupFrame": ",i1~18",
    "blockFrame": "",
    "hitFrame": "-29a",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+4,B+1,1,1,1",
    "hitLevel": "m!,m!,m!,m!,m!",
    "damage": "60,18,20,21,28",
    "startupFrame": ",i1~18",
    "blockFrame": "",
    "hitFrame": "-29a",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+4,B+1,1,1,1,1",
    "hitLevel": "m!,m!,m!,m!,m!,m!",
    "damage": "60,18,20,21,28,30",
    "startupFrame": ",i1~35",
    "blockFrame": "",
    "hitFrame": "-30a",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "DB+2",
    "hitLevel": "m",
    "damage": 8,
    "startupFrame": "i15",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "DB+2,2",
    "hitLevel": "m,m",
    "damage": "8,7",
    "startupFrame": ",i10~14",
    "blockFrame": "-9~-5",
    "hitFrame": "+2~+6",
    "counterHitFrame": ""
  },
  {
    "input": "DB+2,2,2",
    "hitLevel": "m,m,m",
    "damage": "8,7,6",
    "startupFrame": ",i10~14",
    "blockFrame": "-9~-5",
    "hitFrame": "+2~+6",
    "counterHitFrame": ""
  },
  {
    "input": "DB+2,2,2,2",
    "hitLevel": "m,m,m,m",
    "damage": "8,7,6,5",
    "startupFrame": ",i10~14",
    "blockFrame": "-9~-5",
    "hitFrame": "+2~+6",
    "counterHitFrame": ""
  },
  {
    "input": "DB+2,2,2,2,2",
    "hitLevel": "m,m,m,m,m",
    "damage": "8,7,6,5,4",
    "startupFrame": ",i10~14",
    "blockFrame": "-9~-5",
    "hitFrame": "+2~+6",
    "counterHitFrame": ""
  },
  {
    "input": "DB+2,2,2,2,2,2",
    "hitLevel": "m,m,m,m,m,m",
    "damage": "8,7,6,5,4,3",
    "startupFrame": ",i10~14",
    "blockFrame": -49,
    "hitFrame": -37,
    "counterHitFrame": ""
  },
  {
    "input": "DB+3",
    "hitLevel": "l",
    "damage": 8,
    "startupFrame": "i18~19",
    "blockFrame": "-25~-24",
    "hitFrame": "-14~-13",
    "counterHitFrame": ""
  },
  {
    "input": "DB+3,3",
    "hitLevel": "l,l",
    "damage": "8,7",
    "startupFrame": ",i15~17",
    "blockFrame": "-19~-17",
    "hitFrame": "-7~-5",
    "counterHitFrame": ""
  },
  {
    "input": "DB+3,3,3",
    "hitLevel": "l,l,l",
    "damage": "8,7,7",
    "startupFrame": ",i15~17",
    "blockFrame": "-19~-17",
    "hitFrame": "-7~-5",
    "counterHitFrame": ""
  },
  {
    "input": "DB+3,3,3,3",
    "hitLevel": "l,l,l,l",
    "damage": "8,7,7,5",
    "startupFrame": ",i15~17",
    "blockFrame": "-19~-17",
    "hitFrame": "-7~-5",
    "counterHitFrame": ""
  },
  {
    "input": "DB+3,3,3,3,3",
    "hitLevel": "l,l,l,l,l",
    "damage": "8,7,7,5,5",
    "startupFrame": ",i15~17",
    "blockFrame": "-19~-17",
    "hitFrame": "-7~-5",
    "counterHitFrame": ""
  },
  {
    "input": "DB+3,3,3,3,3,3",
    "hitLevel": "l,l,l,l,l,l",
    "damage": "8,7,7,5,5,5",
    "startupFrame": ",i9~11",
    "blockFrame": "-26~-24",
    "hitFrame": "-15~-13",
    "counterHitFrame": ""
  },
  {
    "input": "DB+3,3,3,3,3,4",
    "hitLevel": "l,l,l,l,l,m",
    "damage": "8,7,7,5,5,15",
    "startupFrame": ",i12~13",
    "blockFrame": "-8~-7",
    "hitFrame": "+23a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "DB+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "L",
    "damage": 12,
    "startupFrame": "i26~28",
    "blockFrame": "-11~-9",
    "hitFrame": "+4~+6",
    "counterHitFrame": "7~+9"
  },
  {
    "input": "db+1,2",
    "hitLevel": "Lm",
    "damage": "12,20",
    "startupFrame": "i25~26",
    "blockFrame": "-13~12",
    "hitFrame": "+0~+1",
    "counterHitFrame": "+6g~+7g"
  },
  {
    "input": "db+4",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i17",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "B+1",
    "hitLevel": "h",
    "damage": 8,
    "startupFrame": "i17",
    "blockFrame": 1,
    "hitFrame": 7,
    "counterHitFrame": 12
  },
  {
    "input": "B+1,1",
    "hitLevel": "h,h",
    "damage": "8,9",
    "startupFrame": ",i11~12",
    "blockFrame": "+4~+5",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+10~+11"
  },
  {
    "input": "B+1,1,1",
    "hitLevel": "h,h,h",
    "damage": "8,9,10",
    "startupFrame": ",i11~12",
    "blockFrame": "+4~+5",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+10~+11"
  },
  {
    "input": "B+1,1,1,1",
    "hitLevel": "h,h,h,h",
    "damage": "8,9,10,12",
    "startupFrame": ",i11~12",
    "blockFrame": "+4~+5",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+10~+11"
  },
  {
    "input": "B+1,1,1,1,1",
    "hitLevel": "h,h,h,h,h",
    "damage": "8,9,10,12,14",
    "startupFrame": ",i11~12",
    "blockFrame": "+4~+5",
    "hitFrame": "+5~+6",
    "counterHitFrame": "+10~+11"
  },
  {
    "input": "B+1,1,1,1,1,1",
    "hitLevel": "h,h,h,h,h,h",
    "damage": "8,9,10,12,14,16",
    "startupFrame": ",i11~12",
    "blockFrame": -73,
    "hitFrame": -71,
    "counterHitFrame": -67
  },
  {
    "input": "B+1,1,DB+3",
    "hitLevel": "h,h,l",
    "damage": "8,9,7",
    "startupFrame": ",i13~14",
    "blockFrame": "-20~-19",
    "hitFrame": "-9~-8",
    "counterHitFrame": ""
  },
  {
    "input": "B+1,1,DB+3,3",
    "hitLevel": "h,h,l,l",
    "damage": "8,9,7,5",
    "startupFrame": ",i15~17",
    "blockFrame": "-19~-17",
    "hitFrame": "-7~-5",
    "counterHitFrame": ""
  },
  {
    "input": "B+1,1,DB+3,3,3",
    "hitLevel": "h,h,l,l,l",
    "damage": "8,9,7,5,5",
    "startupFrame": ",i9~11",
    "blockFrame": "-27~-25",
    "hitFrame": "-15~-13",
    "counterHitFrame": ""
  },
  {
    "input": "B+1,1,DB+3,3,4",
    "hitLevel": "h,h,l,l,m",
    "damage": "8,9,7,5,15",
    "startupFrame": ",i12~13",
    "blockFrame": "-8~-7",
    "hitFrame": "+23a (+13a)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14~15",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "m,M",
    "damage": "12,20",
    "startupFrame": ",i27~28",
    "blockFrame": "-17~-16",
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2",
    "hitLevel": "m,h",
    "damage": "12,21",
    "startupFrame": ",i22~23",
    "blockFrame": -13,
    "hitFrame": "+2a",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,NSS.1",
    "hitLevel": "m,m",
    "damage": "12,17",
    "startupFrame": ",i27~28",
    "blockFrame": "-17~-16",
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,NSS.2",
    "hitLevel": "m,h",
    "damage": "12,18",
    "startupFrame": ",i22~23",
    "blockFrame": "-10~-9",
    "hitFrame": "+0~+1",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,3,3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,3,3,3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,3,3,3,3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,3,3,3,3,3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
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
    "input": "ub+1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i24~25",
    "blockFrame": "-6~-5",
    "hitFrame": "+3c~+4c",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+3",
    "hitLevel": "m!",
    "damage": 40,
    "startupFrame": "i50~52",
    "blockFrame": "",
    "hitFrame": -24,
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+3,1+2",
    "hitLevel": "m!h!",
    "damage": "40,18",
    "startupFrame": ",i18~19",
    "blockFrame": "",
    "hitFrame": "+1~+2",
    "counterHitFrame": "+45a"
  },
  {
    "input": "ub+1+3,n+1",
    "hitLevel": "m!,m!",
    "damage": "40,22",
    "startupFrame": ",i28~113",
    "blockFrame": "",
    "hitFrame": "-57a",
    "counterHitFrame": ""
  },
  {
    "input": "ub+4",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i20~22",
    "blockFrame": "-19~-17",
    "hitFrame": "+12a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "M",
    "damage": 25,
    "startupFrame": "i24~25",
    "blockFrame": "-8c~-7c",
    "hitFrame": "+27a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "u+1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i24~25",
    "blockFrame": "-5~-4",
    "hitFrame": "+4c~+5c",
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
    "input": "u+3+4",
    "hitLevel": "M,M",
    "damage": "10,12",
    "startupFrame": "i39~42 i3~6",
    "blockFrame": "+1c~+4c",
    "hitFrame": "+24a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i24~25",
    "blockFrame": "-4~-3",
    "hitFrame": "+5c~+6c",
    "counterHitFrame": "+50a"
  },
  {
    "input": "uf+1+3",
    "hitLevel": "M!",
    "damage": 40,
    "startupFrame": "i113~114",
    "blockFrame": "",
    "hitFrame": "+30a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+3>d",
    "hitLevel": "M",
    "damage": 30,
    "startupFrame": "i83~84",
    "blockFrame": "-1c~+0c",
    "hitFrame": "+34a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+3,b",
    "hitLevel": "M!",
    "damage": 35,
    "startupFrame": "i55~56",
    "blockFrame": "",
    "hitFrame": "+24a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+3,d",
    "hitLevel": "M",
    "damage": 25,
    "startupFrame": "i55~56",
    "blockFrame": "-3~-2",
    "hitFrame": "+34a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i35~36",
    "blockFrame": "-16~-15",
    "hitFrame": "+6g~+7g",
    "counterHitFrame": "+25a"
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i20~22",
    "blockFrame": "-9~-7",
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "M",
    "damage": 20,
    "startupFrame": "i31~35",
    "blockFrame": "-16~-12",
    "hitFrame": "-4a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,1",
    "hitLevel": "M,h",
    "damage": "20,8",
    "startupFrame": ",i16~18",
    "blockFrame": "-1~+1",
    "hitFrame": -42,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,1,4",
    "hitLevel": "M,h,m",
    "damage": "20,8,15",
    "startupFrame": ",i17~28 i28~39",
    "blockFrame": "-14~+13g",
    "hitFrame": "+27a (+17a)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,1,4,1",
    "hitLevel": "M,h,m,M",
    "damage": "20,8,15,15",
    "startupFrame": ",i24~25",
    "blockFrame": "-9~-8",
    "hitFrame": "+1c~+2c",
    "counterHitFrame": "+6a"
  },
  {
    "input": "uf+3+4,1,4,NSS.1",
    "hitLevel": "M,h,m,M",
    "damage": "20,8,15,15",
    "startupFrame": ",i24~25",
    "blockFrame": "-9~-8",
    "hitFrame": "+16a",
    "counterHitFrame": "+52a"
  },
  {
    "input": "uf+3+4,1,3+4",
    "hitLevel": "M,h,M",
    "damage": "20,8,21",
    "startupFrame": ",i31~35",
    "blockFrame": "+0c~+4c",
    "hitFrame": "-14a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,3",
    "hitLevel": "M,M,M",
    "damage": "20,10,10",
    "startupFrame": ",i39~42 i3~6",
    "blockFrame": "-4c~-1c",
    "hitFrame": "+27a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,3+4",
    "hitLevel": "M,m",
    "damage": "20,25",
    "startupFrame": ",i25~26",
    "blockFrame": "-13~-12",
    "hitFrame": "+52a (+42)",
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
    "input": "b,B+1+4",
    "hitLevel": "m!",
    "damage": 50,
    "startupFrame": "i59~61",
    "blockFrame": "",
    "hitFrame": "+2a",
    "counterHitFrame": ""
  },
  {
    "input": "b,B+1+4,B",
    "hitLevel": ",m",
    "damage": ",20",
    "startupFrame": ",i22~25",
    "blockFrame": "-15~-12",
    "hitFrame": "+14c~+17c",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2:2",
    "hitLevel": "m,t",
    "damage": "15,20",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+8d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23~24",
    "blockFrame": "-4~-3",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": "20z",
    "startupFrame": "i15~16",
    "blockFrame": "-6~-5",
    "hitFrame": "+37a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i22~24",
    "blockFrame": "-8~-6",
    "hitFrame": "+3c~+5c",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+4",
    "hitLevel": "m!",
    "damage": 60,
    "startupFrame": "i45",
    "blockFrame": "",
    "hitFrame": "-65a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+4,F",
    "hitLevel": "m!,m!",
    "damage": "60,185",
    "startupFrame": ",i35~37",
    "blockFrame": "",
    "hitFrame": "-60a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+4,n",
    "hitLevel": "m!",
    "damage": 60,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i22~24",
    "blockFrame": "-20~-18",
    "hitFrame": "-9c~-7c",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3+4,1+2",
    "hitLevel": "m,m",
    "damage": "15,15",
    "startupFrame": ",i12~18",
    "blockFrame": "-31~-25",
    "hitFrame": "-2a (-12)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3+4,1+2,3+4",
    "hitLevel": "m,m,m",
    "damage": "15,15,20",
    "startupFrame": ",i27",
    "blockFrame": -13,
    "hitFrame": "+52a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+1",
    "hitLevel": "M",
    "damage": 22,
    "startupFrame": "i17~18",
    "blockFrame": "-17~-16",
    "hitFrame": "+35a (+25a)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14~15",
    "blockFrame": "-13~-12",
    "hitFrame": "+6g~+7g",
    "counterHitFrame": "+58a (+38)"
  },
  {
    "input": "qcf+1",
    "hitLevel": "h,h,M",
    "damage": "24,15,35",
    "startupFrame": "i28~34 i37 i58~60",
    "blockFrame": "+0~+2",
    "hitFrame": "+30a",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "M",
    "damage": 30,
    "startupFrame": "i22~23",
    "blockFrame": "+5g~+6g",
    "hitFrame": "+13a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3,U",
    "hitLevel": "M",
    "damage": 30,
    "startupFrame": "",
    "blockFrame": "+7g~+8g",
    "hitFrame": "+15a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14~15",
    "blockFrame": "-10~-9",
    "hitFrame": "+1~+2",
    "counterHitFrame": "+6~+7"
  },
  {
    "input": "ws1,1",
    "hitLevel": "m,h",
    "damage": "12,12",
    "startupFrame": ",i18",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,1,1",
    "hitLevel": "m,h,h",
    "damage": "12,12,12",
    "startupFrame": ",i18",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,1,1,1",
    "hitLevel": "m,h,h,m",
    "damage": "12,12,12,25",
    "startupFrame": ",i25~26",
    "blockFrame": "+0c~+1c",
    "hitFrame": "+6c~+7c",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,1~b+3",
    "hitLevel": "m,h",
    "damage": "12,12",
    "startupFrame": "",
    "blockFrame": -16,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,h",
    "damage": "12,18",
    "startupFrame": ",i25~26",
    "blockFrame": "-4~-3",
    "hitFrame": "+14g~+15g",
    "counterHitFrame": "+39a"
  },
  {
    "input": "ws1,2,1",
    "hitLevel": "m,h,M",
    "damage": "12,18,21",
    "startupFrame": ",i26~27",
    "blockFrame": "-12~-11",
    "hitFrame": "+17a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2,db+2",
    "hitLevel": "m,h,m",
    "damage": "12,18,8",
    "startupFrame": ",i15",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15~16",
    "blockFrame": "-4~-3",
    "hitFrame": "+7~+8",
    "counterHitFrame": ""
  },
  {
    "input": "ws2,1",
    "hitLevel": "m,m",
    "damage": "13,14",
    "startupFrame": ",i27~28",
    "blockFrame": "-3a",
    "hitFrame": "+36a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2,NSS.1",
    "hitLevel": "m,h",
    "damage": "13,16",
    "startupFrame": ",i23",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ws2,NSS.1,2",
    "hitLevel": "m,h,m",
    "damage": "13,16,18",
    "startupFrame": ",i25",
    "blockFrame": -5,
    "hitFrame": 5,
    "counterHitFrame": "+63a"
  },
  {
    "input": "ws2,NSS.1,3",
    "hitLevel": "m,h,h",
    "damage": "13,16,25",
    "startupFrame": ",i25~26",
    "blockFrame": "-7~-6",
    "hitFrame": "+27a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -6,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,2",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i32",
    "blockFrame": "-12c",
    "hitFrame": "+0a",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i11~12",
    "blockFrame": "-6~-5",
    "hitFrame": "+5~+6",
    "counterHitFrame": ""
  },
  {
    "input": "SS.1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i17~18",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": "+27a (+17)"
  },
  {
    "input": "SS.2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18~19",
    "blockFrame": "-13~-12",
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.DF+1",
    "hitLevel": "l!",
    "damage": 12,
    "startupFrame": "i26",
    "blockFrame": "",
    "hitFrame": "+70a (+54)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.db+3",
    "hitLevel": "l",
    "damage": 8,
    "startupFrame": "i18~19",
    "blockFrame": "-25~-24",
    "hitFrame": "-14~-13",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4",
    "hitLevel": "L",
    "damage": 18,
    "startupFrame": "i18~19",
    "blockFrame": "-26~-25",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": "+31a"
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
    "hitFrame": 5,
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
    "input": "BDS.1",
    "hitLevel": "h!",
    "damage": 25,
    "startupFrame": "i21~40",
    "blockFrame": "",
    "hitFrame": "+32a",
    "counterHitFrame": ""
  },
  {
    "input": "BDS.3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i17~30",
    "blockFrame": "-15~-2",
    "hitFrame": "-13~+0",
    "counterHitFrame": ""
  },
  {
    "input": "BT.1",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i15",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "BT.1,2",
    "hitLevel": "h,m",
    "damage": "16,18",
    "startupFrame": ",i25",
    "blockFrame": -5,
    "hitFrame": 5,
    "counterHitFrame": "+63a"
  },
  {
    "input": "BT.1,3",
    "hitLevel": "h,h",
    "damage": "16,25",
    "startupFrame": ",i25~26",
    "blockFrame": "-7~-6",
    "hitFrame": "+27a (+17)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.2",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i16~17",
    "blockFrame": "-4~-3",
    "hitFrame": "+14g~+15g",
    "counterHitFrame": "+39a"
  },
  {
    "input": "BT.3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i24~26",
    "blockFrame": "-3~-1",
    "hitFrame": "+11a",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+1",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i17~18",
    "blockFrame": "-13~-12",
    "hitFrame": "+3~+4",
    "counterHitFrame": "+38a"
  },
  {
    "input": "DGF.1",
    "hitLevel": "M",
    "damage": 22,
    "startupFrame": "i30~31",
    "blockFrame": "-2c~-1c / +2",
    "hitFrame": "+10a / +46a",
    "counterHitFrame": "+46a"
  },
  {
    "input": "DGF.2",
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i16~18",
    "blockFrame": "+4~+6",
    "hitFrame": "+13s",
    "counterHitFrame": ""
  },
  {
    "input": "DGF.2,4",
    "hitLevel": "h,M",
    "damage": "15,22",
    "startupFrame": "i26~28",
    "blockFrame": "-14~-12",
    "hitFrame": "+15a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "DGF.3",
    "hitLevel": "L",
    "damage": 18,
    "startupFrame": "i22~23",
    "blockFrame": "-13~-12",
    "hitFrame": "+6c~+7c",
    "counterHitFrame": "+27a"
  },
  {
    "input": "DGF.4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i18~20",
    "blockFrame": "-4~-2",
    "hitFrame": "+14g~+15g",
    "counterHitFrame": ""
  },
  {
    "input": "DGF.1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "DGF.3+4",
    "hitLevel": "h!,t",
    "damage": "17,18",
    "startupFrame": "i20~21",
    "blockFrame": "",
    "hitFrame": "+0~+1",
    "counterHitFrame": ""
  },
  {
    "input": "DGF.b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "DGF.d",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "DGF.d+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "DGF.f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "DGF.f+2",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i20~21",
    "blockFrame": "+7~+8",
    "hitFrame": "+19a (+10)",
    "counterHitFrame": "+64a (+44)"
  },
  {
    "input": "DGF.f+1+2",
    "hitLevel": "h,h,h",
    "damage": "10,10,20",
    "startupFrame": "i16~17 i11~12 i11~12",
    "blockFrame": "-2~-1 / +4",
    "hitFrame": "+18a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.1",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.2",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i24~28",
    "blockFrame": "-12~-8",
    "hitFrame": "+30a",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.1+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i18~19",
    "blockFrame": "-8~-7",
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.3+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i25~26",
    "blockFrame": "-13~-12",
    "hitFrame": "+52a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.d",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.d",
    "hitLevel": "M",
    "damage": 0,
    "startupFrame": "i10",
    "blockFrame": "",
    "hitFrame": "+31a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.db",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.d+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.f,f",
    "hitLevel": "M,M,M,M,M",
    "damage": "3,3,3,3,3",
    "startupFrame": "i17~19,i6~8 i5~7 i6~8 i6~8",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "FLE.f+2",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i20~21",
    "blockFrame": "+7g~+8g",
    "hitFrame": "+19a (+10)",
    "counterHitFrame": "+64a (+44)"
  },
  {
    "input": "FLE.n",
    "hitLevel": "m",
    "damage": 7,
    "startupFrame": "i2~60",
    "blockFrame": "-18~",
    "hitFrame": "+48a (+38a)",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.uf",
    "hitLevel": "m!",
    "damage": 21,
    "startupFrame": "i30~45",
    "blockFrame": "",
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.u+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FLE.u+3+4",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i38~40",
    "blockFrame": "+4~+6",
    "hitFrame": "+21a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "FUFT.d+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "IND.1",
    "hitLevel": "M!",
    "damage": 15,
    "startupFrame": "i53~55",
    "blockFrame": "",
    "hitFrame": "+0c~+2c",
    "counterHitFrame": ""
  },
  {
    "input": "IND.2",
    "hitLevel": "m",
    "damage": 7,
    "startupFrame": "i39~43",
    "blockFrame": "-8~-5",
    "hitFrame": "+2~+6",
    "counterHitFrame": ""
  },
  {
    "input": "IND.3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i12~18",
    "blockFrame": "-31~-25",
    "hitFrame": "-2a (-12)",
    "counterHitFrame": ""
  },
  {
    "input": "IND.3,3+4",
    "hitLevel": "m,m",
    "damage": "15,20",
    "startupFrame": ",i27",
    "blockFrame": -13,
    "hitFrame": "+52a (+42)",
    "counterHitFrame": ""
  },
  {
    "input": "IND.4",
    "hitLevel": "L",
    "damage": 18,
    "startupFrame": "i47~48",
    "blockFrame": "-26~-25",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": ""
  },
  {
    "input": "IND.1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "IND.3+4",
    "hitLevel": "m,m",
    "damage": "6,22",
    "startupFrame": "i17~18 i28~29",
    "blockFrame": "-6~-5",
    "hitFrame": "+3~+4",
    "counterHitFrame": ""
  },
  {
    "input": "IND.D+3+4*",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "IND.b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "IND.f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "IND.n",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "IND.u",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "IND.u+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i17",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "KIN.1,1",
    "hitLevel": "m,m,m",
    "damage": "10,5,15",
    "startupFrame": ",i23~24 i14~15",
    "blockFrame": "-9~-8",
    "hitFrame": "+7c~+8c",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.1,NSS.1",
    "hitLevel": "m,m,m",
    "damage": "10,5,20",
    "startupFrame": ",i23~24 i14~15",
    "blockFrame": "-1~+0",
    "hitFrame": "+37a (+29)",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i21~22",
    "blockFrame": "-14~-13",
    "hitFrame": "+26a (+16a)",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.2,1+2",
    "hitLevel": "m,M",
    "damage": "15,30",
    "startupFrame": "i32~34",
    "blockFrame": "-15~-13",
    "hitFrame": "+2a",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.2,1+2*",
    "hitLevel": "m,M",
    "damage": "15,30",
    "startupFrame": ",i47~49",
    "blockFrame": "+2~+4",
    "hitFrame": "+2a",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.2,NSS.1+2",
    "hitLevel": "m,M",
    "damage": "15,30",
    "startupFrame": "i32~34",
    "blockFrame": "-3~-1",
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.2,NSS.1+2*",
    "hitLevel": "m,M",
    "damage": "15,30",
    "startupFrame": ",i47~49",
    "blockFrame": "+14~+16",
    "hitFrame": "+69a (+49)",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.3",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i25~32",
    "blockFrame": "-16~-9",
    "hitFrame": "+13a",
    "counterHitFrame": "+24a"
  },
  {
    "input": "KIN.4",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i16~17",
    "blockFrame": "+0~+1",
    "hitFrame": "+20a (+11)",
    "counterHitFrame": "+49a"
  },
  {
    "input": "KIN.1+2",
    "hitLevel": "m,m,m,m",
    "damage": "4,4,4,24",
    "startupFrame": "i12~13 i6~7 i7~8 i11~13",
    "blockFrame": "-6~-4",
    "hitFrame": "+11a",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.1+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i10~13",
    "blockFrame": "-15~-12",
    "hitFrame": "+14c~+17c",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.b+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15~16",
    "blockFrame": "-9~-8",
    "hitFrame": "+2~+3",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.b+2,1",
    "hitLevel": "m,M",
    "damage": "15,19",
    "startupFrame": ",i23~24",
    "blockFrame": "-12~-11",
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.b+1+2",
    "hitLevel": "m!",
    "damage": 25,
    "startupFrame": "i46",
    "blockFrame": "",
    "hitFrame": "+6a",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.d+1",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i23~24",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": "+38a"
  },
  {
    "input": "KIN.f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.f+1",
    "hitLevel": "M,M,M",
    "damage": "6,6,10",
    "startupFrame": "i19~20 i6~7 i7~8",
    "blockFrame": "-5~-4",
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "KIN.f+1*",
    "hitLevel": "M,M,M,M,M,M",
    "damage": "6,6,6,6,6,10",
    "startupFrame": "i19~20 i6~7 i7~8 i6~7 i7~8 i7~8",
    "blockFrame": "-12~-11",
    "hitFrame": "+29a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.f+2",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i12~13",
    "blockFrame": "-1~+0",
    "hitFrame": "+9a (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "KIN.u+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "MED.3",
    "hitLevel": "m,M",
    "damage": "15,15",
    "startupFrame": "i17~28 i28~39",
    "blockFrame": "+2~+13",
    "hitFrame": "+43a",
    "counterHitFrame": ""
  },
  {
    "input": "MED.3,d+1",
    "hitLevel": "m,M,M",
    "damage": "15,15,15",
    "startupFrame": ",i24~25",
    "blockFrame": "-9~-8",
    "hitFrame": "+1c~+2c",
    "counterHitFrame": "+6a"
  },
  {
    "input": "MED.1+2",
    "hitLevel": "m!",
    "damage": 10,
    "startupFrame": "i30~34",
    "blockFrame": "",
    "hitFrame": "-1a",
    "counterHitFrame": ""
  },
  {
    "input": "MED.1+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i6~9",
    "blockFrame": "-15~-12",
    "hitFrame": "+14c~+17c",
    "counterHitFrame": ""
  },
  {
    "input": "MED.3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "MED.b",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "MED.d",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "MED.f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "MED.n",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "MED.u",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.1+2+3",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i22~40",
    "blockFrame": "-18~+0",
    "hitFrame": "+26d (-32)",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.1+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i8~11",
    "blockFrame": "-15~-12",
    "hitFrame": "+14 +64a",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.BT.d+1",
    "hitLevel": "l",
    "damage": 15,
    "startupFrame": "i17~18",
    "blockFrame": "-13~-12",
    "hitFrame": 3,
    "counterHitFrame": "+38a"
  },
  {
    "input": "NSS.FC.DF+1",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i25~26",
    "blockFrame": "-16~-15",
    "hitFrame": "+27a",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.FC.DF+1,2",
    "hitLevel": "l,L",
    "damage": "12,20",
    "startupFrame": ",i25~26",
    "blockFrame": "-14~-13",
    "hitFrame": "+14~+15",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.FC.df+3",
    "hitLevel": "L",
    "damage": 12,
    "startupFrame": "i20~21",
    "blockFrame": "-26~-25",
    "hitFrame": "+67a (+51)",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.IND.1",
    "hitLevel": "M",
    "damage": 15,
    "startupFrame": "i48~51",
    "blockFrame": "-8c~-5c",
    "hitFrame": "+5a",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.KIN.1+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i12~15",
    "blockFrame": "-15~-12",
    "hitFrame": "+14 +64a",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.KIN.d+1",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i23~24",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": "+38a"
  },
  {
    "input": "NSS.KIN.f+1",
    "hitLevel": "M,M,M",
    "damage": "6,6,12",
    "startupFrame": "i19~20 i6~7 i7~8",
    "blockFrame": "-5~-4",
    "hitFrame": "+18a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.KIN.f+1*",
    "hitLevel": "M,M,M,M,M,M",
    "damage": "6,6,6,6,6,12",
    "startupFrame": "i19~20 i6~7 i7~8 i6~7 i7~8 i7~8",
    "blockFrame": "–9~-8",
    "hitFrame": "+29a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.b,B+1+4",
    "hitLevel": "m!",
    "damage": 40,
    "startupFrame": "i65~70",
    "blockFrame": "",
    "hitFrame": "-3a (-12)",
    "counterHitFrame": "+29a (-18)"
  },
  {
    "input": "NSS.b,B+1+4,B",
    "hitLevel": ",m",
    "damage": ",20",
    "startupFrame": ",i22~25",
    "blockFrame": "-15~-12",
    "hitFrame": "+14 +64a",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.b+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.db+1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "NSS.df+1+4",
    "hitLevel": "m",
    "damage": 19,
    "startupFrame": "i20~21",
    "blockFrame": "-17~-16",
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.d+1",
    "hitLevel": "M",
    "damage": 24,
    "startupFrame": "i24~25",
    "blockFrame": "-9~-8",
    "hitFrame": "+16a",
    "counterHitFrame": "+6a"
  },
  {
    "input": "NSS.d+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.d+1+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.f,n,d,df+1",
    "hitLevel": "m",
    "damage": 19,
    "startupFrame": "i17~18",
    "blockFrame": "-17~-16",
    "hitFrame": "+35a (+25a)",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.f+1+2",
    "hitLevel": "M",
    "damage": 29,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": "+8a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.f+3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i21~25",
    "blockFrame": "-13~-9",
    "hitFrame": "+20a (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.qcf+1",
    "hitLevel": "M",
    "damage": 30,
    "startupFrame": "i53~56",
    "blockFrame": "-8c~-5c",
    "hitFrame": "+5a",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.ub+1",
    "hitLevel": "m",
    "damage": 19,
    "startupFrame": "i25~26",
    "blockFrame": "-6~-5",
    "hitFrame": "+3c~+4c",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.ub+1+3",
    "hitLevel": "m!",
    "damage": 50,
    "startupFrame": "i51~65",
    "blockFrame": "",
    "hitFrame": -23,
    "counterHitFrame": ""
  },
  {
    "input": "NSS.ub+1+3,1+2",
    "hitLevel": "m!h",
    "damage": "50,15",
    "startupFrame": ",i18~19",
    "blockFrame": "-15~-4",
    "hitFrame": "-4~-3",
    "counterHitFrame": "+45a"
  },
  {
    "input": "NSS.ub+1+3,n+1",
    "hitLevel": "m!,h!",
    "damage": "50,40",
    "startupFrame": ",i20~105",
    "blockFrame": "",
    "hitFrame": "-49a (-75)",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.ub+1+2",
    "hitLevel": "M",
    "damage": 30,
    "startupFrame": "i24~25",
    "blockFrame": "-8c~-7c",
    "hitFrame": "+16a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.uf+1",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i25~26",
    "blockFrame": "-4~-3",
    "hitFrame": "+5c~+6c",
    "counterHitFrame": "+15a"
  },
  {
    "input": "NSS.uf+1+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.u+1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i25~26",
    "blockFrame": "-5~-4",
    "hitFrame": "+4c~+5c",
    "counterHitFrame": ""
  },
  {
    "input": "NSS.u+1+2",
    "hitLevel": "L",
    "damage": 18,
    "startupFrame": "i27~29",
    "blockFrame": "+4~+6",
    "hitFrame": "+20c~+22c",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.u+1",
    "hitLevel": "M",
    "damage": 24,
    "startupFrame": "i27~29",
    "blockFrame": "-13~-11",
    "hitFrame": "-8c~-6c",
    "counterHitFrame": ""
  },
  {
    "input": "WFL.3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i17",
    "blockFrame": -16,
    "hitFrame": "+2a (-7)",
    "counterHitFrame": ""
  },
  {
    "input": "WFL.3 (Close Hit)",
    "hitLevel": "m,t",
    "damage": "37,20",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "WFL.4",
    "hitLevel": "L",
    "damage": 15,
    "startupFrame": "i23~24",
    "blockFrame": "-9~-8",
    "hitFrame": "+12c~+13c",
    "counterHitFrame": "+20a"
  },
  {
    "input": "1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": 0,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+1d",
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Right Throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "qcb,f+2",
    "hitLevel": "t",
    "damage": 0,
    "startupFrame": "i15~16",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "qcf+2",
    "hitLevel": "t",
    "damage": 22,
    "startupFrame": "i15~16",
    "blockFrame": 0,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 45,
    "startupFrame": "i11",
    "blockFrame": 0,
    "hitFrame": 1,
    "counterHitFrame": ""
  }
]

const yoshimitsuFrameData = rawYoshimitsuFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default yoshimitsuFrameData;