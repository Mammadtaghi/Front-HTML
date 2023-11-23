import useTheme from "./useTheme"

function useLocalTheme() {

    return localStorage.getItem("Theme") ? null : useTheme()
    
}

export default useLocalTheme