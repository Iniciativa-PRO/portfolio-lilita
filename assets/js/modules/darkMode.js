document.querySelector("main").insertAdjacentHTML("afterbegin", `
    <button class="c-button__dark__mode dark-mode" data-mode="dark">
    </button>
`)

const btnDarkMode = document.querySelector('[data-mode="dark"]')
const root = document.querySelector("html");

function checkDarkMode(){
    const modeEnable = localStorage.getItem("lilita")

    if(modeEnable == "dark"){
        root.classList.add("dark")
        btnDarkMode.classList.add('light-mode')
        btnDarkMode.classList.remove('dark-mode')
    }
}

function darkMode(){
    btnDarkMode.classList.add('light-mode')
    btnDarkMode.classList.remove('dark-mode')
    localStorage.setItem("lilita", "dark")
}

function lightMode(){
    btnDarkMode.classList.add('dark-mode')
    btnDarkMode.classList.remove('light-mode')
    localStorage.removeItem("lilita")
}

export function darkModeTheme(){
    checkDarkMode()

    btnDarkMode.addEventListener('click', () => {
        root.classList.toggle("dark")
    
        if(root.classList.contains("dark")) {
            darkMode()
        } else {
            lightMode()
        }
    })
    
    
}
