import React, { Component } from 'react'
import './Activity.css'
import { getAllMessages } from '../../apiCalls'
import ActivityDetails from '../ActivityDetails/ActivityDetails'

class Activity extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            error: ''
        }
    }

    async componentDidMount() {
        try {
            const data = await getAllMessages()
            const messages = data.messages.map(message => { 
                return({ body: message.body, dateCreated: message.dateCreated, direction: message.direction })
            })
            this.setState({ messages: messages })
        } catch (error) {
            this.setState({ error: error })
        }
    }

    checkMessageBody(message) {
        const body = message.body;
        const splitBody = body.split(' ')
        const lastCharacter = parseInt(splitBody[1])
        const firstWord = splitBody[0]
        const items = ['Candle', 'Eucalyptus', 'Lemon', 'Rosemary']
        if(items.includes(firstWord)) {
            return(lastCharacter > 0 && lastCharacter < 6)
        }
    }

    filterInboundMessages() {
        const inboundMessages = this.state.messages.filter(message => {
            return message.direction === 'inbound'
        })
        return inboundMessages
    }

    createList(messages) {
        const filteredMessages = messages.filter(message => this.checkMessageBody(message))
        return filteredMessages.map(message => {
            const body = message.body.split(' ')
            return(<ActivityDetails item={body[0]} rating={body[1]} date={message.dateCreated} />)
        })
    }

    render() {
        const ratings = this.createList(this.filterInboundMessages())
        return(
            <div className='Activity-container'>
                <h1>Recent Activity</h1>
                {this.state.messages && 
                <div className='ratings-container'>
                    <div className='lemon-ratings'>
                        <h1>Lemon</h1>
                        {ratings.filter(rating => rating.props.item === 'Lemon')}
                    </div>
                    <div className='candle-ratings'>
                        <h1>Candle</h1>
                        {ratings.filter(rating => rating.props.item === 'Candle')}
                    </div>
                    <div className='eucalyptus-ratings'>
                        <h1>Eucalyptus</h1>
                        {ratings.filter(rating => rating.props.item === 'Eucalyptus')}
                    </div>
                    <div className='rosemary-ratings'>
                        <h1>Rosemary</h1>
                        {ratings.filter(rating => rating.props.item === 'Rosemary')}
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Activity