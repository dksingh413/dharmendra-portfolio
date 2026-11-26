'use client'

import { useCallback, useState } from 'react'
import { THEME_KEY } from './theme'

type State = Record<string, unknown>
// Page data is ported from the mockup and has many shapes; keep it open.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any
type Vals = Record<string, Any>
type Ctx = { state: State; setState: (patch: State) => void }

function toggleTheme() {
  const root = document.documentElement
  const light = root.classList.toggle('light')
  try {
    localStorage.setItem(THEME_KEY, light ? 'light' : 'dark')
  } catch {
    // Storage can be blocked (private mode); the toggle still works for this visit.
  }
}

/** Runs a page's `computeVals` with React state, the way the mockup ran it. */
export function usePageVals(compute: (this: Ctx) => Vals, initialState: object): Vals {
  const [state, setRaw] = useState<State>(initialState as State)
  const setState = useCallback((patch: State) => setRaw((s) => ({ ...s, ...patch })), [])
  const vals = compute.call({ state, setState })
  return { ...vals, toggleTheme, themeLabel: 'Switch colour theme' }
}
