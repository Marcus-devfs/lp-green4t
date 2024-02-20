

import React, { useEffect, useState } from "react"
import { Box, Text } from "../../atoms"
import { useAppContext } from "../../context/AppContext"
import { Banner } from "../../components/banner/banner"
import { useRouter } from "next/router"

export default function Contacts() {

    const { alert, setLoading } = useAppContext()
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3500)
    }, [])

    return (
        <>
            <Box>
                <Box fullWidth sx={{ ...styles.containerSection }}>
                    <Box sx={{ display: 'flex', width: '100%', height: { xs: 'auto', xm: 480, md: 480, lg: 735, xl: 968 }, }}>
                        <Box sx={{
                            position: 'absolute',
                            width: '100%',
                            height: { xs: 400, xm: 480, md: 480, lg: '100%' },
                            zIndex: 999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    gap: 3,
                                    padding: { xs: '10px 80px', xm: '10px 30px', md: '0px 300px', lg: '0px 300px', xl: '0px 300px' },
                                    maxWidth: { xs: '100%', xm: '100%', md: '100%', lg: '100%' }
                                }}>
                                <Box sx={{ display: 'flex', }}>
                                    < Box sx={{
                                        ...styles.menuIcon,
                                        width: { xs: 80, xm: 40, md: 300, lg: 300 }, height: { xs: 40, xm: 40, md: 80, lg: 200 },
                                        aspectRatio: '1/1',
                                        backgroundImage: `url('/icons/logo-green.svg')`,
                                        transition: '.3s',
                                    }} />
                                </Box>
                                <Text bold veryLarge style={{ color: '#fff' }}>Agradeçemos sua contribuição</Text>
                            </Box>

                        </Box>
                        <Banner />
                    </Box>
                </Box>
                {/* <Footer /> */}
            </Box>
        </>
    )
}

const styles = {
    containerSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: { xs: 0, xm: 10, md: 10, lg: 0 },
        left: 0,
        width: '100%',
        height: 'auto'
    },
    menuIcon: {
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: 15,
        height: 15,
    },
}