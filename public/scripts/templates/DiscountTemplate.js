import Template from "./Template.js";

export default class DiscountTemplate extends Template {
    constructor() {
        super("Rabat");
        this.modifiers = [
            {
                title: "Imię odbiorcy",
                type: "input",
                target: "VAR_REC_NAME",
                value_type: "string",
                default_value: "XXXXX",
                value: "",
                onChange: () => {
                    this.handleUpdate(this);
                },
            },
        ];
        this.source = `
        <!DOCTYPE html>
        <html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="pl">
            <head>
                <meta name="x-apple-disable-message-reformatting" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="format-detection" content="date=no" />
                <meta name="format-detection" content="address=no" />
                <meta name="format-detection" content="email=no" />
                <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700&amp;display=swap" rel="stylesheet" />
                <title>Oferta szkoleń</title>
        
                <!--[if mso]>
                    <style type="text/css">
                        body,
                        table,
                        td,
                        a,
                        span,
                        p {
                            font-family: Arial, sans-serif !important;
                        }
                    </style>
        
                    <xml>
                        <o:OfficeDocumentSettings>
                            <o:AllowPNG />
                            <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                <![endif]-->
        
                <style type="text/css">
                    .ExternalClass {
                        width: 100%;
                    }
        
                    table {
                        border-collapse: collapse;
                        margin: 0 auto;
                    }
        
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: none !important;
                        font-size: inherit !important;
                        font-family: inherit !important;
                        font-weight: inherit !important;
                        line-height: inherit !important;
                    }
        
                    .mobile-show {
                        display: none !important;
                        max-height: 0 !important;
                    }
        
                    @media only screen and (max-width: 640px) {
                        .full-width {
                            width: 100% !important;
                        }
        
                        .mobile-image {
                            height: auto !important;
                            width: 100% !important;
                        }
        
                        .pl-2 {
                            padding-left: 20px !important;
                        }
        
                        .pr-2 {
                            padding-right: 20px !important;
                        }
        
                        .px-2 {
                            padding-left: 20px !important;
                            padding-right: 20px !important;
                        }
        
                        .px-0 {
                            padding-left: 0px !important;
                            padding-right: 0px !important;
                        }
        
                        .pt-0 {
                            padding-top: 0px !important;
                        }
        
                        .mob-stack {
                            width: 100% !important;
                            display: block !important;
                        }
        
                        .mob-center {
                            text-align: center !important;
                        }
        
                        .mob-left {
                            text-align: left !important;
                        }
        
                        .mobile-show {
                            display: block !important;
                            max-height: none !important;
                        }
        
                        .mobile-hide {
                            display: none !important;
                            width: 0 !important;
                            height: 0 !important;
                            max-width: 0 !important;
                            max-height: 0 !important;
                            overflow: hidden !important;
                        }
                    }
                </style>
            </head>
        
            <body bgcolor="#E4E4E4" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #e4e4e4" topmargin="0">
            <div style="font-size:1px; color:#E4E4E4; display:none; overflow:hidden; visibility:hidden;">
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
            </div>
        
                <!--[if mso]>
            <table role="presentation" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#E4E4E4">
            <tr>
            <td valign="top">
            <table role="presentation" width="640" align="center" cellpadding="0" cellspacing="0" border="0">
            <tr>
            <td valign="top">
            <![endif]-->
                <table width="100%" bgcolor="#E4E4E4" style="background-color: #e4e4e4" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                        <td>
                            <!-- Start Content -->
                            <table class="full-width" width="640" bgcolor="#E4E4E4" style="width: 640px; margin: auto" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                    <td>
                                        <table class="full-width" border="0" cellpadding="0" cellspacing="0" role="presentation" width="640" style="width: 640px">
                                            <tr>
                                                <td bgcolor="#131b29" valign="center" align="left" class="pl-2" style="font-size: 18px; font-family: Titillium Web, Arial, sans-serif; padding-left: 40px; padding-right: 0px; padding-top: 20px; padding-bottom: 20px; font-family: Titillium Web, Arial, sans-serif; background-color: #131b29; color: #ffffff">Szkolenia IT<br />Kursy informatyczne</td>
                                                <td bgcolor="#131b29" valign="center" align="right" class="pr-2" style="font-size: 18px; font-family: Titillium Web, Arial, sans-serif; padding-left: 0px; padding-right: 40px; padding-top: 20px; padding-bottom: 20px; font-family: Titillium Web, Arial, sans-serif; background-color: #131b29; color: #ffffff">
                                                    <!--[if !mso 9]><!-->
                                                    <div class="mobile-show" style="display: none; mso-hide: all">
                                                        <a href="https://centrumszkolen.notemaster.pl/" target="_blank" style="display: inline-block; border: none">
                                                            <img src="https://www.centrumszkolen.notemaster.pl/Oferty2024/Logo.png" alt="Logo Notebook Master" style="outline: none; border: none; display: inline-block; width: 122px; height: 40px" width="122" height="40" />
                                                        </a>
                                                    </div>
                                                    <!--<![endif]-->
                                                    <div class="mobile-hide">
                                                        <a href="https://centrumszkolen.notemaster.pl/" target="_blank" style="display: inline-block; border: none">
                                                            <img src="https://www.centrumszkolen.notemaster.pl/Oferty2024/Logo.png" alt="Logo Notebook Master" style="outline: none; border: none; display: inline-block; height: auto" width="150" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
        
                                <tr>
                                    <td>
                                        <table class="full-width" border="0" cellpadding="0" cellspacing="0" role="presentation" width="640" style="width: 640px">
                                            <tr>
                                                <td bgcolor="#ffffff" class="px-2" style="padding-left: 40px; padding-right: 40px; padding-top: 40px; padding-bottom: 0px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">Dzień dobry,</td>
                                            </tr>
                                            <tr>
                                                <td bgcolor="#ffffff" class="px-2" style="padding-left: 40px; padding-right: 40px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">Panie XXXXXX, w nawiązaniu do rozmowy, poniżej przesyłam odnośniki do programów realizowanych przez nas&nbsp;kursów:</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
        
                                <tr>
                                    <td>
                                        <table class="full-width" border="0" cellpadding="0" cellspacing="0" role="presentation" width="640" style="width: 640px">
                                            <!--%%[CONTENT]%%-->
                                        </table>
                                    </td>
                                </tr>
        
                                <tr>
                                    <td>
                                        <table bgcolor="#ffffff" class="full-width" border="0" cellpadding="0" cellspacing="0" role="presentation" width="640" style="width: 640px">
                                            <tr>
                                                <td bgcolor="#ffffff" align="left" class="px-2" style="padding-left: 40px; padding-right: 40px; padding-top: 40px; padding-bottom: 20px; font-family: Titillium Web, Arial, sans-serif; font-size: 18px; line-height: normal; background-color: #ffffff; color: #131b29">
                                                    <p style="margin: 0; font-weight: 600">Realizacja szkolenia stacjonarnego:</p>
                                                    <p style="margin: 0; margin-top: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal">
                                                        ul. Krz&zwj;eczo&zwj;wska&nbsp;2&zwj;0<br />
                                                        3&zwj;2&#8209;7&zwj;0&zwj;0 B&zwj;och&zwj;nia
                                                    </p>
                                                    <p style="margin: 0; margin-top: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal">
                                                        u&zwj;l. Po&zwj;dedwo&zwj;rze&nbsp;1<br />
                                                        3&zwj;2&#8209;7&zwj;0&zwj;0 B&zwj;och&zwj;nia
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
        
                                <tr>
                                    <td>
                                        <table bgcolor="#ffffff" class="full-width" border="0" cellpadding="0" cellspacing="0" role="presentation" width="640" style="width: 640px">
                                            <tr>
                                                <td bgcolor="#ffffff" align="left" class="px-2" style="padding-left: 40px; padding-right: 40px; padding-top: 0px; padding-bottom: 40px; font-family: Titillium Web, Arial, sans-serif; font-size: 18px; line-height: normal; background-color: #ffffff; color: #131b29">
                                                    <p style="margin: 0; font-weight: 600">Realizacja szkolenia zdalnego:</p>
                                                    <p style="margin: 0; margin-top: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal">W przypadku realizacji zdalnej, w zależności od tematyki kursu na czas jego trwania do uczestników zostaną wysłane wszystkie niezbędne narzędzia i akcesoria. Po zakończeniu kształcenia, wysyłamy kuriera po odbiór wyposażenia&nbsp;szkoleniowego.</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
        
                                <tr>
                                    <td>
                                        <table bgcolor="#131b29" class="full-width" border="0" cellpadding="0" cellspacing="0" role="presentation" width="640" style="width: 640px">
                                            <tr>
                                                <td bgcolor="#131b29" align="left" class="px-2" style="padding-left: 40px; padding-right: 40px; padding-top: 40px; padding-bottom: 40px; font-family: Titillium Web, Arial, sans-serif; font-size: 18px; line-height: normal; background-color: #131b29; color: #ffffff">
                                                    <p style="margin: 0">
                                                        <!--%%[VAR_PROFILE_NAME]%%-->
                                                        <br />
                                                        <!--%%[VAR_PROFILE_TITLE]%%-->
                                                        <br />
                                                        <a href="mailto:<!--%%[VAR_PROFILE_EMAIL]%%-->" target="_blank" style="color: #ffffff; text-decoration: none"><!--%%[VAR_PROFILE_EMAIL]%%--></a>
                                                        <br />
                                                        <a href="tel:<!--%%[VAR_PROFILE_PHONE]%%-->" target="_blank" style="color: #ffffff; text-decoration: none"><!--%%[VAR_PROFILE_PHONE]%%--></a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
        
                                <tr>
                                    <td>
                                        <table bgcolor="#ffffff" class="full-width" border="0" cellpadding="0" cellspacing="0" role="presentation" width="640" style="width: 640px">
                                            <tr>
                                                <th bgcolor="#ffffff" align="left" class="px-0 mob-stack mob-center" style="padding-left: 40px; padding-right: 10px; padding-top: 40px; padding-bottom: 40px; font-family: Titillium Web, Arial, sans-serif; font-size: 26px; line-height: normal; font-weight: 500; background-color: #ffffff; color: #131b29">
                                                    <p style="margin: 0" class="px-2">Jakość szkoleń<br />potwierdzona certyfikatem</p>
                                                </th>
                                                <th bgcolor="#ffffff" align="right" class="px-0 pt-0 mob-stack mob-center" style="padding-left: 10px; padding-right: 40px; padding-top: 40px; padding-bottom: 40px; font-family: Titillium Web, Arial, sans-serif; font-size: 18px; line-height: normal; font-weight: 600; background-color: #ffffff; color: #131b29">
                                                    <p style="margin: 0" class="px-2">
                                                        <img src="https://www.centrumszkolen.notemaster.pl/Oferty2024/msues.png" alt="Logo MSEUS" style="outline: none; border: none; display: inline-block" width="150" height="120" />
                                                    </p>
                                                </th>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
        
                                <tr>
                                    <td>
                                        <table bgcolor="#131b29" class="full-width" border="0" cellpadding="0" cellspacing="0" role="presentation" width="640" style="width: 640px">
                                            <tr>
                                                <th bgcolor="#131b29" valign="top" align="left" class="px-0 mob-stack" style="padding-left: 40px; padding-right: 10px; padding-top: 40px; padding-bottom: 20px; font-family: Titillium Web, Arial, sans-serif; font-size: 18px; line-height: normal; font-weight: 500; background-color: #131b29; color: #ffffff">
                                                    <p style="margin: 0; margin-bottom: 30px" class="px-2">
                                                        <a href="https://www.centrumszkolen.notemaster.pl/" target="_blank" style="color: #ffffff; text-decoration: underline">w&zwj;ww&zwj;.&zwj;cent&zwj;rums&zwj;zkole&zwj;n&zwj;.&zwj;not&zwj;emas&zwj;ter&zwj;.&zwj;p&zwj;l</a>
                                                    </p>
                                                    <p style="margin: 0; margin-top: 10px" class="px-2">
                                                        Notebook Master sp.&nbsp;z&nbsp;o.o<br />
                                                        ul. Krz&zwj;eczo&zwj;wska&nbsp;2&zwj;0<br />
                                                        3&zwj;2&#8209;7&zwj;0&zwj;0 B&zwj;och&zwj;nia
                                                    </p>
                                                </th>
                                                <th bgcolor="#131b29" valign="top" align="right" class="px-0 pt-0 mob-stack mob-left" style="padding-left: 10px; padding-right: 40px; padding-top: 40px; padding-bottom: 20px; font-family: Titillium Web, Arial, sans-serif; font-size: 18px; line-height: normal; font-weight: 600; background-color: #131b29; color: #ffffff">
                                                    <p class="px-2" style="margin: 0; font-family: Titillium Web, Arial, sans-serif; font-size: 22px; line-height: normal">
                                                        <a href="https://www.facebook.com/Notemasterr" target="_blank"><img src="https://www.centrumszkolen.notemaster.pl/Oferty2024/facebook.png" alt="Logo Facebook" border="0" width="30" height="24" /></a>
                                                        <a href="https://www.instagram.com/szkolenia_notebook_master/" target="_blank"><img src="https://www.centrumszkolen.notemaster.pl/Oferty2024/instagram.png" alt="Logo Instagram" border="0" width="30" height="24" /></a>
                                                        <a href="https://www.tiktok.com/@notebook.master" target="_blank"><img src="https://www.centrumszkolen.notemaster.pl/Oferty2024/tiktok.png" alt="Logo Tik-tok" border="0" width="30" height="24" /></a>
                                                    </p>
                                                </th>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
        
                                <tr>
                                    <td>
                                        <table class="full-width" border="0" cellpadding="0" cellspacing="0" role="presentation" width="640" style="width: 640px">
                                            <tr>
                                                <td bgcolor="#131b29" class="px-2" style="padding-left: 40px; padding-right: 40px; padding-top: 0px; padding-bottom: 40px; font-family: Titillium Web, Arial, sans-serif; font-size: 11px; line-height: normal; background-color: #131b29; color: #ffffff">
                                                    Wypełniając obowiązek informacyjny wynikający z Rozporządzenia Parlamentu Europejskiego i Rady (UE) 20&zwj;16/6&zwj;79 z dn&zwj;ia 2&zwj;7 kw&zwj;ie&zwj;tnia 20&zwj;16 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE („RODO”) informujemy, że Administratorem Pani/Pana danych osobowych jest Notebook Master Sp. z o.o. z siedzibą w Bochni, przy ul.
                                                    Krzeczowskiej 20, 32 &ndash; 700 Bochnia. Dane będą przetwarzane na podstawie art. 6 ust. 1 lit. b RODO - przetwarzanie jest niezbędne do podjęcia działań przed zawarciem umowy i do jej wykonania; dane osobowe przetwarzane są w związku z podjętą współpracą, z przedsiębiorstwem powierzającym dane osobowe uczestników szkolenia w celu realizacji usługi&nbsp;szkolenia.
                                                    <br /><br />
                                                    W celu uzyskania szczegółowych informacji o polityce bezpieczeństwa danych osobowych w firmie Notebook Master lub chęci ponownego zapoznania się klauzulą informacyjną (RODO) zachęcamy do zapoznania się z informacjami dostępnymi pod linkiem:
                                                    <a href="https://www.centrumszkolen.notemaster.pl/i/polityka-prywatnosci-rodo/" target="_blank" style="color: #ffffff; text-decoration: none">https://www.centrumszkolen.notemaster.pl/i/polityka-prywatnosci-rodo/</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!-- End Content -->
                        </td>
                    </tr>
                </table>
                <!--[if mso]>
            </td>
            </tr>
            </table>
            </td>
            </tr>
            </table>
            <![endif]-->
            </body>
        </html>
        `;
    }

    render() {
        let temp_srcdoc = this.source;

        for (const key in this.profile) {
            const _key = key.toUpperCase();
            temp_srcdoc = temp_srcdoc.replaceAll(`<!--%%[VAR_PROFILE_${_key}]%%-->`, this.profile[key]);
        }

        this.modifiers.forEach((modifier) => {
            temp_srcdoc = temp_srcdoc.replace(`<!--%%[${modifier.target}]%%-->`, modifier.value);
        });

        temp_srcdoc = temp_srcdoc.replace("<!--%%[CONTENT]%%-->", this.generateContent(this.trainings));

        this.srcdoc = temp_srcdoc;
        return this.srcdoc;
    }

    generateContent(trainings) {
        const generateStages = (stages, training_type) => {
            const generateOneColStages = (stages) => {
                return stages.reduce((acc, stage, index, array) => {
                    const stage_index = array.filter((i) => i.use === true).indexOf(stage) + 1;
                    const stagesToDisplay = array.filter((i) => i.use === true);
                    const isLast = stage_index === stagesToDisplay.length;
                    const border = isLast ? "" : "border-bottom: 1px solid #c70000;";
                    const href = `https://www.centrumszkolen.notemaster.pl/${stage.href}`;

                    if (!stage.use) {
                        return (acc += "");
                    }

                    return (acc += `
                    <tr>
                        <td valign="top" align="left" bgcolor="FFFFFF" style="${border}padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">
                            <a href="${href}" target="_blank" style="color: #131b29; text-decoration: underline">${stage.title}</a>
                        </td>
                    </tr>`);
                }, "");
            };

            const generateTwoColStages = (stages) => {
                return stages.reduce((acc, stage, index, array) => {
                    const stage_index = array.filter((i) => i.use === true).indexOf(stage) + 1;
                    const stagesToDisplay = array.filter((i) => i.use === true);
                    const isLast = stage_index === stagesToDisplay.length;
                    const border = isLast ? "" : "border-bottom: 1px solid #c70000;";
                    const href = `https://www.centrumszkolen.notemaster.pl/${stage.href}`;

                    if (!stage.use) {
                        return (acc += "");
                    }

                    return (acc += `
                    <tr>
                        <td width="60" valign="top" bgcolor="FFFFFF" style="${border}padding-left: 20px; padding-right: 0px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">
                            <b>ETAP&nbsp;${index + 1}&nbsp;&nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td valign="top" align="left" bgcolor="FFFFFF" style="${border}padding-left: 0px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">
                            <a href="${href}" target="_blank" style="color: #131b29; text-decoration: underline">${stage.title}</a>
                        </td>
                    </tr>`);
                }, "");
            };

            const generateCombinedStages = (stages) => {
                return stages.reduce((acc, stage, index, array) => {
                    const stage_index = array.filter((i) => i.use === true).indexOf(stage) + 1;
                    const stagesToDisplay = array.filter((i) => i.use === true);
                    const isLast = stage_index === stagesToDisplay.length;
                    const border = isLast ? "" : "border-bottom: 1px solid #c70000;";
                    const href = `https://www.centrumszkolen.notemaster.pl/${stage.href}`;

                    if (!stage.use) {
                        return (acc += "");
                    }

                    if (stage.type === "one-col") {
                        return (acc += `
                        <tr>
                            <td>
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tr>
                                        <td valign="top" align="left" bgcolor="FFFFFF" style="${border}padding-left: 20px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">
                                            <a href="${href}" target="_blank" style="color: #131b29; text-decoration: underline">${stage.title}</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>`);
                    }

                    if (stage.type === "two-col")
                        return (acc += `
                        <tr>
                            <td>
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tr>
                                        <td width="60" valign="top" bgcolor="FFFFFF" style="${border}padding-left: 20px; padding-right: 0px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">
                                            <b>ETAP&nbsp;${index + 1}&nbsp;&nbsp;&nbsp;&nbsp;</b>
                                        </td>
                                        <td valign="top" align="left" bgcolor="FFFFFF" style="${border}padding-left: 0px; padding-right: 20px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">
                                            <a href="${href}" target="_blank" style="color: #131b29; text-decoration: underline">${stage.title}</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>`);
                }, "");
            };

            switch (training_type) {
                case "combined":
                    return generateCombinedStages(stages);
                case "two-col":
                    return generateTwoColStages(stages);
                default:
                    return generateOneColStages(stages);
            }
        };

        const generateDiscount = (stages, training_type) => {
            return stages.reduce((acc, stage, index, array) => {
                const stage_index = array.filter((i) => i.use === true).indexOf(stage) + 1;
                const stagesToDisplay = array.filter((i) => i.use === true);
                const isLast = stage_index === stagesToDisplay.length;
                const border = isLast ? "" : "border-bottom: 1px solid #c70000;";
                const href = `https://www.centrumszkolen.notemaster.pl/${stage.href}`;

                const word = () => {
                    if (index + 1 === 1) return "etap";
                    if (index + 1 > 1 && index + 1 < 5) return "etapy";
                    return "etapów";
                };

                if (!stage.use) {
                    return (acc += "");
                }

                return (acc += `
                    <tr>
                        <td valign="center" align="center" bgcolor="FFFFFF" style="border-right: 1px solid #c70000;${border}padding-left: 5px; padding-right: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 13px; line-height: normal; background-color: #ffffff; color: #131b29">
                            <span style="font-weight:600;" data-editable>${index + 1} ${word()}</span>
                        </td>
                        <td valign="center" align="center" bgcolor="FFFFFF" style="border-right: 1px solid #c70000;${border}padding-left: 5px; padding-right: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 13px; line-height: normal; background-color: #ffffff; color: #131b29">
                            <span style="font-weight:900;" data-editable>XX%</span>
                        </td>
                        <td valign="center" align="center" bgcolor="FFFFFF" style="border-right: 1px solid #c70000;${border}padding-left: 5px; padding-right: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 13px; line-height: normal; background-color: #ffffff; color: #131b29">
                            <span style="font-weight:600;color:#c70000;" data-editable>XXXX zł netto</span>
                        </td>
                        <td valign="center" align="center" bgcolor="FFFFFF" style="border-right: 1px solid #c70000;${border}padding-left: 5px; padding-right: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 13px; line-height: normal; background-color: #ffffff; color: #131b29">
                            <span style="font-weight:600;color:#60992D;" data-editable>XXX zł netto</span>
                        </td>
                        <td valign="center" align="center" bgcolor="FFFFFF" style="${border}padding-left: 5px; padding-right: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 13px; line-height: normal; background-color: #ffffff; color: #131b29">
                            <span style="font-weight:600;" data-editable>XXXX zł netto</span>
                        </td>
                    </tr>`);
            }, "");
        };

        return trainings.reduce((acc, training) => {
            if (training.use) {
                return (acc += `
                            <tr>
                                <td bgcolor="#ffffff" class="px-2" style="padding-left: 40px; padding-right: 40px; padding-top: 10px; padding-bottom: 0px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border: 1px solid #c70000">
                                        <tr>
                                            <td bgcolor="C70000" style="padding-left: 0px; padding-right: 0px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #c70000; color: #ffffff">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                    <tr>
                                                        <td valign="center" align="left" bgcolor="C70000" style="padding-left: 20px; padding-right: 20px; padding-top: 0px; padding-bottom: 0px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #c70000; color: #ffffff">
                                                            ${training.title}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td bgcolor="FFFFFF" style="padding-left: 0px; padding-right: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                ${generateStages(training.stages, training.type)}
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td bgcolor="#ffffff" class="px-2" style="padding-left: 40px; padding-right: 40px; padding-top: 10px; padding-bottom: 20px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #ffffff; color: #131b29">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border: 1px solid #c70000">
                                        <tr>
                                            <td bgcolor="C70000" style="padding-left: 0px; padding-right: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Titillium Web, Arial, sans-serif; font-size: 16px; line-height: normal; background-color: #c70000; color: #ffffff">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                    <tr>
                                                        <td valign="center" align="center" bgcolor="C70000" style="padding-left: 5px; padding-right: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 13px; line-height: normal; background-color: #c70000; color: #ffffff">
                                                            Ilość etapów
                                                        </td>
                                                        <td valign="center" align="center" bgcolor="C70000" style="padding-left: 5px; padding-right: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 13px; line-height: normal; background-color: #c70000; color: #ffffff">
                                                            Rabat do etapu w %
                                                        </td>
                                                        <td valign="center" align="center" bgcolor="C70000" style="padding-left: 5px; padding-right: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 13px; line-height: normal; background-color: #c70000; color: #ffffff">
                                                            Cena nominalna
                                                        </td>
                                                        <td valign="center" align="center" bgcolor="C70000" style="padding-left: 5px; padding-right: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 13px; line-height: normal; background-color: #c70000; color: #ffffff">
                                                            Kwota rabatu
                                                        </td>
                                                        <td valign="center" align="center" bgcolor="C70000" style="padding-left: 5px; padding-right: 5px; padding-top: 10px; padding-bottom: 10px; font-family: Titillium Web, Arial, sans-serif; font-size: 13px; line-height: normal; background-color: #c70000; color: #ffffff">
                                                            Kwota po rabacie
                                                        </td>
                                                    </tr>
                                                    ${generateDiscount(training.stages, training.type)}
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        `);
            }
            return acc;
        }, "");
    }
}
