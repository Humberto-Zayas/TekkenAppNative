const rawSteveFrameData = [
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
    "input": "H.EXD.1+3",
    "hitLevel": "h (th)",
    "damage": "",
    "startupFrame": "i18",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.LNH",
    "hitLevel": "sp, m, h (th)",
    "damage": 15,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.df+3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,th",
    "damage": "10,4,2,3,3,3,25",
    "startupFrame": "i16",
    "blockFrame": "+8 LNH",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m",
    "damage": "",
    "startupFrame": "",
    "blockFrame": -15,
    "hitFrame": "",
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
    "damage": "5,7",
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,2",
    "hitLevel": "h,h,h",
    "damage": "5,7,15",
    "startupFrame": "",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,d+1",
    "hitLevel": "h,h,m",
    "damage": "5,7,15",
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": 0,
    "counterHitFrame": 5
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,10",
    "startupFrame": "i10",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1",
    "hitLevel": "h,h,h",
    "damage": "5,10,15",
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1,2",
    "hitLevel": "h,h,h,m",
    "damage": "5,10,15,15",
    "startupFrame": "",
    "blockFrame": -10,
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1,d+2",
    "hitLevel": "h,h,h,l",
    "damage": "5,10,15,19",
    "startupFrame": "",
    "blockFrame": -12,
    "hitFrame": "+1c",
    "counterHitFrame": "+14d"
  },
  {
    "input": "1,d+1",
    "hitLevel": "h,m",
    "damage": "5,15",
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": 0,
    "counterHitFrame": 5
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i12",
    "blockFrame": -1,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,h",
    "damage": "12,14",
    "startupFrame": "",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,2",
    "hitLevel": "h,h,m",
    "damage": "12,14,22",
    "startupFrame": "",
    "blockFrame": -11,
    "hitFrame": "+13a (+4)",
    "counterHitFrame": ""
  },
  {
    "input": "2,2",
    "hitLevel": "h,h",
    "damage": "12,17",
    "startupFrame": "",
    "blockFrame": -14,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m,m",
    "damage": "7,21",
    "startupFrame": "i14",
    "blockFrame": -12,
    "hitFrame": "+18a (+11)",
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
    "damage": 11,
    "startupFrame": "i21~22",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "m,h",
    "damage": "11,12",
    "startupFrame": "",
    "blockFrame": -5,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1~2",
    "hitLevel": "m,m",
    "damage": "11,20",
    "startupFrame": "",
    "blockFrame": -10,
    "hitFrame": "+36d (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,2",
    "hitLevel": "m,m",
    "damage": 1115,
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": 11,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,2,1+2",
    "hitLevel": "m,m,m,m,m",
    "damage": "1115,5,8,20",
    "startupFrame": "",
    "blockFrame": -12,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m,m",
    "damage": "10,12",
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2,2",
    "hitLevel": "m,m,m",
    "damage": "10,1220",
    "startupFrame": "",
    "blockFrame": -13,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13",
    "blockFrame": -2,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,h",
    "damage": 1213,
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": 3,
    "counterHitFrame": 5
  },
  {
    "input": "df+1,2~1",
    "hitLevel": "m,h",
    "damage": 1220,
    "startupFrame": "",
    "blockFrame": -2,
    "hitFrame": 2,
    "counterHitFrame": "+61a"
  },
  {
    "input": "df+1,2~2",
    "hitLevel": "m,m",
    "damage": 1212,
    "startupFrame": "",
    "blockFrame": -10,
    "hitFrame": "+36d (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2~f+1+2",
    "hitLevel": "m,h,h",
    "damage": "12,8,12",
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": 6,
    "counterHitFrame": "+8c"
  },
  {
    "input": "d+1",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "l",
    "damage": 11,
    "startupFrame": "i17",
    "blockFrame": -18,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "d+2,1",
    "hitLevel": "l,m",
    "damage": "11,8",
    "startupFrame": "",
    "blockFrame": -11,
    "hitFrame": -5,
    "counterHitFrame": 0
  },
  {
    "input": "d+2,1,2",
    "hitLevel": "l,m,h",
    "damage": "11,8,17",
    "startupFrame": "",
    "blockFrame": -2,
    "hitFrame": "+27a (+18)",
    "counterHitFrame": "+56a"
  },
  {
    "input": "db+1",
    "hitLevel": "sm",
    "damage": "",
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "l",
    "damage": 21,
    "startupFrame": "i26",
    "blockFrame": -12,
    "hitFrame": "+1c",
    "counterHitFrame": "+14d"
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -13,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "db+3,2",
    "hitLevel": "l,h",
    "damage": "10,10",
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i28",
    "blockFrame": -13,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -14,
    "hitFrame": 2,
    "counterHitFrame": "+61a"
  },
  {
    "input": "b+1,2",
    "hitLevel": "h,h",
    "damage": "10,17",
    "startupFrame": "",
    "blockFrame": 3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,2~1",
    "hitLevel": "h,m",
    "damage": "10,17",
    "startupFrame": "",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": "+63a"
  },
  {
    "input": "b+1,d+2",
    "hitLevel": "h,l",
    "damage": "10,10",
    "startupFrame": "",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "b+1,d+2,1",
    "hitLevel": "h,l,m",
    "damage": "10,10,10",
    "startupFrame": "",
    "blockFrame": -9,
    "hitFrame": 35,
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i17",
    "blockFrame": -13,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "ub+2",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i17",
    "blockFrame": 3,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "ub+2~1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i30",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": "+63a"
  },
  {
    "input": "ub+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "m",
    "damage": 70,
    "startupFrame": "i66",
    "blockFrame": "+12a (+1)",
    "hitFrame": "+12a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i19~21",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i22~25",
    "blockFrame": -14,
    "hitFrame": "+52a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i36",
    "blockFrame": -12,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3,2",
    "hitLevel": "l,h",
    "damage": "20,10",
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23",
    "blockFrame": -9,
    "hitFrame": "+22a (+5)",
    "counterHitFrame": "+36a (+26)"
  },
  {
    "input": "afters+1",
    "hitLevel": "l",
    "damage": 23,
    "startupFrame": "i16",
    "blockFrame": -12,
    "hitFrame": "+17d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i14~17",
    "blockFrame": "-13c",
    "hitFrame": "+12d",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i16",
    "blockFrame": -10,
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "qcf+2",
    "hitLevel": "l",
    "damage": 18,
    "startupFrame": "i19",
    "blockFrame": -18,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i20~24",
    "blockFrame": 6,
    "hitFrame": 17,
    "counterHitFrame": ""
  },
  {
    "input": "WS.1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i11",
    "blockFrame": -3,
    "hitFrame": 3,
    "counterHitFrame": 8
  },
  {
    "input": "WS.1,1",
    "hitLevel": "m,h",
    "damage": "12,7",
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "WS.1,2",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "",
    "blockFrame": -13,
    "hitFrame": "+3c",
    "counterHitFrame": "+23d"
  },
  {
    "input": "WS.2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i13",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "WS.2,2",
    "hitLevel": "m,m",
    "damage": "17,15",
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": 11,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16",
    "blockFrame": -15,
    "hitFrame": "+34a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "ALB.2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i23",
    "blockFrame": -3,
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "ALB.d",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "ALB.d",
    "hitLevel": "sp,m",
    "damage": ",34",
    "startupFrame": ",i12",
    "blockFrame": -3,
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "ALB.d",
    "hitLevel": "sp,l",
    "damage": ",30",
    "startupFrame": ",i22",
    "blockFrame": -12,
    "hitFrame": "+14d",
    "counterHitFrame": ""
  },
  {
    "input": "ALB.d+2",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i34",
    "blockFrame": -12,
    "hitFrame": "+1c",
    "counterHitFrame": "+14d"
  },
  {
    "input": "DCK.1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i19",
    "blockFrame": -7,
    "hitFrame": "+58a (+27)",
    "counterHitFrame": "+34a (+24)"
  },
  {
    "input": "DCK.2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i19",
    "blockFrame": -14,
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "DCK.1+2",
    "hitLevel": "m,m",
    "damage": "3,3",
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "DCK.1+2,1+2",
    "hitLevel": "m,m,m,m",
    "damage": "3,3,3,3",
    "startupFrame": "",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "DCK.1+2,1+2,1+2",
    "hitLevel": "m,m,m,m,m,m",
    "damage": "3,3,3,3,2,2",
    "startupFrame": "",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "DCK.1+2,1+2,1+2,1+2",
    "hitLevel": "m,m,m,m,m,m,m,m",
    "damage": "3,3,3,3,2,2,2,12",
    "startupFrame": "",
    "blockFrame": -12,
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "DCK.f+2",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i15",
    "blockFrame": -3,
    "hitFrame": "+9d",
    "counterHitFrame": "+49a"
  },
  {
    "input": "DCK.f+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "EXD.1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i19",
    "blockFrame": -7,
    "hitFrame": "+44d (+36)",
    "counterHitFrame": "+41a (+31)"
  },
  {
    "input": "EXD.2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i19",
    "blockFrame": -14,
    "hitFrame": "+61a (+51)",
    "counterHitFrame": ""
  },
  {
    "input": "EXD.f+2",
    "hitLevel": "h",
    "damage": 28,
    "startupFrame": "i15",
    "blockFrame": 2,
    "hitFrame": "+49a",
    "counterHitFrame": ""
  },
  {
    "input": "FLK.1",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i12",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "FLK.1,1",
    "hitLevel": "h,h",
    "damage": "14,8",
    "startupFrame": "",
    "blockFrame": -9,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "FLK.1,1,1",
    "hitLevel": "h,h,h",
    "damage": "14,8,8",
    "startupFrame": "",
    "blockFrame": -9,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "FLK.1,1,1,2",
    "hitLevel": "h,h,h,m",
    "damage": "14,8,8",
    "startupFrame": "",
    "blockFrame": -12,
    "hitFrame": "+17a (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "FLK.1,1,2",
    "hitLevel": "h,h,m",
    "damage": "14,8,22",
    "startupFrame": "",
    "blockFrame": -12,
    "hitFrame": "+17a (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "FLK.1,1,d+1",
    "hitLevel": "h,h,h",
    "damage": "14,8,23",
    "startupFrame": "",
    "blockFrame": 0,
    "hitFrame": "+18g",
    "counterHitFrame": "+42a"
  },
  {
    "input": "FLK.1,1,f+1",
    "hitLevel": "h,h,m",
    "damage": "14,8,17",
    "startupFrame": "",
    "blockFrame": -5,
    "hitFrame": 0,
    "counterHitFrame": "+10d"
  },
  {
    "input": "FLK.1,2",
    "hitLevel": "h,m",
    "damage": "14,22",
    "startupFrame": "",
    "blockFrame": -12,
    "hitFrame": "+17a (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "FLK.1,d+1",
    "hitLevel": "h,h",
    "damage": "14,23",
    "startupFrame": "",
    "blockFrame": 0,
    "hitFrame": "+18g",
    "counterHitFrame": "+42a"
  },
  {
    "input": "FLK.1,f+1",
    "hitLevel": "h,m",
    "damage": "14,17",
    "startupFrame": "",
    "blockFrame": -5,
    "hitFrame": 0,
    "counterHitFrame": "+10d"
  },
  {
    "input": "FLK.2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18",
    "blockFrame": "-5c",
    "hitFrame": "+7d",
    "counterHitFrame": "+42a"
  },
  {
    "input": "FLK.b+2",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": "+35d (+27)",
    "counterHitFrame": ""
  },
  {
    "input": "LNH.1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i14-15",
    "blockFrame": -4,
    "hitFrame": "+9/HE",
    "counterHitFrame": ""
  },
  {
    "input": "LNH.2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i16-17",
    "blockFrame": -13,
    "hitFrame": "+61a (+51)",
    "counterHitFrame": ""
  },
  {
    "input": "LNH.1+2",
    "hitLevel": "h",
    "damage": 24,
    "startupFrame": "i18-19",
    "blockFrame": "[[Steve combos#Mini-combos|+12]]",
    "hitFrame": "+6a(-3)",
    "counterHitFrame": ""
  },
  {
    "input": "LWV.1",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "LWV.1,1",
    "hitLevel": "m,m",
    "damage": "14,22",
    "startupFrame": "",
    "blockFrame": -13,
    "hitFrame": "+28a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "LWV.1,2",
    "hitLevel": "m,h",
    "damage": "14,14",
    "startupFrame": "",
    "blockFrame": 3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "LWV.1,2~1",
    "hitLevel": "m,m",
    "damage": "14,17",
    "startupFrame": "",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": "+63a"
  },
  {
    "input": "LWV.1,f+1",
    "hitLevel": "m,m",
    "damage": "14,9",
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "LWV.1,f+1,1",
    "hitLevel": "m,m,h",
    "damage": "14,9,8",
    "startupFrame": "",
    "blockFrame": 3,
    "hitFrame": 7,
    "counterHitFrame": "+68a"
  },
  {
    "input": "LWV.2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14~16",
    "blockFrame": -5,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "LWV.2,1",
    "hitLevel": "m,m",
    "damage": "13,21",
    "startupFrame": "",
    "blockFrame": -8,
    "hitFrame": "+4c",
    "counterHitFrame": "+7d"
  },
  {
    "input": "OTG.d+1+2",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i17",
    "blockFrame": "-11c",
    "hitFrame": 2,
    "counterHitFrame": 2
  },
  {
    "input": "PAB 0.1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "PAB.1,2",
    "hitLevel": "h,h",
    "damage": 1014,
    "startupFrame": "",
    "blockFrame": 0,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "PAB.1,2,1",
    "hitLevel": "h,h,m",
    "damage": 101421,
    "startupFrame": "",
    "blockFrame": -13,
    "hitFrame": 8,
    "counterHitFrame": "+44a"
  },
  {
    "input": "PAB 0.2",
    "hitLevel": ",h",
    "damage": 19,
    "startupFrame": "i14",
    "blockFrame": -3,
    "hitFrame": 2,
    "counterHitFrame": "+58a"
  },
  {
    "input": "PAB.b+1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i17",
    "blockFrame": -19,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "PAB.b+1,1",
    "hitLevel": "m,h",
    "damage": "15,10",
    "startupFrame": "i17",
    "blockFrame": -7,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "PAB.b+1,1,2",
    "hitLevel": "m,h,m",
    "damage": "15,10,12",
    "startupFrame": "",
    "blockFrame": -11,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "PAB.b+1,1,2,1",
    "hitLevel": "m,h,m,m",
    "damage": "15,10,12,21",
    "startupFrame": "",
    "blockFrame": -10,
    "hitFrame": "+16a (+7)",
    "counterHitFrame": ""
  },
  {
    "input": "PAB.b+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i28",
    "blockFrame": -13,
    "hitFrame": "+11a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "PAB.df+1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "PAB.df+1,1",
    "hitLevel": "m,m",
    "damage": 1214,
    "startupFrame": "",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "PAB.df+1,1,2",
    "hitLevel": "m,m,m",
    "damage": 121412,
    "startupFrame": "",
    "blockFrame": -11,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "PAB.df+1,1,2,1",
    "hitLevel": "m,m,m,m",
    "damage": "121412,20",
    "startupFrame": "",
    "blockFrame": -13,
    "hitFrame": "+17d",
    "counterHitFrame": ""
  },
  {
    "input": "PAB.df+1,2",
    "hitLevel": "m,m,h",
    "damage": 1220,
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": 10,
    "counterHitFrame": ""
  },
  {
    "input": "PAB.df+2",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i16",
    "blockFrame": -10,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "PAB.d+1",
    "hitLevel": "l",
    "damage": 11,
    "startupFrame": "i15",
    "blockFrame": -12,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "PAB.d+2",
    "hitLevel": "l",
    "damage": 25,
    "startupFrame": "i28",
    "blockFrame": -12,
    "hitFrame": 7,
    "counterHitFrame": "+32a"
  },
  {
    "input": "PAB.f+2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": "+31a (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "PAB.f+2,1",
    "hitLevel": "m,m",
    "damage": 1824,
    "startupFrame": "",
    "blockFrame": 1,
    "hitFrame": "+24a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "PAB.f+1+2",
    "hitLevel": "h,h",
    "damage": "12,23",
    "startupFrame": "i12",
    "blockFrame": -5,
    "hitFrame": "+24a (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "PAB.uf+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i17",
    "blockFrame": -15,
    "hitFrame": "+34a (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "RWV.1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14~16",
    "blockFrame": -5,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "RWV.1,2",
    "hitLevel": "m,h(?)",
    "damage": "13,17",
    "startupFrame": "",
    "blockFrame": 3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "RWV.1,2~1",
    "hitLevel": "m,m",
    "damage": "13,?",
    "startupFrame": "",
    "blockFrame": -8,
    "hitFrame": 4,
    "counterHitFrame": "+63a"
  },
  {
    "input": "RWV.2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+10a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "SWY.1",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i16",
    "blockFrame": "-1c",
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "SWY.2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i17",
    "blockFrame": -18,
    "hitFrame": "+36a",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "throw",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "throw",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "throw",
    "damage": 55,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FLK.1+2",
    "hitLevel": "th",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "throw",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "PAB.1+2",
    "hitLevel": "th",
    "damage": 45,
    "startupFrame": "i11",
    "blockFrame": 0,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Right throw",
    "hitLevel": "throw",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "SWY.1+2",
    "hitLevel": "th",
    "damage": "",
    "startupFrame": "i10",
    "blockFrame": -2,
    "hitFrame": "+1 / +10wc",
    "counterHitFrame": ""
  },
  {
    "input": "SWY.1+2~b",
    "hitLevel": "th",
    "damage": "",
    "startupFrame": "i10",
    "blockFrame": -2,
    "hitFrame": "+1 / +13~17wc",
    "counterHitFrame": ""
  },
  {
    "input": "TFA.1",
    "hitLevel": "th",
    "damage": 15,
    "startupFrame": "",
    "blockFrame": 0,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "TFA.2",
    "hitLevel": "th",
    "damage": 50,
    "startupFrame": "",
    "blockFrame": 0,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "qcb+2+4",
    "hitLevel": "throw",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "throw",
    "damage": 40,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  }
]

const steveFrameData = rawSteveFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default steveFrameData;