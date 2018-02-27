A React/Redux Shopping Cart App with:
- JavaScript, ES6, React, JSX, Redux, Jest 
- 10 items to choose from with different names, prices and tax %

![shopping_cart_thumbnail](https://user-images.githubusercontent.com/23530054/36751281-0a64ac34-1c00-11e8-8cc9-74388bcf05ac.png)

### Clone the repo, and then:

- `yarn start` - starts dev server with auto update and lint
- `yarn test` - starts tests with auto update
- `yarn build` - creates production build

### Currently implemented features:
- Can add item from predefined list to cart
- Can set comment on item to add
- Can edit item
- Can delete singular item
- Can clear whole cart
- Can see cart summary below cart (net + gross)
- Can see tax amounts separated by tax %

### Test coverage:
- Application render, actions, reducers, exported dumb components, state, utils

### Currently missing features:
- Testing smart components (and smaller functions inside smart component files)
- Flowtype
- Handling network problems (no-connection, slow connection etc.)


Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).