import React from 'react';
import Option from './Option';


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All Button</button>
            {props.options.length === 0 && <p>Please add one option to get started!</p>}
            {
                props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)
            }
        </div>
    );
}

/*class Options extends React.Component {
  render() {
      return (
          <div>
              <button onClick={this.props.handleDeleteOptions}>Remove All Button</button>
              {
                  this.props.options.map((option) => <Option key={option} optionText={option} />)
              }
          </div>
      );
  }
}*/
 
export default Options;