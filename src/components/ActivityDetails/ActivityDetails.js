import React from 'react'
import './ActivityDetails.css'
import moment from 'moment'
import PropTypes from 'prop-types'

const ActivityDetails = ({ id, rating, date, item }) => {
    return(
        <div className='Activity-Details' className={`${item}-detail`} id={id}>
            <span className="close" id={id}>&times;</span>
            <h2 className='rating'>Your Rating: {rating}</h2>
            <h3 className='date'>{moment(date).format('dddd')}, {moment(date.props.children).format('ll')} at {moment(date.props.children).format('LT')}</h3>
        </div>
    )
}

ActivityDetails.propTypes = {
    id: PropTypes.string,
    item: PropTypes.string,
    rating: PropTypes.string,
    date: PropTypes.object,
}

export default ActivityDetails