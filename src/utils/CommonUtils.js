import { Object } from "es6-shim";

function sortByProp(isMore, prop) {
    if (isMore) {
        //ascending sorting
        return (prev, next) => prev[prop] > next[prop] ? 1 : prev[prop] < next[prop] ? -1 : 0;
    }
    //descending sorting
    return (prev, next) => prev[prop] < next[prop] ? 1 : prev[prop] > next[prop] ? -1 : 0;
}
//unique key in lists of components
function getCebabCaseCombination() {
    return [].slice.apply(arguments).join('-');
}

function isContain(obj, subStr) {
    return Object.keys(obj).map((value) => {
        return obj[value].toString().toLowerCase();
    })
        .join(' ')
        .indexOf(subStr.toLowerCase()) >= 0;
}

function debounce(callback, ms, thisArg) {
    let isComplete = true;

    return function () {
        if (!isComplete) {
            return;
        }

        callback.apply(thisArg || this, arguments);
        isComplete = false;

        setTimeout(() => {
            isComplete = true;
        }, ms);
    };
}

const CommonUtils = {
    sortByProp,
    getCebabCaseCombination,
    isContain,
    debounce
};

export default CommonUtils;