function useLightTheme() {
    
    function changeThemeMode() {
        document.body.classList.remove('dark')
        localStorage.setItem('Theme','')
    }

  return changeThemeMode
}

export default useLightTheme