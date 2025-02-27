
function hasSNILS(str){
    const regEx =/(\d{3})-(\d{3})-(\d{3}) (\d{2})/
    return regEx.test(str)
}

function grabSNILS(str){
    const mathes = str.match(/(\d{3})-(\d{3})-(\d{3}) (\d{2})/)
    return mathes ? mathes[0] : null
}

function grabAllSNILS(str){
    const mathes = str.match(/(\d{3})-(\d{3})-(\d{3}) (\d{2})/g)
    return mathes 
}

function hideAllSNILS(str){
    return str.replace(/(\d{3})-(\d{3})-(\d{3})/g, 'XXX-XXX-XXX')
}



module.exports = {
    hasSNILS,
    grabSNILS,
    grabAllSNILS,
    hideAllSNILS,
    // formatSNILS
};