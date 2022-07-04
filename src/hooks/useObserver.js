import { useState } from 'react'

export const useObserver = () => {
  const [entryObserver, setEntryObserver] = useState(null)
  const observer = new IntersectionObserver(entries => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      setEntryObserver(true)
    }
  })
  return [entryObserver, observer]
}
