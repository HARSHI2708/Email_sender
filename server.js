const { response } = require("express");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 5000;

function sendEmail(){
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
                type: 'OAUTH2',
                user: 'patilharshitha27@gmail.com',
                pass: 'harshitha@27',
                clientId:'197018785242-r375pgdgnla25oocmr0h4fhfgdgvnpbi.apps.googleusercontent.com',
                clientSecret:'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',
                refreshToken:'1//04zdALOMRzNFhCgYIARAAGAQSNwF-L9IrPEZ3GycPUBvwKvCyS4e1ZNXOKAH6IcCpRt2W4hU-mTo8paxu1yIi4I8Ay5e6zSAo9gg'
            }
        });

        const mail_configs = {
            from: 'patilharshitha27@gmail.com',
            to: 'harshithapatil27@gmail.com',
            subject: "Email_sender",
            html: `<!DOCTYPE html>
            <html lang="en">
            
            <body id="iazh" class="input" style="box-sizing: border-box; margin: 0;">
            
              <table id="iota" class="grid-item-row" style="box-sizing: border-box; padding: 0px 0px 0px 0px;">
                <tbody id="ijko" style="box-sizing: border-box;">
                  <tr id="inw6" style="box-sizing: border-box;">
                    <td id="i0hu" class="grid-item-cell2-l" style="box-sizing: border-box;">
                      <table id="ixic" class="grid-item-card" style="box-sizing: border-box;">
                        <tbody id="iz5m" style="box-sizing: border-box;">
                          <tr id="ip69" style="box-sizing: border-box;">
                            <td id="isdh" class="grid-item-card-cell" style="box-sizing: border-box;">
                              <table id="i28i" class="grid-item-card-body" style="box-sizing: border-box;">
                                <tbody id="i3bux" style="box-sizing: border-box;">
                                  <tr id="iszyd" style="box-sizing: border-box;">
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td id="i45hj" class="grid-item-cell2-r" style="box-sizing: border-box; margin: 0px 0px 0px 0px;">
                      <table id="ilcpl" class="grid-item-card" style="box-sizing: border-box;">
                        <tbody id="ienxd" style="box-sizing: border-box;">
                          <tr id="iu9c6" style="box-sizing: border-box;">
                            <td id="i0qse" class="grid-item-card-cell" style="box-sizing: border-box;">
                              <table id="il186" class="grid-item-card-body" style="box-sizing: border-box;">
                                <tbody id="iv4tw" style="box-sizing: border-box;">
                                  <tr id="i4awk" style="box-sizing: border-box;">
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table id="itw2i-2" class="grid-item-row" style="box-sizing: border-box;">
                <tbody id="i0cr7-2" style="box-sizing: border-box;">
                  <tr id="i18t9-2" style="box-sizing: border-box;">
                    <td id="i38d9-2" class="grid-item-cell2-l" style="box-sizing: border-box;">
                      <table id="iwd6f-2" class="grid-item-card" style="box-sizing: border-box;">
                        <tbody id="izdpd-2" style="box-sizing: border-box;">
                          <tr id="ix355-2" style="box-sizing: border-box;">
                            <td id="ijrnh-2" class="grid-item-card-cell" style="box-sizing: border-box;">
                              <table id="ik61p-2" class="grid-item-card-body" style="box-sizing: border-box;">
                                <tbody id="ie21n-2" style="box-sizing: border-box;">
                                  <tr id="i9e83-2" style="box-sizing: border-box;">
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table id="irslf-2" width="100%" height="150" style="box-sizing: border-box;">
                <tbody id="iaz0i-2" style="box-sizing: border-box;">
                  <tr id="i0i7h-2" style="box-sizing: border-box;">
                    <td id="i270k-2" valign="top" style="box-sizing: border-box;">
                      <div id="ixaxa-2" style="box-sizing: border-box;">
                      </div>
                      <div id="im7vl-2" style="box-sizing: border-box;">
                      </div>
                      <table id="i0sbg" width="35%" height="337" bgcolor="#faf8f8" style="box-sizing: border-box; height: 337px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 35%; background-color: #faf8f8;">
                        <tbody id="ioebv" style="box-sizing: border-box;">
                          <tr id="i62cu" style="box-sizing: border-box;">
                            <td id="iimbp" valign="top" bgcolor="#ffffff" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; background-color: #ffffff;">
                              <table id="ism8x" width="100%" height="50" style="box-sizing: border-box; height: 50px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">
                                <tbody id="izvd8" style="box-sizing: border-box;">
                                  <tr id="iligx" style="box-sizing: border-box;">
                                    <td id="i9lnn" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top;">
                                      <table id="i47ml" width="100%" height="35" style="box-sizing: border-box; height: 35px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">
                                        <tbody id="iyfxo" style="box-sizing: border-box;">
                                          <tr id="ihpq3" style="box-sizing: border-box;">
                                            <td id="ik2ug" width="50%" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; width: 50%;">
                                              <div id="ie3wk" style="box-sizing: border-box; padding: 10px;">
                                                <b id="i9qdi" style="box-sizing: border-box;">save
                                                </b>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td id="irzdk" width="50%" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; width: 50%;">
                                      <div id="itpgo" style="box-sizing: border-box; padding: 10px; text-align: right; font-size: 17px; margin: 5px 0px 0px 0px;">
                                        <b id="irx1f" style="box-sizing: border-box; margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;">Box 1 of 1 -1lb
                                        </b>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table id="i09pf" width="100%" bgcolor="#000000" style="box-sizing: border-box; width: 100%; background-color: #000000; margin: -44px 0px 10px 0px;">
                                <tbody id="igu07" style="box-sizing: border-box;">
                                  <tr id="i0qnq" style="box-sizing: border-box;">
                                    <td height="0" bgcolor="rgba(9,1,1,0.96)" id="iih8k" class="divider1" style="box-sizing: border-box; background-color: rgba(9,1,1,0.96); height: 0px; margin: -26px 0px 0px 0px; font-size: 0px; color: black; line-height: 9px;">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table id="iv3ve" width="100%" height="150" style="box-sizing: border-box; height: 150px; margin: -24px auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">
                                <tbody id="idiyc" style="box-sizing: border-box;">
                                  <tr id="iv0ky" style="box-sizing: border-box;">
                                    <td id="izhai" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top;">
                                      <table id="ixtad" width="100%" height="126" style="box-sizing: border-box; height: 126px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">
                                        <tbody id="iglk5" style="box-sizing: border-box;">
                                          <tr id="iab01" style="box-sizing: border-box;">
                                            <td id="imx6k" width="50%" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; width: 50%;">
                                              <div id="ihvny" style="box-sizing: border-box; padding: 10px; font-family: Tahoma, Geneva, sans-serif; font-size: 15px;">SHIP FORM:
                                              </div>
                                              <div id="i6j02" style="box-sizing: border-box; padding: 10px; margin: -23px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif; font-size: 15px;">Jagadeep hegadssse jkjjd
                                              </div>
                                              <div id="iruqb" style="box-sizing: border-box; padding: 10px; margin: -23px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif; font-size: 15px;">333 Boren Ave N yellapur
                                              </div>
                                              <div id="iv07r" style="box-sizing: border-box; padding: 10px; margin: -23px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif; font-size: 15px;">United States
                                              </div>
                                            </td>
                                            <td id="imew1" width="50%" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; width: 50%;">
                                              <div id="izypb" style="box-sizing: border-box; padding: 10px; font-family: Tahoma, Geneva, sans-serif; font-size: 15px;">SHIP TO:
                                              </div>
                                              <div id="icnzq" style="box-sizing: border-box; padding: 10px; margin: -23px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif; font-size: 15px;">FBA: Bangalore+sta012
                                              </div>
                                              <div id="iezql" style="box-sizing: border-box; padding: 10px; margin: -23px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif; font-size: 15px;">Amazon.com Services, Inc
                                              </div>
                                              <div id="ice6h" style="box-sizing: border-box; padding: 10px; margin: -23px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif; font-size: 15px;">4255 Ansod Blvd
                                              </div>
                                              <div id="iw02i" style="box-sizing: border-box; padding: 10px; margin: -23px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif; font-size: 15px;">Whitstone, In 46075-4412
                                              </div>
                                              <div id="i2qlf" style="box-sizing: border-box; padding: 10px; margin: -23px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif; font-size: 15px;">United yellapur h,mmkh
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div id="ioahh" style="box-sizing: border-box; padding: 9px 10px 13px 10px; color: #ede5e5; margin: -36px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif;">FBA (10/30/19    10:55 AM ) - 1
                              </div>
                              <table id="ii6ag" width="100%" height="29" bgcolor="#000000" style="box-sizing: border-box; width: 100%; margin: -37px 0px 10px 0px; height: 29px; background-color: #000000; color: #f8f8f8;">
                                <tbody id="imzp94" style="box-sizing: border-box;">
                                  <tr id="i31491" style="box-sizing: border-box;">
                                  </tr>
                                </tbody>
                              </table>
                              <table id="im01x" width="100%" height="150" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">
                                <tbody id="imnkm" style="box-sizing: border-box;">
                                  <tr id="i818sh" style="box-sizing: border-box;">
                                    <td id="i1hik" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top;">
                                      <table id="izaftc" width="100%" height="150" style="box-sizing: border-box; height: 150px; margin: 0 auto 10px auto; padding: 5px 5px 5px 5px; width: 100%;">
                                        <tbody id="ioz1db" style="box-sizing: border-box;">
                                          <tr id="iku43e" style="box-sizing: border-box;">
                                            <td id="ifdw5o" width="50%" valign="top" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; width: 50%;">
                                              <div id="iiaw9y" style="box-sizing: border-box; padding: 10px; text-align: center; margin: -25px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif; font-weight: 600; font-size: 11px;">FBA15JD9C5R9U000001
                                              </div>
                                              <table id="il9qza" width="100%" style="box-sizing: border-box; width: 100%; margin: -5px 0px 5px 0px; padding: 0px 0px 0px 0px;">
                                                <tbody id="iwcauj" style="box-sizing: border-box;">
                                                  <tr id="iiqqjb" style="box-sizing: border-box;">
                                                    <td width="7" height="6" bgcolor="rgba(0,0,0,0.98)" id="iyg2pc" class="divider" style="box-sizing: border-box; background-color: rgba(0,0,0,0.98); height: 6px; margin: 0px 9px 0px 0px; color: #000000; width: 7px;">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <img id="ildc3h" src="data:image/png;base64,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" width="635" height="96" style="box-sizing: border-box; color: black; height: 96px; width: 635px;">
                                              <div id="ixad4c" style="box-sizing: border-box; padding: 10px; text-align: right; margin: -10px 0px 0px 0px; font-size: 12px; font-weight: 600; height: 0px; font-family: Tahoma, Geneva, sans-serif;">Mixed SKUs
                                                <br id="if9l3n" style="box-sizing: border-box;">KM-SSHL-KJ9N
                                                <br id="i42i8y" style="box-sizing: border-box;">Qty 1
                                                <br id="ionlzi" style="box-sizing: border-box;">
                                                <br id="ia7vqv" style="box-sizing: border-box;">
                                              </div>
                                            </td>
                                            <td id="i9jqoj" width="50%" valign="top" align="center" style="box-sizing: border-box; padding: 0; margin: 0; vertical-align: top; width: 50%; text-align: center;">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <div id="i3btpe" style="box-sizing: border-box; padding: 10px; text-align: center; font-weight: 800; font-size: 11px; margin: 0px 0px 0px 0px; font-family: Tahoma, Geneva, sans-serif;">PLEASE LEAVE THIS LABEL UNCOVERED
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div id="iav4hg" style="box-sizing: border-box;">
                <barcode value="{JSON.stringify(barcodeData)}" id="igdgef" style="box-sizing: border-box;">
                </barcode>
              </div>
            </body>
            </html>
            `
        };
        transporter.sendMail(mail_configs, function (error, info){
            if (error){
                console.log(error);
                return reject({ message: `An error has occured`});
            }
            return resolve({message:"Email sent succesfully"});
        });
    });
}

app.get("/sendEmail", (req,res) => {
    sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`);
});