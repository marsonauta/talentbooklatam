import React from 'react'

class ContactElement extends React.Component {

    constructor(props) {
        super(props)

        this.classes = new Map([['cv', 'contact-cv'], ['in', 'contact-in'], ['md', 'contact-wl'], [undefined, 'default']])
        this.images = new Map([['cv', 'fas fa-passport'], ['in', 'fab fa-linkedin'], ['md', 'fab fa-medium'], [undefined, 'default']])
        this.values = new Map([['cv', ' Currículum'], ['in', ' LinkedIn'], ['md', ' Medium'], [undefined, 'default']])

        this.state = {
            class: this.classes.get(this.props.type),
            image: this.images.get(this.props.type),
            value: this.values.get(this.props.type),
        }
    }

    render() {
        return <li className={this.state.class}>
            <a href={this.props.href} target="_blank">
                <i className={this.state.image} />
                {this.state.value}
            </a>
        </li>
    }
}

export default ContactElement