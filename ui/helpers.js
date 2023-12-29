export  const createTableTdOrTh = function(elementType, txt){
    let element = document.createElement(elementType)
    element.textContent = txt
    return element
}
