
function hasSNILS(str){
    const regEx =/(\d{3})-(\d{3})-(\d{3}) (\d{2})/
    return regEx.test(str)
}

function grabSNILS(str){
    const matches = str.match(/(\d{3})-(\d{3})-(\d{3}) (\d{2})/)
    return matches ? matches[0] : null
}

module.exports = {
    hasSNILS,
    grabSNILS,
    // grabAllSNILS,
    // hideAllSNILS,
    // formatSNILS
};