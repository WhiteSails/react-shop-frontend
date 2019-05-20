import React, {Component} from "react";
import styles from "./chat.css";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            messages: []
        }
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    addReply() {
        setTimeout(() => {
            let messages = this.state.messages;
            messages.push('Wait a moment, please');
            this.setState({
                messages
            });
        }, 1500);

    }

    addMessage() {

        let messages = this.state.messages;
        messages.push(this.state.inputValue);
        this.setState({
            messages
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
                <div className="inner">
                    <p>Need help? Ask!</p>
                    {this.MessageList()}
                    <input type="text"
                           placeholder="Type your question here"
                           onChange={(e) => this.handleChange(e)}
                           onKeyDown={this.handleKeyDown}
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