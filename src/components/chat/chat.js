import React, {Component} from "react";
import styles from "./chat.css";
import { FaTimes } from 'react-icons/fa';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            messages: []
        }
    }

    onHandleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    addReply() {
        setTimeout(() => {
            let messages = this.state.messages;
            messages.push('Wait a moment, please');
            this.setState({
                messages : messages
            });
        }, 1500);

    }

    addMessage() {
        let messages = this.state.messages;
        messages.push(this.state.inputValue);
        this.setState({
            messages: messages
        });
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.addMessage();
            this.addReply();
        }
    };

    MessageList() {
        let messages = this.state.messages;
        return (
            <ul className="message_list"
            >
                {
                    messages.map((val, index) => {
                        return (
                            <li className="message" key={index}>
                                {val}
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
                    <button className="btn btn-primary"
                            onClick={() => {
                                this.addMessage();
                                this.addReply();
                            }}>
                        Send
                    </button>
                </div>

            </div>
        );
    }
}


export default Chat;