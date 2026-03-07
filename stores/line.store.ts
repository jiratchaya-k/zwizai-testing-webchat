import { create } from 'zustand'

import { ILineInfo } from '@shared/interfaces/line.interface'

interface LineState {
    lineInfo: ILineInfo
    setLineInfo: (lineInfo: ILineInfo) => void
}

export const lineStore = create<LineState>((set) => ({
    lineInfo: null,
    setLineInfo: (lineInfo) => set({ lineInfo: lineInfo }),
}))
