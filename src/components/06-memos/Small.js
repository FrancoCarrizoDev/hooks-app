import React, {memo} from 'react'

export const Small = memo(({value}) => {
    console.log('holi')
    return (
        <small>
            {value}
        </small>
    )
})
