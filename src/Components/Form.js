import React from "react";
import { useState, useEffect } from "react";

const Form=()=>{
    const[date,setDate]=useState("");
    const[from,setFrom]=useState("");
    const[to,setTo]=useState("");

    const[bookedSlots,setBookedSlots]=useState({});

    const[facility,setFacility]=useState();

    const handleDatechange=(e)=>{
        setDate(e.target.value);
    }
    const handleFromchange=(e)=>{
        setFrom(e.target.value);
    }
    const handleTochange=(e)=>{
        setTo(e.target.value);
    }
    const handleChange=(e)=>{
        setFacility(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const dates=Object.keys(bookedSlots);
        // dates: ["08/06/23", "09/06/23"]
    
        const thHours = [];
        for (var i = from; i < to; i++) {
          thHours.push(i);
        }
        // thHours: [11, 12]

          var price = 0;
          if (facility=="Tennis Court") {
            price += 50 * thHours.length;
          } else {
            for (var p = 0; p < thHours.length; p++) {
              if (thHours[p] < 16) {
                price += 100;
              } else {
                price += 500;
              }
            }
          }
        if (dates.includes(date)) {
          const slots = bookedSlots[date];
          // slots: [10, 11]
          let flag = true;
          for (var j = 0; j < thHours.length; j++) {
            if (slots.includes(thHours[j])) {
              alert("Booking Failed");
              flag = false;
              break;
            }
          }
          if (flag) {
            alert(`Booking Successful, Rs. ${price}`);
            setBookedSlots({ ...bookedSlots, [date]: [...slots, ...thHours] });
          }
        } else {
          alert(`Booking Successful, Rs. ${price}`);
          setBookedSlots({ ...bookedSlots, [date]: thHours });
        }
      };
    
      React.useEffect(() => {
        console.log(bookedSlots);
      }, [bookedSlots]);
    
    return(
        <>
        <form className="flex flex-col m-5 p-2" onSubmit={handleSubmit}>
            <label>
                <input type="radio" required name="facility" value="Clubhouse" className="border p-1 m-1" onChange={handleChange}/> Clubhouse
            </label>
            <label>
                <input type="radio" required name="facility" value="Tennis Court" className="border p-1 m-1" onChange={handleChange}/> Tennis Court
            </label>
            <label> Date:
                <input type="date" required name="date" className="border p-1 m-1" onChange={handleDatechange}/>
            </label>
            <label>From:
                <select name="from" required className="p-1 m-1 border" onChange={handleFromchange}>
                    <option selected value="10">10am</option>
                    <option value="11">11am</option>
                    <option value="12">12pm</option>
                    <option value="13">13pm</option>
                    <option value="14">14pm</option>
                    <option value="15">15pm</option>
                    <option value="16">16pm</option>
                    <option value="17">17pm</option>
                    <option value="18">18pm</option>
                    <option value="19">19pm</option>
                    <option value="20">20pm</option>
                    <option value="21">21pm</option>
                </select>
            </label>
            <label>To:
                <select name="from" className="p-1 m-1 border" onChange={handleTochange}>
                    <option selected value="11">11am</option>
                    <option value="12">12pm</option>
                    <option value="13">13pm</option>
                    <option value="14">14pm</option>
                    <option value="15">15pm</option>
                    <option value="16">16pm</option>
                    <option value="17">17pm</option>
                    <option value="18">18pm</option>
                    <option value="19">19pm</option>
                    <option value="20">20pm</option>
                    <option value="21">21pm</option>
                    <option value="22">22pm</option>
                </select>
            </label>
            <input type="submit" className="p-1 m-1 border bg-slate-200"/>
        </form>
        </>
    )
}

export default Form;


