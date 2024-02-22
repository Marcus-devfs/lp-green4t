import { useRouter } from "next/router"
import { Box, Text } from "../../atoms"

export const Footer = ({ menuItems = [] }) => {

    const router = useRouter()

    const icons = [
        { id: '01', url: '/icons/linkedin.png' },
        { id: '02', url: '/icons/instagram.png' },
        { id: '03', url: '/icons/facebook-app-icon.png' },
    ]

    return (
        <Box sx={styles.container}>
            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', alignItems: 'center', marginBottom : 1 }}>

                < Box sx={{
                    ...styles.menuIcon,
                    width: { xs: 220, xm: 40, md: 300, lg: '337px' }, height: { xs: 200, xm: 40, md: 80, lg: '221px' },
                    backgroundImage: `url('/icons/logo_green_slogan.png')`,
                    transition: '.3s',
                }} />

                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                    {icons?.map((item, index) => {
                        return (
                            <Box key={index} sx={{
                                padding: '8px', borderRadius: '4px',
                                backgroundColor: '#00B861'
                            }}>
                                < Box sx={{
                                    ...styles.menuIcon,
                                    width: 13, height: 13, aspectRatio: '1/1',
                                    backgroundImage: `url('${item?.url}')`,
                                    transition: '.3s',
                                }} />
                            </Box>
                        )
                    })}
                </Box>
                <Text light style={{ color: '#fff' }}>green4t.com</Text>
            </Box>
        </Box >
    )
}


const styles = {
    container: {
        position: 'absolute',
        height: { xs: `60%`, xm: '50%', md: '50%', lg: '368px' },
        width: '100%',
        // backgroundColor: '#00A86B',
        backgroundImage: 'linear-gradient(135deg, #00874D 0%, #00CC66 100%)',
        backgroundPosition: 'center',  // Centraliza o gradiente
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: { xs: `column`, xm: 'row', md: 'row', lg: 'row' }
    },
    icon: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        width: 30,
        height: 30,
        marginRight: 1.5,
        "&:hover": {
            cursor: 'pointer', opacity: 0.8
        }
    },
    menuIcon: {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: 15,
        height: 15,
    },

}