var ModalTriggerButton = require('./ModalTriggerButton.jsx');

var Legend = React.createClass({
  getInitialState: function() {
    return {
      isOpen: true
    };
  },

  removeFromMap: function(){
    this.props.nowViewingItem.isEnabled = false;
    emitter.dispatch('nowViewing', null);
  },

  toggleDisplay: function(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  },

  render: function() {
    var nowViewingItem = this.props.nowViewingItem;
    return (
          <li className="now-viewing__item">
            <ul className="clearfix list-reset">
              <li className="col col-12"><button onClick={this.toggleDisplay} className="btn block"><h2 className="p">{nowViewingItem.name}</h2></button></li>
              <ul className="list-reset col col-12">
                <li className="col col-1"><button title="Data show/hide" className="btn"><i className="fa fa-eye"></i></button></li>
                <li className="col col-1"><button title="Zoom in data" className="btn"><i className="fa fa-square-o"></i></button></li>
                <li className="col col-1"><ModalTriggerButton btnText="info" activeTab="2"/></li>
                <li className="col col-9 right-align"><button onClick={this.removeFromMap} title="Remove this data" className="btn">Remove</button></li>
              </ul>
              <li className="col col-12">
                <label htmlFor="opacity">Opacity: </label>
                <input type="range" name="opacity"/>
              </li>
              <li className="col col-12" aria-hidden={this.state.isOpen === true ? "false" : "true" }>
                <a href="#"><img src="http://placehold.it/400x300?text=legends"/></a>
              </li>
            </ul>
          </li>
        );
  }
});
module.exports = Legend;
