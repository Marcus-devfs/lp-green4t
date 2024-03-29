
import { Box } from '../atoms'
import { AppProvider, useAppContext } from '../context/AppContext'
import '../styles/globals.css'

function App({ Component, pageProps }) {

   return (
      <AppProvider>
         <Box sx={styles.bodyContainer}>
            <Box sx={{
               ...styles.contentContainer,
            }}>
               <Component {...pageProps} />
            </Box>
         </Box>

      </AppProvider>
   )
}

export default App;

const styles = {
   bodyContainer: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "row",
      width: '100%',
   },
   contentContainer: {
      display: "flex",
      width: '100%',
      flexDirection: 'column',
      flex: 1,
      gap: `35px`,
      backgroundColor: '#fff',
      // padding: { xs: `20px`, xm: `25px`, md: `50px`, lg: `0px 80px 0px 80px` },  
      // paddingBottom: `60px`,
      overflowY: 'hidden',
      // marginTop: { xs: `60px`, xm: 10, md: 10, lg: 10 }
   },
}