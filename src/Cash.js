import React from "react";
import calicon from "./calicon.png";
import Operating from "./Operating";
import CashHeader from "./CashHeader";
class Cash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { balance: 0 };
    this.stinker = React.createRef();
  }
  loadDwolla = async () => {
    //var DIALOG_DIMENSIONS = { width: "90%", height: "90%" };
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://cdn.dwolla.com/1/dwolla.js";
    /*s.src =
      environment === 'prod'
        ? 'https://cdn.dwolla.com/1/dwolla.min.js'
        : 'https://cdn.dwolla.com/1/dwolla.js'

    s.addEventListener('load', (): void => {
      window.dwolla.configure(environment)
      resolve()
    }) */
    script.onload = async () => {
      const appKey = "OrFxbaqmtJzKhZVlWAM58yc4GZkXKYHFtLwpm5DG426IREJffi";
      const appSecret = "PutLuNs2sksYmOiSdwldnUcjCPlD2UgQX7PCzhALbBTrZOmgId";
      await fetch(`https://api-sandbox.dwolla.com/token`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "jwi5k.csb.app",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa({ [appKey]: appSecret })}`
        },
        body: { grant_type: "client_credentials" },
        maxAge: 3600
      })
        .then(async response => await response.json())
        .then(body => {
          console.log(body);
        })

        .catch(err => console.log(err.message));
      window.dwolla.configure("dev");
      console.log("ok");
      const dwolla = window.dwolla;
      //const appKey = "OrFxbaqmtJzKhZVlWAM58yc4GZkXKYHFtLwpm5DG426IREJffi";
      //const appSecret = "PutLuNs2sksYmOiSdwldnUcjCPlD2UgQX7PCzhALbBTrZOmgId";
      const client = new dwolla.Client({
        key: appKey,
        secret: appSecret,
        environment: "sandbox" // optional - defaults to production
      });
      // create a token
      client.auth
        .client()
        .then(appToken => {
          console.log(appToken);
          appToken.get("customers", { limit: 10 });
        })
        .then(res => console.log(res.body));
    };
    document.body.appendChild(script);
  };
  componentDidMount = () => {
    //this.loadDwolla();
  };
  render() {
    return (
      <div
        onScroll={e => {
          if (
            this.stinker.current.scrollTop <= 224 &&
            this.state.showtimeheader
          ) {
            this.setState({ showtimeheader: false });
          } else if (
            this.stinker.current.scrollTop > 224 &&
            !this.state.showtimeheader
          ) {
            this.setState({ showtimeheader: true });
          }
        }}
        style={
          this.props.vaumoneyOpen
            ? {
                display: "flex",
                position: "fixed",
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                top: "0",
                left: "0",
                color: "teal",
                zIndex: "1",
                transition: ".3s ease-in",
                flexDirection: "column"
              }
            : {
                display: "flex",
                position: "fixed",
                backgroundColor: "white",
                height: "100%",
                width: "0%",
                top: "0",
                left: "0",
                color: "white",
                opacity: "0",
                zIndex: "-1",
                transition: ".3s ease-out",
                flexDirection: "column"
              }
        }
      >
        <div
          onClick={
            this.state.revenueShow || this.state.expenseShow
              ? () => this.setState({ revenueShow: false, expenseShow: false })
              : this.props.closeVaumoney
          }
          style={{
            margin: "10px",
            display: "flex",
            position: "fixed",
            width: "36px",
            top: "0",
            left: "0",
            borderRadius: "50px",
            height: "36px",
            border: "1px teal solid",
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            color: "teal",
            zIndex: "3"
          }}
        >
          {"<"}
        </div>
        <div
          style={{
            display: "flex",
            position: "fixed",
            backgroundColor: "teal",
            borderBottom: "1px white solid",
            height: "56px",
            width: "100%",
            top: "0px",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            zIndex: "1",
            transform: "translateY(0%)"
          }}
        >
          <h1>Cash</h1>
          <img
            src={calicon}
            style={{
              display: "flex",
              position: "absolute",
              right: "0px",
              margin: "10px",
              width: "36px",
              top: "0px",
              height: "36px",
              backgroundColor: "teal",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "1",
              color: "white"
            }}
            alt="error"
          />
        </div>
        <div
          ref={this.stinker}
          style={
            !this.props.vaumoneyOpen
              ? {
                  display: "flex",
                  position: "fixed",
                  backgroundColor: "white",
                  bottom: "112px",
                  width: "0%",
                  top: "56px",
                  left: "0",
                  color: "white",
                  opacity: "0",
                  zIndex: "-1",
                  transition: ".3s ease-out",
                  flexDirection: "column",
                  overflowY: "auto",
                  overflowX: "hidden"
                }
              : (this.stinker.current && this.stinker.current.scrollTop) >
                  224 ||
                this.state.expenseShow ||
                this.state.revenueShow
              ? {
                  display: "flex",
                  position: "fixed",
                  backgroundColor: "white",
                  bottom: "112px",
                  width: "100%",
                  top: "0",
                  left: "0",
                  color: "teal",
                  zIndex: "1",
                  transition: ".3s ease-in",
                  flexDirection: "column",
                  overflowY: "auto",
                  overflowX: "hidden"
                }
              : {
                  display: "flex",
                  position: "fixed",
                  backgroundColor: "white",
                  bottom: "112px",
                  width: "100%",
                  top: "56px",
                  left: "0",
                  color: "teal",
                  zIndex: "1",
                  transition: ".3s ease-in",
                  flexDirection: "column",
                  overflowY: "auto",
                  overflowX: "hidden"
                }
          }
        >
          <div
            style={
              this.state.showtimeheader ||
              (this.state.expenseShow || this.state.revenueShow)
                ? {
                    display: "flex",
                    position: "fixed",
                    backgroundColor: "teal",
                    borderBottom: "1px white solid",
                    top: "0px",
                    height: "56px",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    zIndex: "2"
                  }
                : {
                    display: "flex",
                    position: "fixed",
                    backgroundColor: "teal",
                    borderBottom: "1px white solid",
                    top: "-56px",
                    height: "56px",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    zIndex: "2"
                  }
            }
          >
            <h2>
              this year
              {(this.state.revenueShow || this.state.expenseShow) &&
                `'s ${this.state.expenseShow ? "expenses" : ""}${
                  this.state.revenueShow ? "revenue" : ""
                }`}
            </h2>
            <div
              style={{
                display: "flex",
                position: "absolute",
                right: "20px",
                width: "36px",
                height: "36px",
                backgroundColor: "teal",
                alignItems: "center",
                justifyContent: "center",
                color: "white"
              }}
            >
              \/
            </div>
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              backgroundColor: "white",
              height: "min-content",
              width: "100%",
              top: "0",
              left: "0",
              color: "teal",
              zIndex: "1",
              transition: ".3s ease-in",
              flexDirection: "column"
            }}
          >
            <CashHeader
              revenueShow={this.state.revenueShow}
              expenseShow={this.state.expenseShow}
              balance={this.state.balance}
            />

            <Operating
              scrolled={this.stinker.current && this.stinker.current.scrollTop}
              showtimeheader={this.state.showtimeheader}
              revenueShow={this.state.revenueShow}
              expenseShow={this.state.expenseShow}
              openRev={() =>
                this.setState({ revenueShow: true, expenseShow: false })
              }
              openExp={() =>
                this.setState({ expenseShow: true, revenueShow: false })
              }
            />
          </div>
        </div>
        <div
          style={
            this.state.revenueShow || this.state.expenseShow
              ? { display: "none" }
              : {
                  flexDirection: "column",
                  display: "flex",
                  position: "fixed",
                  backgroundColor: "teal",
                  width: "100%",
                  height: "112px",
                  bottom: "0",
                  left: "0",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  zIndex: "20"
                }
          }
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              backgroundColor: "teal",
              borderBottom: "1px white solid",
              height: "56px",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              color: "white"
            }}
          >
            <h3>Show Accounting / Routing</h3>
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
              backgroundColor: "teal",
              borderBottom: "1px white solid",
              height: "56px",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              color: "rgb(150,200,190)"
            }}
          >
            <h3>Get / Renew Card</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Cash;
