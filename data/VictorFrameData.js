const rawVictorFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": 1,
    "hitFrame": 2,
    "counterHitFrame": 2
  },
  {
    "input": "H.IAI.d+2",
    "hitLevel": "m",
    "damage": 45,
    "startupFrame": "i23~24",
    "blockFrame": 8,
    "hitFrame": "+20 (+2)",
    "counterHitFrame": "+20 (+2)"
  },
  {
    "input": "H.db+1+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i28~29",
    "blockFrame": 6,
    "hitFrame": "+6a (-4)",
    "counterHitFrame": "+6a (-4)"
  },
  {
    "input": "H.u+1+2",
    "hitLevel": "m",
    "damage": 51,
    "startupFrame": "i31~32",
    "blockFrame": -4,
    "hitFrame": "0a (-1)",
    "counterHitFrame": "0a (-1)"
  },
  {
    "input": "H.2+3",
    "hitLevel": "l,m",
    "damage": 39,
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": "th",
    "counterHitFrame": "th"
  },
  {
    "input": "R.df+1+2",
    "hitLevel": "m",
    "damage": 55,
    "startupFrame": "i20",
    "blockFrame": -15,
    "hitFrame": "th",
    "counterHitFrame": "th"
  },
  {
    "input": 1,
    "hitLevel": "h",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": 1,
    "hitFrame": 8,
    "counterHitFrame": 8
  },
  {
    "input": "1,1",
    "hitLevel": "h,h",
    "damage": "5,7",
    "startupFrame": "i16",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": 8
  },
  {
    "input": "1,1,2",
    "hitLevel": "h,h,hh",
    "damage": "5,7,5,10",
    "startupFrame": "i17~18,i9~10",
    "blockFrame": -12,
    "hitFrame": 3,
    "counterHitFrame": 3
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,12",
    "startupFrame": "i10",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": 8
  },
  {
    "input": "1,2,1",
    "hitLevel": "h,h,m",
    "damage": "5,12,20",
    "startupFrame": "i26~27",
    "blockFrame": -12,
    "hitFrame": "+18a (+1)",
    "counterHitFrame": "Launch T!"
  },
  {
    "input": "1,3",
    "hitLevel": "h,l",
    "damage": "5,11",
    "startupFrame": "i21~22",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": -1
  },
  {
    "input": "1+3",
    "hitLevel": "h",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": 2,
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i12~13",
    "blockFrame": -12,
    "hitFrame": -2,
    "counterHitFrame": -2
  },
  {
    "input": "2,1",
    "hitLevel": "h,h",
    "damage": "10,12",
    "startupFrame": "i16",
    "blockFrame": "-6 / -4 PRF",
    "hitFrame": "+5 / +7 PRF",
    "counterHitFrame": "+5 / +7 PRF"
  },
  {
    "input": "2,2",
    "hitLevel": "h,mm",
    "damage": "10,10,5",
    "startupFrame": "i17~18,i7",
    "blockFrame": -12,
    "hitFrame": -2,
    "counterHitFrame": -2
  },
  {
    "input": "2,2,2",
    "hitLevel": "h,mm,h",
    "damage": "10,10,5,12",
    "startupFrame": "i22",
    "blockFrame": -3,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "2+4",
    "hitLevel": "h",
    "damage": 35,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": 3,
    "hitLevel": "h",
    "damage": 11,
    "startupFrame": "i12~13",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": 2
  },
  {
    "input": "3,1+2",
    "hitLevel": "h,hh",
    "damage": "11,9,10",
    "startupFrame": "i19~20,i8~9",
    "blockFrame": -9,
    "hitFrame": 5,
    "counterHitFrame": 5
  },
  {
    "input": 4,
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i13~14",
    "blockFrame": -9,
    "hitFrame": 1,
    "counterHitFrame": 1
  },
  {
    "input": "4,3",
    "hitLevel": "h,m",
    "damage": "15,17",
    "startupFrame": "i23~24",
    "blockFrame": -10,
    "hitFrame": 5,
    "counterHitFrame": 5
  },
  {
    "input": "4,3,2",
    "hitLevel": "h,m,m",
    "damage": "15,17,25",
    "startupFrame": "i25~26",
    "blockFrame": -13,
    "hitFrame": "+34d (+13)",
    "counterHitFrame": "+34d (+13)"
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": -8,
    "hitFrame": 2,
    "counterHitFrame": "Launch (+46)"
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
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "i30",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "i30",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i13~14",
    "blockFrame": -11,
    "hitFrame": 5,
    "counterHitFrame": 5
  },
  {
    "input": "f+2,2",
    "hitLevel": "h,h",
    "damage": "10,10",
    "startupFrame": ",i11",
    "blockFrame": -15,
    "hitFrame": -4,
    "counterHitFrame": -4
  },
  {
    "input": "f+2,2,1",
    "hitLevel": "h,h,m",
    "damage": "10,10,12",
    "startupFrame": ",i13~14",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": 0
  },
  {
    "input": "f+2,2,1,1",
    "hitLevel": "h,h,m,m",
    "damage": "10,10,12,25",
    "startupFrame": ",i20~21",
    "blockFrame": -15,
    "hitFrame": "+20 (+15)",
    "counterHitFrame": "+20 (+15)"
  },
  {
    "input": "f+2,2,2",
    "hitLevel": "h,h,hmm",
    "damage": "10,10,7,5,20",
    "startupFrame": ",i14,i12~13,i7~8",
    "blockFrame": -13,
    "hitFrame": "+20a",
    "counterHitFrame": "+20a"
  },
  {
    "input": "f+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "i20",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+3",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "i20",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": -10,
    "hitFrame": 0,
    "counterHitFrame": 0
  },
  {
    "input": "f+4,1",
    "hitLevel": "m,h",
    "damage": "15,21",
    "startupFrame": ",i23~24",
    "blockFrame": -4,
    "hitFrame": "+18a (+9) / HE",
    "counterHitFrame": "+18a (+9) / HE"
  },
  {
    "input": "f+4,2",
    "hitLevel": "m,m",
    "damage": "15,20",
    "startupFrame": ",i26~27",
    "blockFrame": -12,
    "hitFrame": 5,
    "counterHitFrame": "+7a / +5"
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 35,
    "startupFrame": "i24~25",
    "blockFrame": -9,
    "hitFrame": "KND / HE",
    "counterHitFrame": "KND / HE"
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13~14",
    "blockFrame": -2,
    "hitFrame": 4,
    "counterHitFrame": 4
  },
  {
    "input": "df+1,1",
    "hitLevel": "m,hh",
    "damage": "10,7,7",
    "startupFrame": "i20",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": 7
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 14,
    "startupFrame": "i15~16",
    "blockFrame": -14,
    "hitFrame": "+31a (+21)",
    "counterHitFrame": "+31a (+21)"
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": 2
  },
  {
    "input": "df+3,4",
    "hitLevel": "m,m",
    "damage": "10,14",
    "startupFrame": "i21",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": 2
  },
  {
    "input": "df+3,4,2",
    "hitLevel": "m,m,sm",
    "damage": "10,14,23",
    "startupFrame": "i32~34",
    "blockFrame": -9,
    "hitFrame": "+17a (+10)",
    "counterHitFrame": "+35a"
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i13~14",
    "blockFrame": -9,
    "hitFrame": 5,
    "counterHitFrame": 5
  },
  {
    "input": "df+4,2",
    "hitLevel": "m,h",
    "damage": "15,16",
    "startupFrame": "i22",
    "blockFrame": -3,
    "hitFrame": "+4 (W! +12)",
    "counterHitFrame": "+4 (W! +12)"
  },
  {
    "input": "df+3+4",
    "hitLevel": "m",
    "damage": 32,
    "startupFrame": "i14~15",
    "blockFrame": -17,
    "hitFrame": "+16 (+11)",
    "counterHitFrame": "+16 (+11)"
  },
  {
    "input": "d+1",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": -6
  },
  {
    "input": "d+1,1",
    "hitLevel": "l,h",
    "damage": "7,15",
    "startupFrame": ",i18",
    "blockFrame": -7,
    "hitFrame": 6,
    "counterHitFrame": 6
  },
  {
    "input": "d+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i18",
    "blockFrame": 0,
    "hitFrame": "+4 / HE",
    "counterHitFrame": 4
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 11,
    "startupFrame": "i18~19",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": -2
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i16",
    "blockFrame": -14,
    "hitFrame": -3,
    "counterHitFrame": "+0 (th)"
  },
  {
    "input": "d+1+2",
    "hitLevel": "sm",
    "damage": 21,
    "startupFrame": "i19~21",
    "blockFrame": -9,
    "hitFrame": "+17 (+10)",
    "counterHitFrame": "+35a"
  },
  {
    "input": "db+1",
    "hitLevel": "m",
    "damage": 9,
    "startupFrame": "i14~15",
    "blockFrame": -9,
    "hitFrame": -2,
    "counterHitFrame": -2
  },
  {
    "input": "db+1,1",
    "hitLevel": "m,m",
    "damage": "9,9",
    "startupFrame": ",i21~22",
    "blockFrame": "-7 / -5 PRF",
    "hitFrame": "+2 / +4 PRF",
    "counterHitFrame": "+2 / +4 PRF"
  },
  {
    "input": "db+2",
    "hitLevel": "s.l",
    "damage": 8,
    "startupFrame": "i11",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": 7
  },
  {
    "input": "db+3",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i19~20",
    "blockFrame": -8,
    "hitFrame": "KND (-18)",
    "counterHitFrame": "Launch T!"
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i20~21",
    "blockFrame": -26,
    "hitFrame": "+4c",
    "counterHitFrame": "+49a"
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i14",
    "blockFrame": "-13 / -5 PRF",
    "hitFrame": "-3 / +5 PRF",
    "counterHitFrame": "-3 / +5 PRF"
  },
  {
    "input": "b+1,2",
    "hitLevel": "m,h,th",
    "damage": "11,16(15)",
    "startupFrame": ",i20",
    "blockFrame": -8,
    "hitFrame": 0,
    "counterHitFrame": 0
  },
  {
    "input": "b+2",
    "hitLevel": "h",
    "damage": 5,
    "startupFrame": "i12",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": 14
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i17",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": 4
  },
  {
    "input": "b+3,1",
    "hitLevel": "m,m",
    "damage": "15,25",
    "startupFrame": ",i25~26",
    "blockFrame": -13,
    "hitFrame": "+21a (+16)",
    "counterHitFrame": "+21a (+16)"
  },
  {
    "input": "b+4",
    "hitLevel": "h",
    "damage": 20,
    "startupFrame": "i18~19",
    "blockFrame": -2,
    "hitFrame": "+13g",
    "counterHitFrame": "+14c"
  },
  {
    "input": "b+1+2",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i19~20",
    "blockFrame": -9,
    "hitFrame": "+42 (-16) / HE",
    "counterHitFrame": "+42 (-16) / HE"
  },
  {
    "input": "b+1+4",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i26~27",
    "blockFrame": -21,
    "hitFrame": "+37 (+6)",
    "counterHitFrame": "+37 (+6)"
  },
  {
    "input": "u+1+2",
    "hitLevel": "m",
    "damage": 37,
    "startupFrame": "i31~32",
    "blockFrame": -20,
    "hitFrame": "+1a",
    "counterHitFrame": "+1a"
  },
  {
    "input": "uf+1",
    "hitLevel": "m",
    "damage": 9,
    "startupFrame": "i13",
    "blockFrame": -9,
    "hitFrame": 4,
    "counterHitFrame": 4
  },
  {
    "input": "uf+1,1",
    "hitLevel": "m,m",
    "damage": "9,21",
    "startupFrame": ",i25~26",
    "blockFrame": "-14 / -10 IAI",
    "hitFrame": "+15 / +3 IAI",
    "counterHitFrame": "+15 / +3 IAI"
  },
  {
    "input": "uf+2",
    "hitLevel": "",
    "damage": 15,
    "startupFrame": "i19~20",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": 7
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i18~19",
    "blockFrame": -9,
    "hitFrame": 3,
    "counterHitFrame": "+36d"
  },
  {
    "input": "uf+4",
    "hitLevel": "m,sm",
    "damage": "12,16",
    "startupFrame": "i15~17",
    "blockFrame": -19,
    "hitFrame": "+73 (+57)",
    "counterHitFrame": "+73 (+57)"
  },
  {
    "input": "uf+1+2",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
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
    "input": "Back throw",
    "hitLevel": "h",
    "damage": 50,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": -3,
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "Right throw",
    "hitLevel": "h",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": -3,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "b,B+2+3",
    "hitLevel": "ub(m)",
    "damage": 50,
    "startupFrame": "i65~66",
    "blockFrame": "N/A",
    "hitFrame": "+2 (-8)",
    "counterHitFrame": "+2 (-8)"
  },
  {
    "input": "f,F+2",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i18~20",
    "blockFrame": -16,
    "hitFrame": "+33 (+23)",
    "counterHitFrame": "+33 (+23)"
  },
  {
    "input": "qcf+2",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i22",
    "blockFrame": -3,
    "hitFrame": 4,
    "counterHitFrame": "+4 (W! +12)"
  },
  {
    "input": "ub,b",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+2",
    "hitLevel": "m",
    "damage": 30,
    "startupFrame": "i16~17",
    "blockFrame": 2,
    "hitFrame": "+16 (+6)",
    "counterHitFrame": "Launch T!"
  },
  {
    "input": "ws1",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i15~16",
    "blockFrame": -16,
    "hitFrame": "+53a",
    "counterHitFrame": "+53a"
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i14~15",
    "blockFrame": -8,
    "hitFrame": 6,
    "counterHitFrame": "+35a (+25)"
  },
  {
    "input": "ws3",
    "hitLevel": "h",
    "damage": 16,
    "startupFrame": "i15~16",
    "blockFrame": -14,
    "hitFrame": 6,
    "counterHitFrame": 6
  },
  {
    "input": "ws3,2",
    "hitLevel": "h,sm",
    "damage": "16,23",
    "startupFrame": ",i30~32",
    "blockFrame": -9,
    "hitFrame": "+17 (+10)",
    "counterHitFrame": "(+35)"
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i11~12",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": 5
  },
  {
    "input": "ws1+2",
    "hitLevel": "mm",
    "damage": "10,17",
    "startupFrame": "i13~14,i9~10",
    "blockFrame": "-8 / -8 PRF",
    "hitFrame": "+8 / +8 PRF",
    "counterHitFrame": "+8 / +8 PRF"
  },
  {
    "input": "SS.1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i18~19",
    "blockFrame": -9,
    "hitFrame": "+15 (+5)",
    "counterHitFrame": "+15 (+5)"
  },
  {
    "input": "FC.1+2",
    "hitLevel": "lh",
    "damage": "10,10",
    "startupFrame": "i16,i10~11",
    "blockFrame": "-23, -13",
    "hitFrame": 0,
    "counterHitFrame": 0
  },
  {
    "input": "CH.db+4",
    "hitLevel": "l,th",
    "damage": "20,4",
    "startupFrame": "i20~21",
    "blockFrame": "",
    "hitFrame": "+49a",
    "counterHitFrame": ""
  },
  {
    "input": "CH.d+4",
    "hitLevel": "l,th",
    "damage": "12,18",
    "startupFrame": "i16",
    "blockFrame": "",
    "hitFrame": -3,
    "counterHitFrame": 0
  },
  {
    "input": "IAI.1",
    "hitLevel": "m",
    "damage": 9,
    "startupFrame": "i13~14",
    "blockFrame": -12,
    "hitFrame": 1,
    "counterHitFrame": 1
  },
  {
    "input": "IAI.1,1",
    "hitLevel": "m,m",
    "damage": "9,21",
    "startupFrame": ",i25~26",
    "blockFrame": "-14 / -11 IAI",
    "hitFrame": "+15g / +2 IAI",
    "counterHitFrame": "+15g / +2 IAI"
  },
  {
    "input": "IAI.1,2",
    "hitLevel": "m,m",
    "damage": "9,15",
    "startupFrame": ",i22~24",
    "blockFrame": -19,
    "hitFrame": "+25a (+10)",
    "counterHitFrame": "+25a (+10)"
  },
  {
    "input": "IAI.1,2,2",
    "hitLevel": "m,m,m",
    "damage": "9,15,16",
    "startupFrame": ",i23~24",
    "blockFrame": "-18c",
    "hitFrame": "+8a (-27)",
    "counterHitFrame": "+8a (-27)"
  },
  {
    "input": "IAI.1,1+2",
    "hitLevel": "m,h",
    "damage": "9,23",
    "startupFrame": ",i20~21",
    "blockFrame": 3,
    "hitFrame": "+20a (-6)",
    "counterHitFrame": "+20a (-6)"
  },
  {
    "input": "IAI.2",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i16~17",
    "blockFrame": -7,
    "hitFrame": "+15 (+5)",
    "counterHitFrame": "+15 (+5)"
  },
  {
    "input": "IAI.3",
    "hitLevel": "m,th(m)",
    "damage": "13 (25)",
    "startupFrame": "i17",
    "blockFrame": -14,
    "hitFrame": "+25 (+10)",
    "counterHitFrame": "+25 (+10)"
  },
  {
    "input": "IAI.4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i18~19",
    "blockFrame": -13,
    "hitFrame": 3,
    "counterHitFrame": 8
  },
  {
    "input": "IAI.4,2",
    "hitLevel": "l,h",
    "damage": "17,20",
    "startupFrame": ",i26~27",
    "blockFrame": -5,
    "hitFrame": "+26 (+0)",
    "counterHitFrame": "Launch"
  },
  {
    "input": "IAI.1+2",
    "hitLevel": "h",
    "damage": 30,
    "startupFrame": "i20~21",
    "blockFrame": 3,
    "hitFrame": "+20 (-6)",
    "counterHitFrame": "+20 (-6)"
  },
  {
    "input": "IAI.P.f",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i16~17",
    "blockFrame": "N/A",
    "hitFrame": "+60 (+44)",
    "counterHitFrame": ""
  },
  {
    "input": "IAI.b",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "IAI.d",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "IAI.d+2",
    "hitLevel": "m",
    "damage": 31,
    "startupFrame": "i23~24",
    "blockFrame": 4,
    "hitFrame": "-1 (-8)",
    "counterHitFrame": "-1 (-8)"
  },
  {
    "input": "IAI.d+1+2",
    "hitLevel": "ll",
    "damage": "10,20",
    "startupFrame": "i20~21,i14~15",
    "blockFrame": -29,
    "hitFrame": -3,
    "counterHitFrame": -3
  },
  {
    "input": "IAI.f",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "PRF.1",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i19~20",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": "+14g"
  },
  {
    "input": "PRF.2",
    "hitLevel": "m",
    "damage": 9,
    "startupFrame": "i12~13",
    "blockFrame": -8,
    "hitFrame": 1,
    "counterHitFrame": 1
  },
  {
    "input": "PRF.2,2",
    "hitLevel": "m,m",
    "damage": "9,13",
    "startupFrame": ",i13~14",
    "blockFrame": "-4 IAI",
    "hitFrame": "+5 IAI",
    "counterHitFrame": "+5 IAI"
  },
  {
    "input": "PRF.2,2,1",
    "hitLevel": "m,m,h",
    "damage": "9,13,20",
    "startupFrame": ",i12~13",
    "blockFrame": -1,
    "hitFrame": 12,
    "counterHitFrame": "+55a"
  },
  {
    "input": "PRF.2,2,1+2",
    "hitLevel": "m,m,m",
    "damage": "9,13,31",
    "startupFrame": ",i12",
    "blockFrame": -13,
    "hitFrame": "+7d",
    "counterHitFrame": "+7d"
  },
  {
    "input": "PRF.3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i15~17",
    "blockFrame": -8,
    "hitFrame": "+41 (-17)",
    "counterHitFrame": "+41 (-17)"
  },
  {
    "input": "PRF.4",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i18~19",
    "blockFrame": -6,
    "hitFrame": "+13g",
    "counterHitFrame": "+14c"
  },
  {
    "input": "PRF.1+2",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i25~27",
    "blockFrame": 6,
    "hitFrame": "+14a",
    "counterHitFrame": "+14a"
  },
  {
    "input": "PRF.df",
    "hitLevel": "sp",
    "damage": "",
    "startupFrame": "i21",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  }
]

const victorFrameData = rawVictorFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default victorFrameData;