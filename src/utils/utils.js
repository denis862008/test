export function bindAll(_this, array) {
    for (let i = 0; i < array.length; i++) {
        _this[array[i]] = _this[array[i]].bind(_this);
    }
}
