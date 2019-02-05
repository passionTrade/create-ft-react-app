#### Example:

```javascript
export const postBrandShowroom = showroom =>
  post(
    '/api/brand/brands/self/showrooms',
    transform.showroom.toServer(showroom)
  ).then(transform.showroom.fromServer);
```
