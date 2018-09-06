import React from 'react'

export default class HelloReact extends React.Component
{
    render()
    {
        return(
            <div>
              learning React {this.props.name}
              ({this.props.type})
            </div>
        )
    }
}