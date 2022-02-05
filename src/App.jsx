import React, { useState, useEffect } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronRight,
    faChevronLeft,
    faCircle,
    faCheckCircle,
    faPlus,
} from '@fortawesome/free-solid-svg-icons'

const App = () => {
    // const [items, setItems] = useState([]);
    const [items, setItems] = useState([
        { itemName: 'item 1', quantity: 1, isSelected: false },
        { itemName: 'item 2', quantity: 3, isSelected: true },
        { itemName: 'item 3', quantity: 2, isSelected: false },
    ])

    // input value param
    const [inputValue, setInputValue] = useState('')

    // internal state
    const totalInit = items.reduce((t, item) => {
        return t + item.quantity
    }, 0)

    const [totalItemCount, setTotalItemCount] = useState(totalInit)

    // Add Plus  Add item
    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        }
        console.log('xxx')
        // for const [items, setItems] = useState([
        //  add Patam & OverRive Array Param
        const newItems = [...items, newItem]
        setItems(newItems)
        setInputValue('')
    }

    //  get index + Add quantity
    const habdleQuentityIncrease = (index) => {
        /* alert(index) */
        const newItems = [...items]
        newItems[index].quantity++
        setItems(newItems)
        CalcTotalCount()
    }

    //  get index + Minus quantity
    const habdleQuentityDecrease = (index) => {
        const newItems = [...items]
        newItems[index].quantity--
        setItems(newItems)
        CalcTotalCount()
    }

    // toggle bool isSelected
    const toggleChange = (index) => {
        const newItems = [...items]
        newItems[index].isSelected = !newItems[index].isSelected
        setItems(newItems)
    }

    // calculate total
    const CalcTotalCount = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity
        }, 0)

        setTotalItemCount(totalItemCount)
    }

    return (
        <React.Fragment>
            <div className='app-background'>
                <div className='main-container'>
                    <div className='add-item-box'>
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className='add-item-input'
                            placeholder='Add an item...'
                        />
                        <FontAwesomeIcon
                            icon={faPlus}
                            onClick={handleAddButtonClick}
                        />
                    </div>
                    {/* Map */}
                    <div className='item-list'>
                        {items.map((item, index) => (
                            <div className='item-container' key={index}>
                                <div
                                    className='item-name'
                                    onClick={() => toggleChange(index)}
                                >
                                    {item.isSelected ? (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faCheckCircle}
                                            />
                                            <span className='completed'>
                                                {item.itemName}
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon icon={faCircle} />
                                            <span>{item.itemName}</span>
                                        </>
                                    )}
                                </div>
                                <div className='quantity'>
                                    <button
                                        onClick={() =>
                                            habdleQuentityDecrease(index)
                                        }
                                    >
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>

                                    <span> {item.quantity} </span>

                                    <button
                                        onClick={() =>
                                            habdleQuentityIncrease(index)
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* End Map */}
                    <div className='total'>Total: {totalItemCount} </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
