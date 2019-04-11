import React from 'react';

class TableData extends React.Component {
    render() {
        if (this.props.type == 'th') {
            return (
                <th className={this.props.className}>
                    {this.props.value}
                    {this.props.children}
                </th>
            )
        }
        return (
            <td className={this.props.className}>
                {this.props.value}
            </td>
        )
    }
}

export default TableData;