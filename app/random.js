function pickRandomProperty(../content/dick.json) {
    var result;
    var count = 0;
    for (var prop in obj.dicksays)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}
