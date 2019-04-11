import React from "react";
class LodingIndicator extends React.Component {
    render() {
        let circles = [];
        for (let i = 0; i < this.props.circles; i++) {
            circles.push((
                <div className={this.props.className || 'spinner-grow text-primary'}
                    role="status" key={i}>
                    <span className="sr-only">{this.props.children}</span>
                </div>
            ));
        }
        
        return (
            <div className="d-flex justify-content-between">
                {circles}
            </div>
        );
    }
}

export default LodingIndicator;