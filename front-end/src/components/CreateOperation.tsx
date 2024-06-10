import {useState} from "react";
import {operations} from "../mock.json";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

const CreateOperation = function ({}) {
    const [op_type, setOp_type] = useState('expense');
    const [category, setCategory] = useState('food');
    const [title, setTitle] = useState('')
    const [currency, setCurrency] = useState('uah')
    const [delta, setDelta] = useState('0')
    const [date, setDate] = useState('')

    const createOp = () => {
        let highest_id = 0;
        operations.forEach((op) => {
            if (op.id > highest_id) {
                highest_id = op.id
            }
        })
        operations.push({
            id: highest_id + 1,
            owner_id: 1,
            type: op_type,
            delta: parseFloat(delta),
            currency: currency,
            title: title,
            category: category,
            date: date
        })
        console.log(operations)
    }
    return (
        <div className='create-operation-form'>
            <div className="row title-row">
                <input type="text" placeholder='Назва' value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="row">
                <input type="number" placeholder='Сума' value={delta} onChange={e => setDelta(e.target.value)}/>
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    <option value="uah">₴ UAH</option>
                    <option value="usd">$ USD</option>
                    <option value="eur">€ EUR</option>
                </select>
            </div>
            <div className="row">
                <label htmlFor="date">Дата операції</label>
                <input type="date" id='date' value={date} onChange={e => setDate(e.target.value)}/>
            </div>
            <div className="row">
                <label htmlFor="op_type">Тип операції</label>
                <select id="op_type" value={op_type} onChange={e => setOp_type(e.target.value)}>
                    <option value="expense">Витрата</option>
                    <option value="income">Прибуток</option>
                </select>
            </div>
            <div className="row">
                <label htmlFor="category">Категорія</label>
                <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
                    {
                        op_type === "expense" ? <>
                            <option value="food">Харчування</option>
                            <option value="car">Автомобіль</option>
                            <option value="transport">Транспорт</option>
                            <option value="cloth">Одяг</option>
                            <option value="rent">Оренда</option>
                            <option value="tax">Податки</option>
                        </> : <>
                            <option value="work">Зарплатня</option>
                            <option value="friend">Повернули</option>
                        </>
                    }
                </select>
            </div>
            <div className="row">
                <button onClick={createOp}>Створити <FontAwesomeIcon icon={faPlusCircle}/></button>
            </div>
        </div>
    )
}
export default CreateOperation;