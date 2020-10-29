import { connect } from "react-redux";
import { onClose } from "../actions/message-box";
import MessageBox from "../components/message-box";

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.messageBox.isOpen,
  success: state.messageBox.success,
  message: state.messageBox.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClose: () => dispatch(onClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
