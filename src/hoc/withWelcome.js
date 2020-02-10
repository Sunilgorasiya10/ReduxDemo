import { connect } from 'react-redux';
import { welcomeAction } from '../actions';

const mapDispatchToProps = dispatch => ({
  createWellcomeAction: (data) => {
    dispatch(welcomeAction(data));
  }
})

const mapStateToProps = state => ({
  welcome: state.welcome
})

export default connect(mapStateToProps, mapDispatchToProps);
