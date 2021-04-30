'use strict';


const Item = (link, src) => {
  return (
    <div>
      <a href={link}>
        <img src={src} className="skill"/>
      </a>
    </div>
  );
}

class Homie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

const Carousel = () => {

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">

        <button className="left-arrow">
          &lt;
        </button>

        <div className="carousel-content-wrapper">
          <div className="carousel-content">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="skill"/>
            <img src="../images/skills/nodejs.svg" className="skill"/>
            <img src="../images/skills/aws.svg" className="skill"/>
            <img src="../images/skills/go.svg" className="skill"/>
            <img src="../images/skills/java.svg" className="skill"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" className="skill"/>
          </div>
        </div>

        <button className="right-arrow">
          &gt;
        </button>
      </div>
    </div>
  );
}

const domContainer = document.querySelector('#carousel');
ReactDOM.render(e(Homie), domContainer);