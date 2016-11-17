import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://asciinema.org/a/2ij7njldwbi88kyc6mkeeeqn5.js";
        script.autopaly = true;
        script.loop = "loop";
        script.speed = 2;
        script.size = "big";

        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                <div className="ui inverted vertical center aligned segment">
                    <div className="ui text container">

                        <h2>Build es-next microservices on AWS Lambda!</h2>
                        <div className="ui video container">
                            <script type="text/javascript"
                                src="https://asciinema.org/a/2ij7njldwbi88kyc6mkeeeqn5.js"
                                id="asciicast-2ij7njldwbi88kyc6mkeeeqn5"
                                data-autoplay="true" data-speed="1.5" data-size="small"></script>
                        </div>
                        <a href="/docs/getting-started.md" className="ui huge primary button">Get Started <i className="right arrow icon"></i></a>
                    </div>
                </div>

                <div className="ui vertical stripe segment">
                    <div className="ui text container">
                        <h3 className="ui header">What is Atomable?</h3>
                        <p>Sed suscipit rutrum aliquet. Phasellus tortor urna, vulputate eu suscipit non, maximus porta lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis convallis nisl sed tempor. Vestibulum dictum tellus vitae ex faucibus pulvinar. Donec laoreet arcu ac nunc</p>
                        <p> commodo, in porttitor ante egestas. Duis fringilla ac eros non lacinia. Suspendisse potenti. Fusce at malesuada enim. Fusce a nulla justo.</p>
                    </div>
                </div>


                <div className="ui vertical stripe quote segment">
                    <div className="ui equal width stackable internally celled grid">
                        <div className="center aligned row">
                            <div className="column">
                                <h3>es-next</h3>
                                <p>atomable cli support natively es-next features, including async/await</p>
                            </div>
                            <div className="column">
                                <h3>Babel and Traceur</h3>
                                <p>
                                    atomable supports babel or tracer compilation            </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="ui vertical stripe segment">
                    <div className="ui text container">
                        <h3 className="ui header">What can it do form me?</h3>
                        <p>Sed suscipit rutrum aliquet. Phasellus tortor urna, vulputate eu suscipit non, maximus porta lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis convallis nisl sed tempor. Vestibulum dictum tellus vitae ex faucibus pulvinar. Donec laoreet arcu ac nunc</p>
                        <p> commodo, in porttitor ante egestas. Duis fringilla ac eros non lacinia. Suspendisse potenti. Fusce at malesuada enim. Fusce a nulla justo.</p>
                    </div>
                </div>
            </div>
        );

    }
}


export default Home;
