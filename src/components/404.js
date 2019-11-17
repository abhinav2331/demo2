import React from "react";

class Notfound extends React.Component {
    render() {
        return (
            <section style={{ textAlign: "center" }}>
                <div>
                    <img src="images/404-error.jpg" alt="notfound" />
                </div>
                <h1>404 Not Found!</h1>
            </section>
        )
    }
}

export default Notfound;