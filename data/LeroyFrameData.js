const rawLeroyFrameData = [
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
    "input": "H.2+3",
    "hitLevel": "m",
    "damage": "50 (25)",
    "startupFrame": "i15",
    "blockFrame": 6,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m",
    "damage": 55,
    "startupFrame": "i20",
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
    "input": "1,1",
    "hitLevel": "h,m",
    "damage": "5,7",
    "startupFrame": "i18~19",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,1+2",
    "hitLevel": "h,m,h",
    "damage": "5,7,12",
    "startupFrame": "i19~20",
    "blockFrame": -9,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,1+2,1",
    "hitLevel": "h,m,h,m",
    "damage": "5,7,12,15",
    "startupFrame": ",i23~24",
    "blockFrame": -16,
    "hitFrame": "+20 (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,9",
    "startupFrame": ",i12",
    "blockFrame": -3,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,1",
    "hitLevel": "h,h,h",
    "damage": "5,9,17",
    "startupFrame": ",i27~28",
    "blockFrame": -6,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,h,h",
    "damage": "5,9,21",
    "startupFrame": ",i23~24",
    "blockFrame": -6,
    "hitFrame": "+20 (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,m",
    "damage": "5,9,11",
    "startupFrame": ",i16",
    "blockFrame": -9,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "1+3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "10,12",
    "startupFrame": ",i12~13",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,2",
    "hitLevel": "h,m,h",
    "damage": "10,12,17",
    "startupFrame": ",i20~21",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,2,1",
    "hitLevel": "h,m,h,m",
    "damage": "10,12,17,21",
    "startupFrame": ",i21~23",
    "blockFrame": -13,
    "hitFrame": "+16 (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "2,2",
    "hitLevel": "h,h",
    "damage": "10,20",
    "startupFrame": ",i25~26",
    "blockFrame": -7,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "3,3",
    "hitLevel": "m,l",
    "damage": "14,13",
    "startupFrame": ",i18",
    "blockFrame": -14,
    "hitFrame": 2,
    "counterHitFrame": 15
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i12",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "4,4",
    "hitLevel": "h,m",
    "damage": 1513,
    "startupFrame": ",i15~16",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "h,h,h",
    "damage": 9,
    "startupFrame": "i14",
    "blockFrame": -2,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "1+2,1+2",
    "hitLevel": "h,h,h,h,h,h",
    "damage": "9,9",
    "startupFrame": "i9",
    "blockFrame": -2,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "1+2,1+2,1",
    "hitLevel": "h,h,h,h,h,h,m",
    "damage": "9,9,20",
    "startupFrame": ",i17~18",
    "blockFrame": -17,
    "hitFrame": "+7a (-2) / HE",
    "counterHitFrame": ""
  },
  {
    "input": "1+4",
    "hitLevel": "l",
    "damage": 16,
    "startupFrame": "i100~279",
    "blockFrame": -26,
    "hitFrame": 24,
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
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i14~16",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,3",
    "hitLevel": "h,m",
    "damage": 1515,
    "startupFrame": ",i18",
    "blockFrame": -10,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,3,4",
    "hitLevel": "h,m,m",
    "damage": 151520,
    "startupFrame": ",i21~22",
    "blockFrame": -9,
    "hitFrame": 8,
    "counterHitFrame": "+38d (+30)"
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i14~15",
    "blockFrame": -7,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,1+2",
    "hitLevel": "m,h",
    "damage": 1415,
    "startupFrame": "",
    "blockFrame": -8,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "f+3,1+2,4",
    "hitLevel": "m,h,m",
    "damage": "1415,20",
    "startupFrame": ",i20~21",
    "blockFrame": -16,
    "hitFrame": "+13a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "f+4,4",
    "hitLevel": "m,h",
    "damage": "14,24",
    "startupFrame": ",i28~30",
    "blockFrame": -6,
    "hitFrame": "+20a (+11) / HE",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17~18",
    "blockFrame": -13,
    "hitFrame": "+20a (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2+3",
    "hitLevel": "m",
    "damage": 35,
    "startupFrame": "i22~23",
    "blockFrame": -7,
    "hitFrame": "+73a",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13~14",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,4",
    "hitLevel": "m,m",
    "damage": "10,16",
    "startupFrame": ",i18",
    "blockFrame": -9,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,1+2",
    "hitLevel": "m,h",
    "damage": "10,9",
    "startupFrame": "",
    "blockFrame": -2,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,1+2,2",
    "hitLevel": "m,h",
    "damage": "10,9,17",
    "startupFrame": ",i24",
    "blockFrame": -10,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 7,
    "startupFrame": "i15~16",
    "blockFrame": -6,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+2,1+2",
    "hitLevel": "m,hm",
    "damage": "7,5,10",
    "startupFrame": "",
    "blockFrame": -18,
    "hitFrame": "+33 (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i16",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,1",
    "hitLevel": "m,h",
    "damage": "14,12",
    "startupFrame": ",i16~17",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,1,1+2",
    "hitLevel": "m,h,m",
    "damage": "14,12,25",
    "startupFrame": ",i20~21",
    "blockFrame": -13,
    "hitFrame": "+34 (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i13",
    "blockFrame": -6,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,3",
    "hitLevel": "m,m",
    "damage": "14,14",
    "startupFrame": ",i20~21",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": "+37(+29)"
  },
  {
    "input": "df+3+4",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i18~19",
    "blockFrame": -9,
    "hitFrame": "+70 (+54)",
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
    "input": "d+1,2",
    "hitLevel": "sl,m",
    "damage": "5,8",
    "startupFrame": ",i15~16",
    "blockFrame": -10,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "d+1,2,4",
    "hitLevel": "sl,m,m",
    "damage": "5,8,11",
    "startupFrame": ",i15",
    "blockFrame": -9,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "l",
    "damage": 11,
    "startupFrame": "i15~16",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "d+2,4",
    "hitLevel": "l,l",
    "damage": "11,11",
    "startupFrame": ",i24~25",
    "blockFrame": -13,
    "hitFrame": "-2c",
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 8,
    "startupFrame": "i16",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,2",
    "hitLevel": "l,h",
    "damage": "8,8",
    "startupFrame": ",i24~25",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 9,
    "startupFrame": "i14~15",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "d+4,4",
    "hitLevel": "l,m",
    "damage": "9,16",
    "startupFrame": ",i18~19",
    "blockFrame": -11,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i17~18",
    "blockFrame": -4,
    "hitFrame": "+6c / HE",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,2",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": ",i21~22",
    "blockFrame": -12,
    "hitFrame": "+17 (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1,3",
    "hitLevel": "m,h",
    "damage": "12,17",
    "startupFrame": ",i18~19",
    "blockFrame": 0,
    "hitFrame": 8,
    "counterHitFrame": "+31d"
  },
  {
    "input": "db+1,1+2",
    "hitLevel": "m,m",
    "damage": "12,25",
    "startupFrame": ",i21~22",
    "blockFrame": -10,
    "hitFrame": "+23 (+18)",
    "counterHitFrame": 41
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i20~21",
    "blockFrame": -8,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "i17",
    "blockFrame": -15,
    "hitFrame": "-4c",
    "counterHitFrame": "+36d"
  },
  {
    "input": "db+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i32~33",
    "blockFrame": -11,
    "hitFrame": "+36d (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2+3",
    "hitLevel": "lm",
    "damage": "10,14 (9)",
    "startupFrame": "i20~21",
    "blockFrame": -14,
    "hitFrame": "+67a (+51)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i13",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "h",
    "damage": 27,
    "startupFrame": "i22~23",
    "blockFrame": 9,
    "hitFrame": "+16c",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i17~18",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i12",
    "blockFrame": -10,
    "hitFrame": 2,
    "counterHitFrame": 60
  },
  {
    "input": "b+3+4",
    "hitLevel": "m,th",
    "damage": "21,25",
    "startupFrame": "i18~19",
    "blockFrame": -14,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "ub+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i20",
    "blockFrame": -10,
    "hitFrame": 3,
    "counterHitFrame": "+33(+25)"
  },
  {
    "input": "uf+1",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i24~25",
    "blockFrame": 1,
    "hitFrame": "+10 (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i20~24",
    "blockFrame": -8,
    "hitFrame": "+14 (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i23~25",
    "blockFrame": -8,
    "hitFrame": 21,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "mm",
    "damage": "8,10",
    "startupFrame": "i14~15,i10~11",
    "blockFrame": -14,
    "hitFrame": 16,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,1+2",
    "hitLevel": "mm,m",
    "damage": "8,10,17 (11)",
    "startupFrame": ",i30~31",
    "blockFrame": -13,
    "hitFrame": "+23 (+13)",
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
    "input": "CH b+1",
    "hitLevel": "h,th",
    "damage": "20,25",
    "startupFrame": "i13",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "P:b+2",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "P:b+2,1",
    "hitLevel": "m",
    "damage": 40,
    "startupFrame": "i13",
    "blockFrame": "",
    "hitFrame": "+2a",
    "counterHitFrame": ""
  },
  {
    "input": "d,df,f+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i16~17",
    "blockFrame": -6,
    "hitFrame": "+29 (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "d,df,f+3+4,F",
    "hitLevel": "ub(m)",
    "damage": 80,
    "startupFrame": "i56~57",
    "blockFrame": "",
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 8,
    "startupFrame": "i14~15",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,2",
    "hitLevel": "m,m",
    "damage": "8,13",
    "startupFrame": ",i17~18",
    "blockFrame": -15,
    "hitFrame": 55,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i18~23",
    "blockFrame": -2,
    "hitFrame": "+33 (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i16~17",
    "blockFrame": -4,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4,2",
    "hitLevel": "m,m",
    "damage": "16,21",
    "startupFrame": ",i27~28",
    "blockFrame": -14,
    "hitFrame": "+34 (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "uf,n,4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23~25",
    "blockFrame": -13,
    "hitFrame": "+32 (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i24~27",
    "blockFrame": 6,
    "hitFrame": "+41 (-17)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i13~14",
    "blockFrame": -7,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,4",
    "hitLevel": "m,m",
    "damage": "14,16",
    "startupFrame": ",i21",
    "blockFrame": -9,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i15~16",
    "blockFrame": -14,
    "hitFrame": "+51a",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i11~12",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "SS.4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i18~19",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": 12
  },
  {
    "input": "SS.1+2",
    "hitLevel": "h",
    "damage": 26,
    "startupFrame": "i14",
    "blockFrame": 7,
    "hitFrame": "+30g",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i15~16",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4,1",
    "hitLevel": "l,m",
    "damage": "14,15",
    "startupFrame": ",i20~21",
    "blockFrame": -13,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "HRM.1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i24~25",
    "blockFrame": -10,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "HRM.2",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i12~13",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "HRM.2,3",
    "hitLevel": "h,h",
    "damage": "14,23",
    "startupFrame": ",i24~25",
    "blockFrame": -9,
    "hitFrame": "+16a (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "HRM.3",
    "hitLevel": "l",
    "damage": 8,
    "startupFrame": "i16",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "HRM.3,4",
    "hitLevel": "l,m",
    "damage": "8,16",
    "startupFrame": "i22~23",
    "blockFrame": -15,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "HRM.4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i11~12",
    "blockFrame": -7,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "HRM.4,1+2",
    "hitLevel": "m,m",
    "damage": "13,25",
    "startupFrame": ",i24~25",
    "blockFrame": -14,
    "hitFrame": "+27a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "HRM.1+2",
    "hitLevel": "m,h,h,h,h",
    "damage": "12,x,x,x",
    "startupFrame": "i14",
    "blockFrame": -2,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "HRM.1+2,1",
    "hitLevel": "m,h,h,h,h,m",
    "damage": "12,x,x,x,20",
    "startupFrame": "i17~18",
    "blockFrame": -17,
    "hitFrame": "+7a(-2)/HE",
    "counterHitFrame": ""
  },
  {
    "input": "HRM.SS",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "HRM.SS.1+2",
    "hitLevel": "h",
    "damage": 26,
    "startupFrame": "i14",
    "blockFrame": 7,
    "hitFrame": "+30g",
    "counterHitFrame": ""
  },
  {
    "input": "HRM.b+1",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i20~22",
    "blockFrame": 4,
    "hitFrame": "+7c",
    "counterHitFrame": "+52a"
  },
  {
    "input": "HRM.b+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i20~21",
    "blockFrame": -31,
    "hitFrame": -9,
    "counterHitFrame": ""
  },
  {
    "input": "HRM.b+3,1+2",
    "hitLevel": "l,m",
    "damage": "12,27",
    "startupFrame": "i31~32",
    "blockFrame": -16,
    "hitFrame": "+0a (-1)",
    "counterHitFrame": ""
  },
  {
    "input": "HRM.b+4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i20~21",
    "blockFrame": -13,
    "hitFrame": "+4c",
    "counterHitFrame": "+28a"
  },
  {
    "input": "HRM.f+1",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i14~15",
    "blockFrame": 0,
    "hitFrame": "+15g",
    "counterHitFrame": ""
  },
  {
    "input": "HRM.f+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i26~29",
    "blockFrame": 0,
    "hitFrame": "+40a",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.db+2",
    "hitLevel": "l",
    "damage": "",
    "startupFrame": "i17~18",
    "blockFrame": -16,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "OTG.db+2,1+2",
    "hitLevel": "l,l",
    "damage": "",
    "startupFrame": "",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "P.b+2,1",
    "hitLevel": "m",
    "damage": 35,
    "startupFrame": "i13",
    "blockFrame": "",
    "hitFrame": "+21g",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "th(h)",
    "damage": 50,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Right throw",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  }
]

const leroyFrameData = rawLeroyFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default leroyFrameData;