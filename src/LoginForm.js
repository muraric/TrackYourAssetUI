import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eMail: "",
            firstName: "",
            lastName: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            zipCd: "",
            countryCd: ""
        };
        this.handleInputFormSubmit = this.handleInputFormSubmit.bind(this);
    }

    handleInputFormSubmit(event) {
        alert(event.target.eMail.value);


        postData(`http://trackyourasset-env-1.psmfrvn7jk.us-east-1.elasticbeanstalk.com/TrackYourAsset/enrollUserProfile`, this.state)
            .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
            .catch(error => console.error(error));


        event.preventDefault();

    }



    render() {
        return (<div>
                <form onSubmit={this.handleInputFormSubmit}>
                    <p>
                        <input type="text" name="eMail" placeholder="Email"></input>
                    </p>
                    <t>
                        <input type="text" name="firstName" placeholder="First Name"></input>
                        <input type="text" name="lastName" placeholder="Last Name"></input>
                    </t>
                    <p>
                        <input type="text" name="addressLine1" placeholder="Address Line 1"></input>
                        <input type="text" name="addressLine2" placeholder="Address Line 2"></input>
                    </p>
                    <p>
                        <t>
                            <input type="text" name="city" placeholder="City"></input>
                            <input type="text" name="state" placeholder="State"></input>
                            <input type="text" name="zipCd" placeholder="Zip Code"></input>
                        </t>
                        <p>
                            <input type="text" name="countryCd" placeholder="Country"></input>
                        </p>
                    </p>
                    <button></button>
                </form>
            </div>
        )
    }

}

function postData(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.json()); // parses response to JSON
}

export default LoginForm;