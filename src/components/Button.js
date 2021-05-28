import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return (
        // 스타일 지정 
        <button style={{ backgroundColor: color }} 
        className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
