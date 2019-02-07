class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0

        }
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this)
    }

    addOne() {
        let countNew = this.state.count;
        countNew = countNew + 1;
        this.setState({ count: countNew });
    }
    minusOne() {
        let countNew2 = this.state.count;
        countNew2 = countNew2 - 1;
        this.setState({ count: countNew2 });
    }

    reset() {
        let countNew3 = this.state.count;
        countNew3 = 0;
        this.setState({ count: countNew3})

    }

    render() {
        return (
            <div>
                <p>
                    <h1>Count: {this.state.count}</h1>
                    <button onClick={this.addOne}> +1</button>
                    <button onClick={this.minusOne}> -1</button>
                    <button onClick={this.reset}> reset</button>
                </p>
            </div>
        );
    };
}

ReactDOM.render(<Test />, document.getElementById('app'));