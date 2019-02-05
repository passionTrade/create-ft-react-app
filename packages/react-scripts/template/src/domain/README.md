#### Example:

```javascript
const getBasketProductsQuantity = memoize(basketProducts =>
  basketProducts.reduce((acc, basketProduct) => {
    const variants = get(basketProduct, 'product.variants') || [];
    const variantQty = variants.length
      ? variants.reduce((acc, variant) => acc + variant.quantity, 0)
      : 0;
    return acc + variantQty || 0;
  }, 0)
);
```
