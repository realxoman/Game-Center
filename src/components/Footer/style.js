import { makeStyles } from "@mui/styles";

export const footerStyle = makeStyles((theme) => ({
  footer: () => ({
    display: "flex",
    backgroundColor: "#F2D7D9",
    textAlign: "center",
    padding: "50px",
    boxShadow: "10px"
  }),
  container: () => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  }),
  LeftFooter: {
    display: "flex",
    flexDirection: "column",
  },
  centerFooter: () => ({
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  }),

  // nav {
  //   display: flex;
  //   justify-content: space-between;
  // }
  
  // ul {
  //   display: flex;
  //   list-style-type: none;
  //   font-size: 30px;
  // }
  
  // li {
  //   width: 200px;
  //   text-decoration: none;
  // }
  // footer: () => ({
  //   backgroundColor: "#F2D7D9",
  //   width: "100%",
  //   textAlign: "left",
  //   fontFamily: "sans-serif",
  //   fontWeight: "bold",
  //   fontSize: "16px",
  //   padding: "50px",
  //   marginTop: "50px",
  //   justifyContent: "flex-start",
  //   // display: "flex",
  //   // flexDirection: "row"
  // }),
  // footerLeft: {
  //   width: "33%",
  //   paddingRight: " 15px",
  //   display: "inline-block",
  //   verticalAign: "top",
  // },
  // about: {
  //   lineHeight: "20px",
  //   color: "#ffffff",
  //   fontSize: " 13px",
  //   fontWeight: "normal",
  //   margin: 0,
  // },
  // footerCenter: {
  //   display: "inline-block",
  //   verticalAign: "top",
  //   width: "30%",
  //   // marginLeft: "500px"
  // },
  // footerRight: {
  //   display: "inline-block",
  //   verticalAign: "top",
  //   // width: "35%",
  //   position: "absolute",
  //   right: "22px",
  // },
  // icons: {
  //   margintop: " 25px",
  // },
  // a: {
  //   display: "inline-block",
  //   width: "35px",
  //   height: "35px",
  //   cursor: "pointer",
  //   backgroundColor: "#33383b",
  //   borderRadius: "2px",
  //   fontSize: "20px",
  //   color: "#ffffff",
  //   textAlign: "center",
  //   lineHeight: "35px",
  //   marginRight: "3px",
  //   marginBottom: "5px",
  // },
  // i: {
  //   backgroundColor: "#33383b",
  //   color: "#ffffff",
  //   fontSize: " 25px",
  //   width: "38px",
  //   height: "38px",
  //   borderRadius: "50%",
  //   textAlign: "center",
  //   lineHeight: "42px",
  //   margin: "10px 15px",
  //   verticalAlign: "middle",
  // },
  // menu: {
  //   color: "#ffffff",
  //   margin: "13px",
  //   padding: 0,
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
}));
