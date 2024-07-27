import React from "react";

export default class PostListStatusFilter extends React.Component{
    constructor(props){
        super(props)
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]
    }
    render(){
        const buttons = this.buttons.map(({name, label}) =>{
            const active = this.props.filter === name
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return(
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${clazz}`}
                    onClick={() => this.props.onfilterSelect(name)}
                    >
                    {label}
                </button>
            )
        })
        return(
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}