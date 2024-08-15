const rawReinaFrameData = [
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
    "input": "H.WRA.2+3",
    "hitLevel": "l,m,m,m",
    "damage": "12,6,6,20",
    "startupFrame": "i18~19",
    "blockFrame": -17,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "H.d+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,m",
    "damage": "20,25",
    "startupFrame": "i21",
    "blockFrame": 8,
    "hitFrame": "+0d",
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
    "damage": "5,6,12",
    "startupFrame": ",i13",
    "blockFrame": -17,
    "hitFrame": 11,
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
    "damage": "5,8,14",
    "startupFrame": ",i17",
    "blockFrame": -14,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,h,m",
    "damage": "5,8,10",
    "startupFrame": ",i21~22",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3,4",
    "hitLevel": "h,h,m,h",
    "damage": "5,8,10,21",
    "startupFrame": ",i22~23",
    "blockFrame": -4,
    "hitFrame": "+21a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 6,
    "startupFrame": "i12",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "2,2",
    "hitLevel": "h,h",
    "damage": "6,6",
    "startupFrame": ",i14~15",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "2,2,1",
    "hitLevel": "h,h,m",
    "damage": "6,6,20",
    "startupFrame": ",i22~23",
    "blockFrame": -14,
    "hitFrame": "+12a",
    "counterHitFrame": ""
  },
  {
    "input": "2,2,2",
    "hitLevel": "h,h,m",
    "damage": "6,6,21",
    "startupFrame": ",i29",
    "blockFrame": -4,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "2,2,2,1",
    "hitLevel": "h,h,m,m",
    "damage": "6,6,21,20",
    "startupFrame": ",i35~37",
    "blockFrame": "-15~13",
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "2,2,2,2",
    "hitLevel": "h,h,m,m",
    "damage": "6,6,21,25",
    "startupFrame": ",i31",
    "blockFrame": -14,
    "hitFrame": "+21a (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "2~1",
    "hitLevel": "m,m",
    "damage": "4,18",
    "startupFrame": "i11(~14)",
    "blockFrame": -14,
    "hitFrame": "+31d (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "3",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i18~19",
    "blockFrame": -11,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "3,2",
    "hitLevel": "h,h",
    "damage": "12,16",
    "startupFrame": ",i20",
    "blockFrame": -9,
    "hitFrame": 8,
    "counterHitFrame": "+66a (+50)"
  },
  {
    "input": "3,4",
    "hitLevel": "h,m",
    "damage": "12,20",
    "startupFrame": ",i20",
    "blockFrame": -14,
    "hitFrame": "+50 (+19)",
    "counterHitFrame": "+54a"
  },
  {
    "input": "3,4,H.4",
    "hitLevel": "h,m,m",
    "damage": "12,20,28",
    "startupFrame": ",i27",
    "blockFrame": -8,
    "hitFrame": "+23a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i13~14",
    "blockFrame": -8,
    "hitFrame": "+11g",
    "counterHitFrame": "+35a"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i12~13",
    "blockFrame": "-10~-9",
    "hitFrame": "+24a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "1+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2+3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "m,m",
    "damage": "5,10",
    "startupFrame": "i18 i26",
    "blockFrame": -8,
    "hitFrame": "+3c",
    "counterHitFrame": ""
  },
  {
    "input": "3+4,4",
    "hitLevel": "m,m,m",
    "damage": "5,10,20",
    "startupFrame": ",i16",
    "blockFrame": -14,
    "hitFrame": "+50 (+19)",
    "counterHitFrame": "+54a"
  },
  {
    "input": "3+4,4,H.4",
    "hitLevel": "m,m,m,m",
    "damage": "5,10,20,28",
    "startupFrame": ",i27",
    "blockFrame": -8,
    "hitFrame": "+23a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 8,
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,3",
    "hitLevel": "h,m",
    "damage": "8,16",
    "startupFrame": ",i18~19",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i19~20",
    "blockFrame": "+2c",
    "hitFrame": "+5c",
    "counterHitFrame": "+29d"
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i32",
    "blockFrame": -11,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i43",
    "blockFrame": -14,
    "hitFrame": "+50 (+19)",
    "counterHitFrame": "+55a"
  },
  {
    "input": "f+3+4*",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i67",
    "blockFrame": "[[Reina_combos#Mini-combos|+10]]",
    "hitFrame": "+52a",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4*,H.4",
    "hitLevel": "m,m",
    "damage": "30,28",
    "startupFrame": ",i27",
    "blockFrame": -8,
    "hitFrame": "+23a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4,H.4",
    "hitLevel": "m,m",
    "damage": "25,28",
    "startupFrame": ",i27",
    "blockFrame": -8,
    "hitFrame": "+23a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 8,
    "startupFrame": "i13~14",
    "blockFrame": -3,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,1",
    "hitLevel": "m,h",
    "damage": "8,10",
    "startupFrame": ",i20",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,m",
    "damage": "8,20",
    "startupFrame": ",i22~23",
    "blockFrame": -14,
    "hitFrame": "+12a",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,2",
    "hitLevel": "m,m",
    "damage": "14,10",
    "startupFrame": ",i18",
    "blockFrame": -8,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,2,3",
    "hitLevel": "m,m,h",
    "damage": "14,10,20",
    "startupFrame": ",i27",
    "blockFrame": -8,
    "hitFrame": "+35a",
    "counterHitFrame": "+71a (+55)"
  },
  {
    "input": "df+3+4",
    "hitLevel": "m,h",
    "damage": "5,10",
    "startupFrame": "i16,i5~9",
    "blockFrame": -15,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4,4",
    "hitLevel": "m,h,m",
    "damage": "5,10,20",
    "startupFrame": ",i20",
    "blockFrame": -14,
    "hitFrame": "+50 (+19)",
    "counterHitFrame": "+54a"
  },
  {
    "input": "d+1",
    "hitLevel": "sm",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": "+0c",
    "hitFrame": "+3c",
    "counterHitFrame": "+27d"
  },
  {
    "input": "d+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
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
    "input": "d+1+2",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "l,l",
    "damage": "10,12",
    "startupFrame": "i20~21,i9~10",
    "blockFrame": -16,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "L",
    "damage": 7,
    "startupFrame": "i16",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": 2
  },
  {
    "input": "db+4,1+2",
    "hitLevel": "L,m",
    "damage": "7,20",
    "startupFrame": ",i15",
    "blockFrame": -12,
    "hitFrame": "+39d (-19)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i18",
    "blockFrame": -4,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,1",
    "hitLevel": "h,m",
    "damage": "14,15",
    "startupFrame": ",i22",
    "blockFrame": -10,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,1,3",
    "hitLevel": "h,m,m",
    "damage": "14,15,13",
    "startupFrame": ",i15~17",
    "blockFrame": -10,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,1,3,3",
    "hitLevel": "h,m,m,m",
    "damage": "14,15,13,20",
    "startupFrame": ",i32",
    "blockFrame": -16,
    "hitFrame": "+48 (+17)",
    "counterHitFrame": "+53a"
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
    "damage": 14,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": 3,
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
    "input": "b+4",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": "+35a",
    "counterHitFrame": "+71a (+55)"
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": "+14g",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4",
    "hitLevel": "ub(m)",
    "damage": 50,
    "startupFrame": "i64",
    "blockFrame": "+20d (-1)",
    "hitFrame": "+20d (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i17~18",
    "blockFrame": -13,
    "hitFrame": "+16a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "u+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "u+1+2",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": 8,
    "counterHitFrame": 17
  },
  {
    "input": "uf+2",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i15-i16",
    "blockFrame": -12,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i21~22",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3,1",
    "hitLevel": "h,m",
    "damage": "10,15",
    "startupFrame": ",i16",
    "blockFrame": -5,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i17~18",
    "blockFrame": -13,
    "hitFrame": "+70a (+54)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "mm",
    "damage": "10,10",
    "startupFrame": "i20,i4",
    "blockFrame": -10,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,1+2",
    "hitLevel": "mm,m",
    "damage": "10,10,20",
    "startupFrame": ",i17",
    "blockFrame": -14,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "1+2+3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b,b,UB",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i39-41",
    "blockFrame": "+4c",
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i20~22",
    "blockFrame": -3,
    "hitFrame": "+20a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3+4",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i16~19",
    "blockFrame": -2,
    "hitFrame": "+49d (-9)",
    "counterHitFrame": "+49a"
  },
  {
    "input": "f,n",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df:2",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i11~12 (~i13)",
    "blockFrame": 5,
    "hitFrame": "+25a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df:3",
    "hitLevel": "M",
    "damage": 27,
    "startupFrame": "i15~17",
    "blockFrame": -9,
    "hitFrame": "+13a (-4)",
    "counterHitFrame": "+23a (+17)"
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i24~27",
    "blockFrame": 6,
    "hitFrame": "+32a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+4",
    "hitLevel": "h",
    "damage": 28,
    "startupFrame": "i26~27",
    "blockFrame": 4,
    "hitFrame": "+31a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13",
    "blockFrame": -10,
    "hitFrame": "+13 SEN",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18",
    "blockFrame": -8,
    "hitFrame": 9,
    "counterHitFrame": "+14c"
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15~16",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,4",
    "hitLevel": "m,h",
    "damage": "14,21",
    "startupFrame": ",i22~23",
    "blockFrame": -4,
    "hitFrame": "+21a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i11~12",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ws4,4",
    "hitLevel": "m,m",
    "damage": "10,15",
    "startupFrame": ",i17~18",
    "blockFrame": -17,
    "hitFrame": "-1c",
    "counterHitFrame": ""
  },
  {
    "input": "ws3+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i14~15",
    "blockFrame": -8,
    "hitFrame": 14,
    "counterHitFrame": 14
  },
  {
    "input": "SS.4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i18~19",
    "blockFrame": -13,
    "hitFrame": 0,
    "counterHitFrame": "+13g"
  },
  {
    "input": "SSH.3",
    "hitLevel": "L",
    "damage": 26,
    "startupFrame": "i32",
    "blockFrame": -26,
    "hitFrame": "-4c",
    "counterHitFrame": ""
  },
  {
    "input": "SSH.CH.3",
    "hitLevel": "l",
    "damage": "33,18",
    "startupFrame": "i22",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "SSH.uf",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "SSH.uf+3",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i30~33",
    "blockFrame": 6,
    "hitFrame": "+32a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "SSH.uf+4",
    "hitLevel": "h",
    "damage": 28,
    "startupFrame": "i32~33",
    "blockFrame": 4,
    "hitFrame": "+31a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i20",
    "blockFrame": -17,
    "hitFrame": "+54a (+34)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": "+54a",
    "counterHitFrame": ""
  },
  {
    "input": "FC.d+3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "BT.4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17",
    "blockFrame": -14,
    "hitFrame": "+54a",
    "counterHitFrame": ""
  },
  {
    "input": "CH.df+3+4",
    "hitLevel": "m,t",
    "damage": "6,35",
    "startupFrame": "i16",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+4",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i19",
    "blockFrame": -19,
    "hitFrame": "-8 / -8a (-16)",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+4,1",
    "hitLevel": "L,L",
    "damage": "14,17",
    "startupFrame": ",i20~21",
    "blockFrame": -26,
    "hitFrame": "-10 / -15a (-23)",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -14,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "SEN.1,2",
    "hitLevel": "m,m",
    "damage": "12,25",
    "startupFrame": ",i26",
    "blockFrame": -16,
    "hitFrame": "+21a (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i13",
    "blockFrame": -4,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "SEN.3",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "i12~13",
    "blockFrame": 1,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "SEN.4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i26~27",
    "blockFrame": 4,
    "hitFrame": "+12d",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.1+2",
    "hitLevel": "m,m",
    "damage": "13,17",
    "startupFrame": "i14~15,i12~13",
    "blockFrame": "-6 WRA",
    "hitFrame": "+32a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.3+4",
    "hitLevel": "l,h",
    "damage": "10,12",
    "startupFrame": "i20~21,i35~36",
    "blockFrame": "-29, -11",
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "UNS.4",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i18~19",
    "blockFrame": -8,
    "hitFrame": "+43a (-15)",
    "counterHitFrame": ""
  },
  {
    "input": "WDS.3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i16~17",
    "blockFrame": -6,
    "hitFrame": 4,
    "counterHitFrame": "+58a"
  },
  {
    "input": "WGS.1",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i19~21",
    "blockFrame": -22,
    "hitFrame": "+24a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "WGS.1,3",
    "hitLevel": "m,m",
    "damage": "24,22",
    "startupFrame": ",i26~30",
    "blockFrame": -12,
    "hitFrame": "+18d (-17)",
    "counterHitFrame": ""
  },
  {
    "input": "WGS.1,4",
    "hitLevel": "m,h",
    "damage": "24,26",
    "startupFrame": ",i23~27",
    "blockFrame": -7,
    "hitFrame": "+1 (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "WGS.2",
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i11~12",
    "blockFrame": -10,
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "WGS.DF+4",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i16",
    "blockFrame": -23,
    "hitFrame": "+2c",
    "counterHitFrame": ""
  },
  {
    "input": "WGS.DF+4,2",
    "hitLevel": "l,h",
    "damage": "6,20",
    "startupFrame": ",i24",
    "blockFrame": -22,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "WGS.DF+4,4",
    "hitLevel": "l,l",
    "damage": "6,16",
    "startupFrame": ",i17~18",
    "blockFrame": -23,
    "hitFrame": 2,
    "counterHitFrame": "+23a"
  },
  {
    "input": "WGS.df+3",
    "hitLevel": "M",
    "damage": 17,
    "startupFrame": "i15~17",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": "+23a (+17)"
  },
  {
    "input": "WRA.1",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i12",
    "blockFrame": -4,
    "hitFrame": 8,
    "counterHitFrame": 13
  },
  {
    "input": "WRA.1,4",
    "hitLevel": "h,M",
    "damage": "12,22",
    "startupFrame": ",i25~26",
    "blockFrame": -9,
    "hitFrame": "+9g",
    "counterHitFrame": ""
  },
  {
    "input": "WRA.2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i15~16",
    "blockFrame": -9,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "WRA.3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i28",
    "blockFrame": -6,
    "hitFrame": "+22a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "WRA.3,4",
    "hitLevel": "m,m",
    "damage": "17,20",
    "startupFrame": ",i18~19",
    "blockFrame": 6,
    "hitFrame": "+17a (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "WRA.4",
    "hitLevel": "M,M",
    "damage": "6,8",
    "startupFrame": "i17~18,i13",
    "blockFrame": -10,
    "hitFrame": -10,
    "counterHitFrame": 7
  },
  {
    "input": "WRA.4,2",
    "hitLevel": "M,M,m",
    "damage": "6,8,8",
    "startupFrame": ",i15",
    "blockFrame": -18,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "WRA.4,2,2",
    "hitLevel": "M,M,m,h",
    "damage": "6,8,8,4",
    "startupFrame": ",i15",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "WRA.4,2,2,1+2",
    "hitLevel": "M,M,m,h,m",
    "damage": "6,8,8,4,22",
    "startupFrame": ",i24~25",
    "blockFrame": -20,
    "hitFrame": "+24 (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "WRA.1+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i15~16",
    "blockFrame": -13,
    "hitFrame": "+16d",
    "counterHitFrame": ""
  },
  {
    "input": "WRA.3+4",
    "hitLevel": "M",
    "damage": 26,
    "startupFrame": "i18~19",
    "blockFrame": -5,
    "hitFrame": "+5d",
    "counterHitFrame": ""
  },
  {
    "input": "WRA.d+4",
    "hitLevel": "L",
    "damage": 9,
    "startupFrame": "i16~17",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": 2
  },
  {
    "input": "WRA.d+4,3",
    "hitLevel": "L,m",
    "damage": "9,20",
    "startupFrame": ",i21~22",
    "blockFrame": -16,
    "hitFrame": "+48 (+17)",
    "counterHitFrame": "+53a"
  },
  {
    "input": "1+3",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -6,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "th(h)",
    "damage": 50,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "Right throw",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "SEN.1+3",
    "hitLevel": "th(h)",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": "",
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "WRA.1+3",
    "hitLevel": "t (h)",
    "damage": 20,
    "startupFrame": "i16",
    "blockFrame": "",
    "hitFrame": "+10d",
    "counterHitFrame": ""
  },
  {
    "input": "d,db,b,f+2",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "+25 (+8)",
    "counterHitFrame": ""
  }
]

const reinaFrameData = rawReinaFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default reinaFrameData;