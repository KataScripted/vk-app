import React from 'react';
import { Div, CellButton, Panel } from '@vkontakte/vkui';
import Exercise from './Exercise'

class Finish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePanel: "finish"
        }
        this.changePanelNow = this.changePanelNow.bind(this);
    }


    changePanelNow() {
        this.props.changePanel();
    }

    render() {
        return (
            <Div>
                Сделано!
                <CellButton onClick={() => this.changePanelNow()}>Main</CellButton>
            </Div>
        )
    }
}

export default Finish;