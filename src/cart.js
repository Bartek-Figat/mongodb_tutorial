const title = [
  'ipsum mollit consequat est aliqua mollit magna fugiat excepteur cupidatat',
  'dolor anim proident ex dolore nostrud eu ad tempor aliquip',
  'id sint ex minim irure eu voluptate ad culpa quis',
  'dolore laboris anim do id ad ea adipisicing sunt exercitation',
  'pariatur proident occaecat quis sunt veniam do mollit incididunt occaecat',
  'proident sunt eu eu non Lorem mollit occaecat laborum velit',
  'cupidatat duis voluptate consequat voluptate quis ad ullamco ullamco magna',
  'consectetur cupidatat labore consectetur fugiat nisi consectetur enim non ullamco',
  'id laboris voluptate cillum labore Lorem culpa dolore laborum nulla',
  'mollit fugiat eiusmod ullamco reprehenderit excepteur non sint irure nisi',
];

const paymentMethods = ['AMERICAN EXPRESS', 'VISA', 'MASTERCARD'];

const randomTitle = title[Math.floor(Math.random() * title.length)];

const randomPaymentMethods = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];

const randomPrice = Math.floor(Math.random() * 11) + 20;
const randomQuantity = Math.floor(Math.random() * 10) + 1;
const randomID =
  Math.random().toString(36).substr(2, 16) + Math.random().toString(36).substr(2, 16);

const shoppingCart = {
  products: {
    quantity: parseInt(`${randomQuantity}`, 10),
    title: `${randomTitle}`,
    unit_cost: parseInt(`${randomPrice}`, 10),
    currency: 'USD',
    payment: {
      method: `${randomPaymentMethods}`,
      transaction_id: `${randomID}`,
    },
  },
};
export { shoppingCart };
