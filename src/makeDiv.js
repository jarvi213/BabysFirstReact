import React from 'react'
import STORE from './store'
import './makeDiv.css'
import MakeCardDiv from './makeCardDiv'

function MakeDiv() {
    const arrayofLists = STORE.lists.map((list) => {
            return( 
                <div className="List">
                <header key={list.id} className="List-header">{list.header}</header>
                <section className="List-cards">
                <MakeCardDiv />  
                </section>
                </div>
            )
        }
    )
    return arrayofLists;
}

export default MakeDiv;