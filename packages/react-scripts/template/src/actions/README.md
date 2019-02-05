#### Example:

```javascript
const uploadDocument = (file, config) => (dispatch, getState, api) =>
  dispatch({
    type: types.DOC_UPLOAD,
    api: () => api.uploadDocument(file, config),
    payload: { file, config },
  });
```
