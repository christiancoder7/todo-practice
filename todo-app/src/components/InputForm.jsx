import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setTaskList([
            ...taskList, //...はスプレッド構文。以前の配列の情報が含まれている。下のオブジェクトをtasklist配列に入れ込む。
            {
                id: taskList.length,
                text: inputText
            }
        ])
        setInputText("")
    }
    
    const handleChange = (e) => {
        setInputText(e.target.value)
    }
  return (
    <div className='inputForm'>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputText}/>
            <button>
            <i className="fa-solid fa-plus"></i>
            </button>
        </form>
    </div>
  )
}

export default InputForm