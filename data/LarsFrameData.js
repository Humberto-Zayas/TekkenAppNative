const rawLarsFrameData = [
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
    "input": "H.LEN.1",
    "hitLevel": "l,th",
    "damage": "20,15",
    "startupFrame": "i16~17",
    "blockFrame": "-12c",
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "H.f+3+4",
    "hitLevel": "sm",
    "damage": "5 (5)",
    "startupFrame": "i18~24",
    "blockFrame": 5,
    "hitFrame": 10,
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m",
    "damage": 55,
    "startupFrame": "i18~19",
    "blockFrame": "+8 (+10 DEN)",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m",
    "damage": 55,
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": 0,
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
    "damage": "5,8",
    "startupFrame": ",i18~19",
    "blockFrame": -8,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,1",
    "hitLevel": "h,m,m",
    "damage": "5,8,20",
    "startupFrame": ",i25~26",
    "blockFrame": -12,
    "hitFrame": "+5c",
    "counterHitFrame": ""
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,9",
    "startupFrame": ",i10",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,4",
    "hitLevel": "h,l",
    "damage": "5,10",
    "startupFrame": ",i22",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "10,12",
    "startupFrame": ",i20~21",
    "blockFrame": -6,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i15",
    "blockFrame": -17,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 27,
    "startupFrame": "i17~18",
    "blockFrame": -7,
    "hitFrame": "+18 (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i25",
    "blockFrame": -12,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i17~18",
    "blockFrame": -8,
    "hitFrame": "+43d (-15)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i13",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "f+1,2",
    "hitLevel": "h,m",
    "damage": "10,11",
    "startupFrame": ",i12",
    "blockFrame": "-5 SEN",
    "hitFrame": "+6 SEN",
    "counterHitFrame": ""
  },
  {
    "input": "f+1,2,3",
    "hitLevel": "h,m,m",
    "damage": "10,11,20",
    "startupFrame": ",i24",
    "blockFrame": "-12 / -5 DEN",
    "hitFrame": "+41d (-17) / +48d (-10) DEN",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -6,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "h,h",
    "damage": "10,15",
    "startupFrame": ",i13",
    "blockFrame": "-6 / -5 SEN",
    "hitFrame": "+5 / +6 SEN",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,4",
    "hitLevel": "h,h",
    "damage": "10,22",
    "startupFrame": ",i18~19",
    "blockFrame": -12,
    "hitFrame": "+15 (+6)",
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
    "input": "f+4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i17",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "f+4,1",
    "hitLevel": "m,m",
    "damage": "12,8",
    "startupFrame": ",i21~22",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "f+4,1,2",
    "hitLevel": "m,m,m",
    "damage": "12,8,8",
    "startupFrame": ",i12",
    "blockFrame": -10,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "f+4,1,2,1",
    "hitLevel": "m,m,m,m",
    "damage": "12,8,8,20",
    "startupFrame": ",i24~25",
    "blockFrame": -14,
    "hitFrame": "+19 (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -13,
    "hitFrame": 28,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+4",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i13~14",
    "blockFrame": -18,
    "hitFrame": "+18 (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": "",
    "startupFrame": "i13",
    "blockFrame": -1,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": "-11 / -3 SEN",
    "hitFrame": "+1 / +9 SEN",
    "counterHitFrame": "+31 (+23) / +39 (+31)"
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": "-7 / -4 DEN",
    "hitFrame": "+5 / +8 DEN",
    "counterHitFrame": ""
  },
  {
    "input": "df+3,3",
    "hitLevel": "m,m",
    "damage": "15,24",
    "startupFrame": ",i25~26",
    "blockFrame": -15,
    "hitFrame": "+29 (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i18~19",
    "blockFrame": "+0c",
    "hitFrame": "+8c",
    "counterHitFrame": "+10d"
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 8,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,1",
    "hitLevel": "l,hh",
    "damage": "8,4,10",
    "startupFrame": ",i19,i18",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "l",
    "damage": 25,
    "startupFrame": "i24~25",
    "blockFrame": -20,
    "hitFrame": "+9d",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "l",
    "damage": 9,
    "startupFrame": "i17",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "db+1,3",
    "hitLevel": "l,h",
    "damage": "9,10",
    "startupFrame": ",i19",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": "-8 / -5 SEN",
    "hitFrame": "+3 / +6 SEN",
    "counterHitFrame": ""
  },
  {
    "input": "db+2,1",
    "hitLevel": "m,m",
    "damage": "12,8",
    "startupFrame": ",i15~16",
    "blockFrame": -8,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "db+2,3",
    "hitLevel": "m,m",
    "damage": "12,15",
    "startupFrame": ",i19",
    "blockFrame": "-13 / +13",
    "hitFrame": "+8 / +24 (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 19,
    "startupFrame": "i21~22",
    "blockFrame": -26,
    "hitFrame": "+5c",
    "counterHitFrame": "+29a"
  },
  {
    "input": "db+1+2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i26",
    "blockFrame": "-13 / -8 DEN",
    "hitFrame": "+6 / +7 DEN",
    "counterHitFrame": "+10 / +11 DEN"
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15~17",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "m,m",
    "damage": "12,17",
    "startupFrame": ",i15",
    "blockFrame": -10,
    "hitFrame": 4,
    "counterHitFrame": "+32a"
  },
  {
    "input": "b+2,3",
    "hitLevel": "m,h",
    "damage": "12,21",
    "startupFrame": ",i18",
    "blockFrame": -8,
    "hitFrame": "+38d (-20)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i17",
    "blockFrame": "-12 / -5 SEN",
    "hitFrame": "+4 / +11 SEN",
    "counterHitFrame": ""
  },
  {
    "input": "b+3,4",
    "hitLevel": "m,h",
    "damage": "14,20",
    "startupFrame": ",i23~24",
    "blockFrame": -8,
    "hitFrame": "+19 (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i15",
    "blockFrame": -8,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "mm",
    "damage": "4,20",
    "startupFrame": "i21~22,i8~9",
    "blockFrame": -9,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "b+2+3",
    "hitLevel": "ub(m)",
    "damage": 45,
    "startupFrame": "i84~85",
    "blockFrame": "",
    "hitFrame": "+61a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "mm",
    "damage": "26 (9)",
    "startupFrame": "i16~17",
    "blockFrame": -26,
    "hitFrame": "+33a (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i25~27",
    "blockFrame": -8,
    "hitFrame": "+42a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,4",
    "hitLevel": "sp,th(m)",
    "damage": 40,
    "startupFrame": ",i17~18",
    "blockFrame": -4,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,1+2",
    "hitLevel": "sp,th(h)",
    "damage": 40,
    "startupFrame": ",i9~11",
    "blockFrame": "",
    "hitFrame": 1,
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
    "input": "CH b+4",
    "hitLevel": "m,th",
    "damage": "27,28",
    "startupFrame": "i15",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i21~22",
    "blockFrame": -13,
    "hitFrame": "+35a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i21",
    "blockFrame": -31,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4,2",
    "hitLevel": "l,h",
    "damage": "12,15",
    "startupFrame": ",i24",
    "blockFrame": "-7 DEN",
    "hitFrame": "+9 DEN",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4,3",
    "hitLevel": "l,m",
    "damage": "12,20",
    "startupFrame": ",i28",
    "blockFrame": -16,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": "+14 (+5)",
    "counterHitFrame": "+59a (+39)"
  },
  {
    "input": "f,F+3+4",
    "hitLevel": "l,l",
    "damage": 26,
    "startupFrame": "i19~20",
    "blockFrame": -16,
    "hitFrame": "+0c",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,b+2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i14",
    "blockFrame": -12,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "f,n,b+2,1",
    "hitLevel": "m,m",
    "damage": "10,10",
    "startupFrame": ",i16",
    "blockFrame": -18,
    "hitFrame": "+47a (+39)",
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
    "startupFrame": "i20~26",
    "blockFrame": 6,
    "hitFrame": "+33 (-25)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": "+38a / +36a SEN",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i13~14",
    "blockFrame": "-8 / -12 DEN / -5 SEN",
    "hitFrame": "+3/ -1 DEN / +6 SEN",
    "counterHitFrame": ""
  },
  {
    "input": "ws2,1",
    "hitLevel": "m,m",
    "damage": "13,17",
    "startupFrame": ",i23~24",
    "blockFrame": -12,
    "hitFrame": "+2c",
    "counterHitFrame": "+4d"
  },
  {
    "input": "ws2,3",
    "hitLevel": "m,h",
    "damage": "13,20",
    "startupFrame": ",i20",
    "blockFrame": "-15 / -11 LEN",
    "hitFrame": "-3 / +6 LEN",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i20",
    "blockFrame": "0 / +4 LEN",
    "hitFrame": "+21 (+15) / +26 (+20) LEN",
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
    "input": "SS.2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~17",
    "blockFrame": -7,
    "hitFrame": "+22d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2",
    "hitLevel": "ll",
    "damage": 24,
    "startupFrame": "i18",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2",
    "hitLevel": "m",
    "damage": 19,
    "startupFrame": "i15~16",
    "blockFrame": -8,
    "hitFrame": 5,
    "counterHitFrame": "+63a"
  },
  {
    "input": "(airborne).DEN.2+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "DEN.1",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i11~12",
    "blockFrame": "+1 / -3 SEN",
    "hitFrame": "+8 / +4 SEN",
    "counterHitFrame": ""
  },
  {
    "input": "DEN.1,2",
    "hitLevel": "h,h",
    "damage": "14,20",
    "startupFrame": ",i14~15",
    "blockFrame": -6,
    "hitFrame": "+47a (-11)",
    "counterHitFrame": ""
  },
  {
    "input": "DEN.2",
    "hitLevel": "m",
    "damage": 19,
    "startupFrame": "i17~19",
    "blockFrame": -7,
    "hitFrame": "+7 / +9 Flip",
    "counterHitFrame": "+62a / +64 Flip"
  },
  {
    "input": "DEN.3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i22~23",
    "blockFrame": 5,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "DEN.4",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i23~25",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "DEN.1+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i12~13",
    "blockFrame": -10,
    "hitFrame": "+63a (+47)",
    "counterHitFrame": ""
  },
  {
    "input": "DEN.2+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "DEN.3+4",
    "hitLevel": "l",
    "damage": 21,
    "startupFrame": "i22~23",
    "blockFrame": "-14 / -7 SEN",
    "hitFrame": "-3 / +4 SEN",
    "counterHitFrame": "+5 / +12 SEN"
  },
  {
    "input": "DEN.B",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "DEN.n,F",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "LEN.1",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i16~17",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "LEN.2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": "+25 (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.1",
    "hitLevel": "m",
    "damage": 26,
    "startupFrame": "i12~13",
    "blockFrame": -6,
    "hitFrame": "+23a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.2",
    "hitLevel": "l",
    "damage": 23,
    "startupFrame": "i17~19",
    "blockFrame": -12,
    "hitFrame": "+6c",
    "counterHitFrame": "+73a (+57)"
  },
  {
    "input": "SEN.3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14~16",
    "blockFrame": -14,
    "hitFrame": "+29a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.4",
    "hitLevel": "h",
    "damage": 28,
    "startupFrame": "i17~18",
    "blockFrame": -9,
    "hitFrame": "+18 (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i14~16",
    "blockFrame": -9,
    "hitFrame": "+20a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.3+4",
    "hitLevel": "mm",
    "damage": "22 (11)",
    "startupFrame": "i13~14,i18~19",
    "blockFrame": 0,
    "hitFrame": "+22d (-13)",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.B",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "SEN.D",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "(airborne).f,f,F+2+4",
    "hitLevel": "th(h)",
    "damage": "31 (21)",
    "startupFrame": "i11",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
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
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+2+4",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i11",
    "blockFrame": -3,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": 0,
    "counterHitFrame": ""
  }
]

const larsFrameData = rawLarsFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default larsFrameData;