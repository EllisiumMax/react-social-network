import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import scss from "./Status.module.scss";
import editImg from "../../../../images/edit.svg";

class Status extends React.Component {
  state = {
    canEdit: false,
    tempText: this.props.status,
    editActive: false,
  };

  componentDidMount() {
    this.editMode();
  }

  editMode() {
    if (this.props.loggedUserID === this.props.targetId)
      this.setState({ canEdit: true });
    else this.setState({ canEdit: false });
  }

  setTempText(e) {
    this.setState({ tempText: e.target.value });
  }

  closeEdit() {
    this.setState({ editActive: false });
  }

  render() {
    if (this.state.canEdit)
      return (
        <div>
          {this.state.editActive ? (
            <input
              className={scss.input}
              maxLength={300}
              value={this.state.tempText}
              onChange={(e) => this.setTempText(e)}
              autoFocus={true}
              onBlur={() => {
                this.props.setStatusRequest(
                  this.props.status,
                  this.state.tempText
                );
                this.closeEdit();
              }}
            ></input>
          ) : (
            <div className={scss.wrapper}>
              <h3 className={scss.statusText}>
                {this.props.status || "No status"}
              </h3>
              <img className={scss.edit} src={editImg} onClick={() => this.setState({ editActive: true })} />
            </div>
          )}
        </div>
      );
    if (!this.state.canEdit)
      return (
        <h3 className={scss.statusText}>{this.props.status || "No status"}</h3>
      );
  }
}

function stateDispatchToProps(state) {
  return { loggedUserID: state.auth.id };
}

export default compose(connect(stateDispatchToProps))(Status);
