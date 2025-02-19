import AppHeader from "../AppHeader/AppHeader"
import PostAddForm from "../PostAddForm/PostAddFom"
import PostList from "../PostList/PostList"
import PostListStatusFilter from "../PostListStatusFilter/PostListStatusFilter"
import SearchPanel from "../SearchPanel/SearchPanel"
import './AppComent.css'
import React from "react"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { label: "Good photo", important: false, like: false, id: 1 },
                { label: "It's awsome", important: false, like: false, id: 2 },
                { label: "I like this content", important: false, like: false, id: 3 }
            ],
            term: '',
            filter: 'all'

        }
        this.maxId = 4
        this.onDelete = this.onDelete.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onfilterSelect = this.onfilterSelect.bind(this)
    }
    onDelete(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index)
            const after = data.slice(index + 1)
            const newArr = [...before, ...after]

            return {
                data: newArr
            }
        })
    }
    addItem(body) {
        const newPost = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr1 = [...data, newPost]

            return {
                data: newArr1
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)
            const oldItem = data[index]
            const newItem = { ...oldItem, like: !oldItem.like }
            const before = data.slice(0, index)
            const after = data.slice(index + 1)
            const newArr = [...before, newItem, ...after]
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)
            const oldItem = data[index]
            const newItem = { ...oldItem, important: !oldItem.important }
            const before = data.slice(0, index)
            const after = data.slice(index + 1)
            const newArr = [...before, newItem, ...after]
            return {
                data: newArr
            }
        })
    }

    onSearchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch(term) {
        this.setState({ term })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onfilterSelect(filter) {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state
        const liked = data.filter(item => item.like).length
        const allPost = data.length
        const visiblePosts = this.filterPost(this.onSearchPost(data, term), filter)

        return (
            <div className="body">
                <div className="imgContent">
                    <img src="http://picsum.photos/800/300"/>
                </div>
                <div className="app">
                    <PostAddForm onAdd={this.addItem} />
                    <PostList
                        posts={visiblePosts}
                        onDelete={this.onDelete}
                        onToggleImportant={this.onToggleImportant}
                        onToggleLiked={this.onToggleLiked}
                    />
                    <div className="search-panel d-flex">
                        <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    </div>
                </div>
            </div>
        )
    }
}