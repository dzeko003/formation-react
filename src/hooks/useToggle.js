/**
 * 
 * @param {boolean} initial 
 * @returns 
 */

export function useToggle(initial = false){
    const [state , setState] = useState(initial)
    const toogle = () => setState(v => !v)
  
    return [state , toogle]
  }