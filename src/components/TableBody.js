import React from 'react';
import TableRow from './TableRow';
import TableData from './TableData';
import CommonUtils from '../utils/CommonUtils';

class TableBody extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const headers = this.props.headers;
        return (
            <tbody>
                {
                    this.props.values.map((value, i) =>
                        <TableRow index={value.id} onClick={this.props.onRowClick}
                                key={CommonUtils.getCebabCaseCombination(value.id, i)}>
                            {
                                headers.map((key, j) =>
                                    (
                                        <TableData key={j} type='td' value={value[key]} />
                                    )
                                )
                            }
                        </TableRow>
                    )
                }                  
            </tbody>
        )            
    }
}

export default TableBody;