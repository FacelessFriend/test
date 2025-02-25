
function hasSNILS(str){
    const regEx =/(\d{3})-(\d{3})-(\d{3}) (\d{2})/
    return regEx.test(str)
}

module.exports = {
    hasSNILS,
    // grabSNILS,
    // grabAllSNILS,
    // hideAllSNILS,
    // formatSNILS
};