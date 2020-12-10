import { IconButton } from '@material-ui/core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialIcon(props) {
    return (
        <IconButton href={props.link}>
            <FontAwesomeIcon icon={props.faIcon}/>
        </IconButton>
    )
}

export default SocialIcon