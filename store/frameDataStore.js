import { create } from 'zustand';

const useFrameDataStore = create((set) => ({
  frameData: [], // Initial state

  // Action to set frame data
  setFrameData: (data) =>
    set(() => ({
      frameData: data,
    })),

  // Action to clear frame data
  clearFrameData: () =>
    set(() => ({
      frameData: [],
    })),
}));

export default useFrameDataStore;
