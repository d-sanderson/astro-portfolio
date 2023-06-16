
import { useEffect, useState } from 'react'
import './Switch.css'
import { toggle } from '../../stores/toggleStore'
import { useStore } from '@nanostores/react'

interface Props {
  handleClick: () => void
}


const Switch = ({ handleClick }: Props) => {
  const [checked, setChecked] = useState(true)
  const $toggle = useStore(toggle)
  useEffect(() => {
    if(checked) {
      document.body.classList.add('dark-mode')
      toggle.set(true)
      return
    }
    document.body.classList.remove('dark-mode')
    toggle.set(false)
  }, [checked])
  
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <span className="slider round"></span>
    </label>
  )
}

export default Switch