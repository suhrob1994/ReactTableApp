import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import CommonUtils from '../utils/CommonUtils';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.headerClickHandler = this.headerClickHandler.bind(this);
        this.rowClickHandler = this.rowClickHandler.bind(this);

        this.state = {
            isMore: false,
            sortBy: 'id'
        };
    }

    headerClickHandler(headerValue) {
        this.setState(state => ({
            isMore: !state.isMore,
            sortBy: headerValue
        }));       
    }

    rowClickHandler(rowId) {
        this.props.onRowClick(this.props.rows.find(row => row.id == rowId));
    }

    render() {
        const headers = this.props.headers,
            rows = this.props.rows.slice().sort(
                CommonUtils.sortByProp(this.state.isMore, this.state.sortBy)
            );
        
        return (
            <table className={this.props.className || 'table table-hover'}>
                <TableHead
                    className='bg-primary'
                    values={headers}
                    onClick={this.headerClickHandler} />
                <TableBody values={rows}
                    headers={headers}
                    onRowClick={this.rowClickHandler} />
            </table>
        )
    }
}

export default Table;