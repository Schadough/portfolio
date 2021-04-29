'use strict';

const e = React.createElement;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentLineUp: [] 
    };
  }

  render() {

    return (
      <>
        <h1>Hello Buddy</h1>
      </>
    );
  }
}

const domContainer = document.querySelector('#carousel');
ReactDOM.render(e(Carousel), domContainer);