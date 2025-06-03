function SendMail() {
    const getValue = (id)=>{
        const el = document.getElementById(id);
        if (!el) return '';
        return 'value' in el ? el.value : el.textContent || '';
    };
    const getCheckboxValue = (id)=>{
        const el = document.getElementById(id);
        return el && el.checked ? "Ja" : "Nee";
    };
    // producttype
    const productType = getValue("productType");
    // Contactgegevens
    const contact = {
        productType: getValue("productType"),
        naam: getValue("fname"),
        voornaam: getValue("lname"),
        bedrijf: getValue("Bedrijf"),
        nummer: getValue("Nummer"),
        mail: getValue("Mail"),
        opmerkingen: getValue("opmerkingen"),
        levertermijn: getValue("levertermijn")
    };
    const contactInfo = `
        -----Contactgegevens-----
        Voornaam: ${contact.naam}
        Achternaam: ${contact.voornaam}
        Bedrijf: ${contact.bedrijf}
        Telefoonnummer: ${contact.nummer}
        E-mailadres: ${contact.mail}

        ----Opmerkingen----
        ${contact.opmerkingen}
        ----Levertermijn----
        ${contact.levertermijn}
        `;
    const Oplage = getValue("Oplage");
    //uitvoering
    const Uitvoering = getValue("Uitvoering");
    //afmetingen
    const Lengte = getValue("LengteInput");
    const Breedte = getValue("BreedteInput");
    const Hoogte = getValue("HoogteInput");
    const DekPlanken = getValue("DekPlankenInput");
    const TussenPlanken = getValue("TussenPlankenInput");
    const BodemPlanken = getValue("BodemPlankenInput");
    const ZijkantPlanken = getValue("ZijkantPlankenInput");
    const AantalDekselPlanken = getValue("DekselPlankenInput");
    //opties
    const Versteveging = getCheckboxValue("VerstevigingCheck");
    const ISMP = getCheckboxValue("ISPMCheck");
    const PlasticBekleding = getCheckboxValue("ZeeWaaCheck");
    const DekselPlanken = getCheckboxValue("DekselPlankenCheck");
    //Geavanceerde opties
    const KeperAantal = getValue("KeperAantalInput");
    const KeperAfstand = getValue("KeperAfstandInput");
    const PlaatType = getValue("PlaatTypeSelect");
    var KeperAfstandCheck = document.getElementById("KeperAfstandCheck");
    var DekPlankenCheck = document.getElementById("OptieDekPlanken");
    var BodemCheck = document.getElementById("BodemCheck");
    var BodemPlankenCheck = document.getElementById("OptieBodemPlanken");
    // E-mailsjablonen per producttype
    //--------------------------------------------------
    let body = "";
    switch(contact.productType){
        case "PlaatKist":
            body = `
Product type: ${productType}
${contactInfo}
----Afmetingen----
Lengte: ${Lengte}
Breedte: ${Breedte}
Hoogte: ${Hoogte}
${KeperAfstandCheck.checked ? "----Keper opties----\nKeper aantal: " + KeperAantal + "\nKeper afstand: " + KeperAfstand : ""}
----Opties----
Verstevigd: ${Versteveging}
ISMP: ${ISMP}
Plastic bekleding: ${PlasticBekleding}
`;
            break;
        case "MassieveKist":
            body = `
Product type: ${productType}

uitvoering: ${Uitvoering}

----Afmetingen----
Lengte: ${Lengte}
Breedte: ${Breedte}
Hoogte: ${Hoogte}

${KeperAfstandCheck.checked ? "----Keper opties----\nKeper aantal: " + KeperAantal + "\nKeper afstand: " + KeperAfstand : ""}


----Opties----
ISMP: ${ISMP}
Plastic bekleding: ${PlasticBekleding}

`;
            break;
        //--------------------------------------------------
        case "Pallet-4wegs":
            body = `
uitvoering: ${Uitvoering}

----Afmetingen----
Lengte: ${Lengte}
Breedte: ${Breedte}
TussenPlanken: ${TussenPlanken}
BodemPlanken: ${BodemPlanken}

----Opties----
ISMP: ${ISMP}

----Dek optie----
${DekPlankenCheck.checked ? "DekPlanken: " + DekPlanken : "Dekplaat: " + PlaatType}

`;
            break;
        //--------------------------------------------------
        case "Pallet-2wegs":
            body = `
uitvoering: ${Uitvoering}

----Afmetingen----
Lengte: ${Lengte}
Breedte: ${Breedte}
Kepers: ${KeperAantal}

----Opties----
ISMP: ${ISMP}

----Dek optie----
${DekPlankenCheck.checked ? "DekPlanken: " + DekPlanken : "Dekplaat: " + PlaatType}

${BodemCheck.checked ? "----Bodem optie----\n" + (BodemPlankenCheck.checked ? "Bodemplankne: " + BodemPlanken : "Bodemplaat: " + PlaatType) : ""}

`;
            break;
        case "ProfielMand":
            body = `
            Product type: ${productType}

----Afmetingen----
Lengte: ${Lengte}
Breedte: ${Breedte}
Hoogte: ${Hoogte}

${KeperAfstandCheck.checked ? "----Keper opties----\nKeper aantal: " + KeperAantal + "\nKeper afstand: " + KeperAfstand : ""}

----Opties----
Dekselplanken: ${DekselPlanken}
ISMP: ${ISMP}

----Dekoptie---
Dekplanken: ${DekPlanken}
Zijkantplanken:
Dekselplanken:

`;
            break;
        //--------------------------------------------------
        case "Krat":
            body = `
Product type: ${productType}

Uitvoering: ${Uitvoering}

----Afmetingen----
Lengte: ${Lengte}
Breedte: ${Breedte}
Hoogte: ${Hoogte}

----Opties----
Plastic bekleding: ${PlasticBekleding}
ISMP: ${ISMP}

----Planken----
Dekplanken: ${DekPlanken}
Zijkantplanken: ${ZijkantPlanken}
Dekselplanken: ${AantalDekselPlanken}
  `;
            break;
        //--------------------------------------------------
        case "Krat_toe":
            body = `
Product type: ${productType}

----Afmetingen----
Lengte: ${Lengte}
Breedte: ${Breedte}
Hoogte: ${Hoogte}

----Opties----
Plastic bekleding: ${PlasticBekleding}
ISMP: ${ISMP}

${KeperAfstandCheck.checked ? "----Keper opties----\nKeper aantal: " + KeperAantal + "\nKeper afstand: " + KeperAfstand : ""}

----Planken----
Dekplanken: ${DekPlanken}

  `;
            break;
        //--------------------------------------------------
        default:
            body = `
Product type: ${contact.productType || 'Niet gespecificeerd'}


`;
    }
    // Verstuur e-mail
    const subject = "Bestelling via de configurator";
    window.location.href = `mailto:Webshop.hout@Mariasteen.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

//# sourceMappingURL=Massieve_kist.761443ed.js.map
