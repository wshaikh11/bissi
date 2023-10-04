import React, { useImperativeHandle, useState } from 'react';
import "./WinnerList.css";

const WinnerList = React.forwardRef((props,ref) => {
    const[winerlist,setWinnerList] = useState([
        {
            name : "Jitin",
            date : "5th July"
        },
        {
            name : "Sahil",
            date : "5th August"
        },
        {
            name : "Juned",
            date : "5th September"
        }

    ]);

    useImperativeHandle(ref, () => ({
      winerlist,
      addWinner() {
        addWinner()
      }
    }))

    const addWinner = () => {
      const newList = winerlist.concat({ name:props.winner, date: "5th October" });
      setWinnerList(newList);
    }

    const winner = winerlist.map((list)=>{   
        return <li>{list.name} &nbsp;{list.date}</li>;   
    });
    
    
  return (
    <div className='winner'>
      <h3>{winner}</h3>
    </div>
  );
})

export default WinnerList;
