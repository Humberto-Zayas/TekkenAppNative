const rawShaheenFrameData = [
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
    "input": "H.D*,u+2",
    "hitLevel": "h",
    "damage": 35,
    "startupFrame": "i18~19",
    "blockFrame": 13,
    "hitFrame": "+63 (+47)",
    "counterHitFrame": ""
  },
  {
    "input": "H.SNK.2+3",
    "hitLevel": "l",
    "damage": 40,
    "startupFrame": "i20~21",
    "blockFrame": -14,
    "hitFrame": "+24 (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m",
    "damage": 50,
    "startupFrame": "i16~17",
    "blockFrame": 6,
    "hitFrame": "+27 (-8)",
    "counterHitFrame": ""
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m",
    "damage": 55,
    "startupFrame": "i20",
    "blockFrame": -15,
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
    "damage": "5,9",
    "startupFrame": ",i12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,2",
    "hitLevel": "h,h,m",
    "damage": "5,9,17",
    "startupFrame": ",i20~21",
    "blockFrame": -11,
    "hitFrame": 3,
    "counterHitFrame": "+58a"
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,h,h",
    "damage": "5,9,18",
    "startupFrame": ",i20",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,4",
    "hitLevel": "h,h,m",
    "damage": "5,9,20",
    "startupFrame": ",i24~26",
    "blockFrame": -13,
    "hitFrame": "+33 (+18)",
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "2,1",
    "hitLevel": "h,m",
    "damage": "10,7",
    "startupFrame": ",i17~18",
    "blockFrame": -4,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "2,3",
    "hitLevel": "h,h",
    "damage": "10,18",
    "startupFrame": ",i20",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i14",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i13",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "4,1",
    "hitLevel": "h,h",
    "damage": "16,14",
    "startupFrame": ",i18",
    "blockFrame": -5,
    "hitFrame": 5,
    "counterHitFrame": "+31a (+24)"
  },
  {
    "input": "4,3",
    "hitLevel": "h,h",
    "damage": "16,21",
    "startupFrame": ",i31",
    "blockFrame": -1,
    "hitFrame": "+26 (+17)",
    "counterHitFrame": "+71a (51)"
  },
  {
    "input": "4,4",
    "hitLevel": "h,m",
    "damage": "16,25",
    "startupFrame": ",i24~25",
    "blockFrame": -13,
    "hitFrame": 20,
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -8,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,3",
    "hitLevel": "h,h",
    "damage": "10,23",
    "startupFrame": ",i18",
    "blockFrame": -12,
    "hitFrame": 20,
    "counterHitFrame": ""
  },
  {
    "input": "f+2,4",
    "hitLevel": "h,l",
    "damage": "10,13",
    "startupFrame": ",i22~23",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": "+29a"
  },
  {
    "input": "f+2,4,4",
    "hitLevel": "h,l,h",
    "damage": "10,13,21",
    "startupFrame": ",i26~27",
    "blockFrame": -7,
    "hitFrame": 10,
    "counterHitFrame": "+62a (+42)"
  },
  {
    "input": "f+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i20~21",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": 31
  },
  {
    "input": "f+4",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i15~16",
    "blockFrame": -2,
    "hitFrame": 25,
    "counterHitFrame": ""
  },
  {
    "input": "f+3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i22~23",
    "blockFrame": 3,
    "hitFrame": "+11c",
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
    "damage": 13,
    "startupFrame": "i15~16",
    "blockFrame": -7,
    "hitFrame": "+34 (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17",
    "blockFrame": -9,
    "hitFrame": "+9 (+21wc)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,1",
    "hitLevel": "m,m",
    "damage": "13,10",
    "startupFrame": ",i22~23",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+4,1,3",
    "hitLevel": "m,m,m",
    "damage": "13,10,28",
    "startupFrame": ",i27~28",
    "blockFrame": -13,
    "hitFrame": "+19 (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "df+4,3",
    "hitLevel": "m,h",
    "damage": "13,23",
    "startupFrame": ",i23~24",
    "blockFrame": -4,
    "hitFrame": "+23 (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i18~19",
    "blockFrame": -6,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i16~17",
    "blockFrame": -14,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "i19",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "db+2",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i14",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "db+2,1",
    "hitLevel": "m,h",
    "damage": "11,24",
    "startupFrame": ",i20",
    "blockFrame": -11,
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i20~21",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "db+3,4",
    "hitLevel": "l,h",
    "damage": "12,20",
    "startupFrame": ",i18",
    "blockFrame": -13,
    "hitFrame": "+68 (+52)",
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "h",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+28 (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "db+1+2",
    "hitLevel": "ub(m)",
    "damage": 40,
    "startupFrame": "i64~65",
    "blockFrame": "+42 (+11)",
    "hitFrame": "+42 (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i19~20",
    "blockFrame": 0,
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "b+1+3",
    "hitLevel": "sp",
    "damage": "15 (15)",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "b+2",
    "hitLevel": "m(th)",
    "damage": "12,16",
    "startupFrame": "i15~16",
    "blockFrame": -9,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i19",
    "blockFrame": "+3c",
    "hitFrame": "+3c",
    "counterHitFrame": "+14c"
  },
  {
    "input": "b+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i17",
    "blockFrame": -15,
    "hitFrame": 4,
    "counterHitFrame": "+29 (+23)"
  },
  {
    "input": "b+3+4",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": "+19 (+9)",
    "counterHitFrame": ""
  },
  {
    "input": "uf+1",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i24~25",
    "blockFrame": 1,
    "hitFrame": 20,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i25~26",
    "blockFrame": -7,
    "hitFrame": 24,
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15~17",
    "blockFrame": -13,
    "hitFrame": "+33 (+23)",
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
    "input": "D*,u+2",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i18~19",
    "blockFrame": 4,
    "hitFrame": "+28 (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i17",
    "blockFrame": -12,
    "hitFrame": "+63 (+48)",
    "counterHitFrame": ""
  },
  {
    "input": "f,b+2",
    "hitLevel": "h",
    "damage": 42,
    "startupFrame": "i14",
    "blockFrame": -4,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "f:b+2",
    "hitLevel": "h",
    "damage": 42,
    "startupFrame": "i13",
    "blockFrame": -4,
    "hitFrame": 0,
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
    "input": "f,f,F+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i17~18",
    "blockFrame": 5,
    "hitFrame": "+21 (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i14",
    "blockFrame": -2,
    "hitFrame": 4,
    "counterHitFrame": 14
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": 57,
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 9,
    "startupFrame": "i13",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "ws3,3",
    "hitLevel": "m,m",
    "damage": "9,25",
    "startupFrame": ",i17",
    "blockFrame": -13,
    "hitFrame": "+11 (+2)",
    "counterHitFrame": "+43 (-4)"
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
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+0c",
    "counterHitFrame": "+13g"
  },
  {
    "input": "FC.df,d,DF",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df,d,DF+3",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i16~20",
    "blockFrame": "-23a",
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18~19",
    "blockFrame": -9,
    "hitFrame": "+17 (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4",
    "hitLevel": "l",
    "damage": 16,
    "startupFrame": "i16~17",
    "blockFrame": -14,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "FC.df+4,1",
    "hitLevel": "l,h",
    "damage": "16,20",
    "startupFrame": ",i26",
    "blockFrame": -2,
    "hitFrame": "+24 (+15)",
    "counterHitFrame": "+69a (+49)"
  },
  {
    "input": "BT.2",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14~15",
    "blockFrame": -3,
    "hitFrame": 42,
    "counterHitFrame": ""
  },
  {
    "input": "SNK.1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12",
    "blockFrame": -1,
    "hitFrame": 5,
    "counterHitFrame": 14
  },
  {
    "input": "SNK.2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15~16",
    "blockFrame": -9,
    "hitFrame": 8,
    "counterHitFrame": "+23 (+6)"
  },
  {
    "input": "SNK.3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20",
    "blockFrame": -12,
    "hitFrame": "+63 (+48)",
    "counterHitFrame": ""
  },
  {
    "input": "SNK.4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i20~22",
    "blockFrame": -14,
    "hitFrame": "+3c",
    "counterHitFrame": 15
  },
  {
    "input": "SNK.1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i19",
    "blockFrame": "+2c",
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "SNK.df+1",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i15~16",
    "blockFrame": -5,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "SNK.df+1,2",
    "hitLevel": "m,h",
    "damage": "12,40",
    "startupFrame": ",i20",
    "blockFrame": -4,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "SNK.df+1,3",
    "hitLevel": "m,m",
    "damage": "12,28",
    "startupFrame": ",i27~28",
    "blockFrame": -13,
    "hitFrame": "+19 (+9)",
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
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  }
]

const shaheenFrameData = rawShaheenFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default shaheenFrameData;