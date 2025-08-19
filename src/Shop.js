import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

const Shop = () => {
    const dispatch = useDispatch();
    // const { withdrawMoney, depositeMoney } = bindActionCreators(actionCreators, dispatch);
    const actions = bindActionCreators(actionCreators, dispatch);
    const { withdrawMoney, depositeMoney } = actions;

  return (
    <div className='container mt-3'>
        <h4 className='mb-3 mt-3'>Vips Account Balance</h4>
        <h6 className='mb-3 mt-3'>Manage your Rupiya</h6>
        <div className='d-flex  mb-3'>
            {/* <button className="btn btn-primary" onClick={ () => { dispatch(actionCreators.withdrawMoney (100) )} }> - </button>
            <span className='mx-3'>  Update Balance  </span>
            <button className="btn btn-primary" onClick={ () => { dispatch(actionCreators.depositeMoney(100) )} }> + </button>
 */}
            <button className="btn btn-primary" onClick={ () => {  withdrawMoney (100) } }> - </button>
            <span className='mx-3'>  Update Balance  </span>
            <button className="btn btn-primary" onClick={ () => { depositeMoney(100) } }> + </button>
        </div>

    </div>
  )
}

export default Shop
