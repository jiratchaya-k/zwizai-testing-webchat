import { create } from 'zustand'

import { ILineInfo } from '@shared/interfaces/line.interface'

interface LineState {
    linInfo: ILineInfo
    setLineInfo: (lineInfo: ILineInfo) => void
}

export const lineStore = create<LineState>((set) => ({
    linInfo: null,
    setLineInfo: (lineInfo) => set({ linInfo: lineInfo }),
}))
