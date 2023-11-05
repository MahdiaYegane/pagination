    const listItems = [
    "images/girl1.jpg",
    "images/girl2.jpg",
    "images/girl3.jpg",
    "images/girl4.jpg",
    "images/girl5.jpg",
    "images/girl6.jpg",
    "images/girl7.jpg",
    "images/girl8.jpg",
    "images/girl9.jpg",
    "images/girl10.jpg"
];

let userListContainer = document.querySelector('#list')
let paginationContainer = document.querySelector('#pagination')

let currentPage = 1
let rowsCount = 3

function displayUesrsList (allUesrsArray, usersContainer, rowsCount, currentPage) {
    usersContainer.innerHTML = ''

    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount

    let paginatedUsers = allUesrsArray.slice(startIndex, endIndex)

    paginatedUsers.forEach(function (user) {
        let userElement = document.createElement('div')
        userElement.classList.add('item')
        // userElement.innerHTML = user.name + ' ' + user.family
        userElement.style.backgroundImage="url("+user+")"
        userElement.style.backgroundSize="cover"
        usersContainer.appendChild(userElement)

    })
}


function setupPagination (allUesrsArray, pagesContainer, rowsCount) {
    pagesContainer.innerHTML = ''

    let pageCount = Math.ceil(allUesrsArray.length / rowsCount)

    for (let i = 1 ; i < pageCount + 1 ; i++) {
        let btn = paginationButtonGenerator(i, allUesrsArray)
        pagesContainer.appendChild(btn)
    }

}

function paginationButtonGenerator(page, allUesrsArray) {
    let button = document.createElement('button')
    button.innerHTML = page

    if (page === currentPage) {
        button.classList.add('active')
    }

    button.addEventListener('click', function () {
        currentPage = page
        displayUesrsList(allUesrsArray, userListContainer, rowsCount, currentPage)

        let prevPage = document.querySelector('button.active')
        prevPage.classList.remove('active')

        button.classList.add('active')

    })

    return button
}

displayUesrsList(listItems, userListContainer, rowsCount, currentPage)
setupPagination(listItems, paginationContainer, rowsCount)