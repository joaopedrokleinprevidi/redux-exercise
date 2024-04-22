import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux';
import {increment, incrementAmount, decrease, decreaseAmount} from './features/counter/counter-slice.ts'
import { useAppSelector } from './hooks.ts';
import { useState } from 'react';


function App() {
  const count = useAppSelector(state => state.counter.value)
  const [negativeAmount, setNegativeAmount] = useState(0);
  const [positiveAmount, setPositiveAmount] = useState(0);
  const dispatch = useDispatch();

  function handleOnClick(){
    dispatch(increment())
  }
  function handleOnClickAmount(){
    dispatch(incrementAmount(5))
  }

  function handleDecrease(){
    dispatch(decrease())
  }

  function handleDecreaseAmount(){
    dispatch(decreaseAmount(5))
  }

  function handleDecreaseAmountQuantity(){
    dispatch(decreaseAmount(negativeAmount))
    const negativeInput = document.querySelector('#amountDecrease') as HTMLInputElement;
    negativeInput.value = '';
    setNegativeAmount(0)
  }

  function handleIncreaseAmountQuantity(){
    dispatch(incrementAmount(positiveAmount))
    const positiveInput = document.querySelector('#amountIncrease') as HTMLInputElement;
    positiveInput.value = '';
    setPositiveAmount(0)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>
          count is {count}
        </button>
        <button onClick={handleOnClickAmount}>Increment 5</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleDecreaseAmount}>Decrease 5</button>
        <br />
        <label htmlFor="amountDecrease">Decrementar quantidade</label>
        <input onChange={(e) => setNegativeAmount(Number(e.target.value))} id="amountDecrease" name="amountIncrease" type="number" />
        <button onClick={handleDecreaseAmountQuantity}>Decrease Quantity</button>
        <br />
        <label htmlFor="amountIncrease">Incrementar quantidade</label>
        <input onChange={(e) => setPositiveAmount(Number(e.target.value))} id="amountIncrease" name="amountIncrease" type="number" />
        <button onClick={handleIncreaseAmountQuantity}>Increase Quantity</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

//modo antigo para implementar "connect" e "hooks"
// const mapStateToProps = (state: any) => { return {
//   count: state.counter.value
// } }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//   increment: () => dispatch({type: 'counter/increment'}),
//   incrementAmount: (amount: number) => dispatch({type: 'counter/incrementAmount', payload: amount})
// }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;