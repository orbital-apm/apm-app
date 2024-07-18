import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BuilderState {
  keycaps: Keycaps | null;
  switches: Switches | null;
  kit: Kit | null;
}

export interface Keycaps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Switches {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Kit {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const initialState: BuilderState = {
  keycaps: null,
  switches: null,
  kit: null,
};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    setKeycaps: (state, action: PayloadAction<Keycaps>) => {
      state.keycaps = action.payload;
    },
    setSwitches: (state, action: PayloadAction<Switches>) => {
      state.switches = action.payload;
    },
    setKit: (state, action: PayloadAction<Kit>) => {
      state.kit = action.payload;
    },
  },
});

export const { setKeycaps, setSwitches, setKit } = builderSlice.actions;
export default builderSlice.reducer;