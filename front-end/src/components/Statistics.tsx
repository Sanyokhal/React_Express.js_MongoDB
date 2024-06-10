import '../scss/statistics.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {operations} from '../mock.json';

const Statistics = function ({isLogedIn}: { isLogedIn: boolean }) {
    const [op_qty, setOp_qty] = useState(0)
    const [op_avg, setOp_avg] = useState(0)
    const [expenses_qty, setExpenses_qty] = useState(0)
    const [incomes_qty, setIncomes_qty] = useState(0)
    const [max_income, setMax_income] = useState({})
    const [max_expense, setMax_expense] = useState({})
    const dropToDefault = () => {
        setOp_qty(0)
        setOp_avg(0)
        setExpenses_qty(0)
        setIncomes_qty(0)
        setMax_income(0)
        setMax_expense(0)
    }
    const calculateStats = () => {
        dropToDefault()
        operations.forEach((op) => {
            setOp_qty(op_qty + 1)
            setOp_avg(op_avg + op.delta);
            if (op.type === 'expenses') {
                setExpenses_qty(expenses_qty + 1)
                if (op.delta < max_expense.delta) {
                    setMax_expense(op)
                }
            } else {
                setIncomes_qty(incomes_qty + 1)
                if (op.delta > max_income.delta) {
                    setMax_income(op)
                }
            }
        })
        setOp_avg(Math.round(op_avg / op_qty))
    }
    return (<div className='statistics'>
        <span className='text-2xl font-bold title'>Статистика операцій</span>
        {
            isLogedIn ?

                <div className="data">
                    <span>Кількість операцій за місяць : 10 </span>
                    <span>Середня вартість операції : +246₴ </span>
                    <span>Кількість витрат : 4 </span>
                    <span>Кількість надходжень : 6 </span>
                    <span>Найбільше надходженя : +10000₴ <FontAwesomeIcon icon={faCircleInfo}
                                                                          title='Заробітня плата 09.06.2024 | + 10000₴'/></span>
                    <span>Найбільша витрата : -3956₴ <FontAwesomeIcon icon={faCircleInfo}
                                                                      title='Купив кросівки Adidas Responce CL 06.06.2024 | - 3956₴'/></span>
                </div>
                :
                <div className='data'>
                    <span>Кількість операцій за місяць : 10 </span>
                    <span>Середня вартість операції : +246₴ </span>
                    <span>Кількість витрат : 4 </span>
                    <span>Кількість надходжень : 6 </span>
                    <span>Найбільше надходженя : +10000₴ <FontAwesomeIcon icon={faCircleInfo}
                                                                          title='Заробітня плата 09.06.2024 | + 10000₴'/></span>
                    <span>Найбільша витрата : -3956₴ <FontAwesomeIcon icon={faCircleInfo}
                                                                      title='Купив кросівки Adidas Responce CL 06.06.2024 | - 3956₴'/></span>
                </div>
        }
    </div>)
}
export default Statistics;