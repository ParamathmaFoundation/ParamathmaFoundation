var NewComponent = React.createClass({
  render: function() {
    return (

      <div className="imgbox">
        <img className="center-fit" src="images/mankind.png" />
        <div className="container">
          <div className="topnav">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <div className="topnav-right"> 
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});