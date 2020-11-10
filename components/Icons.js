import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

const Icons = ({name}) => {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={40} color="#f4c724" />

        case 'cross':
            return <Icon name="times" size={40} color="#10a881" />

        default:
            return <Icon name="pencil" size={40} color="#303030" />
            }
}

export default Icons;