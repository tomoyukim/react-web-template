import { connect } from 'react-redux';
import App from '../components/App';
import { click } from '../modules/module';

const mapStateToProps = state => ({
  message: state.module.text
});

const mapDispatchToProps = dispatch => ({
  onClick: text => dispatch(click(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
