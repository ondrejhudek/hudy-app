import React, { PropTypes } from 'react'
import { GridTile, List, ListItem } from 'material-ui'
import { connect } from 'react-redux'

import VisibleTodoList from '../../containers/todo/VisibleTodoList'
import AddTodoItem from '../../containers/todo/AddTodoItem'
import Footer from '../../components/todo/Footer'

const style = {
    gridTile: {
        display: 'inline-block',
        width: '48%',
        margin: '0.5%',
        verticalAlign: 'top',
        border: '1px solid #eee',
        borderRadius: 2
    },
    subheader: {
        paddingTop: 5,
        paddingBottom: 2,
        paddingRight: 16
    },
    footer: {
        marginTop: 6,
        paddingTop: 12,
        paddingBottom: 8,
        borderTop: '1px solid #ddd'
    }
}

let Todo = ({ dispatch, id, _id, todos, filter }) => {
    return (
        <GridTile style={style.gridTile}>
            <List subheader={<AddTodoItem id={id}/>} subheaderStyle={style.subheader}>
                <VisibleTodoList id={id} filter={filter} items={todos} />
                <ListItem children={<Footer key={id} id={id} objectId={_id} filter={filter}/>} disabled={true} style={style.footer}/>
            </List>
        </GridTile>
    )
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    filter: PropTypes.string.isRequired
}

Todo = connect()(Todo)

export default Todo
