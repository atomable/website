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
          <div className="ui middle aligned stackable grid container">
            <div id="about" className="row">
              <h3 className="ui header">What's atomable?</h3>
              <p>Sed suscipit rutrum aliquet. Phasellus tortor urna, vulputate eu suscipit non, maximus porta lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis convallis nisl sed tempor. Vestibulum dictum tellus vitae ex faucibus pulvinar. Donec laoreet arcu ac nunc commodo, in porttitor ante egestas. Duis fringilla ac eros non lacinia. Suspendisse potenti. Fusce at malesuada enim. Fusce a nulla justo.</p>
              <p>Praesent ut condimentum arcu. Vivamus iaculis vel augue et vulputate. Quisque dolor sapien, luctus ac cursus ut, fermentum vel lectus. Morbi nec pulvinar orci. Nullam volutpat vehicula velit vel hendrerit. Curabitur in imperdiet lacus. Vivamus et est vulputate, imperdiet tortor et, cursus est. Ut ac ante pulvinar, suscipit mi eu, commodo arcu. Mauris ut odio mattis, placerat nisl mollis, imperdiet enim. Maecenas ac est ac libero dapibus interdum sit amet nec nulla. Nam pretium lectus vel odio aliquet tincidunt. Fusce purus nunc, semper ac justo at, venenatis mattis ligula. Fusce id commodo enim. Maecenas ac semper felis, efficitur feugiat eros. Suspendisse ac laoreet sapien.</p>
              <h3 className="ui header">What can atomable do for me?</h3>
              <p>Sed suscipit rutrum aliquet. Phasellus tortor urna, vulputate eu suscipit non, maximus porta lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis convallis nisl sed tempor. Vestibulum dictum tellus vitae ex faucibus pulvinar. Donec laoreet arcu ac nunc commodo, in porttitor ante egestas. Duis fringilla ac eros non lacinia. Suspendisse potenti. Fusce at malesuada enim. Fusce a nulla justo.</p>
              <p>Praesent ut condimentum arcu. Vivamus iaculis vel augue et vulputate. Quisque dolor sapien, luctus ac cursus ut, fermentum vel lectus. Morbi nec pulvinar orci. Nullam volutpat vehicula velit vel hendrerit. Curabitur in imperdiet lacus. Vivamus et est vulputate, imperdiet tortor et, cursus est. Ut ac ante pulvinar, suscipit mi eu, commodo arcu. Mauris ut odio mattis, placerat nisl mollis, imperdiet enim. Maecenas ac est ac libero dapibus interdum sit amet nec nulla. Nam pretium lectus vel odio aliquet tincidunt. Fusce purus nunc, semper ac justo at, venenatis mattis ligula. Fusce id commodo enim. Maecenas ac semper felis, efficitur feugiat eros. Suspendisse ac laoreet sapien.</p>
            </div>
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
                <h3>Babel and Tracer</h3>
                <p>
                  atomable supports babel or tracer compilation
            </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ui vertical stripe segment">
          <div className="ui text container">
            <h3 className="ui header">With atomable you can get a microservices project stated faster</h3>
            <p>It's a fact, with advaced templating atomable has you witing code faster.</p>
            <a href="https://github.com/atomable" className="ui large button">Read More</a>
            <h4 className="ui horizontal header divider">
              Benefits
        </h4>
            <h3 className="ui header">Deploy faster to the cloud.</h3>
            <p>The cli provides istant deployments to AWS Lambda and bootstraps the API gateway for you.</p>
            <a className="ui large button">Read more</a>
          </div>
        </div>
      </div>
    );

  }
}


export default Home;
