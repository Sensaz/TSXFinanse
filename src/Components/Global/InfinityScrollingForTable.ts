import { useEffect, useRef, useState } from 'react'

const InfinityScrollingForTable = (arr: number[]) => {
  const [numberOfRows, setNumberOfRows] = useState(10)
  const [hasMore, setHasMore] = useState(false)
  const observer = useRef<IntersectionObserver | undefined>(undefined)
  let arrayForRender = [0]

  useEffect(() => {
    setHasMore(arr.length >= numberOfRows)
  }, [hasMore, numberOfRows, arr])

  useEffect(() => {
    setNumberOfRows(10)
  }, [arr])

  const lastArrayRowRef = (node: HTMLTableRowElement) => {
    observer.current?.disconnect()

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setNumberOfRows((prev) => prev + 10)
      }
    })

    if (node) observer.current.observe(node)
  }

  arrayForRender =
    arr.length >= numberOfRows
      ? Array.from({ length: numberOfRows }, (_, i: number) => i)
      : arr

  return {
    lastArrayRowRef,
    arrayForRender,
  }
}

export default InfinityScrollingForTable
