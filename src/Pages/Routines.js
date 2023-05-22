import React from "react";
import '../App.css'
import { HomeNavBar } from "../Layouts/HomeNavBar";
import CardComponent from "../Layouts/CardComponent";

export function Routines() {
    return (
        <div className="store">
            <div className='home_header'>
                <div><HomeNavBar/></div>
            </div>
            <CardComponent/>
        </div>
    )
}