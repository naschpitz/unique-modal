import React, { Component } from 'react';
import Modal from 'react-modal';

import UniqueModalController from '../controller/controller.js';

import './uniqueModal.css';

const defaultStyle = {
    content: {
        top        : '50%',
        left       : '50%',
        right      : 'auto',
        bottom     : 'auto',
        maxHeight  : '85vh',
        width      : '300px',
        marginRight: '-50%',
        transform  : 'translate(-50%, -50%)',
        boxShadow  : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    overlay: {
        zIndex: 10
    }
};

export default class UniqueModal extends Component {
    constructor(props) {
        super(props);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

        this.state = {
            component: null,
            customStyle: null,
            data: undefined,
            isOpen: false
        };

        UniqueModalController.setReference(this);
    }

    open(component, style) {
        this.setState({component: component, customStyle: style, isOpen: true});
    }

    refresh(data) {
        this.setState({data: data});
    }

    close() {
        this.setState({isOpen: false});
    }

    render() {
        const modalStyle = this.state.customStyle ? this.state.customStyle : defaultStyle;
        const component = this.state.component;
        const data = this.state.data;

        return (
            <Modal isOpen={this.state.isOpen} style={modalStyle}>
                {component ? React.cloneElement(component, data) : null}
            </Modal>
        );
    }
}
