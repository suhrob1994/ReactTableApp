import React from "react";
import Table from './Table';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import CommonUtils from '../utils/CommonUtils';
import UserInfo from './UserInfo';
import LoadingIndicator from './LoadingIndicator';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.paginationClickHandler = this.paginationClickHandler.bind(this);
        this.rowClickHandler = this.rowClickHandler.bind(this);
        this.maxRowsPerPage = 50;

        this.state = {
            items: [],
            filteredItems: [],
            isLoaded: false,
            error: null,
            sliceStart: 0,
            sliceEnd: this.maxRowsPerPage,
            selectedRow: null
        };
    }

    componentDidMount() {
        const url = 'mockData.json';
        //const url = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    rowClickHandler(row) {
        this.setState({
             selectedRow: row
        });
    }

    inputChangeHandler(value) {
        if (value == '') {
            this.setState({
                filteredItems: []
            });

            return;
        }    

        this.setState({
            filteredItems: this.state.items.filter((item) =>
                CommonUtils.isContain(item, value))
        });
    }

    paginationClickHandler(pageNumber) {
        this.setState(state => {
            const sliceStart = pageNumber * (state.sliceEnd - state.sliceStart),
                sliceEnd = sliceStart + (state.sliceEnd - state.sliceStart);
            return {
                sliceStart,
                sliceEnd
            };            
        });
    }

    render() {
        const { filteredItems, items, sliceStart, sliceEnd } = this.state,
            rows = filteredItems.length &&
                   filteredItems.slice(sliceStart, sliceEnd) ||
                items.slice(sliceStart, sliceEnd),
            
            headers = ['id', 'firstName', 'lastName', 'email', 'phone'];
        
        let countOfPages = filteredItems.length || items.length;
        countOfPages = Math.round(countOfPages / this.maxRowsPerPage);

        if (this.state.error) {
            return (<div>Error</div>);
        } else if (!this.state.isLoaded) {
            return (<LoadingIndicator circles={9}>Loading...</LoadingIndicator>);
        } else {
            return (
                <div className="container">
                    <SearchBar
                        onClick={this.inputChangeHandler} />

                    <Table rows={rows} headers={headers} onRowClick={this.rowClickHandler} />
                        
                    <UserInfo user={this.state.selectedRow} onClick={this.rowClickHandler}/>
                    
                    <Pagination countOfPages={countOfPages}
                        onClick={this.paginationClickHandler} />
                </div>
            );
        }
    }
}

export default App;