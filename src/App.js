import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from "react-redux";
import {changeValue, decodeTextHandler, encodeTextHandler} from "./store/actions";

import {
    Button,
    Col,
    Container,
    FormGroup,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Container>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            Text to ENCODE
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            Text to DECODE
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <FormGroup>
                                    <Input type="textarea"
                                           name="encodeText"
                                           id="encodeText"
                                           value={this.props.encodeText}
                                           onChange={this.props.changeValue}
                                    />
                                    <Button color="info" onClick={this.props.encodeTextHandler}>Encode</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <FormGroup>
                                    <Input type="textarea"
                                           name="decodeText"
                                           id="decodeText"
                                           value={this.props.decodeText}
                                           onChange={this.props.changeValue}
                                    />
                                    <Button color="info" onClick={this.props.decodeTextHandler}>Decode</Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="text"
                           name="password"
                           id="password"
                           value={this.props.password}
                           onChange={this.props.changeValue}
                    />
                    <Label for="password">Result:</Label>
                    <Input type="textarea"
                           name="result"
                           id="result"
                           disabled
                           value={this.props.result}
                    />
                </FormGroup>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        encodeText: state.encodeText,
        decodeText: state.decodeText,
        password: state.password,
        result: state.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeValue: (event) => dispatch(changeValue(event)),
        encodeTextHandler: () => dispatch(encodeTextHandler()),
        decodeTextHandler: () => dispatch(decodeTextHandler())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
