import React, {MouseEvent} from 'react';
// const callback = (): number => {
//     alert('hey')
//     return 12;
// }
// window.setTimeout(callback, 1000)

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    const saveUser = () => {
        // doctor.help()
        // teatcher.learn()
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <button name='delete' onClick={deleteUser}>x</button>
            <button name='save' onClick={saveUser}>x</button>
        </div>
    )
}