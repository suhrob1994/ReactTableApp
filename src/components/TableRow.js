import React from 'react';

class TableRow extends React.PureComponent {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        if (this.props.onClick) {
            this.props.onClick(this.props.index);
        }
    }

    render() {
        return (
            <tr onClick={this.clickHandler} className={this.props.className}>
                {this.props.children}
            </tr>
        )
    }
}

export default TableRow;