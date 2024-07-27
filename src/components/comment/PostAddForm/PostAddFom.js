import React from "react"
import "./PostAddForm.css"

export default class PostAddForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            post: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this)
        this.onSumbit = this.onSumbit.bind(this)
    }
    onChangeValue(e){
     this.setState({
        post: e.target.value
     })
    }

    onSumbit(e){
        e.preventDefault()
        this.props.onAdd(this.state.post)
        this.setState({
            post: ''
        })
    }
    render(){
        return(
            <form className="bottom-panel d-flex" onSubmit={this.onSumbit}>
                <input
                    type="text"
                    placeholder="Leave a comment for this content"
                    className="form-control new-post-label"
                    value={this.state.post}
                    onChange={this.onChangeValue}
                />
                <button 
                    type="sumbit" 
                    className="btn btn-outline-secondary add"
                >
                    Add Comment
                </button>
            </form>
        )
    }
}