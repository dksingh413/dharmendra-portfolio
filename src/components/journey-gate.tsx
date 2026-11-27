'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent, type ReactNode } from 'react'

const KEY = 'journey-unlocked'
// Codes that open the film.
const CODES = ['dadimaa', 'Dadimaa']

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange)
  return () => window.removeEventListener('storage', onChange)
}
const readStored = () => {
  try {
    return sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

/** Asks for a personal code before the "My story" film is shown. */
export function JourneyGate({ children }: { children: ReactNode }) {
  const stored = useSyncExternalStore(subscribe, readStored, () => false)
  const [unlockedNow, setUnlockedNow] = useState(false)
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const open = stored || unlockedNow

  useEffect(() => {
    if (open) return
    const root = document.documentElement
    const prev = root.style.overflow
    root.style.overflow = 'hidden'
    inputRef.current?.focus()
    return () => {
      root.style.overflow = prev
    }
  }, [open])

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const value = new FormData(e.currentTarget).get('code')
    if (typeof value !== 'string' || !value.trim()) return
    if (CODES.includes(value.trim())) {
      try {
        sessionStorage.setItem(KEY, '1')
      } catch {
        // Storage blocked: the film still opens for this visit.
      }
      setUnlockedNow(true)
    } else {
      setError(true)
      inputRef.current?.select()
    }
  }

  return (
    <>
      <div className={open ? undefined : 'jg-locked'} aria-hidden={open ? undefined : true} inert={!open}>
        {children}
      </div>
      {open ? null : (
        <div className="jg" role="dialog" aria-modal="true" aria-labelledby="jg-title">
          <form className="jg-card" onSubmit={onSubmit}>
            <svg className="jg-diya" viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="56" r="44" fill="#F59E0B" opacity=".12" />
              <path className="jg-flame" d="M60 22 C70 38 72 50 60 60 C48 50 50 38 60 22Z" fill="#FFD58A" />
              <path d="M28 66 Q60 96 92 66 Z" fill="#B4532A" />
              <ellipse cx="60" cy="66" rx="32" ry="6" fill="#D97706" />
            </svg>
            <span className="jg-kicker">A PERSONAL STORY</span>
            <h2 id="jg-title" className="jg-title">This chapter is close to my heart.</h2>
            <p className="jg-text">Enter the code to open the film.</p>
            <label className="jg-label" htmlFor="jg-code">
              Code
            </label>
            <input
              ref={inputRef}
              id="jg-code"
              name="code"
              className={error ? 'jg-input jg-err' : 'jg-input'}
              type="password"
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              placeholder="Enter code"
              onChange={() => error && setError(false)}
              aria-invalid={error}
              aria-describedby={error ? 'jg-error' : undefined}
            />
            {error ? (
              <span id="jg-error" className="jg-errtext" role="alert">
                That&apos;s not it. Try again.
              </span>
            ) : null}
            <button type="submit" className="jg-btn">
              Open the film
            </button>
            <Link href="/" className="jg-back">
              ← Back to home
            </Link>
          </form>
        </div>
      )}
    </>
  )
}
