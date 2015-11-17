var Tabs = require('./Tabs.jsx');
var ModalWindow = React.createClass({
  getInitialState: function() {
    return {
      isOpen: true
    };
  },

  closeModal: function () {
    console.log(this);
    this.setState({
      isOpen: !this.state.isOpen
    })
  },

  render: function() {
    return (
      <div className="data-panel-wrapper modal-wrapper fixed flex flex-center" id="data-panel-wrapper" aria-hidden={this.state.isOpen === true ? "false" : "true" }>
      <div id="data-panel-overlay" className="modal-overlay absolute" tabIndex="-1"></div>
      <div id="data-panel" className="data-panel modal-content sm-col-8 mx-auto v-middle" aria-labelledby="modalTitle" aria-describedby="modalDescription" role="dialog">
      <button onClick={this.closeModal} className="btn modal-btn right" title="Close data panel" data-target="close-modal"><i className="fa fa-times"></i></button>
      <Tabs catalog={this.props.catalog} />
      </div>
    </div>
    );
  }
});
module.exports = ModalWindow;
