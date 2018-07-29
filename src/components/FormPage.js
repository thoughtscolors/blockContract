import React, { Component } from "react";
import ClientDetailsForm from "./ClientDetails";
import ScopeWork from "./ScopeWork";
import FeesDates from "./FeesDates";
import SideBar from "./SideBar";
import Modal from "react-modal";
import ModalContent from "./ModalContent";
import { Link } from 'react-router-dom';

class FormPage extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };
    return (
      <div>
        <div className="Main-container">
          <SideBar />
          <div>
            <ClientDetailsForm />
            <ScopeWork />
            <FeesDates />
            <div className="" />
          </div>
          <div className="sidebar" />
        </div>
        <button onClick={this.openModal}>Create Contract</button>
        <Modal isOpen={this.state.showModal} style={customStyles}>
            <ModalContent closeModal={this.closeModal} />
            <Link to="/track">
              <button> Confirm </button>
            </Link>
        </Modal>
      </div>
    );
  }
}

export default FormPage;
