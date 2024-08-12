const rawEddyFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": "",
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "H.3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i20~22",
    "blockFrame": 9,
    "hitFrame": "+66a(+50)",
    "counterHitFrame": ""
  },
  {
    "input": "H.qcf+4",
    "hitLevel": "h",
    "damage": 45,
    "startupFrame": "i22~23",
    "blockFrame": 9,
    "hitFrame": "+34a(+8)",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m",
    "damage": 55,
    "startupFrame": "i18~19",
    "blockFrame": 6,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "",
    "damage": "",
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
    "startupFrame": ",i10",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h",
    "damage": "5,12",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4~3",
    "hitLevel": "h,h,L",
    "damage": "5,12,20",
    "startupFrame": ",i32~33",
    "blockFrame": "-14c",
    "hitFrame": "+18a",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4~4",
    "hitLevel": "h,h,h",
    "damage": "5,12,27",
    "startupFrame": ",i18~20",
    "blockFrame": "+8~+10",
    "hitFrame": "+42d (-16)",
    "counterHitFrame": ""
  },
  {
    "input": "1,3",
    "hitLevel": "h,m",
    "damage": "5,16",
    "startupFrame": ",i23~24",
    "blockFrame": -14,
    "hitFrame": "+7c",
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,h",
    "damage": "10,13",
    "startupFrame": ",i17~18",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,4",
    "hitLevel": "h,h,m",
    "damage": "10,13,21",
    "startupFrame": ",i20~22",
    "blockFrame": "-12~-10",
    "hitFrame": "+17a (+8)",
    "counterHitFrame": "+56a"
  },
  {
    "input": "2,3",
    "hitLevel": "h,m",
    "damage": "10,20",
    "startupFrame": ",i20~21",
    "blockFrame": -8,
    "hitFrame": "+8s",
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14~15",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "3,3",
    "hitLevel": "m,m",
    "damage": "12,22",
    "startupFrame": ",i23~24",
    "blockFrame": -3,
    "hitFrame": "+8s",
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13~14",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "4,4",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": ",i30~31",
    "blockFrame": -7,
    "hitFrame": "+12g",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i20",
    "blockFrame": "+0c",
    "hitFrame": "+5c",
    "counterHitFrame": "+13c"
  },
  {
    "input": "f+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i18",
    "blockFrame": -9,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,4",
    "hitLevel": "m,l",
    "damage": "15,17",
    "startupFrame": ",i23~24",
    "blockFrame": "-14c",
    "hitFrame": 2,
    "counterHitFrame": "+71a(+55)"
  },
  {
    "input": "f+3",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i18~20",
    "blockFrame": -5,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,4",
    "hitLevel": "h,m",
    "damage": "16,25",
    "startupFrame": ",i29~31",
    "blockFrame": -11,
    "hitFrame": "+15a(+6)",
    "counterHitFrame": "+32a"
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i23~25",
    "blockFrame": -8,
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,3",
    "hitLevel": "m,m",
    "damage": 138,
    "startupFrame": ",i23~24",
    "blockFrame": -13,
    "hitFrame": "-1c",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,3,3+4",
    "hitLevel": "m,m,M,M",
    "damage": "138,7,20",
    "startupFrame": ",i24~26",
    "blockFrame": -12,
    "hitFrame": "+8a",
    "counterHitFrame": ""
  },
  {
    "input": "f+4,3+4",
    "hitLevel": "m,L",
    "damage": "13,14",
    "startupFrame": ",i22~24",
    "blockFrame": "-24c",
    "hitFrame": "+12a",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i19~21",
    "blockFrame": -9,
    "hitFrame": "+18a (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,3",
    "hitLevel": "m,h",
    "damage": "10,21",
    "startupFrame": ",i26~27",
    "blockFrame": -7,
    "hitFrame": "+22a(+5)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 19,
    "startupFrame": "i14~15",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": "+21a(+4)"
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15~18",
    "blockFrame": -18,
    "hitFrame": "+31a(+21)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "L",
    "damage": 14,
    "startupFrame": "i18",
    "blockFrame": "-13c",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "m,m",
    "damage": "10,11",
    "startupFrame": "i18~19",
    "blockFrame": "-3 -2",
    "hitFrame": "+23a",
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i17~18",
    "blockFrame": -9,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+2,3",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": ",i24~25",
    "blockFrame": "-4c",
    "hitFrame": "+5c",
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "L",
    "damage": 17,
    "startupFrame": "i21~22",
    "blockFrame": "-14c",
    "hitFrame": 1,
    "counterHitFrame": "+25d"
  },
  {
    "input": "d+4",
    "hitLevel": "L",
    "damage": 10,
    "startupFrame": "i15~16",
    "blockFrame": "-16c",
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "d+4,3",
    "hitLevel": "L,m",
    "damage": "10,20",
    "startupFrame": "i21~22",
    "blockFrame": "-13c",
    "hitFrame": "+12c",
    "counterHitFrame": "Launch"
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
    "input": "db+2",
    "hitLevel": "L",
    "damage": 10,
    "startupFrame": "i18~19",
    "blockFrame": "-18c",
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "db+2,3",
    "hitLevel": "L,m",
    "damage": "10,23",
    "startupFrame": ",i27~28",
    "blockFrame": -18,
    "hitFrame": "+64(+49)",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "L",
    "damage": 21,
    "startupFrame": "i28~29",
    "blockFrame": "-14c",
    "hitFrame": "+5c",
    "counterHitFrame": "+21a"
  },
  {
    "input": "db+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i17~18",
    "blockFrame": -8,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "db+4,4",
    "hitLevel": "m,h",
    "damage": "14,27",
    "startupFrame": ",i33~34",
    "blockFrame": -9,
    "hitFrame": "+19a(-7)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i30",
    "blockFrame": -8,
    "hitFrame": "+12c",
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4",
    "hitLevel": "m,m",
    "damage": "12,12",
    "startupFrame": "i20~22",
    "blockFrame": -6,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4,4",
    "hitLevel": "m,m,m",
    "damage": "12,12,10",
    "startupFrame": ",i21~22",
    "blockFrame": -8,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4,4,3",
    "hitLevel": "m,m,m,m",
    "damage": "12,12,10,26",
    "startupFrame": ",i22~23",
    "blockFrame": -14,
    "hitFrame": "+15a(+6)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14~15",
    "blockFrame": -7,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,4",
    "hitLevel": "m,m",
    "damage": "15,10",
    "startupFrame": ",i25~27",
    "blockFrame": -8,
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "b+1,4,3",
    "hitLevel": "m,m,m",
    "damage": "15,10,8",
    "startupFrame": "i23~24",
    "blockFrame": -13,
    "hitFrame": "-1c",
    "counterHitFrame": ""
  },
  {
    "input": "b+1,4,3,3+4",
    "hitLevel": "m,m,m,m,m",
    "damage": "15,10,8,7,20",
    "startupFrame": ",i24~26",
    "blockFrame": -12,
    "hitFrame": "+8a",
    "counterHitFrame": ""
  },
  {
    "input": "b+1,4,3+4",
    "hitLevel": "m,m,L",
    "damage": "15,10,7,7",
    "startupFrame": ",i22~24",
    "blockFrame": "-24c",
    "hitFrame": 12,
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15~16",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,3",
    "hitLevel": "m,m",
    "damage": "12,13",
    "startupFrame": ",i22~23",
    "blockFrame": -11,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,3,3",
    "hitLevel": "m,m,m",
    "damage": "12,13,25",
    "startupFrame": ",i33~35",
    "blockFrame": -14,
    "hitFrame": "+13a(-4)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,4",
    "hitLevel": "m,h",
    "damage": "12,23",
    "startupFrame": ",i25~26",
    "blockFrame": -7,
    "hitFrame": "+14a(+5)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13~14",
    "blockFrame": -9,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,3",
    "hitLevel": "m,m",
    "damage": "10,21",
    "startupFrame": ",i26~28",
    "blockFrame": -15,
    "hitFrame": "+33a(+23)",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i21~22",
    "blockFrame": 0,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "b+4,4",
    "hitLevel": "h,m,m",
    "damage": "14,6,6",
    "startupFrame": ",i29~31",
    "blockFrame": -9,
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,4,3",
    "hitLevel": "h,m,m,m",
    "damage": "14,6,6,10",
    "startupFrame": ",i28~30",
    "blockFrame": "+4c",
    "hitFrame": "+14a",
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
    "input": "b+3+4",
    "hitLevel": "h",
    "damage": 28,
    "startupFrame": "i20~21",
    "blockFrame": -7,
    "hitFrame": "+21a(+11)",
    "counterHitFrame": ""
  },
  {
    "input": "ub+3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i31~33",
    "blockFrame": "+4c",
    "hitFrame": "+13a",
    "counterHitFrame": ""
  },
  {
    "input": "ub+4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i19~21",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "u+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i38~42",
    "blockFrame": 0,
    "hitFrame": "+5a(-5)",
    "counterHitFrame": ""
  },
  {
    "input": "u+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "u+4~3",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i32~33",
    "blockFrame": "-14c",
    "hitFrame": 18,
    "counterHitFrame": ""
  },
  {
    "input": "u+4~4",
    "hitLevel": "h",
    "damage": 27,
    "startupFrame": "i18~20",
    "blockFrame": 8,
    "hitFrame": "+42d(-16)",
    "counterHitFrame": ""
  },
  {
    "input": "u+1+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i16~17",
    "blockFrame": 0,
    "hitFrame": "+18d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22~23",
    "blockFrame": -13,
    "hitFrame": "+32a(+24)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i26~28",
    "blockFrame": "-10c",
    "hitFrame": "-8c",
    "counterHitFrame": "+12a"
  },
  {
    "input": "uf+3,3",
    "hitLevel": "m,m",
    "damage": "15,20",
    "startupFrame": ",i21~24",
    "blockFrame": -18,
    "hitFrame": "+31a(+21)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3,4",
    "hitLevel": "m,L",
    "damage": "15,10",
    "startupFrame": "i24~25",
    "blockFrame": "-14c",
    "hitFrame": 7,
    "counterHitFrame": "+73a(+57)"
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i22~24",
    "blockFrame": -9,
    "hitFrame": 12,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m,h",
    "damage": "10,20",
    "startupFrame": "i17~18",
    "blockFrame": -13,
    "hitFrame": "+17a",
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
    "input": "b,B+2+3",
    "hitLevel": "m!",
    "damage": "25,30",
    "startupFrame": "i77~79",
    "blockFrame": "",
    "hitFrame": "-37a(-46)",
    "counterHitFrame": ""
  },
  {
    "input": "b,ub",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "L",
    "damage": 20,
    "startupFrame": "i21~22",
    "blockFrame": "-14c",
    "hitFrame": "+6c",
    "counterHitFrame": "+15c"
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i19~20",
    "blockFrame": -12,
    "hitFrame": "+37a(+27)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3+4",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "i23~24",
    "blockFrame": "+3c",
    "hitFrame": "+17a",
    "counterHitFrame": ""
  },
  {
    "input": "uf,n,4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23~25",
    "blockFrame": -13,
    "hitFrame": "+32a(+22)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i25~27",
    "blockFrame": 8,
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "h",
    "damage": 6,
    "startupFrame": "i13~14",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,3",
    "hitLevel": "h,m",
    "damage": "6,14",
    "startupFrame": ",i19~21",
    "blockFrame": -14,
    "hitFrame": "+38a(+20)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1,4",
    "hitLevel": "h,h",
    "damage": "6,23",
    "startupFrame": ",i23~25",
    "blockFrame": -7,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -18,
    "hitFrame": 51,
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i19~21",
    "blockFrame": -13,
    "hitFrame": "+72a(+56)",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i11~13",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "ws4,4",
    "hitLevel": "m,h",
    "damage": "13,10",
    "startupFrame": ",i26~27",
    "blockFrame": -4,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws4,4,4",
    "hitLevel": "m,h,m,m",
    "damage": "13,10,6,6",
    "startupFrame": ",i29~31",
    "blockFrame": -9,
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "ws4,4,4,3",
    "hitLevel": "m,h,m,m,m",
    "damage": "13,10,6,6,10",
    "startupFrame": ",i28~30",
    "blockFrame": "+4c",
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "ws3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i25~27",
    "blockFrame": "-9c",
    "hitFrame": "+14d",
    "counterHitFrame": ""
  },
  {
    "input": "SS.3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i25~26",
    "blockFrame": 0,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "SS.4",
    "hitLevel": "L,L",
    "damage": "7,10",
    "startupFrame": "i21~22",
    "blockFrame": "-13c",
    "hitFrame": "+3c",
    "counterHitFrame": ""
  },
  {
    "input": "SS.3+4",
    "hitLevel": "h,h",
    "damage": "6,10",
    "startupFrame": "i14~15",
    "blockFrame": -7,
    "hitFrame": "+31a(+24)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i22~23",
    "blockFrame": 6,
    "hitFrame": "+9c",
    "counterHitFrame": "+41a"
  },
  {
    "input": "FC.df+4",
    "hitLevel": "L",
    "damage": 25,
    "startupFrame": "i24~25",
    "blockFrame": "-21c",
    "hitFrame": 9,
    "counterHitFrame": "+30a"
  },
  {
    "input": "FUFT.b+3+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i16-28",
    "blockFrame": "-15~-27",
    "hitFrame": "+2a(-10~)+18a(+6)",
    "counterHitFrame": ""
  },
  {
    "input": "HSP.1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i23~25",
    "blockFrame": 6,
    "hitFrame": "+8c",
    "counterHitFrame": "+19d"
  },
  {
    "input": "HSP.2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i17~18",
    "blockFrame": -8,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "HSP.2,3",
    "hitLevel": "m,m",
    "damage": "15,23",
    "startupFrame": ",i26~27",
    "blockFrame": -13,
    "hitFrame": "-2(-11)",
    "counterHitFrame": ""
  },
  {
    "input": "HSP.3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i17~18",
    "blockFrame": -8,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "HSP.3,3",
    "hitLevel": "m,h",
    "damage": "10,10",
    "startupFrame": ",i27~28",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "HSP.3,3,3",
    "hitLevel": "m,h,h",
    "damage": "10,10,23",
    "startupFrame": ",i30~31",
    "blockFrame": -5,
    "hitFrame": 13,
    "counterHitFrame": ""
  },
  {
    "input": "HSP.4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i12~13",
    "blockFrame": -3,
    "hitFrame": 10,
    "counterHitFrame": "+31a"
  },
  {
    "input": "HSP.4,2",
    "hitLevel": "m,m",
    "damage": "10,21",
    "startupFrame": ",i23~24",
    "blockFrame": -13,
    "hitFrame": "+12a(+3)",
    "counterHitFrame": ""
  },
  {
    "input": "HSP.4,2~3",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": ",i28~30",
    "blockFrame": "+4c",
    "hitFrame": "+14d",
    "counterHitFrame": ""
  },
  {
    "input": "HSP.1+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i22~23",
    "blockFrame": -12,
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "HSP.b+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i36~37",
    "blockFrame": -12,
    "hitFrame": "+13a",
    "counterHitFrame": "+58a"
  },
  {
    "input": "HSP.n,d",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "HSP.n,f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "MD1.HSP.3+4",
    "hitLevel": "L,m,m",
    "damage": "6,6,18",
    "startupFrame": "i21~22",
    "blockFrame": -13,
    "hitFrame": "+4c",
    "counterHitFrame": ""
  },
  {
    "input": "MD1.HSP.b+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i23~25",
    "blockFrame": 6,
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "MD2.HSP.3+4",
    "hitLevel": "L,m,m",
    "damage": "16,4,15",
    "startupFrame": "i21~22",
    "blockFrame": -13,
    "hitFrame": "+18a(-17)",
    "counterHitFrame": ""
  },
  {
    "input": "MD2.HSP.b+4",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i23~25",
    "blockFrame": 6,
    "hitFrame": "+9a",
    "counterHitFrame": ""
  },
  {
    "input": "RLX.1",
    "hitLevel": "L",
    "damage": 7,
    "startupFrame": "i17",
    "blockFrame": "-11c",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "RLX.1,3",
    "hitLevel": "L,m",
    "damage": "7,17",
    "startupFrame": ",i25~26",
    "blockFrame": "-14c",
    "hitFrame": "+5c",
    "counterHitFrame": "+42a"
  },
  {
    "input": "RLX.2",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i18~19",
    "blockFrame": -2,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "RLX.2,4",
    "hitLevel": "m,h",
    "damage": "16,17",
    "startupFrame": ",i29~30",
    "blockFrame": -5,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "RLX.2,4,4",
    "hitLevel": "m,h,m",
    "damage": "16,17,25",
    "startupFrame": ",i32~33",
    "blockFrame": -14,
    "hitFrame": "+15a(+6)",
    "counterHitFrame": ""
  },
  {
    "input": "RLX.3",
    "hitLevel": "L",
    "damage": 12,
    "startupFrame": "i16~17",
    "blockFrame": "-26c",
    "hitFrame": -4,
    "counterHitFrame": "+27a"
  },
  {
    "input": "RLX.3,3",
    "hitLevel": "L,m",
    "damage": "12,27",
    "startupFrame": ",i25~26",
    "blockFrame": -13,
    "hitFrame": "-2(-3)",
    "counterHitFrame": ""
  },
  {
    "input": "RLX.4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15~16",
    "blockFrame": -8,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "RLX.4,3",
    "hitLevel": "m,m",
    "damage": "14,25",
    "startupFrame": ",i28~30",
    "blockFrame": -13,
    "hitFrame": "+16a/HE",
    "counterHitFrame": ""
  },
  {
    "input": "RLX.1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i18~19",
    "blockFrame": -8,
    "hitFrame": "+25a(+20)",
    "counterHitFrame": ""
  },
  {
    "input": "RLX.3+4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i17~18",
    "blockFrame": -18,
    "hitFrame": "+29a(+19)",
    "counterHitFrame": ""
  },
  {
    "input": "RLX.n,d",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "RLX.n,f",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -5,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -6,
    "hitFrame": -9,
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
    "input": "HSP.1+3",
    "hitLevel": "th(h)",
    "damage": 26,
    "startupFrame": "i23~24",
    "blockFrame": "",
    "hitFrame": 6,
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
    "input": "RLX.uf+1+2",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i17~18",
    "blockFrame": -6,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "Right throw",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+3",
    "hitLevel": "th(m)",
    "damage": 30,
    "startupFrame": "i12~13",
    "blockFrame": "",
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "d+2+4",
    "hitLevel": "th(m)",
    "damage": 35,
    "startupFrame": "i12~13",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -6,
    "hitFrame": "-4(-34)",
    "counterHitFrame": ""
  }
]

const eddyFrameData = rawEddyFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default eddyFrameData;