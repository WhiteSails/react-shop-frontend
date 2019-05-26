import React, {Component} from "react";
import "./Chat.scss";
import {FaTimes} from 'react-icons/fa';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            messages: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onHandleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    addReply() {
        setTimeout(() => {
            this.addMessage('Wait a moment, please', 'admin')
        }, 1500);

    }

    addMessage(message, sender) {
        let messages = this.state.messages;
        messages.push({
            sender: sender,
            message: message
        });
        this.setState({
            messages: messages
        });
    }

    handleSubmit() {
        this.addMessage(this.state.inputValue, 'client');
        this.addReply();
        this.setState({
            inputValue: ''
        })
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    };

    MessageList() {
        let messages = this.state.messages;
        return (
            <ul className="message_list">
                {
                    messages.map((val, index) => {
                        return (
                            <li className="message" key={index}>
                                {val.message}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    render() {
        return (
            <div className="chat_box">
                <button className="btn float-right close_btn" onClick={this.props.closeChat}>
                    <FaTimes/>
                </button>
                <div className="inner">
                    <p>Need help? Ask!</p>
                    {this.MessageList()}
                    <input className="form-control"
                           type="text"
                           placeholder="Type your question here"
                           onChange={(e) => this.onHandleChange(e)}
                           onKeyDown={(e) => this.handleKeyDown(e)}
                           value={this.state.inputValue}
                    />
                    <button className="btn btn-primary my-3 float-right send"
                            onClick={this.handleSubmit}>
                        Send
                    </button>
                </div>
            </div>
        );
    }
}


export default Chat;