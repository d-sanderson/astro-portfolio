
import { useEffect, useState } from 'react'
import './Switch.css'

interface Props {
  handleClick: () => void
}


const Switch = ({ handleClick }: Props) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if(checked) {
      document.body.classList.add('dark-mode')
      return
    }
    document.body.classList.remove('dark-mode')
  }, [checked])
  
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <span className="slider round"></span>
    </label>
  )
}

export default Switch