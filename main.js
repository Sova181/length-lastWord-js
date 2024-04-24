function getLastWordLength(str) {
    // Удаляем лишние пробелы
    const deleteTrimStr = str.trim();
    // Находим последний пробел
    const lastIndex = deleteTrimStr.lastIndexOf(' ');
    // Если строка пустая /есть только один пробел, возвращаем 0
    if (lastIndex == -1) {
        return 0;
    }

    return deleteTrimStr.length - lastIndex - 1;
}

console.log(getLastWordLength('')); // 0
console.log(getLastWordLength('man in BlacK')); // 5
console.log(getLastWordLength('hello, world!  ')); // 6