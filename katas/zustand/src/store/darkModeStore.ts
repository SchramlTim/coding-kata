// darkmode store
// TODO: Add a dark mode store

import { create } from "zustand"
import { DarkModeState } from "../types/darkmodeTypes"

export const useDarkModeStore = create<DarkModeState>((set) => ({
    darkMode: false,
    // set the state of the darkmode to the opposite of the current state i.e. from false to true when toggled
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}))
