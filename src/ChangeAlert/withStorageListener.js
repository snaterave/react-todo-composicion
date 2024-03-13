import {useState} from 'react';

const WithStorageListener=(WrappedComponent)=>{
return function WrappComponentWithStorageListener(props){
 const [storageChange,setStorageChange]= useState(false);

    window.addEventListener('storage', (change)=>{
        console.log(' change = ', change)
        console.log(' change.key = ', change.key)
        if(change.key === 'TODOS_V1'){
            setStorageChange(true);
        }
    })

    const toggelShow = ()=>{
        props.sincronize();
        setStorageChange(false)
    }

    return (
    <WrappedComponent
        show={storageChange}
        toggleShow={toggelShow}
    />
    )
}
}

export {WithStorageListener}

