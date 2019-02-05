#### Example:

```javascript
import * as types from 'constants/ActionTypes';

const initialState = {
  activeGuideId: null,
};

const guides = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_GUIDE_ID:
      return {
        ...state,
        activeGuideId: action.guideId,
      };
    default:
      return state;
  }
};

export default guides;
```
