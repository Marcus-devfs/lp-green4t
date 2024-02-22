import { Box, Text } from "../../atoms";

export const Banner = ({ img = "" }) => {

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                gap: 3,
                marginTop: { xs: `0px`, xm: '0px', md: '0px', lg: '0px' },
                height: { xs: '550px', xm: 'auto', md: 'auto', lg: 780, xl: '966px' },
            }}>
                <Box sx={{
                    ...styles.imageHeader,
                }} />
            </Box>
        </>
    )
}

const styles = {
    container: {
        left: 0,
        width: { xs: `100%`, xm: `100%`, md: `100%`, lg: `100%` },
        margin: ' 100px auto',
        height: 'auto',
        // position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    imageHeader: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: `url('/background/background-image.jpeg')`,
        width: { xs: '100%', xm: '90%', md: '90%', lg: '100%' },
        height: { xs: '550px', xm: '90%', lg: 780, xl: '966px' }
    },
}