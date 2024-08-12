const rawPandaFrameData = [
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
    "input": "H.uf+3+4",
    "hitLevel": "m",
    "damage": "21 (8)",
    "startupFrame": "i16~17",
    "blockFrame": "+12g",
    "hitFrame": "+7a",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m",
    "damage": "44 (16)",
    "startupFrame": "i15~16",
    "blockFrame": "+7 / +6 ROL / +11 HBS",
    "hitFrame": "-3 / N/A ROL / N/A HBS",
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m,th",
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
    "startupFrame": ",i22~23",
    "blockFrame": -15,
    "hitFrame": "-4c",
    "counterHitFrame": ""
  },
  {
    "input": "1,1,1",
    "hitLevel": "h,m,m",
    "damage": "5,8,14",
    "startupFrame": ",i22~23",
    "blockFrame": -16,
    "hitFrame": "+69a (+53)",
    "counterHitFrame": ""
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,25",
    "startupFrame": ",i22~24",
    "blockFrame": -5,
    "hitFrame": "+11 (+2)",
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
    "startupFrame": "i10",
    "blockFrame": -1,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "10,11",
    "startupFrame": ",i16",
    "blockFrame": -3,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,2",
    "hitLevel": "h,m,m",
    "damage": "10,11,22",
    "startupFrame": ",i33~34",
    "blockFrame": -14,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "2,1,3",
    "hitLevel": "h,m,l",
    "damage": "10,11,13",
    "startupFrame": ",i18",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i13~14",
    "blockFrame": -13,
    "hitFrame": "+18g / HE",
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
    "damage": 11,
    "startupFrame": "i12",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "h,h",
    "damage": "11,20",
    "startupFrame": "i20",
    "blockFrame": -5,
    "hitFrame": "+36a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i18",
    "blockFrame": -15,
    "hitFrame": "+18a",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2,1+2",
    "hitLevel": "m,m",
    "damage": "16,20",
    "startupFrame": "i30~31",
    "blockFrame": -14,
    "hitFrame": "+65a (+49)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i28~30",
    "blockFrame": -23,
    "hitFrame": "+6a",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4,1+2",
    "hitLevel": "l,m",
    "damage": "20,30",
    "startupFrame": ",i50~i60",
    "blockFrame": -16,
    "hitFrame": "-13a",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 6,
    "startupFrame": "i15~16",
    "blockFrame": -6,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,m",
    "damage": "6,9",
    "startupFrame": ",i22~23",
    "blockFrame": -11,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2,1+2",
    "hitLevel": "m,m,m",
    "damage": "6,9,20",
    "startupFrame": ",i25~26",
    "blockFrame": -14,
    "hitFrame": "+17d",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i15~16",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+2,1",
    "hitLevel": "m,m",
    "damage": "10,12",
    "startupFrame": ",i20~21",
    "blockFrame": -16,
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2",
    "hitLevel": "m,h",
    "damage": "13,24",
    "startupFrame": ",i27~28",
    "blockFrame": -5,
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i14~15",
    "blockFrame": -15,
    "hitFrame": "+20a (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "d+3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "h",
    "damage": 11,
    "startupFrame": "i14~15",
    "blockFrame": -10,
    "hitFrame": 4,
    "counterHitFrame": 9
  },
  {
    "input": "db+1,2",
    "hitLevel": "h,m",
    "damage": 1120,
    "startupFrame": "i17~18",
    "blockFrame": -13,
    "hitFrame": 4,
    "counterHitFrame": "+13c"
  },
  {
    "input": "db+1,2*",
    "hitLevel": "h,m",
    "damage": 1120,
    "startupFrame": "i34~35",
    "blockFrame": -12,
    "hitFrame": "+13c",
    "counterHitFrame": "+42a"
  },
  {
    "input": "db+1,2**",
    "hitLevel": "h,m",
    "damage": 1130,
    "startupFrame": "i47~48",
    "blockFrame": 3,
    "hitFrame": "+42a",
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i18",
    "blockFrame": "-15 / -17 HBS",
    "hitFrame": "-1 / -3 HBS",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i18",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i21~22",
    "blockFrame": -23,
    "hitFrame": 6,
    "counterHitFrame": "+74a (+58)"
  },
  {
    "input": "db+1+2",
    "hitLevel": "mm",
    "damage": "4,4",
    "startupFrame": "i14~15",
    "blockFrame": -9,
    "hitFrame": "+2~3",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2,1+2",
    "hitLevel": "mm,mm",
    "damage": "4,4,4,4",
    "startupFrame": ",i15~16",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2,1+2,2",
    "hitLevel": "mm,mm,m",
    "damage": "4,4,4,4,18",
    "startupFrame": ",i20~21",
    "blockFrame": -15,
    "hitFrame": "+22a (+12)",
    "counterHitFrame": ""
  },
  {
    "input": "db+2+3",
    "hitLevel": "l",
    "damage": 30,
    "startupFrame": "i32~34",
    "blockFrame": -12,
    "hitFrame": "+39a",
    "counterHitFrame": ""
  },
  {
    "input": "db+2+3*",
    "hitLevel": "l",
    "damage": 40,
    "startupFrame": "i45~47",
    "blockFrame": -12,
    "hitFrame": "+39a",
    "counterHitFrame": ""
  },
  {
    "input": "db+2+3**",
    "hitLevel": "l",
    "damage": 60,
    "startupFrame": "i60~62",
    "blockFrame": -4,
    "hitFrame": "+43a",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i22~23",
    "blockFrame": -13,
    "hitFrame": "+13a",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1",
    "hitLevel": "m,h",
    "damage": "12,14",
    "startupFrame": ",i23",
    "blockFrame": "-3 / – 4 HBS / -14 ROL",
    "hitFrame": "+8 / +7 HBS / -3 ROL",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,1,1+2",
    "hitLevel": "m,h,m",
    "damage": "12,14,20",
    "startupFrame": ",i26",
    "blockFrame": -11,
    "hitFrame": "+15a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2",
    "hitLevel": "m,m",
    "damage": "12,15",
    "startupFrame": ",i25",
    "blockFrame": -10,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "b+2,2,1",
    "hitLevel": "m,m,m",
    "damage": "12,15,25",
    "startupFrame": ",i35~39",
    "blockFrame": -15,
    "hitFrame": "+25a (+15)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "hh",
    "damage": "10,20",
    "startupFrame": "i18~19",
    "blockFrame": -8,
    "hitFrame": "+13d / HE",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4",
    "hitLevel": "ub(m)",
    "damage": 25,
    "startupFrame": "i60~62",
    "blockFrame": "",
    "hitFrame": "+16a/+21a HBS",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+4,f,f",
    "hitLevel": "sm",
    "damage": 40,
    "startupFrame": "i55~i130",
    "blockFrame": "-20~+55",
    "hitFrame": "+42a~+117a",
    "counterHitFrame": ""
  },
  {
    "input": "b+3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i22~23",
    "blockFrame": -28,
    "hitFrame": "+61a",
    "counterHitFrame": ""
  },
  {
    "input": "ub+1+2",
    "hitLevel": "l",
    "damage": 25,
    "startupFrame": "i31~32",
    "blockFrame": -17,
    "hitFrame": "+12a",
    "counterHitFrame": ""
  },
  {
    "input": "u+1+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i18~23",
    "blockFrame": "-4 / -3 HBS",
    "hitFrame": "+3 / +4 HBS",
    "counterHitFrame": ""
  },
  {
    "input": "u+3+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i34~39",
    "blockFrame": 10,
    "hitFrame": 20,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i26~28",
    "blockFrame": -6,
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i28~30",
    "blockFrame": -6,
    "hitFrame": "+30a",
    "counterHitFrame": "+65a (+45)"
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i16~17",
    "blockFrame": -13,
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3,4",
    "hitLevel": "m,m",
    "damage": "13,13",
    "startupFrame": ",i10~12",
    "blockFrame": -11,
    "hitFrame": "+30a (+20) / +21a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3,4,1+2",
    "hitLevel": "m,m,m",
    "damage": "13,13,22",
    "startupFrame": ",i18~19",
    "blockFrame": -15,
    "hitFrame": "+16a / -2a",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i29~30",
    "blockFrame": -6,
    "hitFrame": "-10a (-20)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,3",
    "hitLevel": "m,m",
    "damage": "20,25",
    "startupFrame": ",i20~21",
    "blockFrame": 7,
    "hitFrame": "+21a (+14)",
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
    "input": "b,f+2",
    "hitLevel": "h",
    "damage": 26,
    "startupFrame": "i15~17",
    "blockFrame": -5,
    "hitFrame": "+17a (+8)",
    "counterHitFrame": "+62a (+42)"
  },
  {
    "input": "d,df,f+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i18~19",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "d,df,f+2,1",
    "hitLevel": "m,m",
    "damage": "15,25",
    "startupFrame": ",i27",
    "blockFrame": -14,
    "hitFrame": "+29a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "d,df,f+2,2",
    "hitLevel": "m,l",
    "damage": "15,22",
    "startupFrame": ",i33~34",
    "blockFrame": -18,
    "hitFrame": "+40a",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i19~21",
    "blockFrame": -19,
    "hitFrame": "+45a (+35)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+1+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i37~38",
    "blockFrame": "+8 HBS / +5 ROL",
    "hitFrame": "52a HBS / +49a ROL",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i22~23",
    "blockFrame": 6,
    "hitFrame": "+13a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+1+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i20~24",
    "blockFrame": 3,
    "hitFrame": "+35d (-23)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i13~15",
    "blockFrame": -11,
    "hitFrame": 2,
    "counterHitFrame": 7
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,m",
    "damage": "13,20",
    "startupFrame": ",i18~19",
    "blockFrame": -13,
    "hitFrame": "+6 (+20g)",
    "counterHitFrame": 18
  },
  {
    "input": "ws1,2*",
    "hitLevel": "m,m",
    "damage": "13,28",
    "startupFrame": ",i35",
    "blockFrame": -12,
    "hitFrame": "+18c",
    "counterHitFrame": "+33a (-2)"
  },
  {
    "input": "ws1,2**",
    "hitLevel": "m,m",
    "damage": "13,38",
    "startupFrame": ",i44",
    "blockFrame": 3,
    "hitFrame": "+27a (-9)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -12,
    "hitFrame": "+29a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18~20",
    "blockFrame": -9,
    "hitFrame": "+17 (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i11~12",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "SS.1+2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i22~23",
    "blockFrame": "-9c",
    "hitFrame": "+11d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.1",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i19~21",
    "blockFrame": -8,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "FC.1+2",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "N/A / i26~i31 Heat",
    "blockFrame": "+1~+6 / -6~-1 HBS",
    "hitFrame": "+7~+12 / 0~+5 HBS",
    "counterHitFrame": ""
  },
  {
    "input": "FDFA.1+2",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i14~16",
    "blockFrame": -12,
    "hitFrame": 6,
    "counterHitFrame": 6
  },
  {
    "input": "FUFA.1+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i17~19",
    "blockFrame": "-2 (-2)",
    "hitFrame": "+6 (+6)",
    "counterHitFrame": "+6 (+6)"
  },
  {
    "input": "FUFT.d+1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i30",
    "blockFrame": 17,
    "hitFrame": "+37a",
    "counterHitFrame": "+37a"
  },
  {
    "input": "HBS.1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i12~13",
    "blockFrame": -13,
    "hitFrame": 2,
    "counterHitFrame": 12
  },
  {
    "input": "HBS.1,2",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": ",i24~25",
    "blockFrame": -13,
    "hitFrame": 4,
    "counterHitFrame": "+13c"
  },
  {
    "input": "HBS.1,2*",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": ",i33~34",
    "blockFrame": -12,
    "hitFrame": "+13c",
    "counterHitFrame": "+49a"
  },
  {
    "input": "HBS.1,2**",
    "hitLevel": "m,m",
    "damage": "10,30",
    "startupFrame": ",i44~45",
    "blockFrame": 3,
    "hitFrame": "+49a",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.2",
    "hitLevel": "l",
    "damage": 16,
    "startupFrame": "i21~24",
    "blockFrame": -15,
    "hitFrame": "+21g",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.1+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i19~22",
    "blockFrame": -15,
    "hitFrame": "+79a",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.3+4",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i25~30",
    "blockFrame": -12,
    "hitFrame": "-2a (-11)",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.b,b",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.b+1+2",
    "hitLevel": "l",
    "damage": 16,
    "startupFrame": "i26~29",
    "blockFrame": "-25c",
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.b+1+2,1+2",
    "hitLevel": "l,l",
    "damage": "16,33",
    "startupFrame": "i22~24",
    "blockFrame": "-29c",
    "hitFrame": "+8a / -3a (-10)",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.df+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -17,
    "hitFrame": "+35a (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.d+1+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i16~20",
    "blockFrame": -9,
    "hitFrame": "0 / HE",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.d+3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.f,f",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "N/A / i26~i31 Heat",
    "blockFrame": "+1~+6 / -6~-1 HBS",
    "hitFrame": "+7~+12 / 0~+5 HBS",
    "counterHitFrame": ""
  },
  {
    "input": "HBS.f+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "OTG.d+1+4",
    "hitLevel": "l,ub(l)",
    "damage": "16 (11),48 (33)",
    "startupFrame": "i55~110,i25~38",
    "blockFrame": "N/A",
    "hitFrame": "8 (0) / +14",
    "counterHitFrame": ""
  },
  {
    "input": "ROL 0.1",
    "hitLevel": "h",
    "damage": 31,
    "startupFrame": "i15~16",
    "blockFrame": 4,
    "hitFrame": "+35d (+27)",
    "counterHitFrame": ""
  },
  {
    "input": "ROL 0.2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i17~19",
    "blockFrame": -17,
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "ROL 0.3",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i18~26",
    "blockFrame": -18,
    "hitFrame": "+33a",
    "counterHitFrame": ""
  },
  {
    "input": "ROL 0.4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i26~30",
    "blockFrame": 7,
    "hitFrame": "+26a",
    "counterHitFrame": ""
  },
  {
    "input": "ROL.1+2",
    "hitLevel": "sm",
    "damage": 22,
    "startupFrame": "i10~40",
    "blockFrame": -30,
    "hitFrame": "+45a",
    "counterHitFrame": ""
  },
  {
    "input": "SIT 0.1",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i21~22",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": 9
  },
  {
    "input": "SIT.1,1",
    "hitLevel": "l,l",
    "damage": "10,13",
    "startupFrame": ",i25~26",
    "blockFrame": -12,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "SIT 0.2",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i19~21",
    "blockFrame": -12,
    "hitFrame": "+73a (+57)",
    "counterHitFrame": ""
  },
  {
    "input": "SIT.3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i25",
    "blockFrame": "-12 / -10 ROL",
    "hitFrame": "-4a / -2a ROL",
    "counterHitFrame": ""
  },
  {
    "input": "SIT.f",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "N/A / i26~i31 Heat",
    "blockFrame": "+1~+6 / -6~-1 HBS",
    "hitFrame": "+7~+12 / 0~+5 HBS",
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
    "blockFrame": -6,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "th(h)",
    "damage": 70,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "th(h)",
    "damage": 50,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": 1,
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
    "input": "f,df,d,db,b,f+1+2",
    "hitLevel": "th(h)",
    "damage": 50,
    "startupFrame": "i11",
    "blockFrame": 0,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": 0,
    "hitFrame": "+26d (+7)",
    "counterHitFrame": ""
  }
]

const pandaFrameData = rawPandaFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default pandaFrameData;