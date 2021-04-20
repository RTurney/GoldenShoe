import React from 'react';
import emailjs from 'emailjs-com';

export default class Form extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
        message: "",
        };
    }

    handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
    }

    sendMessage(event) {
        event.preventDefault();
    // if (!this.validateMail()) {
    //         return;
    //     }
    const templateParams = {
        from_name: this.state.name + " (" + this.state.email + ")",
        to_name: "Customer Service Team",
        feedback: this.state.feedback
        };

    emailjs.send("gmail", "portfoliositecontact", templateParams, "user_kG0rZISAzHS5cBDjbcckM")
        .then(
        function(response) {
            console.log("Your message has successfully sent!");
            console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
            console.log("Your message was not able to be sent");
        }
        );
    this.setState({
        name: "",
        email: "",
        feedback: ""
        });
    }

    render() {
    return (
        <div>
            <form
                className="ui form"
                id={this.props.id}
                name={this.props.name}
                method={this.props.method}
                action={this.props.action}
            >
                <textarea
                id="name"
                name="name"
                onChange={this.handleInputChange.bind(this)}
                placeholder="your name"
                required
                value={this.state.name}
                style={{ width: "100%" }}
                rows={1}
                />
                <br />
                <textarea
                id="email"
                name="email"
                onChange={this.handleInputChange.bind(this)}
                placeholder="your email address"
                required
                value={this.state.email}
                // error={this.state.errors.email}
                style={{ width: "100%" }}
                rows={1}
                />
                <br />
                <textarea
                id="message"
                name="message"
                onChange={this.handleInputChange.bind(this)}
                placeholder="Please tell us what your issue is."
                required
                value={this.state.feedback}
                style={{ width: "100%", height: "250px" }}
                />
                <br />
                <input
                type="button"
                value="Send"
                className="ui button"
                style={{
                    fontFamily: "Amatic SC",
                    fontSize: "20px",
                    color: "blue"
                }}
                onClick={this.sendMessage.bind(this)}
                />
            </form>
        </div>
        );
    };    
}