const rawHwoarangFrameData = [
  {
    "input": "2+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i16",
    "blockFrame": 1,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "H.RFS.d+4",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i20~21",
    "blockFrame": -23,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "H.RFS.d+4,3",
    "hitLevel": "l,h",
    "damage": "20,12",
    "startupFrame": "i25",
    "blockFrame": -9,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "H.RFS.d+4,3,4",
    "hitLevel": "l,h,h",
    "damage": "20,12,30",
    "startupFrame": "i27~28",
    "blockFrame": -9,
    "hitFrame": "+28a (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "H.RFS.f+4",
    "hitLevel": "h,h",
    "damage": "8,10",
    "startupFrame": "i8,i10",
    "blockFrame": 0,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "H.RFS.f+4,4",
    "hitLevel": "h,h,h",
    "damage": "8,10,9",
    "startupFrame": "i23",
    "blockFrame": -6,
    "hitFrame": "+75 (+59)",
    "counterHitFrame": ""
  },
  {
    "input": "H.2+3",
    "hitLevel": "m,m,h",
    "damage": "13,14,24(51)",
    "startupFrame": "i17~18, i18~19, i29",
    "blockFrame": 11,
    "hitFrame": 13,
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
    "damage": "5,8",
    "startupFrame": "i12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,3",
    "hitLevel": "h,h,l",
    "damage": "5,8,10",
    "startupFrame": "i21",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "1,1,3,3",
    "hitLevel": "h,h,l,h",
    "damage": "5,8,10,14",
    "startupFrame": "i20",
    "blockFrame": -14,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "1,2",
    "hitLevel": "h,h",
    "damage": "5,10",
    "startupFrame": "i10",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,f+3",
    "hitLevel": "h,h,m",
    "damage": "5,10,14",
    "startupFrame": "i21",
    "blockFrame": -8,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "1,2,f+4",
    "hitLevel": "h,h,h",
    "damage": "5,10,20",
    "startupFrame": "i21",
    "blockFrame": -8,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "2",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "2,f+3",
    "hitLevel": "h,m",
    "damage": "9,14",
    "startupFrame": "i21",
    "blockFrame": -8,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "2,f+4",
    "hitLevel": "h,h",
    "damage": "9,20",
    "startupFrame": "i24~25",
    "blockFrame": -2,
    "hitFrame": 35,
    "counterHitFrame": ""
  },
  {
    "input": "3",
    "hitLevel": "h",
    "damage": 15,
    "startupFrame": "i14",
    "blockFrame": -7,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "3,3",
    "hitLevel": "h,m",
    "damage": "15,12",
    "startupFrame": "i18",
    "blockFrame": -13,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "3,3,2",
    "hitLevel": "h,m,m",
    "damage": "15,12,12",
    "startupFrame": "i21~22",
    "blockFrame": -11,
    "hitFrame": "+1c",
    "counterHitFrame": ""
  },
  {
    "input": "3,3,3",
    "hitLevel": "h,m,m",
    "damage": "15,12,15",
    "startupFrame": "i21",
    "blockFrame": -14,
    "hitFrame": 32,
    "counterHitFrame": ""
  },
  {
    "input": "3,3,4",
    "hitLevel": "h,m,h",
    "damage": "15,12,15",
    "startupFrame": "i21~23",
    "blockFrame": 8,
    "hitFrame": 19,
    "counterHitFrame": ""
  },
  {
    "input": "3,3,f+4",
    "hitLevel": "h,m,h",
    "damage": "15,12,20",
    "startupFrame": "i21~27",
    "blockFrame": -1,
    "hitFrame": "+40 (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "3~4",
    "hitLevel": "m,m",
    "damage": "11,21",
    "startupFrame": "i22,i7",
    "blockFrame": -3,
    "hitFrame": "+26 (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "4",
    "hitLevel": "h",
    "damage": 14,
    "startupFrame": "i11~12",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "4,3",
    "hitLevel": "h,m",
    "damage": "14,16",
    "startupFrame": "i22",
    "blockFrame": -6,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "4,4",
    "hitLevel": "h,h",
    "damage": "14,13",
    "startupFrame": "i16",
    "blockFrame": -1,
    "hitFrame": 10,
    "counterHitFrame": ""
  },
  {
    "input": "4,4,3",
    "hitLevel": "h,h,m",
    "damage": "14,13,20",
    "startupFrame": "i25~31",
    "blockFrame": "-14c",
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "4,4,4",
    "hitLevel": "h,h,h",
    "damage": "14,13,17",
    "startupFrame": "i25~26",
    "blockFrame": -2,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "4,4,4,4",
    "hitLevel": "h,h,h,h",
    "damage": "14,13,17,20",
    "startupFrame": "i31~32",
    "blockFrame": 0,
    "hitFrame": "+36 (-22)",
    "counterHitFrame": ""
  },
  {
    "input": "1+2",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+2",
    "hitLevel": "",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": -2,
    "hitFrame": 9,
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
    "input": "f+3~3",
    "hitLevel": "m",
    "damage": 25,
    "startupFrame": "i20",
    "blockFrame": -16,
    "hitFrame": "+7 (-2)",
    "counterHitFrame": ""
  },
  {
    "input": "f+4",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i17~23",
    "blockFrame": "+7~8",
    "hitFrame": 18,
    "counterHitFrame": ""
  },
  {
    "input": "f+1+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i15",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "df+1",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i13~14",
    "blockFrame": -1,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+1,3",
    "hitLevel": "m,m",
    "damage": "10,15",
    "startupFrame": "i22~23",
    "blockFrame": -2,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "df+2",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -7,
    "hitFrame": "+34 (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "df+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i22~23",
    "blockFrame": -14,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "df+3,4",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i24~25",
    "blockFrame": -14,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "df+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i16~17",
    "blockFrame": -8,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "df+3+4",
    "hitLevel": "m,h,m",
    "damage": "7,4,17",
    "startupFrame": "i13,i14,i24~25",
    "blockFrame": -14,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "d+3",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i17",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "d+3,4",
    "hitLevel": "l,h",
    "damage": "7,10",
    "startupFrame": "i21~23",
    "blockFrame": 8,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "d+4",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i19",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "d+4,4",
    "hitLevel": "l,h",
    "damage": 722,
    "startupFrame": "i20",
    "blockFrame": -13,
    "hitFrame": "+69 (+53)",
    "counterHitFrame": ""
  },
  {
    "input": "db+3",
    "hitLevel": "l",
    "damage": 12,
    "startupFrame": "i19",
    "blockFrame": -13,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "db+4",
    "hitLevel": "l",
    "damage": 14,
    "startupFrame": "i16",
    "blockFrame": -12,
    "hitFrame": -8,
    "counterHitFrame": ""
  },
  {
    "input": "db+4,4",
    "hitLevel": "l,h",
    "damage": "14,21",
    "startupFrame": "i17~19",
    "blockFrame": 0,
    "hitFrame": 24,
    "counterHitFrame": ""
  },
  {
    "input": "db+3+4",
    "hitLevel": "ub(m)",
    "damage": 40,
    "startupFrame": "i61~63",
    "blockFrame": "",
    "hitFrame": 17,
    "counterHitFrame": ""
  },
  {
    "input": "b+1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "b+3",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i16~17",
    "blockFrame": -19,
    "hitFrame": "+35 (+25)",
    "counterHitFrame": ""
  },
  {
    "input": "b+4",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i13~14",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "ub+2",
    "hitLevel": "h",
    "damage": 18,
    "startupFrame": "i13~15",
    "blockFrame": -9,
    "hitFrame": 15,
    "counterHitFrame": ""
  },
  {
    "input": "ub+4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i17~20",
    "blockFrame": -8,
    "hitFrame": 10,
    "counterHitFrame": ""
  },
  {
    "input": "u+3",
    "hitLevel": "h",
    "damage": 25,
    "startupFrame": "i20",
    "blockFrame": 5,
    "hitFrame": "+44 (+38)",
    "counterHitFrame": ""
  },
  {
    "input": "u+4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i16~18",
    "blockFrame": 3,
    "hitFrame": 11,
    "counterHitFrame": ""
  },
  {
    "input": "u+3+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i25~26",
    "blockFrame": -7,
    "hitFrame": 24,
    "counterHitFrame": ""
  },
  {
    "input": "uf+2",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i26",
    "blockFrame": "+5c",
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "uf+3",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i28~29",
    "blockFrame": -6,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3,4",
    "hitLevel": "m,m",
    "damage": "11,12",
    "startupFrame": "i20~21",
    "blockFrame": 2,
    "hitFrame": 13,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3,4,3",
    "hitLevel": "m,m,m",
    "damage": "11,12,20",
    "startupFrame": "i27~28",
    "blockFrame": "-14c",
    "hitFrame": "0c",
    "counterHitFrame": ""
  },
  {
    "input": "uf+4",
    "hitLevel": "h",
    "damage": 12,
    "startupFrame": "i22~23",
    "blockFrame": -2,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,4",
    "hitLevel": "h,m",
    "damage": "12,12",
    "startupFrame": "i11~12",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "uf+4,4,4",
    "hitLevel": "h,m,l",
    "damage": "12,12,12",
    "startupFrame": "i9~10",
    "blockFrame": 1,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4",
    "hitLevel": "m,h",
    "damage": "10,8",
    "startupFrame": "i14,i9",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "uf+3+4,4",
    "hitLevel": "m,h,m",
    "damage": "10,8,13",
    "startupFrame": "i14~15",
    "blockFrame": -10,
    "hitFrame": 7,
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
    "input": "f,F+3",
    "hitLevel": "m",
    "damage": 24,
    "startupFrame": "i20~24",
    "blockFrame": "+6c",
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "f,F+4",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i17~18",
    "blockFrame": -7,
    "hitFrame": "+19 (+10)",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,d,df",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f,n,df:4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i16",
    "blockFrame": -8,
    "hitFrame": "+59 (+49)",
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
    "startupFrame": "i22~24",
    "blockFrame": 6,
    "hitFrame": 23,
    "counterHitFrame": ""
  },
  {
    "input": "f,f,F+4",
    "hitLevel": "h",
    "damage": 28,
    "startupFrame": "i18~19",
    "blockFrame": 5,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws2",
    "hitLevel": "m",
    "damage": 8,
    "startupFrame": "i15~16",
    "blockFrame": -7,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "ws2,3",
    "hitLevel": "m,h",
    "damage": "8,10",
    "startupFrame": "i23~25",
    "blockFrame": 3,
    "hitFrame": "+72 (+56)",
    "counterHitFrame": ""
  },
  {
    "input": "ws3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14~18",
    "blockFrame": -12,
    "hitFrame": 22,
    "counterHitFrame": ""
  },
  {
    "input": "ws4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i11~12",
    "blockFrame": -3,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "ws4,4",
    "hitLevel": "m,m",
    "damage": "12,16",
    "startupFrame": "i15~19",
    "blockFrame": -5,
    "hitFrame": "+4c",
    "counterHitFrame": ""
  },
  {
    "input": "ws3+4",
    "hitLevel": "m",
    "damage": 16,
    "startupFrame": "i20~21",
    "blockFrame": -9,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "ws3+4,3",
    "hitLevel": "m,m",
    "damage": "16,20",
    "startupFrame": "i21~26",
    "blockFrame": -6,
    "hitFrame": "+5c",
    "counterHitFrame": ""
  },
  {
    "input": "SS.3",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i18~19",
    "blockFrame": -12,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "SS.3,3",
    "hitLevel": "m,h",
    "damage": "13,16",
    "startupFrame": "i9~10",
    "blockFrame": 3,
    "hitFrame": 14,
    "counterHitFrame": "Launch"
  },
  {
    "input": "SS.4",
    "hitLevel": "l",
    "damage": 18,
    "startupFrame": "i19~20",
    "blockFrame": -13,
    "hitFrame": "+5c",
    "counterHitFrame": "Launch"
  },
  {
    "input": "BT.3",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14~16",
    "blockFrame": -13,
    "hitFrame": "+38 (+28)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "i14~16",
    "blockFrame": -13,
    "hitFrame": "+40 (+30)",
    "counterHitFrame": ""
  },
  {
    "input": "BT.d+3",
    "hitLevel": "l",
    "damage": 20,
    "startupFrame": "i18~19",
    "blockFrame": -13,
    "hitFrame": -2,
    "counterHitFrame": ""
  },
  {
    "input": "CD.3",
    "hitLevel": "m",
    "damage": 27,
    "startupFrame": "i18~19",
    "blockFrame": 4,
    "hitFrame": "+25 (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "CD.4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i16",
    "blockFrame": -18,
    "hitFrame": "+53 (+43)",
    "counterHitFrame": ""
  },
  {
    "input": "LFS.1",
    "hitLevel": "",
    "damage": 6,
    "startupFrame": "i13",
    "blockFrame": 5,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.2",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.3",
    "hitLevel": "m",
    "damage": 10,
    "startupFrame": "i14",
    "blockFrame": -13,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.3,2",
    "hitLevel": "m,m",
    "damage": "10,20",
    "startupFrame": "i21~22",
    "blockFrame": -11,
    "hitFrame": "+1c",
    "counterHitFrame": ""
  },
  {
    "input": "LFS.3,3",
    "hitLevel": "m,m",
    "damage": "10,15",
    "startupFrame": "i21",
    "blockFrame": -14,
    "hitFrame": "+32 (+24)",
    "counterHitFrame": ""
  },
  {
    "input": "LFS.3,4",
    "hitLevel": "m,h",
    "damage": "10,15",
    "startupFrame": "i21~23",
    "blockFrame": 8,
    "hitFrame": 19,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.3,f+4",
    "hitLevel": "m,h",
    "damage": "10,20",
    "startupFrame": "i21~27",
    "blockFrame": -1,
    "hitFrame": "+40 (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "LFS.4",
    "hitLevel": "h",
    "damage": 24,
    "startupFrame": "i14~16",
    "blockFrame": 4,
    "hitFrame": "+27 (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "LFS.4~3",
    "hitLevel": "h,h",
    "damage": "17,26",
    "startupFrame": "i15~16",
    "blockFrame": -2,
    "hitFrame": "+24 (+14)",
    "counterHitFrame": ""
  },
  {
    "input": "LFS.1+4",
    "hitLevel": "ub(m)",
    "damage": 80,
    "startupFrame": "i66~69",
    "blockFrame": -1,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "LFS.b+1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i15",
    "blockFrame": -14,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.b+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20~22",
    "blockFrame": -12,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.b+4",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16~17",
    "blockFrame": -8,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.b+4,3",
    "hitLevel": "m,h",
    "damage": "15,20",
    "startupFrame": "i16~19",
    "blockFrame": 0,
    "hitFrame": "+20 (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "LFS.df+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i22~23",
    "blockFrame": -14,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.df+3,4",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i24~25",
    "blockFrame": -12,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.d+3",
    "hitLevel": "l",
    "damage": 7,
    "startupFrame": "i16",
    "blockFrame": -17,
    "hitFrame": -6,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.d+3,4",
    "hitLevel": "l,h",
    "damage": "7,10",
    "startupFrame": "i21~23",
    "blockFrame": 8,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.d+4",
    "hitLevel": "l",
    "damage": 17,
    "startupFrame": "i20~21",
    "blockFrame": -12,
    "hitFrame": 4,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.f+3",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i19~20",
    "blockFrame": 4,
    "hitFrame": 26,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.f+4",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i17~18",
    "blockFrame": -10,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.uf+3",
    "hitLevel": "m",
    "damage": 11,
    "startupFrame": "i28~29",
    "blockFrame": -6,
    "hitFrame": -7,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.uf+3,4",
    "hitLevel": "m,m",
    "damage": "11,12",
    "startupFrame": "i20~21",
    "blockFrame": 2,
    "hitFrame": 13,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.uf+3,4,3",
    "hitLevel": "m,m,m",
    "damage": "11,12,20",
    "startupFrame": "i27~28",
    "blockFrame": -14,
    "hitFrame": "+0c",
    "counterHitFrame": ""
  },
  {
    "input": "LFS.uf+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i19~20",
    "blockFrame": -14,
    "hitFrame": "+32 (+22)",
    "counterHitFrame": ""
  },
  {
    "input": "LFS.uf+3+4",
    "hitLevel": "m,h",
    "damage": "10,8",
    "startupFrame": "i14",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "LFS.uf+3+4,4",
    "hitLevel": "m,h,m",
    "damage": "10,8,13",
    "startupFrame": "i14~15",
    "blockFrame": -10,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.1",
    "hitLevel": "h",
    "damage": 10,
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.1,1",
    "hitLevel": "h,m",
    "damage": "10,12",
    "startupFrame": "i19",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.2",
    "hitLevel": "h",
    "damage": 6,
    "startupFrame": "i10",
    "blockFrame": 1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.2,1",
    "hitLevel": "h,h",
    "damage": "6,10",
    "startupFrame": "i10",
    "blockFrame": 0,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.2,1,1",
    "hitLevel": "h,h,m",
    "damage": "6,10,12",
    "startupFrame": "i19",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.2,3",
    "hitLevel": "h,h",
    "damage": "6,24",
    "startupFrame": "i19~20",
    "blockFrame": -9,
    "hitFrame": 20,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.2,4",
    "hitLevel": "h,h",
    "damage": "6,9",
    "startupFrame": "i12",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.2,4,3",
    "hitLevel": "h,h,m",
    "damage": "6,9,20",
    "startupFrame": "i25~31",
    "blockFrame": "-14c",
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.2,4,4",
    "hitLevel": "h,h,h",
    "damage": "6,9,23",
    "startupFrame": "i18~19",
    "blockFrame": -5,
    "hitFrame": 41,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.3",
    "hitLevel": "m",
    "damage": 13,
    "startupFrame": "i16",
    "blockFrame": -4,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.3,4",
    "hitLevel": "m,h",
    "damage": "13,16",
    "startupFrame": "i27~28",
    "blockFrame": 10,
    "hitFrame": 21,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.3~4",
    "hitLevel": "h",
    "damage": 27,
    "startupFrame": "i27~30",
    "blockFrame": 5,
    "hitFrame": 47,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.4",
    "hitLevel": "h",
    "damage": 9,
    "startupFrame": "i12",
    "blockFrame": -8,
    "hitFrame": 3,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.4,3",
    "hitLevel": "h,m",
    "damage": "9,20",
    "startupFrame": "i25~31",
    "blockFrame": "-14c",
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.4,4",
    "hitLevel": "h,h",
    "damage": "9,23",
    "startupFrame": "i18~19",
    "blockFrame": -5,
    "hitFrame": 41,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "RFF.b+2",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i16~17",
    "blockFrame": 4,
    "hitFrame": "+6c",
    "counterHitFrame": ""
  },
  {
    "input": "RFF.b+3",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i13~14",
    "blockFrame": -10,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.b+4",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i18~19",
    "blockFrame": -9,
    "hitFrame": 12,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.df+3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i22~24",
    "blockFrame": 1,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.df+4",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i13",
    "blockFrame": -7,
    "hitFrame": 1,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.df+2+3",
    "hitLevel": "m",
    "damage": 12,
    "startupFrame": "i22~23",
    "blockFrame": -14,
    "hitFrame": -4,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.df+2+3,4",
    "hitLevel": "m,m",
    "damage": "12,20",
    "startupFrame": "i24~25",
    "blockFrame": -12,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.d+3",
    "hitLevel": "l",
    "damage": 10,
    "startupFrame": "i18",
    "blockFrame": -11,
    "hitFrame": 0,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.d+3,4",
    "hitLevel": "l,h",
    "damage": "10,10",
    "startupFrame": "i21~23",
    "blockFrame": 8,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.d+3+4",
    "hitLevel": "l",
    "damage": 19,
    "startupFrame": "i19",
    "blockFrame": -11,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.f,F+3",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i22~25",
    "blockFrame": -7,
    "hitFrame": 19,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.f+1",
    "hitLevel": "h",
    "damage": 5,
    "startupFrame": "i10",
    "blockFrame": 1,
    "hitFrame": 8,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.f+1,2",
    "hitLevel": "h,h",
    "damage": "5,10",
    "startupFrame": "i10",
    "blockFrame": -3,
    "hitFrame": 6,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.f+3",
    "hitLevel": "h",
    "damage": 21,
    "startupFrame": "i14~17",
    "blockFrame": 6,
    "hitFrame": 17,
    "counterHitFrame": ""
  },
  {
    "input": "RFF.f+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "RFF.f+4~4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i18~20",
    "blockFrame": -13,
    "hitFrame": "+41 (+31)",
    "counterHitFrame": ""
  },
  {
    "input": "RFS.1",
    "hitLevel": "m",
    "damage": 15,
    "startupFrame": "i16",
    "blockFrame": -2,
    "hitFrame": 9,
    "counterHitFrame": ""
  },
  {
    "input": "RFS.2",
    "hitLevel": "h",
    "damage": 6,
    "startupFrame": "i13",
    "blockFrame": 5,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "RFS.3",
    "hitLevel": "h",
    "damage": 24,
    "startupFrame": "i14~16",
    "blockFrame": 4,
    "hitFrame": "+27 (+18)",
    "counterHitFrame": ""
  },
  {
    "input": "RFS.3~4",
    "hitLevel": "m,m",
    "damage": "11,21",
    "startupFrame": "i16",
    "blockFrame": -3,
    "hitFrame": "+26 (+16)",
    "counterHitFrame": ""
  },
  {
    "input": "RFS.4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i14",
    "blockFrame": -13,
    "hitFrame": "+21 (+11)",
    "counterHitFrame": ""
  },
  {
    "input": "RFS.3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "RFS.b+3",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "i16~17",
    "blockFrame": -9,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "RFS.b+4",
    "hitLevel": "m",
    "damage": 23,
    "startupFrame": "i20~22",
    "blockFrame": -12,
    "hitFrame": 14,
    "counterHitFrame": ""
  },
  {
    "input": "RFS.df+4",
    "hitLevel": "m",
    "damage": 17,
    "startupFrame": "i17~19",
    "blockFrame": 1,
    "hitFrame": "+8c",
    "counterHitFrame": ""
  },
  {
    "input": "RFS.d+3",
    "hitLevel": "l",
    "damage": 13,
    "startupFrame": "i15",
    "blockFrame": -13,
    "hitFrame": -5,
    "counterHitFrame": ""
  },
  {
    "input": "RFS.d+3,3",
    "hitLevel": "l,h",
    "damage": "13,28",
    "startupFrame": "i25~27",
    "blockFrame": -2,
    "hitFrame": "+34 (+8)",
    "counterHitFrame": ""
  },
  {
    "input": "RFS.d+4",
    "hitLevel": "l",
    "damage": 15,
    "startupFrame": "i20~21",
    "blockFrame": -23,
    "hitFrame": 7,
    "counterHitFrame": ""
  },
  {
    "input": "RFS.d+4,3",
    "hitLevel": "l,h",
    "damage": "15,12",
    "startupFrame": "i25",
    "blockFrame": -9,
    "hitFrame": -1,
    "counterHitFrame": ""
  },
  {
    "input": "RFS.d+4,3,4",
    "hitLevel": "l,h,h",
    "damage": "15,12,20",
    "startupFrame": "i27~28",
    "blockFrame": -9,
    "hitFrame": "+28 (+2)",
    "counterHitFrame": ""
  },
  {
    "input": "RFS.f+3",
    "hitLevel": "m",
    "damage": 18,
    "startupFrame": "i20~21",
    "blockFrame": -10,
    "hitFrame": 5,
    "counterHitFrame": ""
  },
  {
    "input": "RFS.f+4",
    "hitLevel": "h,h",
    "damage": "8,8",
    "startupFrame": "i8",
    "blockFrame": 0,
    "hitFrame": 2,
    "counterHitFrame": ""
  },
  {
    "input": "RFS.f+4,4",
    "hitLevel": "h,h,h",
    "damage": "8,8,9",
    "startupFrame": "i23",
    "blockFrame": -6,
    "hitFrame": "+75 (+59)",
    "counterHitFrame": ""
  },
  {
    "input": "RFS.uf+3",
    "hitLevel": "m",
    "damage": 22,
    "startupFrame": "i24~27",
    "blockFrame": -7,
    "hitFrame": 19,
    "counterHitFrame": ""
  },
  {
    "input": "RFS.uf+4",
    "hitLevel": "m",
    "damage": 20,
    "startupFrame": "i17~18",
    "blockFrame": -13,
    "hitFrame": "+30 (+20)",
    "counterHitFrame": ""
  },
  {
    "input": "RFS.u+4",
    "hitLevel": "h",
    "damage": 17,
    "startupFrame": "i25~26",
    "blockFrame": -2,
    "hitFrame": 8,
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
    "damage": 25,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "2+4,B",
    "hitLevel": "th(h)",
    "damage": 40,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "AIR.ub+3",
    "hitLevel": "th(m)",
    "damage": 26,
    "startupFrame": "i15~16",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Back throw",
    "hitLevel": "th(h)",
    "damage": 60,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Left throw",
    "hitLevel": "th(h)",
    "damage": 45,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "RFF.1+3",
    "hitLevel": "th(h)",
    "damage": 45,
    "startupFrame": "i12",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "Right throw",
    "hitLevel": "th(h)",
    "damage": 44,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "d,db,b+3",
    "hitLevel": "th(h)",
    "damage": 45,
    "startupFrame": "i12~14",
    "blockFrame": "",
    "hitFrame": "",
    "counterHitFrame": ""
  },
  {
    "input": "f+2+3",
    "hitLevel": "th(h)",
    "damage": 35,
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

const hwoarangFrameData = rawHwoarangFrameData.map(item => ({
  move: item.input,
  hitLevel: item.hitLevel,
  damage: Array.isArray(item.damage) ? item.damage : [item.damage],
  startupFrame: item.startupFrame,
  blockFrame: item.blockFrame,
  hitFrame: item.hitFrame,
  counterHitFrame: item.counterHitFrame ? item.counterHitFrame : '',
  additionalNotes: '', // This will be added by the user
}));

export default hwoarangFrameData;