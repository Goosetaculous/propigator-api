module.exports = {
    extend: (origin, add)=>{
        if (!add || (typeof add !== 'object' && add !== null)) {
            return origin;
        }

        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) {
            origin[keys[i]] = add[keys[i]];
        }
        return origin;
    }
}