const rawClaudioFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": 1,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "l (th), m",
    "damage": "12,40",
    "startupFrame": "i18",
    "blockFrame": -14,
    "hitFrame": "th",
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m,th",
    "damage": "10,45",
    "startupFrame": "",
    "blockFrame": "",
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
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,12",
    "startupFrame": ",i13~14",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "1,3",
    "hitLevel": "h,l",
    "damage": "5,11",
    "startupFrame": ",i22",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "10,13",
    "startupFrame": ",i20",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "2,1,2",
    "hitLevel": "h,m,m",
    "damage": "10,13,25",
    "startupFrame": ",i16~18",
    "blockFrame": -13,
    "hitFrame": "+10a (+1) / HE",
    "counterHitFrame": ""
  },
  {
    "input": "3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i14",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "3,2",
    "hitLevel": "m,h",
    "damage": "14,22",
    "startupFrame": ",i22~23",
    "blockFrame": -6,
    "hitFrame": 15,
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 13,
    "startupFrame": "i12",
    "blockFrame": -11,
    "hitFrame": 5,
    "counterHitFrame": "+9a"
  },
  {
    "input": "4,3",
    "hitLevel": "h,h",
    "damage": "13,14",
    "startupFrame": ",i25~26",
    "blockFrame": 0,
    "hitFrame": "+15Sp",
    "counterHitFrame": "+22a (+15)"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17",
    "blockFrame": -14,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "1+2,1+2",
    "hitLevel": "m,th",
    "damage": "20,10",
    "startupFrame": ",i17",
    "blockFrame": "",
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "1+2,1+2,2",
    "hitLevel": "m,thth,sp",
    "damage": "20,10,18",
    "startupFrame": ",i17",
    "blockFrame": "",
    "hitFrame": "th",
    "counterHitFrame": "th"
  },
  {
    "input": "3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i24~26",
    "blockFrame": -11,
    "hitFrame": "+9a",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i12",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1",
    "hitLevel": "h,m",
    "damage": "9,12",
    "startupFrame": ",i15~16",
    "blockFrame": -10,
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,1,1+2",
    "hitLevel": "h,m,m",
    "damage": "9,12,25",
    "startupFrame": ",i21~22",
    "blockFrame": -18,
    "hitFrame": "+7a (-2)",
    "counterHitFrame": ""
  },
  {
    "input": "f+2,2",
    "hitLevel": "h,m",
    "damage": "9,20",
    "startupFrame": ",i14",
    "blockFrame": -26,
    "hitFrame": "+18a (-13)",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i18",
    "blockFrame": 0,
    "hitFrame": "+15Sp",
    "counterHitFrame": 14
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i22~23",
    "blockFrame": "+4c",
    "hitFrame": "+4c",
    "counterHitFrame": "+28d"
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 8,
    "startupFrame": "i16",
    "blockFrame": -18,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2,1+2",
    "hitLevel": "m,m",
    "damage": "8,16",
    "startupFrame": ",i18",
    "blockFrame": -14,
    "hitFrame": "+64a",
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i17",
    "blockFrame": -8,
    "hitFrame": "+19a",
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i15",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,2",
    "hitLevel": "m,m",
    "damage": "10,15",
    "startupFrame": ",i23~24",
    "blockFrame": -15,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 19,
    "startupFrame": "i14",
    "blockFrame": -13,
    "hitFrame": 5,
    "counterHitFrame": "+58a"
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,1",
    "hitLevel": "m,m",
    "damage": "12,18",
    "startupFrame": ",i17~19",
    "blockFrame": -12,
    "hitFrame": "+29a (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3,2",
    "hitLevel": "m,h",
    "damage": "12,10",
    "startupFrame": ",i15",
    "blockFrame": -2,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i13",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "d+1",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i17",
    "blockFrame": -8,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "l",
    "damage": 6,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+2,2",
    "hitLevel": "l,l",
    "damage": "6,8",
    "startupFrame": ",i16~17",
    "blockFrame": -13,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i12",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "d+1+2",
    "hitLevel": "m",
    "damage": 28,
    "startupFrame": "i13~14",
    "blockFrame": -18,
    "hitFrame": "+7a (-2)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1",
    "hitLevel": "sm",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "sm",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "db+2,1",
    "hitLevel": "sm,m",
    "damage": "8,12",
    "startupFrame": ",i18",
    "blockFrame": -9,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 23,
    "startupFrame": "i24~25",
    "blockFrame": -15,
    "hitFrame": "+3c",
    "counterHitFrame": "+27a"
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "db+4,3",
    "hitLevel": "l,h",
    "damage": "7,10",
    "startupFrame": ",i18",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17",
    "blockFrame": -12,
    "hitFrame": "+8a (-9)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i18~19",
    "blockFrame": -5,
    "hitFrame": "+12a",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i14",
    "blockFrame": -9,
    "hitFrame": "+9a",
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i13",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "b+3,3",
    "hitLevel": "m,m",
    "damage": "14,21",
    "startupFrame": ",i24~25",
    "blockFrame": -12,
    "hitFrame": "+7c",
    "counterHitFrame": "+22d"
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i17",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "b+4,1",
    "hitLevel": "m,h",
    "damage": "10,18",
    "startupFrame": ",i20~21",
    "blockFrame": 1,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "b+4,2",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": ",i20",
    "blockFrame": -11,
    "hitFrame": "+29a (+3)",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,3",
    "hitLevel": "m,h",
    "damage": "10,14",
    "startupFrame": ",i22~23",
    "blockFrame": -12,
    "hitFrame": -4,
    "counterHitFrame": 1
  },
  {
    "input": "b+4,3,2",
    "hitLevel": "m,h,m",
    "damage": "10,14,20",
    "startupFrame": ",i31~32",
    "blockFrame": -13,
    "hitFrame": "+16a",
    "counterHitFrame": ""
  },
  {
    "input": "b+4,4",
    "hitLevel": "m,m",
    "damage": "10,16",
    "startupFrame": ",i28~29",
    "blockFrame": -13,
    "hitFrame": "+30a (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i22",
    "blockFrame": -13,
    "hitFrame": "+15a",
    "counterHitFrame": ""
  },
  {
    "input": "b+2+3",
    "hitLevel": "ub(m)",
    "damage": 60,
    "startupFrame": "i72",
    "blockFrame": "+15a (-11)",
    "hitFrame": "+15a (-11)",
    "counterHitFrame": ""
  },
  {
    "input": "b+3+4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i29",
    "blockFrame": -15,
    "hitFrame": "+9a (+0)",
    "counterHitFrame": ""
  },
  {
    "input": "u+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i21",
    "blockFrame": -8,
    "hitFrame": "0d / HE",
    "counterHitFrame": ""
  },
  {
    "input": "u+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i23~25",
    "blockFrame": "+2c",
    "hitFrame": "+7c",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": "+33a (+23)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "mm",
    "damage": "10,14",
    "startupFrame": "i20",
    "blockFrame": -11,
    "hitFrame": "+14a (+5)",
    "counterHitFrame": ""
  },
  {
    "input": "1+2+3+4",
    "hitLevel": "sp",
    "damage": "–",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i14~16",
    "blockFrame": -18,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,2",
    "hitLevel": "m,h",
    "damage": "14,20",
    "startupFrame": ",i14~15",
    "blockFrame": "-2c",
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+2,1+2",
    "hitLevel": "m,m",
    "damage": "14,20",
    "startupFrame": ",i18~19",
    "blockFrame": -13,
    "hitFrame": "-14a (-23)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~17",
    "blockFrame": -1,
    "hitFrame": 5,
    "counterHitFrame": 13
  },
  {
    "input": "f,f,F+2",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "i13~16",
    "blockFrame": 6,
    "hitFrame": "+24a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i12~13",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,1",
    "hitLevel": "m,h",
    "damage": "12,15",
    "startupFrame": ",i20",
    "blockFrame": -12,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "ws1,2",
    "hitLevel": "m,m",
    "damage": "12,12",
    "startupFrame": ",i28~29",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -14,
    "hitFrame": "+26a (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16",
    "blockFrame": -8,
    "hitFrame": "+15a (+6)",
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i11~12",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "SS.4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": "+6c",
    "counterHitFrame": "+27d"
  },
  {
    "input": "FC.df+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i14~16",
    "blockFrame": -18,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2,2",
    "hitLevel": "m,h",
    "damage": "14,20",
    "startupFrame": ",i14~15",
    "blockFrame": "-2c",
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2,1+2",
    "hitLevel": "m,m",
    "damage": "14,20",
    "startupFrame": "i14~16",
    "blockFrame": -13,
    "hitFrame": "+10a (+1)",
    "counterHitFrame": ""
  },
  {
    "input": "(back to wall).b,b,ub",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i36",
    "blockFrame": "+0c",
    "hitFrame": "+8d",
    "counterHitFrame": ""
  },
  {
    "input": "STB.4,2",
    "hitLevel": "h,sm",
    "damage": "13,32",
    "startupFrame": "i12,i28-36",
    "blockFrame": -17,
    "hitFrame": "+27(+1)",
    "counterHitFrame": ""
  },
  {
    "input": "STB.b+4,3,2",
    "hitLevel": "m,h,m",
    "damage": "10,14,38",
    "startupFrame": "i17",
    "blockFrame": -1,
    "hitFrame": "43a (+33)",
    "counterHitFrame": ""
  },
  {
    "input": "STB.db+1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i17",
    "blockFrame": -1,
    "hitFrame": "Launch",
    "counterHitFrame": ""
  },
  {
    "input": "STB.d+1,2",
    "hitLevel": "m,m",
    "damage": "16,23",
    "startupFrame": "i17, i28",
    "blockFrame": 6,
    "hitFrame": "+28(+13)",
    "counterHitFrame": ""
  },
  {
    "input": "STB.f,f,F+1+2",
    "hitLevel": "h",
    "damage": 45,
    "startupFrame": "i13",
    "blockFrame": 8,
    "hitFrame": "+29a (+19)",
    "counterHitFrame": ""
  },
  {
    "input": "STB.f+1+2,1+2",
    "hitLevel": "m,m",
    "damage": "8,16",
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 64,
    "counterHitFrame": 64
  },
  {
    "input": "STB.ws1,2",
    "hitLevel": "m,m",
    "damage": "12,23",
    "startupFrame": "i12",
    "blockFrame": 6,
    "hitFrame": "+28a (+13)",
    "counterHitFrame": ""
  },
  {
    "input": "1+3",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -2,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "th(h)",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "th(h)",
    "damage": 50,
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "-3d",
    "counterHitFrame": ""
  },
  {
    "input": "Right throw",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": -3,
    "hitFrame": "+0d",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1+2",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "",
    "blockFrame": -6,
    "hitFrame": "",
    "counterHitFrame": ""
  }
]

const claudioFrameData = rawClaudioFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default claudioFrameData;