import "./AppHeader.css"
const AppHeader = ({liked, allPost}) =>{
    return(
        <div className="app-header d-flex">
            <h1>Ergashev Abdulloh</h1>
            <h2>{allPost} posts, {liked} like</h2>
        </div>
    )
}

export default AppHeader