import React from "react";

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = { input: '' };
    }
    clickHandler(e) {
        this.props.onClick(null);
    }

    handleChange(event) {
         this.setState({ input: event.target.value });
    }
    render() {
        const user = this.props.user;
        if (user) {
            return (
                <div>
                    <ul className="list-group">
                        <li className="list-group-item">
                             Выбран пользователь: <strong>{user.firstName} {user.lastName}</strong>
                        </li>
                        <li className="list-group-item">
                             <p>Описание:</p>
                            <textarea className='form-control'
                                onChange={this.handleChange}
                                value={this.state.input || user.description}></textarea>
                        </li>
                        <li className="list-group-item">
                             Адрес: <strong>{user.address.streetAddress}</strong>
                        </li>
                        <li className="list-group-item">
                            Город: <strong>{user.address.city}</strong>
                        </li>
                        <li className="list-group-item">
                             Провинция/штат: <strong>{user.address.state}</strong>
                        </li>
                        <li className="list-group-item">
                             Индекс: <strong>{user.address.zip}</strong>
                        </li>
                        <button type="button" className="btn btn-primary"
                            onClick={this.clickHandler}>Скрыть</button>
                    </ul>
                    <br />
                </div>
            );
        }
        return null;
    }
}

export default UserInfo;