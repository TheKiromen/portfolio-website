import * as React from 'react';

class Item extends React.Component{
    render() {
        //TODO create paper to hold links, pass as children icon and link itself
        return <b>{this.props.children}</b>
    }
}

export default Item;