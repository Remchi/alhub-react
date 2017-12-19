import React, { Component } from "react";
import { fadeIn } from "react-animations";
import * as glamor from "glamor";
import glamorous from "glamorous";

const FadeInDiv = glamorous.div({
  animation: `1s ${glamor.css.keyframes(fadeIn)}`
});

class NewCharacterPage extends Component {
  state = {
    step: 1
  };

  render() {
    return (
      <div>
        <nav className="nav nav-pills nav-justified">
          <button
            className={`nav-item nav-link ${
              this.state.step === 1 ? "active" : ""
            }`}
            onClick={() => this.setState({ step: 1 })}
          >
            <h4>Step 1</h4>
            <p>Race</p>
          </button>
          <button
            className={`nav-item nav-link ${
              this.state.step === 2 ? "active" : ""
            }`}
            onClick={() => this.setState({ step: 2 })}
          >
            <h4>Step 2</h4>
            <p>Class</p>
          </button>
          <button
            className={`nav-item nav-link ${
              this.state.step === 3 ? "active" : ""
            }`}
            onClick={() => this.setState({ step: 3 })}
          >
            <h4>Step 3</h4>
            <p>Background</p>
          </button>
          <button
            className={`nav-item nav-link ${
              this.state.step === 4 ? "active" : ""
            }`}
            onClick={() => this.setState({ step: 4 })}
          >
            <h4>Step 4</h4>
            <p>Faction</p>
          </button>
          <button
            className={`nav-item nav-link ${
              this.state.step === 5 ? "active" : ""
            }`}
            onClick={() => this.setState({ step: 5 })}
          >
            <h4>Step 5</h4>
            <p>Name</p>
          </button>
        </nav>

        <div>
          {this.state.step === 1 && (
            <FadeInDiv>
              <h2>STEP 1</h2>
            </FadeInDiv>
          )}
          {this.state.step === 2 && (
            <FadeInDiv>
              <h2>STEP 2</h2>
            </FadeInDiv>
          )}
          {this.state.step === 3 && (
            <FadeInDiv>
              <h2>STEP 3</h2>
            </FadeInDiv>
          )}
          {this.state.step === 4 && (
            <FadeInDiv>
              <h2>STEP 4</h2>
            </FadeInDiv>
          )}
          {this.state.step === 5 && (
            <FadeInDiv>
              <h2>STEP 5</h2>
            </FadeInDiv>
          )}
        </div>
      </div>
    );
  }
}

export default NewCharacterPage;
