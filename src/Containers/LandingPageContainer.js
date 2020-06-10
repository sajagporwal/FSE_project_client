import React, {Component} from 'react';

class LandingPageContainer extends Component {

    state = {
        username:'',
        message:'',
        to:''
    }

    handleChange=(e)=>{
        this.setState({
                          [e.target.name]:e.target.value
                      })
    }

    connect = ()=>{


        var host = 'localhost:8080';
        var pathname = '/prattle/';




            var ws = new WebSocket("ws://" + host + pathname + "chat/" + this.state.username);

            ws.onmessage = function (event) {
                var log = document.getElementById("log");
                console.log(event.data);

                var message = JSON.parse(event.data);
                if (message.to === null) {
                    log.innerHTML += message.from.username + " to all : " + message.content + "\n";
                } else {
                    log.innerHTML +=
                        message.from.username + " to " + message.to.username + " : "
                        + message.content + "\n";
                }
            };


    }

    render() {
        return (
            <div>
                <table>
                    <caption>Table</caption>
                    <th id="head"></th>
                    <tr>
                        <td colSpan="2">
                            <input name="username" type="text" id="username"
                                   value={this.state.username} onChange={e=>this.handleChange(e)}
                                   placeholder="Username"/>
                            <button type="button" onClick="connect();">Connect</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea readOnly="true" rows="10" cols="80" id="log"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input name="to" type="text" rows="1" cols="80" id="to"
                                   value={this.state.to} onChange={e=>this.handleChange(e)}
                                   placeholder="To"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" size="51" id="msg" name="message"
                                   value={this.state.message} onChange={e=>this.handleChange(e)}
                                   placeholder="Message"/>
                            <button type="button" onClick="send();">Send</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default LandingPageContainer;
