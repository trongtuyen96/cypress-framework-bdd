function randomString(length) {
    return Math.random()
        .toString(36)
        .substring(length);
}

module.exports = randomString;