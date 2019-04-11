import React from 'react';
import PaginationUtils from '../utils/PaginationUtils';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);

        this.state = {
            currentPageNumber: 0,
            startNumber: 0,
            endNumber: 0
        };
    }

    clickHandler(e) {
        let value = parseInt(e.currentTarget.value) - 1;
        value = isNaN(value) ? e.currentTarget.value : value;
        const nextState = PaginationUtils.nextState(
            value,
            this.state,
            this.props
        );

        this.props.onClick(nextState.currentPageNumber);
        this.setState(nextState);
    }

    componentWillReceiveProps() {        
        this.setState((state, props) => {
            //is items filtered
            if (props.countOfPages !== this.props.countOfPages) {
                return {
                    startNumber: 0,
                    endNumber: 0
                };
            }
            return {};
        });
    }
    
    render() {   
        return (
            <div className={this.props.classNameName || 'row'}>
                <nav>
                    <ul className="pagination justify-content-center">
                        {
                            PaginationUtils.getButtons(
                                this.state,
                                this.props.countOfPages,
                                this.clickHandler
                            )
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Pagination;