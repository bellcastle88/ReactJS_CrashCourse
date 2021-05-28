import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* Button 재사용가능 */} 
            <Button color='green' text='click'/>
        </header>
    )
}

// defaultProps설정
Header.defaultProps = {
    title: 'Task Tracker',
}

// propTypes 지정
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
