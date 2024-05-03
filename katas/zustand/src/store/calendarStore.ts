// calendarStore.ts
import { create } from "zustand";
import { CalendarState } from "../types/calendarTypes";

/**
 * TODO: Add a calendar store
 * 1. Add a state that tracks the month, year, nextMonth and previous month
 * 2. Test the integration in the Calendar component
 */


export const useCalendarStore = create<CalendarState>((set) => ({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  nextMonth: () =>
      set((state) => {
          const newDate = new Date(state.year, state.month + 1);
          return { month: newDate.getMonth(), year: newDate.getFullYear() };
      }),
  prevMonth: () =>
      set((state) => {
          const newDate = new Date(state.year, state.month - 1);
          return { month: newDate.getMonth(), year: newDate.getFullYear() };
      }),
}));
