const normalize_text = function (text) {

    //remove special characters
    text = text.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '');

    //normalize Arabic
    text = text.replace(/(آ|إ|أ)/g, 'ا');
    text = text.replace(/(ة)/g, 'ه');
    text = text.replace(/(ئ|ؤ)/g, 'ء')
    text = text.replace(/(ى)/g, 'ي');

    //convert arabic numerals to english counterparts.
    var starter = 0x660;
    for (var i = 0; i < 10; i++) {
        text.replace(String.fromCharCode(starter + i), String.fromCharCode(48 + i));
    }

    return text;
}

const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
}

const get_just_unique_word = (text) => {
    let arr = text.split(" ");
    arr = arr.filter(onlyUnique);
    return arr;
}

module.exports = {normalize_text, get_just_unique_word}