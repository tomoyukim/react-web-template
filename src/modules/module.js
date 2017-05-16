import _ from 'lodash';
import { createAction } from 'redux-actions';
import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
  CLICK: null
});

export const click = text => createAction(
    ActionTypes.CLICK,
    () => ({ text }),
    _.noop
  )();

const INITIAL_STATE = {
  text: 'nothing'
};

const reducer = (state = INITIAL_STATE, action) => {
  // console.log(`state:${JSON.stringify(state)}, action:${JSON.stringify(action)}`);
  switch (action.type) {
    case ActionTypes.CLICK:
      return _.cloneDeep(_.assign(state, { text: action.payload.text }));
    default:
      return state;
  }
};

export default reducer;
