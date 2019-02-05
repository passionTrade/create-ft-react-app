#### Example:

```javascript
import { getWSPPrice } from 'domain/price';

export const basketTotalAmountSelector = createSelector(
  [basket],
  basket => getWSPPrice(basket.totalPrice)
);
```
