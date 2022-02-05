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

    // Add Plus+ item Event
    const handleAddButtonClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 12,
            isSelected: false,
        }
        console.log('xxx')
        // for const [items, setItems] = useState([
        //  add Patam & OverRive Array Param
        const newItems = [...items, newItem]
        setItems(newItems)
        inputValue('')
    }

    //  get index
    const habdleQuentityIncrease = (index) => {
        /* alert(index) */
        const newItems = [...items]
        newItems[index].quantity++
        setItems(newItems)
    }
    const habdleQuentityDecrease = (index) => {
        const newItems = [...items]
        newItems[index].quantity--
        setItems(newItems)
    }

    return (
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
                        <div className='item-container'>
                            <div className='item-name'>
                                {item.isSelected ? (
                                    <>
                                        <FontAwesomeIcon icon={faCheckCircle} />
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
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End Map */}
                <div className='total'>Total: </div>
            </div>
        </div>
    )
}

export default App
