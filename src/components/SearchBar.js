import React from 'react';
import CommonUtils from '../utils/CommonUtils';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        //this.debouncedChange = CommonUtils.debounce(this.debouncedChange.bind(this), 200);

        this.state = {
            value: ''
        };
    }

    /* debouncedChange(value) {
        this.props.onClick(value);
    } */

    changeHandler(e) {
        const value = e.currentTarget.value;
        this.setState(state => {
            return {
                value: value != state.value ? value : state.value
            };
        });
        
        if (value == '') {
            this.props.onClick(value);
        }
        //this.debouncedChange(e.currentTarget.value);
    }

    clickHandler(e) {
        if (this.state.value != '') this.props.onClick(this.state.value);
    }
    
    render() {        
        return (
            <nav className={this.props.className || 'navbar'}>
                <div className="input-group">
                    <input type="text" className="form-control"
                        placeholder="Искать..."
                        aria-describedby="searchButton"
                        onChange={this.changeHandler}
                        value={this.state.value} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                            type="button" id="searchButton"
                            onClick={this.clickHandler}>Искать</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SearchBar;