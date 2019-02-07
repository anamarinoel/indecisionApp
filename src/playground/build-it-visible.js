
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        };
   }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{!this.state.visibility ? "Show details" : "Hide details"}</button>
                {this.state.visibility && <h4> {<div><p>Hey. These are some details you can see now</p></div>} </h4>}
            </div>
        );
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



/*
const app = {

            subtitle: "Hey. These are some details you can see now",
            options: true
        }

const showDetails = () => {
    app.options = !app.options
    render();
}

const showText = () => {
    const showText = app.subtitle;
}

const appRoot = document.getElementById('app');

const render = () => {
    console.log(app.options);
    console.log(app.subtitle)
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={showDetails}>{app.options ? "Hide details" : "Show details"}</button>
            {app.options ? <h4> {app.subtitle} </h4> : null}
        </div>

    )

    ReactDOM.render(template, appRoot);
}

render();*/
