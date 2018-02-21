clone the repo, and then:

- `npm start` - starts dev server with auto update and lint
- `npm test` - starts tests with auto update
- `npm build` - creates production build

Currently implemented features:
- Can add item from predefined list to cart
- Can set individual comment on item to add
- Can clear whole cart
- Can delete singular item
- Can see cart summary below cart (net + gross)
- Can see tax amounts separated by tax amount

Currently missing features:
- Editing items
- Tests (only render is tested)

Planned refactors:
- Make CartContent a container to make testing easier
- Clean up map statements to be less verbose


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).