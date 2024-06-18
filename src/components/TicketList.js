import React from "react";
import TicketItem from "./TicketItem";
import ticketReducer from "../reducers/ticketReducer";
export default function TicketList({tickets,dispatch})
{
    return (
        <div className="ticket-list">
            {
                tickets.map(ticket =>(
                    <TicketItem key={ticket.id} dispatch={dispatch} ticket={ticket}/>
                ))
            }
        </div>
    )
}