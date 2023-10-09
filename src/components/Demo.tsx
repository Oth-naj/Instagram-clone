import React, { useEffect, useState } from 'react'
import { Todointerface } from "../../models/Todointerface";

export default function Demo() {
    
    const [data, setData] = useState<Todointerface[]>([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
            return res.json()
        }).then((values: Todointerface[]) => {
            setData(values)
        })
    }, [])
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                        {
                            data.map((item, key)=>{
                              return  <h6>{item.title}</h6>
                              
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}