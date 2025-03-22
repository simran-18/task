import React, { useEffect, useState } from 'react'

const useDebounce = (value,delay=2000) => {
  const [debounedValue,setDebouncedValue]=useState(value);
  useEffect(()=>
{
    const timeout=setTimeout(()=>
    {
      setDebouncedValue(value)
    },delay)
    return ()=> clearTimeout(timeout)
},[value,delay])
  return debounedValue;
}

export default useDebounce