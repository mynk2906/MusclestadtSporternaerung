let cross= ()=>{

    return `

    <div id="input-in">
        <input class=" mr-sm-2" type="text" placeholder="Search..." aria-label="Search">
        </div>
        <div>
        <i class="fas fa-times" id="cross"></i>
    </div>
    `
}

let homeNsearch = () =>{
    return `

    <ul class="navbar-nav mr-auto" id="home">
        <li class="nav-item active">
        <a class="nav-link" href="#home">Home </a>
        </li>
    </ul>
    <form class="">

        <div id="navbardiv">
        <i class="fas fa-search" id="search"></i>
        </div>
        
    </form>

    `
}
export {cross,homeNsearch};