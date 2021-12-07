import React, {useRef} from 'react'

function useDebounce(func,delay){
    const timeoutRef = useRef(null)
    function debounceFn(...args){
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(func.bind(null,...args), delay);
    }
    return debounceFn
}

export default useDebounce