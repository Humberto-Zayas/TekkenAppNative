export const heatEngagersData = [
  { 
    id: '1',
    move: 'df1+2',
    description: 'Engages opponent with powerful attacks',
    hitLevel: 'Mid',
    damage: '30',
    startUpFrame: '15',
    blockFrame: '-10',
    hitFrame: '+5',
    counterHitFrame: 'KND',
    notes: 'High crushing move',
  },
  { 
    id: '2',
    move: 'ff+3',
    description: 'Engages opponent with powerful attacks',
    hitLevel: 'Mid',
    damage: '28',
    startUpFrame: '17',
    blockFrame: '-12',
    hitFrame: '+2',
    counterHitFrame: 'STN',
    notes: 'Safe on block',
  },
  // Add more rows as needed
];

export const punishersData = [
  { 
    id: '1',
    move: '1,1,2',
    description: '10F standing punish',
    hitLevel: 'High, High, Mid',
    damage: '24',
    startUpFrame: '10',
    blockFrame: '-12',
    hitFrame: '+4',
    counterHitFrame: 'KND',
    notes: 'Guaranteed follow-up on counter hit',
  },
  { 
    id: '2',
    move: '2,2,2,2',
    description: '12F standing punish',
    hitLevel: 'High, High, High, High',
    damage: '32',
    startUpFrame: '12',
    blockFrame: '-15',
    hitFrame: '+8',
    counterHitFrame: 'W!',
    notes: 'Wall splat',
  },
  // Add more rows as needed
];

export const moveFlowchartData = [
  { 
    id: '1',
    move: 'f+2,1',
    description: 'Initiates a forward attack',
    hitLevel: 'Mid, High',
    damage: '26',
    startUpFrame: '14',
    blockFrame: '-9',
    hitFrame: '+7',
    counterHitFrame: 'KND',
    notes: 'Natural combo',
  },
  { 
    id: '2',
    move: 'db1+2',
    description: 'Initiates a forward attack',
    hitLevel: 'Mid',
    damage: '35',
    startUpFrame: '20',
    blockFrame: '-14',
    hitFrame: '+5',
    counterHitFrame: 'KND',
    notes: 'High damage launcher',
  },
  // Add more rows as needed
];
