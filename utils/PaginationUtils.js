import React from 'react';

function nextState(nextActivePageNumber, state, props) {
    let {
        startNumber,
        currentPageNumber,
        endNumber
    } = state;
    
    endNumber = endNumber == 0 ? props.countOfPages > 5 ? 5 : props.countOfPages : endNumber;

    if (nextActivePageNumber == 'Previouse' && currentPageNumber > 0) {
        if (startNumber > 0) {
            startNumber--;
            endNumber--;
        }
        currentPageNumber--;
    }
    if (nextActivePageNumber == 'Next' && currentPageNumber < props.countOfPages) {
        if (endNumber < props.countOfPages) {
            startNumber++;
            endNumber++;
        }
        currentPageNumber++;
    }
    //debugger;
    if (nextActivePageNumber >= 0) {
        currentPageNumber = parseInt(nextActivePageNumber);
    }

    return {
        currentPageNumber,
        startNumber,
        endNumber
    };
}

function getButtons(state, countOfPages, clickHandler) {
    let {
        startNumber,
        currentPageNumber,
        endNumber
    } = state;

    endNumber = endNumber == 0 ? countOfPages > 5 ? 5 : countOfPages : endNumber;
        let prevButton = 
            <li className="page-item" key="prev-button">
                <input
                    type='button'
                    className="page-link"
                    defaultValue='Previouse'
                    onClick={clickHandler} />
            </li>
        , nextButton = 
            <li className="page-item" key="next-button">
                <input
                    type='button'
                    onClick={clickHandler}
                    className="page-link"
                    defaultValue='Next' />
            </li>
        , buttons = [];
        if (currentPageNumber > 0) { buttons.push(prevButton) };
        for (let i = startNumber; i < endNumber; i++) {
            buttons.push((
                <li className={"page-item" + (i == currentPageNumber ? ' active' : '')}
                    key={i}>
                    <input
                        type='button'
                        className='page-link'
                        defaultValue={i + 1}                        
                        onClick={clickHandler} />
                </li>
            ));
        }
        
    if (currentPageNumber < countOfPages - 1) { buttons.push(nextButton); }

    return buttons;
}

const PaginationUtils = {
    nextState,
    getButtons
};

export default PaginationUtils;