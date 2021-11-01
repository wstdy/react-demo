let list = [
  {key: '/shop', title: '购物信息'},
  {key: '/mine', title: '我的信息'}
];

const menu = (state = list, action) => {
  switch(action.type) {
      case 'ADD_LIST': return [...state, action.value];
      case 'DEL_LIST': return state - action.value;
      default: return state;
  }
}
export default menu;