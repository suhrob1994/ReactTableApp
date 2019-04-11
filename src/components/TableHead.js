import React from 'react';
import TableRow from './TableRow';
import TableData from './TableData';
import SortButton from './SortButton';

class TableHead extends React.Component {
    render() {
        return (
            <thead className={this.props.className}>
                <TableRow>
                    {
                        this.props.values.map((value, index) => (
                                <TableData key={index} type='th' value={value}>
                                    <SortButton value={value} onClick={this.props.onClick} />
                                </TableData>
                            )
                        )
                    }
                </TableRow>
            </thead>
        );
    }
}

export default TableHead;