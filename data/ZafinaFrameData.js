const rawZafinaFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": "",
    "startupFrame": "16",
    "blockFrame": 1,
    "hitFrame": "+2c",
    "counterHitFrame": "",
    "type: ": "heat",
    "specialProperties": ["heat burst", "armor"]
  },
  {
    "input": "SCR 2+3",
    "hitLevel": "l,m",
    "damage": "10,20",
    "startupFrame": "19",
    "blockFrame": -14,
    "hitFrame": "+44d (+25)",
    "counterHitFrame": "",
    "type: ": "heat",
    "specialProperties": ["heat smash"]
  },
  {
    "input": "HS 2+3",
    "hitLevel": "h,sm",
    "damage": "15,4,5,5,4,18",
    "startupFrame": "12~13",
    "blockFrame": 3,
    "hitFrame": "+0d",
    "counterHitFrame": "",
    "type: ": "heat",
    "specialProperties": ["heat smash"]
  },
  {
    "input": "RA",
    "hitLevel": "m,t",
    "damage": 55,
    "startupFrame": "20",
    "blockFrame": -15,
    "hitFrame": "+0d",
    "type: ": "rage art",
    "counterHitFrame": "",
    "specialProperties": ["armor"]
  },
  {
    "input": 1,
    "hitLevel": "h",
    "damage": 5,
    "startupFrame": "10",
    "blockFrame": 1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,9",
    "startupFrame": "12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,3 (SCR)",
    "hitLevel": "h,h,h",
    "damage": "5,9,12",
    "startupFrame": "20",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": "",
    "specialProperties": ["stance entry"]
  },
  {
    "input": "1,2,3b",
    "hitLevel": "h,h,h",
    "damage": "5,9,12",
    "startupFrame": "20",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": "",
  },
  {
    "input": "1,3 (SCR)",
    "hitLevel": "h,h",
    "damage": "5,14",
    "startupFrame": "17~18",
    "blockFrame": -2,
    "hitFrame": 7,
    "counterHitFrame": "",
    "specialProperties": ["stance entry"]
  },
  {
    "input": "1,3b",
    "hitLevel": "h,h",
    "damage": "5,14",
    "startupFrame": "17~18",
    "blockFrame": -2,
    "hitFrame": 7,
    "counterHitFrame": "",
  },
  {
    "input": "1,4 (TRT)",
    "hitLevel": "h, m (TRT)",
    "damage": "5,17",
    "startupFrame": "10",
    "blockFrame": -5,
    "hitFrame": 22,
    "counterHitFrame": 22,
    "specialProperties": ["tornado", "ch launch", "stance entry"]
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 8,
    "startupFrame": "10",
    "blockFrame": -7,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "8,9",
    "startupFrame": "10",
    "blockFrame": "-6c",
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,3(MNT)",
    "hitLevel": "h,m,l (MNT)",
    "damage": "8,9,11",
    "startupFrame": "10",
    "blockFrame": -17,
    "hitFrame": "+4d",
    "counterHitFrame": "",
    "specialProperties": ["stance entry"]
  },
  {
    "input": "2,1,3d",
    "hitLevel": "h,m (MNT)",
    "damage": "8,9",
    "startupFrame": "10",
    "blockFrame": "",
    "hitFrame": "+4d",
    "counterHitFrame": ""
  },
  {
    "input": "2,2",
    "hitLevel": "h,m",
    "damage": "8,12",
    "startupFrame": "10",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": 7
  },
  {
    "input": "2,2,1+2",
    "hitLevel": "h,m,m,m,m",
    "damage": "8,12,7,11,14",
    "startupFrame": "10",
    "blockFrame": -9,
    "hitFrame": "+19d(-16)",
    "counterHitFrame": ""
  },
  {
    "input": "3 (SCR)",
    "hitLevel": "h (SCR)",
    "damage": 17,
    "startupFrame": "13",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "3b",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "13",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 19,
    "startupFrame": "14~15",
    "blockFrame": -6,
    "hitFrame": -1,
    "counterHitFrame": "+19a(+10)"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "16~17",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": "+24a",
    "specialProperties": ["ch launch"]
  },
  {
    "input": "1+2,4",
    "hitLevel": "m,m",
    "damage": "17,10",
    "startupFrame": "16~17",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": 6,
    "specialProperties": ["ch launch"]
  },
  {
    "input": "1+2,4,4",
    "hitLevel": "m,m,m",
    "damage": "17,10,12",
    "startupFrame": "16~17",
    "blockFrame": -11,
    "hitFrame": "+19d",
    "counterHitFrame": "",
    "specialProperties": ["ch launch"]
  },
  {
    "input": "3+4 (SCR)",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": "",
    "specialProperties": ["stance entry"]
  },
  {
    "input": "f+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "19",
    "blockFrame": -18,
    "hitFrame": -9,
    "counterHitFrame": "+52a",
    "specialProperties": ["ch launch"]
  },
  {
    "input": "f+2,3 (SCR)",
    "hitLevel": "m,h (SCR)",
    "damage": "17,12",
    "startupFrame": "19",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": "",
    "specialProperties": ["ch launch", "stance entry"]
  },
  {
    "input": "f+2,3b",
    "hitLevel": "m,h",
    "damage": "17,12",
    "startupFrame": "19",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": "",
    "specialProperties": ["ch launch"]
  },
  {
    "input": "f+2,3,4",
    "hitLevel": "m,h,m",
    "damage": "17,12,25",
    "startupFrame": "28~29",
    "blockFrame": -18,
    "hitFrame": "+18d(8)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3 (SCR)",
    "hitLevel": "h (SCR)",
    "damage": 28,
    "startupFrame": "21",
    "blockFrame": 3,
    "hitFrame": "+68a(48)",
    "counterHitFrame": "",
    "specialProperties": ["launch"]
  },
  {
    "input": "f+3b",
    "hitLevel": "h",
    "damage": 28,
    "startupFrame": "21",
    "blockFrame": 3,
    "hitFrame": "+68a(48)",
    "counterHitFrame": "",
    "specialProperties": ["launch"]
  },
  {
    "input": "f+4",
    "hitLevel": "h",
    "damage": 13,
    "startupFrame": "14~15",
    "blockFrame": -6,
    "hitFrame": "+22a",
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m,m",
    "damage": "16,22",
    "startupFrame": "19~20",
    "blockFrame": -9,
    "hitFrame": "+5d(-5)",
    "counterHitFrame": "",
    "specialProperties": ["heat engager"]
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "13~14",
    "blockFrame": -5,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,m",
    "damage": "10,16",
    "startupFrame": "13~14",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2,1",
    "hitLevel": "m,m,m",
    "damage": "10,16,20",
    "startupFrame": "13~14",
    "blockFrame": -13,
    "hitFrame": "+23d(13)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2, delay 1",
    "hitLevel": "m,m,m",
    "damage": "10,16,20",
    "startupFrame": "13~14",
    "blockFrame": -13,
    "hitFrame": "+23d(13)",
    "counterHitFrame": ""
  },
  {
    "input": "df+1,4",
    "hitLevel": "m,h",
    "damage": "10,18",
    "startupFrame": "19~20",
    "blockFrame": -6,
    "hitFrame": "+12g",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "16~17",
    "blockFrame": -12,
    "hitFrame": "+32a (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "15~16",
    "blockFrame": -5,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,4",
    "hitLevel": "m,h",
    "damage": "15,17",
    "startupFrame": "23~24",
    "blockFrame": -6,
    "hitFrame": "+22a",
    "counterHitFrame": "+55a"
  },
  {
    "input": "df+3,d+4",
    "hitLevel": "m,l",
    "damage": "15,15",
    "startupFrame": "25~26",
    "blockFrame": -14,
    "hitFrame": "+1c",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "14",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,1",
    "hitLevel": "m,m",
    "damage": "14,22",
    "startupFrame": "31",
    "blockFrame": -12,
    "hitFrame": "+3d",
    "counterHitFrame": ""
  },
  {
    "input": "df+4,2",
    "hitLevel": "m,m",
    "damage": "14,20",
    "startupFrame": "27~29",
    "blockFrame": -13,
    "hitFrame": "+24a(+9)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "36~37",
    "blockFrame": -9,
    "hitFrame": "+60a",
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "m",
    "damage": "",
    "startupFrame": "12",
    "blockFrame": -16,
    "hitFrame": -8,
    "counterHitFrame": "-3c"
  },
  {
    "input": "d+1,1",
    "hitLevel": "m,m",
    "damage": "",
    "startupFrame": "17~18",
    "blockFrame": -12,
    "hitFrame": "+19a(+12)",
    "counterHitFrame": "+28a(+22)"
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "19~20",
    "blockFrame": "-16c",
    "hitFrame": "-3c",
    "counterHitFrame": "+17d"
  },
  {
    "input": "d+2,4",
    "hitLevel": "m,m",
    "damage": "17,10",
    "startupFrame": "26",
    "blockFrame": -22,
    "hitFrame": -4,
    "counterHitFrame": "-4c"
  },
  {
    "input": "d+2,4,3",
    "hitLevel": "m,m,m",
    "damage": "17,10,10",
    "startupFrame": "28~31",
    "blockFrame": -12,
    "hitFrame": "+18a",
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "22",
    "blockFrame": -15,
    "hitFrame": "+5c",
    "counterHitFrame": "+20a"
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 8,
    "startupFrame": "17~18",
    "blockFrame": -19,
    "hitFrame": -3,
    "counterHitFrame": 7
  },
  {
    "input": "d+4,3",
    "hitLevel": "l,h",
    "damage": "8,10",
    "startupFrame": "19",
    "blockFrame": -6,
    "hitFrame": "+36a(+26)",
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
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "13~14",
    "blockFrame": -9,
    "hitFrame": 3,
    "counterHitFrame": "+16a"
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "18",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "21~22",
    "blockFrame": -12,
    "hitFrame": -3,
    "counterHitFrame": 3
  },
  {
    "input": "db+4,2",
    "hitLevel": "l,m",
    "damage": "14,17",
    "startupFrame": "29~32",
    "blockFrame": -13,
    "hitFrame": "+68a(+52)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "28~29",
    "blockFrame": -16,
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2,1+2",
    "hitLevel": "l,m",
    "damage": "10,20",
    "startupFrame": "33",
    "blockFrame": -16,
    "hitFrame": "+5a(-4)",
    "counterHitFrame": "+37a(-10)"
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "18",
    "blockFrame": -14,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "b+1:1+2",
    "hitLevel": "m,t",
    "damage": "14,36",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3",
    "hitLevel": "m,m",
    "damage": "5,35",
    "startupFrame": "6",
    "blockFrame": "",
    "hitFrame": "+12d",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 22,
    "startupFrame": "22~23",
    "blockFrame": -5,
    "hitFrame": 12,
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "24~26",
    "blockFrame": -14,
    "hitFrame": "+12d",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "22~23",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+4,4",
    "hitLevel": "m,m",
    "damage": "14,20",
    "startupFrame": "20~22",
    "blockFrame": -14,
    "hitFrame": "+9a(0)",
    "counterHitFrame": ""
  },
  {
    "input": "b+2+3",
    "hitLevel": "m!",
    "damage": 40,
    "startupFrame": "64",
    "blockFrame": "!",
    "hitFrame": "+41a(+10)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "h",
    "damage": 19,
    "startupFrame": "19",
    "blockFrame": 4,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "22~23",
    "blockFrame": -8,
    "hitFrame": "+17d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "17~18",
    "blockFrame": -13,
    "hitFrame": "+29a(19)",
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
    "input": "f,F+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "15~16",
    "blockFrame": 1,
    "hitFrame": "+21a(12)",
    "counterHitFrame": "+38a"
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "20~22",
    "blockFrame": 4,
    "hitFrame": "+9c",
    "counterHitFrame": "+14c"
  },
  {
    "input": "f,F+3,1",
    "hitLevel": "m,m",
    "damage": 20,
    "startupFrame": "18",
    "blockFrame": -16,
    "hitFrame": "+5d",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "17~19",
    "blockFrame": -8,
    "hitFrame": "+18a(+9)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3+4",
    "hitLevel": "m,m",
    "damage": "10,21",
    "startupFrame": "21 i8~12",
    "blockFrame": -11,
    "hitFrame": "+15a(+6)",
    "counterHitFrame": ""
  },
  {
    "input": "wr4",
    "hitLevel": "l",
    "damage": 21,
    "startupFrame": "14~30",
    "blockFrame": -52,
    "hitFrame": "-7d",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+3",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "23~26",
    "blockFrame": 7,
    "hitFrame": "+19a(9)",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+1+2",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "20~24",
    "blockFrame": 8,
    "hitFrame": "+32a",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 9,
    "startupFrame": "15",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,m",
    "damage": "9,18",
    "startupFrame": "20~21",
    "blockFrame": -13,
    "hitFrame": "+36a (+26)",
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "18~19",
    "blockFrame": -14,
    "hitFrame": "+28a (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "12",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "11",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "SS.1+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "17~18",
    "blockFrame": -2,
    "hitFrame": "+8c",
    "counterHitFrame": "+28a"
  },
  {
    "input": "FC.df+3",
    "hitLevel": "l",
    "damage": 15,
    "startupFrame": "23~24",
    "blockFrame": -26,
    "hitFrame": "+14d",
    "counterHitFrame": ""
  },
  {
    "input": "FC.d+1",
    "hitLevel": "sl",
    "damage": 5,
    "startupFrame": "10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "FC.d+2",
    "hitLevel": "sl",
    "damage": 8,
    "startupFrame": "11",
    "blockFrame": -4,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "FC.d+3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "FC.d+4",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "12",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "MNT 0.1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "13",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "MNT.1,3",
    "hitLevel": "m,h",
    "damage": "12,12",
    "startupFrame": "19",
    "blockFrame": 0,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "MNT 0.2",
    "hitLevel": "m",
    "damage": 19,
    "startupFrame": "13~14",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": "+57a"
  },
  {
    "input": "MNT.2,1",
    "hitLevel": "m,m",
    "damage": "19,10",
    "startupFrame": "18~19",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "MNT.2,1,4",
    "hitLevel": "m,m,m",
    "damage": "19,10,25",
    "startupFrame": "27~28",
    "blockFrame": -13,
    "hitFrame": "+13a(+4)",
    "counterHitFrame": ""
  },
  {
    "input": "MNT 0.3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "15~16",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "MNT.3,1",
    "hitLevel": "l,m",
    "damage": "12,16",
    "startupFrame": "24",
    "blockFrame": -9,
    "hitFrame": "+22a(+15)",
    "counterHitFrame": ""
  },
  {
    "input": "MNT 0.4",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "17~18",
    "blockFrame": -19,
    "hitFrame": -3,
    "counterHitFrame": 7
  },
  {
    "input": "MNT.4,3",
    "hitLevel": "l,m",
    "damage": "13,23",
    "startupFrame": "27",
    "blockFrame": -30,
    "hitFrame": "+32a(+22)",
    "counterHitFrame": ""
  },
  {
    "input": "MNT.1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "20",
    "blockFrame": -12,
    "hitFrame": "+18d",
    "counterHitFrame": ""
  },
  {
    "input": "MNT.2+3",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "MNT.df+1",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "24~25",
    "blockFrame": 6,
    "hitFrame": "+7d",
    "counterHitFrame": ""
  },
  {
    "input": "MNT.df+2",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "19~20",
    "blockFrame": -9,
    "hitFrame": "+32a(22)",
    "counterHitFrame": ""
  },
  {
    "input": "MNT.df+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "15~16",
    "blockFrame": -17,
    "hitFrame": "+19cg",
    "counterHitFrame": ""
  },
  {
    "input": "MNT.df+4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "17~18",
    "blockFrame": -5,
    "hitFrame": "+13g",
    "counterHitFrame": ""
  },
  {
    "input": "MNT.d+1",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "15~16",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "MNT.d+1,4",
    "hitLevel": "l,m",
    "damage": "14,23",
    "startupFrame": "27~30",
    "blockFrame": -16,
    "hitFrame": "+15(+6)",
    "counterHitFrame": "+60a(+40)"
  },
  {
    "input": "MNT.d+4",
    "hitLevel": "l",
    "damage": 19,
    "startupFrame": "20~27",
    "blockFrame": "-22~-15",
    "hitFrame": "+4c~+11c",
    "counterHitFrame": "+19a~+26a"
  },
  {
    "input": "MNT.uf+3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "26~28",
    "blockFrame": -9,
    "hitFrame": "+11d",
    "counterHitFrame": ""
  },
  {
    "input": "SCR 0.1",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "10~11",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "SCR 1,4",
    "hitLevel": "h,m",
    "damage": "12,18",
    "startupFrame": "22",
    "blockFrame": -6,
    "hitFrame": 7,
    "counterHitFrame": "+32d"
  },
  {
    "input": "SCR 0.2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "14",
    "blockFrame": -7,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "SCR.2,1",
    "hitLevel": "m,m",
    "damage": "17,25",
    "startupFrame": "21",
    "blockFrame": -6,
    "hitFrame": "+30d(+20)",
    "counterHitFrame": ""
  },
  {
    "input": "SCR.2,2",
    "hitLevel": "m,m",
    "damage": "17,17",
    "startupFrame": "22",
    "blockFrame": -10,
    "hitFrame": "+8c",
    "counterHitFrame": "+8d"
  },
  {
    "input": "SCR 0.3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "13",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "SCR.3,3",
    "hitLevel": "m,h",
    "damage": "15,20",
    "startupFrame": "16",
    "blockFrame": 0,
    "hitFrame": "+25a(+15)",
    "counterHitFrame": ""
  },
  {
    "input": "SCR 0.4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "15~16",
    "blockFrame": -18,
    "hitFrame": "+58a(+42)",
    "counterHitFrame": ""
  },
  {
    "input": "SCR.1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "17~19",
    "blockFrame": 6,
    "hitFrame": "+17d",
    "counterHitFrame": ""
  },
  {
    "input": "SCR.3+4",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "18~19 i6~8",
    "blockFrame": -12,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "SCR.b+1+2",
    "hitLevel": "l",
    "damage": 16,
    "startupFrame": "16",
    "blockFrame": -17,
    "hitFrame": 3,
    "counterHitFrame": "+12d"
  },
  {
    "input": "SCR.db",
    "hitLevel": "",
    "damage": "",
    "startupFrame": 19,
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "SCR.df+1",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "18 i17~19",
    "blockFrame": -6,
    "hitFrame": "+33a(+18)",
    "counterHitFrame": ""
  },
  {
    "input": "SCR.df+3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "28~30",
    "blockFrame": -23,
    "hitFrame": "-10c",
    "counterHitFrame": ""
  },
  {
    "input": "SCR.df+3,3",
    "hitLevel": "l,l",
    "damage": "10,10",
    "startupFrame": "29~31",
    "blockFrame": -23,
    "hitFrame": "+54a(+38)",
    "counterHitFrame": ""
  },
  {
    "input": "SCR.df+4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "19~20",
    "blockFrame": -14,
    "hitFrame": "+7c",
    "counterHitFrame": "+37a"
  },
  {
    "input": "SCR.d+3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "18",
    "blockFrame": -6,
    "hitFrame": -3,
    "counterHitFrame": "+9c"
  },
  {
    "input": "SCR.d+3,3",
    "hitLevel": "l,h",
    "damage": "10,28",
    "startupFrame": "24",
    "blockFrame": 3,
    "hitFrame": "+77a(+61)",
    "counterHitFrame": ""
  },
  {
    "input": "SCR.d+4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "24~30",
    "blockFrame": -25,
    "hitFrame": "-4d",
    "counterHitFrame": ""
  },
  {
    "input": "SCR.d+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "TRT.1",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "18",
    "blockFrame": -11,
    "hitFrame": 5,
    "counterHitFrame": "+15d"
  },
  {
    "input": "TRT.2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "34-36",
    "blockFrame": -9,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "TRT.3",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "14~i15",
    "blockFrame": -7,
    "hitFrame": "+15d",
    "counterHitFrame": ""
  },
  {
    "input": "TRT.4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "26",
    "blockFrame": -22,
    "hitFrame": "-4b",
    "counterHitFrame": "-4c"
  },
  {
    "input": "TRT.4,3",
    "hitLevel": "m,m",
    "damage": "10,10",
    "startupFrame": "28~31",
    "blockFrame": -13,
    "hitFrame": "+18a",
    "counterHitFrame": ""
  },
  {
    "input": "TRT.1+2",
    "hitLevel": "m,m",
    "damage": "7,20",
    "startupFrame": "19~20 i9~10",
    "blockFrame": -12,
    "hitFrame": "+14a",
    "counterHitFrame": ""
  },
  {
    "input": "TRT.db",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "TRT.df+1",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "19~20",
    "blockFrame": 6,
    "hitFrame": "+30a(+15)",
    "counterHitFrame": ""
  },
  {
    "input": "TRT.d+1+2",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "25",
    "blockFrame": -21,
    "hitFrame": "+10d",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "12~14",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "t",
    "damage": 35,
    "startupFrame": "12~14",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "Back Throw",
    "hitLevel": "t",
    "damage": 50,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "Left Throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "Right Throw",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "t",
    "damage": 40,
    "startupFrame": "12",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  }
]

const zafinaFrameData = rawZafinaFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', 
  type: item.type || null,
  specialProperties: item.specialProperties || [], 
}));

export default zafinaFrameData;