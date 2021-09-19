import React from "react";
import './header.less'

export default class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <div className="header">
                <div>上海</div>
                <div>
                    <input type="text" />
                </div>
                <div>上海</div>
            </div>
        )
    }
}