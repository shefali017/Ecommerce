import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    login: {

        background: '#FFFFFF',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none'
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            fontSize: 12,
            alignItems: 'center',
            color: '#fff'
        }
    },
    container: {
        display: 'flex'
    }

})

const HeaderButtons = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Link><Button variant="contained" className={classes.login}>Login</Button></Link>
            <Link><Typography style={{ marginTop: 5 }}>More</Typography></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>
        </Box>
    )
}

export default HeaderButtons;