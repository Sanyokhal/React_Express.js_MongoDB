import {operations} from '../mock.json';
import {formatPrice} from '../mixins.ts'

const OperationsList = function ({isLogedIn}: { isLogedIn: boolean }) {
    return (
        <div className='list'>
            <span className='text-2xl font-bold title'>Список операцій</span>
            {
                isLogedIn ?
                    <ul>
                        {operations.map((operation) => (<li key={operation.id} className='list-item'>
                            <span className='title'>{operation.title}</span>
                            <span className='date'>{operation.date}</span>
                            <span
                                className={`font-bold delta ${operation.type === 'expense' ? 'text-danger' : 'text-success'}`}>{formatPrice(operation.currency, operation.delta)}</span>
                        </li>))}
                    </ul> :
                    <span className='text-xl font-light log-in-alert'>Для доступу до даного функціоналу ввійдіть в акаунт</span>
            }
        </div>
    )
}
export default OperationsList;