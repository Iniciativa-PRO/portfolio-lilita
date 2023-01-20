const modeEnable = localStorage.getItem("lilita")
const root = document.querySelector("html");

document.querySelector("main").insertAdjacentHTML("afterbegin", `
    <button class="c-button__dark__mode light-mode" data-mode="dark">
        ${modeEnable == 'dark' 
            ? '<i class="fa-solid fa-sun"></i>' 
            : '<i class="fa-solid fa-moon"></i>' 
        }
    </button>
`)

function checkDarkMode(){
    if(modeEnable == "dark"){
        root.classList.add("dark")
    }
}

checkDarkMode()

function darkMode(){
    localStorage.setItem("lilita", "dark")
    btnDarkMode.innerHTML = '<i class="fa-solid fa-sun"></i>'
}

function lightMode(){
    localStorage.removeItem("lilita")
    btnDarkMode.innerHTML = '<i class="fa-solid fa-moon"></i>'
}

const btnDarkMode = document.querySelector('[data-mode="dark"]')

btnDarkMode.addEventListener('click', () => {
    root.classList.toggle("dark")

    if(root.classList.contains("dark")) {
        return darkMode()
    } 
    
    return  lightMode()
})

