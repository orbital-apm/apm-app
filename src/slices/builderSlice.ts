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
  kit: null
};

export type PartType = 'keycaps' | 'switches' | 'kit';

interface SetPartPayload {
  type: PartType;
  data: Keycaps | Switches | Kit;
}

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    setPart: (state, action: PayloadAction<SetPartPayload>) => {
      const { type, data } = action.payload;
      switch (type) {
        case 'keycaps':
          state.keycaps = data as Keycaps;
          break;
        case 'switches':
          state.switches = data as Switches;
          break;
        case 'kit':
          state.kit = data as Kit;
          break;
      }
    }
  }
});

export const { setPart } = builderSlice.actions;
export default builderSlice.reducer;
