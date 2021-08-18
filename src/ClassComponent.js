import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            counter: 0,
            resetCounter:0
        };

    }
    componentDidMount() {
        console.log("ComponentDidMount")
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentwillunmount");
    }

    increase() {
        this.setState({ counter: this.state.counter + 1 });
    }

    decrease() {
        this.setState({ counter: this.state.counter - 1 });
    }
    reset() {
        this.setState({counter:this.state.resetCounter});
    }
    render() {

        return (
            <div className="class">
                <h2>Class Component</h2>
                <p>Counter:{this.state.counter}</p>
                <button onClick={() => this.increase()}>İncrease</button>
                <button onClick={() => this.decrease()}>Decrease</button>
                <button onClick={() => this.reset()}>Reset</button>
            </div>
        )
    }
}
export default ClassComponent;