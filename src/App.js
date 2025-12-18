// import logo from './logo.svg';
// import './App.css';
/*
4.React组件使用store中的数据
在React组件中使用store中的数据，需要用到一个钩子函数useSelector，它的作用是把store中的数据映射到组件中
5.React组件修改store中的数据
React组件中修改store中的数据需要借助一个钩子函数useDispatch，它的作用是生成提交action对象的dispatch函数
*/
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addToNum } from './store/modules/counterStore';

function App() {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add to 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add to 20</button>
    </div>
  );
}
export default App;
