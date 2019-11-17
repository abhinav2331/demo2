import React from "react";

class Message extends React.Component {
    render() {
        return (
            <div>

                {/*Message for Edit User Info*/}
                {
                    this.props.message === 200 ? <div className="app_message">User info updated successfully! <i onClick={this.props.closemessage} className="fa fa-close"></i></div> : ""
                }

                {/*Message for Edit Article*/}
                {
                    this.props.articleEditApiResponse === 200 ? <div className="app_message">Article updated successfully! <i onClick={this.props.closemessage} className="fa fa-close"></i></div> : ""
                }
                {/*Message for Edit Article*/}
                {
                    this.props.commentpostApiResponse === 200 ? <div className="app_message">Comment Posted successfully! <i onClick={this.props.closemessage} className="fa fa-close"></i></div> : ""
                }
            </div>
            )
    }
}

export default Message;