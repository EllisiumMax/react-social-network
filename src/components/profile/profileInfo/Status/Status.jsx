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
    userID: this.props.targetId,
  };

  componentDidMount() {
    this.editMode();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        tempText: this.props.status,
      });
    }
    if (prevProps.targetId !== this.props.targetId) {
      this.setState({
        userID: this.props.targetId,
      });
      this.editMode();
    }
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
  statusChangeOnEnter(e) {
    if (e.keyCode === 13) {
      this.props.setStatusRequest(this.props.status, this.state.tempText);
      this.closeEdit();
    }
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
              onKeyDown={(e) => this.statusChangeOnEnter(e)}
            ></input>
          ) : (
            <div className={scss.wrapper}>
              <h3 className={`${scss.statusText} ${scss.editable}`}>
                {this.props.status || "No status"}
              </h3>
              <img
                className={scss.edit}
                src={editImg}
                onClick={() => this.setState({ editActive: true })}
              />
            </div>
          )}
        </div>
      );
    if (!this.state.canEdit)
      return (
        <div className={scss.wrapper}>
          <h3 className={scss.statusText}>
            {this.props.status || "No status"}
          </h3>
        </div>
      );
  }
}

function stateDispatchToProps(state) {
  return { loggedUserID: state.auth.id };
}

export default compose(connect(stateDispatchToProps))(Status);
