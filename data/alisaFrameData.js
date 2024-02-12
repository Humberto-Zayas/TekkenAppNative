const alisaFrameData = [
  {
    "input": "1",
    "hitLevel": "h",
    "damage": 6,
    "startupFrame": 10,
    "blockFrame": -2,
    "hitFrame": 9,
    "notes": "Combo from 1st CH",
    "linksTo": ["f+1"]
  },
  {
    "input": "1,1",
    "hitLevel": "h,m",
    "damage": [6, 15],
    "startupFrame": "",
    "blockFrame": -7,
    "hitFrame": 4,
    "notes": "Combo from 1st CH",
    "linksTo": ["f+1"]
  },
  {
    "input": "1+2",
    "hitLevel": "m",
    "damage": 21,
    "startupFrame": "",
    "blockFrame": -9,
    "hitFrame": "KND",
    "notes": "KND",
    "linksTo": []
  },
  {
    "input": "1,2",
    "hitLevel": "h,m",
    "damage": [6, 9],
    "startupFrame": "",
    "blockFrame": -8,
    "hitFrame": "3a",
    "notes": "Combo from 1st CH",
    "linksTo": ["f+4"]
  },
  {
    "input": "1,2,3",
    "hitLevel": "h,m,m",
    "damage": [6, 9, 24],
    "startupFrame": "",
    "blockFrame": -2,
    "hitFrame": "KND",
    "notes": "Chip on block. Link to f+4. Can interrupt with up to i15 if previous hit is blocked",
    "linksTo": ["f+4"]
  },
  {
    "input": "1+2+3+4",
    "hitLevel": "",
    "damage": "",
    "startupFrame": "",
    "blockFrame": "",
    "hitFrame": "",
    "notes": "Cannot block for 5 seconds. CH state for 5 seconds",
    "linksTo": []
  }
]

export default alisaFrameData;
