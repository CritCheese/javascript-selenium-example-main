//Create a map for each locator type xpath

//map for links 
let linksMap = new Map([
    ['image', '//a[text()=\'Hình ảnh\']'],
    ['image1', '//a[text()=\'Hình ảnh\']']
])

//map for button
let buttonsMap = new Map([
    ['login', '//a[text()=\'Đăng nhập\']'],
    ['login1', '//a[text()=\'Đăng nhập\']']
])

//map for input
let inputsMap = new Map([
    ['search', '//textarea[@title=\'Tìm kiếm\']'],
])

//map for other elements
let elementsMap = new Map([
    ['gmail', '//*[text()=\'Gmail\']'],
])

//export maps
module.exports = {linksMap, buttonsMap, inputsMap, elementsMap}