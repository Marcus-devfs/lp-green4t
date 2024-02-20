import { Typography } from "@mui/material";
import { Colors } from "../organisms";

export const Text = (props) => {

   const {
      children,
      light = false,
      bold = false,
      small = false,
      large = false,
      title = false,
      veryLarge = false,
      style = {}
   } = props;

   return (
      <Typography
         {...props}
         sx={{
            fontFamily: 'PoppinsRegular',
            fontSize: {xs:`12px`, xm: `15px`, md: `15px`,lg: `16px`},
            color: '#000',
            ...(light && { fontFamily: 'PoppinsLight' }),
            ...(bold && { fontFamily: 'PoppinsSemiBold' }),
            ...(small && { fontSize: {xs:`10px`, xm: `13px`, md: `13px`,lg: `13px`} }),
            ...(large && { fontSize: {xs:`12px`, xm: `18px`, md: `18px`,lg: `20px`} }),
            ...(title && { fontSize: {xs:`18px`, xm: `22px`, md: `22px`,lg: `25px`} }),
            ...(veryLarge && { fontSize: {xs:`15px`, xm: `25px`, md: `30px`,lg: `40px`} }),
            ...style
         }}
      >
         {children}
      </Typography>
   )
}