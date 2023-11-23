import { useState } from "react"

function useTheme() {
  
  const [isLight, setIsLight] = useState(true)

    function changeThemeMode() {
      if (isLight) {
        document.body.classList.add('dark')
        localStorage.setItem('Theme', `${!isLight}`)
        setIsLight(!isLight)
        return
      }
      document.body.classList.remove('dark')
      localStorage.setItem('Theme', `${!isLight}`)
      setIsLight(!isLight)
    }

  return [changeThemeMode, isLight]
}

export default useTheme